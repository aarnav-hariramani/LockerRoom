import React from 'react'

export default function LoginModal({ open, onClose }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-40 grid place-items-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative z-10 w-[92vw] max-w-md rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl p-6 shadow-2xl">
        <h3 className="text-xl font-bold">Welcome back</h3>
        <p className="text-white/70 text-sm mt-1">Sign in to your Locker Room</p>
        <form className="mt-5 space-y-3">
          <div>
            <label className="text-sm text-white/70">Email</label>
            <input type="email" className="mt-1 w-full rounded-xl bg-black/50 border border-white/10 px-3 py-2 outline-none" placeholder="you@school.edu" />
          </div>
          <div>
            <label className="text-sm text-white/70">Password</label>
            <input type="password" className="mt-1 w-full rounded-xl bg-black/50 border border-white/10 px-3 py-2 outline-none" placeholder="••••••••" />
          </div>
          <button type="button" className="w-full rounded-xl bg-amber-300 text-black font-semibold py-2.5 hover:bg-amber-200">Log In</button>
        </form>
        <button onClick={onClose} className="mt-3 w-full text-sm text-white/70 hover:text-white">Cancel</button>
      </div>
    </div>
  )
}