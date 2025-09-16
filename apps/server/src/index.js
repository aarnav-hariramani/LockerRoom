import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { Server } from 'socket.io'
import http from 'http'
import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const prisma = new PrismaClient()
const app = express()
const server = http.createServer(app)
const io = new Server(server, {
  cors: { origin: process.env.CORS_ORIGIN?.split(',') || '*', credentials: true }
})

app.use(cors({ origin: process.env.CORS_ORIGIN?.split(',') || '*', credentials: true }))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

const PORT = process.env.PORT || 4000
const JWT_SECRET = process.env.JWT_SECRET || 'devsecret'
const TOKEN_EXPIRES_IN = process.env.TOKEN_EXPIRES_IN || '7d'

// --- helpers ---
function signToken(user) {
  return jwt.sign({ sub: user.id }, JWT_SECRET, { expiresIn: TOKEN_EXPIRES_IN })
}
async function getUserFromReq(req) {
  const header = req.headers.authorization || ''
  const token = header.startsWith('Bearer ') ? header.slice(7) : null
  if (!token) return null
  try {
    const payload = jwt.verify(token, JWT_SECRET)
    const user = await prisma.user.findUnique({ where: { id: payload.sub } })
    return user
  } catch {
    return null
  }
}
async function requireAuth(req, res, next) {
  const user = await getUserFromReq(req)
  if (!user) return res.status(401).json({ error: 'Unauthorized' })
  req.user = user
  next()
}

