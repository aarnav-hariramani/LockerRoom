import React from 'react'
import { Shield } from 'lucide-react'
import NavBar from './NavBar.jsx'

export default function Header(){
  return (
    <header className="backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/0 sticky top-0 z-20">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-500 shadow-lg grid place-items-center">
            <Shield className="h-5 w-5 text-black" />
          </div>
          <span className="text-xl font-extrabold tracking-tight">
            Locker <span className="text-amber-300">Room</span>
          </span>
        </div>
        <NavBar
          onGoPosts={() => (window.location.href = '/posts')}
          onShowComposer={() => (window.location.href = '/posts?compose=1')}
        />
      </div>
    </header>
  )
}
