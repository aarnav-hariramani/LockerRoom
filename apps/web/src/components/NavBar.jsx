import React, { useEffect, useState } from 'react'
import { Home as HomeIcon, LogIn, PlusSquare, Images, UserCircle2 } from 'lucide-react'
import { getToken } from '../utils/auth.js'

export default function NavBar({ onGoPosts, onShowComposer }) {
  const [hasToken, setHasToken] = useState(false)

  useEffect(() => {
    const t = getToken()
    setHasToken(!!t)
    const onStorage = (e) => { if (e.key === 'lr_token') setHasToken(!!e.newValue) }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  return (
    <nav className="hidden md:flex items-center gap-6 text-sm">
      <button onClick={() => (window.location.href = '/')} className="inline-flex items-center gap-2 text-white/90 hover:text-white transition">
        <HomeIcon className="h-4 w-4" />
        <span>Home</span>
      </button>
      <button onClick={onGoPosts} className="inline-flex items-center gap-2 text-white/90 hover:text-white transition">
        <Images className="h-4 w-4" />
        <span>Posts</span>
      </button>
      <button onClick={onShowComposer} className="inline-flex items-center gap-2 text-white/90 hover:text-white rounded-xl px-3 py-1.5 bg-white/10 hover:bg-white/15 transition">
        <PlusSquare className="h-4 w-4" />
        <span>Post</span>
      </button>
      {hasToken ? (
        <div className="relative group">
          <button
            className="inline-flex items-center gap-2 text-white/90 hover:text-white transition focus:outline-none"
            aria-haspopup="menu"
            aria-expanded="false"
          >
            <UserCircle2 className="h-6 w-6" />
            <span className="hidden sm:inline">Account</span>
          </button>

          {/* Dropdown */}
          <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition
                          absolute right-0 mt-2 min-w-40 rounded-xl border border-white/10 bg-slate-900/95 backdrop-blur
                          shadow-xl p-1">
            <a href="/profile"
               className="block w-full text-left px-3 py-2 rounded-lg text-white/90 hover:bg-white/10 hover:text-white">
              Profile
            </a>
            <button
              onClick={() => {
                localStorage.removeItem('lr_token');
                localStorage.removeItem('lr_user');
                localStorage.removeItem('lr_avatar');
                window.location.href = '/login';
              }}
              className="block w-full text-left px-3 py-2 rounded-lg text-red-300 hover:bg-white/10 hover:text-red-200"
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <button onClick={() => (window.location.href = '/login')}
          className="inline-flex items-center gap-2 bg-amber-300 text-black font-semibold px-3 py-1.5 rounded-xl hover:bg-amber-200 transition">
          <LogIn className="h-4 w-4" />
          <span>Login</span>
        </button>
      )}
    </nav>
  )
}