// --- Auth ---
app.post('/auth/signup', async (req, res) => {
  try {
    const schema = z.object({
      email: z.string().email(),
      username: z.string().min(3),
      name: z.string().min(1),
      password: z.string().min(8).refine(v=>/\d/.test(v) && /[!@#$%^&*(),.?\":{}|<>_\-+=/\\[\]`~;]/.test(v), { message: 'Password must include a number and a special symbol' }),
      sport: z.string().optional(),
      position: z.string().optional(),
      avatarUrl: z.string().url().optional()
    })
    const data = schema.parse(req.body)
    const existing = await prisma.user.findFirst({ where: { OR: [{ email: data.email }, { username: data.username }] } })
    if (existing) return res.status(400).json({ error: 'Email or username already in use' })
    const passwordHash = await bcrypt.hash(data.password, 10)
    const { email, username, name, sport, position, avatarUrl } = data
    const user = await prisma.user.create({
      data: {
        email,
        username,
        name,
        sport,
        position,
        avatarUrl,
        passwordHash
      }
    })
    const token = signToken(user)
    res.json({ token, user })
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
})

app.post('/auth/login', async (req, res) => {
  const { email, password } = req.body
  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) return res.status(400).json({ error: 'Invalid credentials' })
  const ok = await bcrypt.compare(password, user.passwordHash)
  if (!ok) return res.status(400).json({ error: 'Invalid credentials' })
  const token = signToken(user)
  res.json({ token, user })
})

app.get('/me', requireAuth, async (req, res) => {
  res.json({ user: req.user })
})

// --- Posts ---
app.get('/posts/:id', async (req, res) => {
  const post = await prisma.post.findUnique({
    where: { id: req.params.id },
    include: { author: true, _count: { select: { likes: true, comments: true } } }
  })
  res.json({ post })
})

app.post('/posts', requireAuth, async (req, res) => {
  const schema = z.object({
    text: z.string().min(1),
    mediaUrl: z.string().optional()
  })
  try {
    const data = schema.parse(req.body)
    const post = await prisma.post.create({
      data: { ...data, authorId: req.user.id }
    })
    res.json({ post })
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
})

app.post('/posts/:id/like', requireAuth, async (req, res) => {
  const postId = req.params.id
  const existing = await prisma.like.findUnique({ where: { postId_userId: { postId, userId: req.user.id } } })
  if (existing) {
    await prisma.like.delete({ where: { id: existing.id } })
    return res.json({ liked: false })
  }
  await prisma.like.create({ data: { postId, userId: req.user.id } })
  res.json({ liked: true })
})

app.post('/posts/:id/comment', requireAuth, async (req, res) => {
  const schema = z.object({ content: z.string().min(1) })
  try {
    const data = schema.parse(req.body)
    const comment = await prisma.comment.create({
      data: { postId: req.params.id, content: data.content, authorId: req.user.id }
    })
    res.json({ comment })
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
})

// --- Feed (ranking with recency + engagement + affinity) ---
app.get('/feed', requireAuth, async (req, res) => {
  const userId = req.user.id
  const limit = Number(req.query.limit || 20)

  // candidate posts: most recent 7 days or last 200 posts
  const since = new Date(Date.now() - 7*24*3600*1000)
  const candidates = await prisma.post.findMany({
    where: { createdAt: { gte: since } },
    include: {
      author: true,
      _count: { select: { likes: true, comments: true } }
    },
    orderBy: { createdAt: 'desc' },
    take: 200
  })

  // relationships for affinity
  const following = await prisma.follow.findMany({ where: { followerId: userId } })
  const followingIds = new Set(following.map(f => f.followingId))

  const now = Date.now()
  function score(p) {
    const ageHrs = (now - new Date(p.createdAt).getTime()) / 3.6e6
    const recency = Math.exp(-ageHrs / 48)  // ~2-day half-life
    const engagement = Math.log(1 + p._count.likes + 2*p._count.comments)
    const affinity = (followingIds.has(p.authorId) ? 1.0 : 0.4) + (p.author.sport && req.user.sport && p.author.sport===req.user.sport ? 0.3 : 0)
    return 0.55*recency + 0.30*(engagement/5) + 0.15*affinity
  }

  const ranked = candidates.sort((a,b)=> score(b)-score(a)).slice(0, limit)

  res.json({ posts: ranked })
})

// --- Trending athletes (last 7d momentum with time-decay-ish weights) ---
app.get('/trending/athletes', async (req, res) => {
  const since = new Date(Date.now() - 7*24*3600*1000)

  // aggregate post metrics per author in window
  const recentPosts = await prisma.post.findMany({
    where: { createdAt: { gte: since } },
    include: { author: true, _count: { select: { likes: true, comments: true } } }
  })

  const byAuthor = new Map()
  for (const p of recentPosts) {
    const entry = byAuthor.get(p.authorId) || { user: p.author, likes:0, comments:0 }
    entry.likes += p._count.likes
    entry.comments += p._count.comments
    byAuthor.set(p.authorId, entry)
  }

  // new followers in window
  const followerCounts = await prisma.follow.groupBy({
    by: ['followingId'],
    _count: { followingId: true },
    where: { createdAt: { gte: since } }
  })

  const followMap = new Map(followerCounts.map(x => [x.followingId, x._count.followingId]))

  const rows = Array.from(byAuthor.values()).map(r => {
    const score = (3 * r.comments) + (2 * r.likes) + (4 * (followMap.get(r.user.id) || 0))
    return { user: r.user, score }
  }).sort((a,b)=> b.score - a.score).slice(0, 6)

  res.json({ athletes: rows.map(r => ({
    id: r.user.id,
    name: r.user.name,
    sport: r.user.sport,
    position: r.user.position,
    avatarUrl: r.user.avatarUrl,
    score: r.score
  })) })
})

// --- Follows ---
app.post('/follow/:userId', requireAuth, async (req, res) => {
  const followingId = req.params.userId
  if (followingId === req.user.id) return res.status(400).json({ error: 'Cannot follow yourself' })
  const existing = await prisma.follow.findUnique({ where: { followerId_followingId: { followerId: req.user.id, followingId } } })
  if (existing) {
    await prisma.follow.delete({ where: { id: existing.id } })
    return res.json({ following: false })
  }
  await prisma.follow.create({ data: { followerId: req.user.id, followingId } })
  res.json({ following: true })
})

// --- Conversations + Messages ---
io.on('connection', (socket) => {
  socket.on('join', (userId) => {
    socket.join(userId)
  })
})

app.get('/conversations', requireAuth, async (req, res) => {
  const convs = await prisma.conversation.findMany({
    where: { participants: { some: { userId: req.user.id } } },
    include: {
      participants: { include: { user: true } },
      messages: { orderBy: { createdAt: 'desc' }, take: 1 }
    },
    orderBy: { createdAt: 'desc' }
  })
  res.json({ conversations: convs })
})

app.post('/conversations', requireAuth, async (req, res) => {
  const { userId } = req.body
  if (userId === req.user.id) return res.status(400).json({ error: 'Cannot DM yourself' })

  // find or create 1:1 conversation
  const existing = await prisma.conversation.findFirst({
    where: {
      isGroup: false,
      participants: { every: { userId: { in: [req.user.id, userId] } } }
    },
    include: { participants: true }
  })
  if (existing) return res.json({ conversation: existing })

  const conversation = await prisma.conversation.create({
    data: {
      isGroup: false,
      participants: { create: [{ userId: req.user.id }, { userId }] }
    }
  })
  res.json({ conversation })
})

app.get('/messages', requireAuth, async (req, res) => {
  const conversationId = req.query.conversationId
  const messages = await prisma.message.findMany({
    where: { conversationId },
    include: { sender: true },
    orderBy: { createdAt: 'asc' }
  })
  res.json({ messages })
})

app.post('/messages', requireAuth, async (req, res) => {
  const { conversationId, content } = req.body
  const msg = await prisma.message.create({
    data: { conversationId, senderId: req.user.id, content }
  })
  io.to(req.user.id).emit('message:new', msg)
  // Also deliver to all other participants
  const parts = await prisma.conversationParticipant.findMany({ where: { conversationId } })
  parts.forEach(p => {
    if (p.userId !== req.user.id) io.to(p.userId).emit('message:new', msg)
  })
  res.json({ message: msg })
})

// Health
app.get('/health', (req,res)=>res.json({ ok:true }))

server.listen(PORT, () => {
  console.log('Server listening on http://localhost:'+PORT)
})