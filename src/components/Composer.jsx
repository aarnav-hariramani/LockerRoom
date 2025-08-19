import React from 'react'

export default function Composer({ onClose, avatar }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 mt-6">
      <div className="flex items-center gap-3">
        <img src={avatar} alt="avatar" className="h-10 w-10 rounded-full object-cover" />
        <input placeholder="Share your highlight, stats, or update…" className="flex-1 bg-transparent outline-none placeholder-white/50" />
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="flex gap-2 text-sm">
          <button className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15">Add Video</button>
          <button className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15">Add Stat</button>
          <button className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15">Tag Team</button>
        </div>
        <div className="flex gap-2">
          <button onClick={onClose} className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15">Cancel</button>
          <button className="px-4 py-1.5 rounded-xl bg-amber-300 text-black font-semibold hover:bg-amber-200">Post</button>
        </div>
      </div>
    </div>
  )
}