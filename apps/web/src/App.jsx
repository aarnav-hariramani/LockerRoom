import React, { useEffect, useState } from 'react'
import { Dumbbell, Heart, MessageCircle, Shield } from 'lucide-react'
import Intro from './components/Intro.jsx'
import Header from './components/Header.jsx'
import NavBar from './components/NavBar.jsx'
import Composer from './components/Composer.jsx'
import PostCard from './components/PostCard.jsx'
import api from './utils/api.js'
import { getAvatar, getUser } from './utils/auth.js'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignupStep1 from './pages/SignupStep1.jsx'
import SignupStep2 from './pages/SignupStep2.jsx'
import LoginPage from './pages/LoginPage.jsx'
import PostsPage from './pages/PostsPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'

export default function App() {
  const [showIntro, setShowIntro] = useState(false)
  const [showComposer, setShowComposer] = useState(false)
  const [showPosts, setShowPosts] = useState(false)
  const [trending, setTrending] = useState([])
  const [feed, setFeed] = useState([])
  const [me, setMe] = useState(null)

  useEffect(() => {
    api.get('/trending/athletes')
      .then(r => setTrending(r.data.athletes || []))
      .catch(() => setTrending([]))
  }, [])

  useEffect(() => {
    const token = localStorage.getItem('lr_token')
    const just = sessionStorage.getItem('lr_auth_just_now')
    if (token) {
      api.get('/me')
        .then(r => { setMe(r.data.user); return api.get('/feed?limit=10') })
        .then(r => setFeed(r.data.posts || []))
        .catch(() => {})
    }
    if (just) {
      setShowIntro(true)
      sessionStorage.removeItem('lr_auth_just_now')
    }
  }, [])

  function Home() {
    return (
      <div className="min-h-screen w-full bg-neutral-950 text-white">
        {/* Background */}
        <div
          className="fixed inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596256967741-27c13dcbc3fd?q=80&w=1920&auto=format&fit=crop')" }}
        />
        <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

        {/* Locker animation after auth */}
        {showIntro && <Intro onComplete={() => setShowIntro(false)} />}

        {/* header provided globally */}

        <main className="mx-auto max-w-7xl px-4 pb-24">
          {/* Hero */}
          <section className="pt-8 md:pt-14 grid md:grid-cols-[1.3fr_1fr] gap-6 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-black leading-tight">
                The Professional Network for <span className="text-amber-300">Athletes</span>
              </h1>
              <p className="mt-4 text-white/80 md:text-lg max-w-2xl">
                Showcase stats, share highlights, get discovered by coaches and brands. Build your locker, grow your network, some corny ass third part here.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={() => (window.location.href = '/signup')}
                  className="rounded-2xl px-5 py-3 bg-amber-300 text-black font-semibold hover:bg-amber-200 transition"
                >
                  Get Started
                </button>
                <button
                  onClick={() => document.getElementById('feed')?.scrollIntoView({ behavior: 'smooth' })}
                  className="rounded-2xl px-5 py-3 bg-white/10 hover:bg-white/15"
                >
                  Explore Feed
                </button>
              </div>
              <div className="mt-8 flex items-center gap-6 text-white/60 text-sm">
                <span className="inline-flex items-center gap-2"><Dumbbell className="h-4 w-4" /> Verified athlete profiles</span>
                <span className="inline-flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Recruiter messaging</span>
                <span className="inline-flex items-center gap-2"><Heart className="h-4 w-4" /> NIL-ready portfolios (we can delete this)</span>
              </div>
            </div>

            {/* Glass card */}
            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 shadow-2xl">
                <h3 className="font-semibold mb-3">Trending Athletes</h3>
                <div className="grid grid-cols-3 gap-3">
                  {trending.slice(0, 6).map((a) => (
                    <div key={a.id} className="rounded-2xl overflow-hidden bg-black/30 border border-white/10">
                      <div
                        className="aspect-square bg-cover bg-center"
                        style={{ backgroundImage: `url(${a.avatarUrl || 'https://i.pravatar.cc/200'})` }}
                      />
                      <div className="p-2 text-xs">
                        <p className="font-semibold truncate">{a.name}</p>
                        <p className="text-white/60 truncate">{a.sport} • {a.position}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Composer */}
          {/* Composer moved to /posts modal */}

          {/* Feed */}
          <section id="feed" className="mt-10 grid md:grid-cols-[2fr_1fr] gap-6">
            <div className="space-y-4">
              {feed.slice(0, 3).map((p) => (
                <PostCard
                  key={p.id}
                  post={{
                    id: p.id,
                    text: p.text,
                    media: p.mediaUrl,
                    likes: p._count?.likes || 0,
                    comments: p._count?.comments || 0,
                    author: {
                      name: p.author?.name || 'Unknown',
                      sport: p.author?.sport || '',
                      position: p.author?.position || '',
                      photo: p.author?.avatarUrl || 'https://i.pravatar.cc/100'
                    }
                  }}
                />
              ))}
              <div className="pt-2">
                <button
                  onClick={() => setShowPosts(true)}
                  className="w-full mt-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white/90"
                >
                  See more posts
                </button>
              </div>
            </div>
            <aside className="space-y-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
                <h3 className="font-semibold mb-2">Recommended Groups</h3>
                <ul className="space-y-2 text-sm text-white/85">
                  <li className="flex items-center justify-between"><span>SBHS Track Prospects</span><button className="px-3 py-1 rounded-xl bg-white/10 hover:bg-white/15">Join</button></li>
                  <li className="flex items-center justify-between"><span>Stevens Men Soccrer - D3</span><button className="px-3 py-1 rounded-xl bg-white/10 hover:bg-white/15">Join</button></li>
                  <li className="flex items-center justify-between"><span>Basketball Skills Lab</span><button className="px-3 py-1 rounded-xl bg-white/10 hover:bg-white/15">Join</button></li>
                </ul>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
                <h3 className="font-semibold mb-2">Upcoming Combines</h3>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>NextGen Elite – Sep 10, 2025</li>
                  <li>Coast2Coast Showcase – Sep 24, 2025</li>
                  <li>Hoops Summit – Oct 2, 2025</li>
                </ul>
              </div>
            </aside>
          </section>
        </main>

        {showPosts && <PostsOverlay onClose={() => setShowPosts(false)} />}

        <footer className="mt-20 border-t border-white/10 py-8 text-center text-white/50 text-sm">
          © {new Date().getFullYear()} Locker Room
        </footer>
      </div>
    )
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupStep1 />} />
        <Route path="/signup/details" element={<SignupStep2 />} />
              <Route path="/posts" element={<PostsPage />} />
              <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  )
}
