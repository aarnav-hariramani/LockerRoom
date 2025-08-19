import React from 'react'
import { Home as HomeIcon, LogIn, PlusSquare } from 'lucide-react'

export default function NavBar({ onShowComposer, onShowLogin }) {
  return (
    <nav className="hidden md:flex items-center gap-6 text-sm">
      <button className="inline-flex items-center gap-2 text-white/90 hover:text-white transition">
        <HomeIcon className="h-4 w-4" />
        <span>Home</span>
      </button>
      <button onClick={onShowComposer} className="inline-flex items-center gap-2 rounded-xl px-3 py-1.5 bg-white/10 hover:bg-white/15 transition">
        <PlusSquare className="h-4 w-4" />
        <span>Post</span>
      </button>
      <button onClick={onShowLogin} className="inline-flex items-center gap-2 rounded-xl px-3 py-1.5 bg-amber-300 text-black font-semibold hover:bg-amber-200 transition">
        <LogIn className="h-4 w-4" />
        <span>Login</span>
      </button>
    </nav>
  )
}