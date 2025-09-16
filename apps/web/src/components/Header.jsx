import React from 'react'
import { Shield } from 'lucide-react'
import NavBar from './NavBar.jsx'

/**
 * Solid, sticky header that matches the dark theme everywhere.
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-neutral-950 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-amber-200 via-yellow-400 to-orange-500 shadow-lg grid place-items-center">
            <Shield className="h-5 w-5 text-black" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-white">
            Locker <span className="text-amber-300">Room</span>
          </span>
        </a>
        <NavBar
          onGoPosts={() => (window.location.href = '/posts')}
          onShowComposer={() => (window.location.href = '/posts?compose=1')}
        />
      </div>
    </header>
  )
}
