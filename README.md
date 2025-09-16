# LockerRoom — Full‑Stack (Keep the exact homepage design)

This package turns your static LockerRoom UI into a full backend‑integrated platform while **keeping the same homepage**. 
Mock data is removed and replaced with live API calls. Auth, posts, likes, comments, follows, DMs (Socket.IO), feed & trending algorithms are all wired up.

## What's inside
- `apps/server` – Express + Prisma + PostgreSQL + Socket.IO
- `apps/web` – Your Vite + React + Tailwind UI (unchanged visually), now fetching real data
- `docker-compose.yml` – Local Postgres
- `apps/server/prisma/schema.prisma` – Database schema
- `.env.example` files in both apps

## Quick start (local)
```bash
# 1) Start Postgres
docker compose up -d

# 2) Install deps for the monorepo
npm install

# 3) Create server env
cp apps/server/.env.example apps/server/.env

# 4) Run Prisma migrations (creates tables)
npm run -w apps/server prisma:migrate

# 5) Dev servers (backend on 4000, web on 5173)
npm run dev
```

Open http://localhost:5173

## Auth flow + locker‑room animation
- The FIFA/locker animation no longer plays on initial load.
- It displays **only after** a successful **signup or login**.
- Click **Get Started** → **Sign up / Sign in** modal → upon success the animation plays once.

## Empty states
- Home feed shows nothing until real users post.
- "See more posts" opens a full feed overlay. If there are no posts yet, users see an informative empty state.
- Trending grid also stays empty until activity appears in the last 7 days.

## Trending athletes (7‑day momentum)
We define **trending** over the last 7 days, weighting _recent engagement_:
- **+4 ×** new followers
- **+3 ×** comments on the athlete’s posts
- **+2 ×** likes on the athlete’s posts
(You can extend with profile views later.)

Endpoint: `GET /trending/athletes` aggregates these signals and returns the top 6.

## Feed ranking (IG‑style but simple & fast)
Candidate posts = last 7 days (up to 200). Each post gets a score:
```
score = 0.55 * recency_half_life_≈48h
      + 0.30 * log(1 + likes + 2*comments)/5
      + 0.15 * affinity  (1.0 if you follow the author, +0.3 if same sport)
```
Sorted by score descending. Endpoint: `GET /feed?limit=…` (auth required).

## Core API (auth required unless noted)
```
POST   /auth/signup         # {email, username, name, password, sport?, position?, avatarUrl?}
POST   /auth/login          # {email, password}
GET    /me

POST   /posts               # {text, mediaUrl?}
GET    /posts/:id
POST   /posts/:id/like      # toggle like
POST   /posts/:id/comment   # {content}

GET    /feed?limit=20

POST   /follow/:userId      # toggle follow

GET    /conversations
POST   /conversations       # {userId} find-or-create 1:1
GET    /messages?conversationId=...
POST   /messages            # {conversationId, content} (also emits via Socket.IO)
```

## Environment
- **Server**: see `apps/server/.env.example`
- **Web**: `apps/web/.env.example` → set `VITE_API_URL` to your API origin.

## Deployment notes
- Use a managed Postgres (Supabase, Neon, RDS).
- Run `npm -w apps/server run prisma:deploy` on boot.
- Serve `apps/server` on a Node host (or Docker). Point the web app’s `VITE_API_URL` to it.
- For file uploads, swap the `mediaUrl` text field with an S3/Supabase upload flow.

## Keeping the homepage identical
The hero section + “Trending Athletes” box, cards, buttons, and typography are untouched. 
Only **data sources** changed (from `mockData.js` to live API).

> If you want to keep the intro animation strictly on the **signup page only**, route users to `/signup` and mount `<Intro/>` after successful account creation. Right now it's triggered after any successful auth.