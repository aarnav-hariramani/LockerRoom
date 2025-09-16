import React from 'react'
import Composer from './Composer.jsx'

export default function PostComposeModal({ open, onClose, avatar }){
  if(!open) return null
  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative w-full max-w-2xl mx-4 rounded-3xl border border-white/10 bg-neutral-900/95 backdrop-blur-xl p-4 shadow-2xl">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold">Create a Post</h2>
          <button onClick={onClose} className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15">Close</button>
        </div>
        <Composer avatar={avatar} onClose={onClose} />
      </div>
    </div>
  )
}
