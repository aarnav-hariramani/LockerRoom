import React, { useEffect, useState } from 'react'
import { Home as HomeIcon, LogIn, PlusSquare, UserCircle2 } from 'lucide-react'
import { getToken, clearToken, getUser } from '../utils/auth.js'

/**
 * Reacts immediately to auth changes via 'lr-auth-changed'.
 * Shows Login when logged out, Account dropdown when logged in.
 */
export default function NavBar({ onGoPosts, onShowComposer }) {
  const [hasToken, setHasToken] = useState(!!getToken())
  const [menuOpen, setMenuOpen] = useState(false)
  const user = getUser()

  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === 'lr_token') setHasToken(!!e.newValue)
    }
    const onAuth = () => setHasToken(!!getToken())

    window.addEventListener('storage', onStorage)
    window.addEventListener('lr-auth-changed', onAuth)
    return () => {
      window.removeEventListener('storage', onStorage)
      window.removeEventListener('lr-auth-changed', onAuth)
    }
  }, [])

  function logout() {
    clearToken()
    // notify same tab immediately
    window.dispatchEvent(new Event('lr-auth-changed'))
    window.location.href = '/'
  }

  return (
    <nav className="flex items-center gap-2">
      <a
        href="/"
        className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-white/90 hover:bg-white/10"
      >
        <HomeIcon className="h-4 w-4" />
        <span className="text-sm font-medium">Home</span>
      </a>

      <button
        onClick={onGoPosts}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-white/90 hover:bg-white/10"
      >
        <span className="text-sm font-medium">Posts</span>
      </button>

      <button
        onClick={onShowComposer}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-white/10 bg-amber-300 text-black font-semibold hover:bg-amber-200"
      >
        <PlusSquare className="h-4 w-4" />
        <span className="text-sm">Post</span>
      </button>

      {hasToken ? (
        <div className="relative">
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-white/90 hover:bg-white/10"
          >
            <UserCircle2 className="h-4 w-4" />
            <span className="text-sm font-medium">Account</span>
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-44 rounded-xl border border-white/10 bg-slate-900/95 backdrop-blur shadow-xl overflow-hidden">
              <a href="/profile" className="block px-3 py-2 text-sm text-white/90 hover:bg-white/10">Profile</a>
              <button onClick={logout} className="w-full text-left px-3 py-2 text-sm text-red-300 hover:bg-white/10">Logout</button>
            </div>
          )}
        </div>
      ) : (
        <a
          href="/login"
          className="inline-flex items-center gap-2 bg-amber-300 text-black font-semibold px-3 py-1.5 rounded-xl hover:bg-amber-200 transition"
        >
          <LogIn className="h-4 w-4" />
          <span className="text-sm">Login</span>
        </a>
      )}
    </nav>
  )
}
