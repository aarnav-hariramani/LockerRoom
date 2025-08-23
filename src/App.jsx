import React, { useEffect, useState } from 'react'
import { Dumbbell, Heart, MessageCircle, Shield } from 'lucide-react'
import Intro from './components/Intro.jsx'
import NavBar from './components/NavBar.jsx'
import Composer from './components/Composer.jsx'
import PostCard from './components/PostCard.jsx'
import LoginModal from './components/LoginModal.jsx'
import PostsOverlay from './components/PostsOverlay.jsx'
import { mockAthletes, mockPosts } from './mockData.js'

export default function App() {
  const [introDone, setIntroDone] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showComposer, setShowComposer] = useState(false)
  const [showPosts, setShowPosts] = useState(false)

  useEffect(() => {
    const seen = sessionStorage.getItem('lockerroom_intro_done')
    if (seen) setIntroDone(true)
  }, [])

  const handleIntroEnd = () => {
    sessionStorage.setItem('lockerroom_intro_done', '1')
    setIntroDone(true)
  }

  return (
    <div className="min-h-screen w-full bg-neutral-950 text-white">
      {/* Background */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596256967741-27c13dcbc3fd?q=80&w=1920&auto=format&fit=crop')" }}
      />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      {/* FIFA pack intro */}
      {!introDone && <Intro onComplete={handleIntroEnd} />}

      {/* Header */}
      <header className="backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/0 sticky top-0 z-20">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-amber-300 via-yellow-400 to-orange-500 shadow-lg grid place-items-center">
              <Shield className="h-5 w-5 text-black" />
            </div>
            <span className="text-xl font-extrabold tracking-tight">Locker <span className="text-amber-300">Room</span></span>
          </div>
          <NavBar onGoPosts={() => setShowPosts(true)} onShowComposer={() => setShowComposer(v => !v)} onShowLogin={() => setShowLogin(true)} />
        </div>
      </header>

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
              <button onClick={() => setShowLogin(true)} className="rounded-2xl px-5 py-3 bg-amber-300 text-black font-semibold hover:bg-amber-200 transition">Get Started</button>
              <button onClick={() => document.getElementById('feed')?.scrollIntoView({ behavior: 'smooth' })} className="rounded-2xl px-5 py-3 bg-white/10 hover:bg-white/15">Explore Feed</button>
            </div>
            <div className="mt-8 flex items-center gap-6 text-white/60 text-sm">
              <span className="inline-flex items-center gap-2"><Dumbbell className="h-4 w-4"/> Verified athlete profiles</span>
              <span className="inline-flex items-center gap-2"><MessageCircle className="h-4 w-4"/> Recruiter messaging</span>
              <span className="inline-flex items-center gap-2"><Heart className="h-4 w-4"/> NIL-ready portfolios (we can delete this)</span>
            </div>
          </div>

          {/* Glass card */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 shadow-2xl">
              <h3 className="font-semibold mb-3">Trending Athletes</h3>
              <div className="grid grid-cols-3 gap-3">
                {mockAthletes.slice(0,6).map((a) => (
                  <div key={a.id} className="rounded-2xl overflow-hidden bg-black/30 border border-white/10">
                    <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: `url(${a.photo})` }} />
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
        {showComposer && <Composer onClose={() => setShowComposer(false)} avatar={mockAthletes[0].photo} />}

        {/* Feed */}
        <section id="feed" className="mt-10 grid md:grid-cols-[2fr_1fr] gap-6">
          <div className="space-y-4">
            {mockPosts.slice(0,3).map((p) => <PostCard key={p.id} post={p} />)}
            <div className="pt-2">
              <button onClick={() => setShowPosts(true)} className="w-full mt-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white/90">
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

      <LoginModal open={showLogin} onClose={() => setShowLogin(false)} />

      
      {showPosts && (
        <PostsOverlay
          posts={mockPosts}
          onClose={() => setShowPosts(false)}
          onShowComposer={() => setShowComposer(true)}
        />
      )}
<footer className="mt-20 border-t border-white/10 py-8 text-center text-white/50 text-sm">
        © {new Date().getFullYear()} Locker Room
      </footer>
    </div>
  )
}