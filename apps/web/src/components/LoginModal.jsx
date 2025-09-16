import React, { useState } from 'react'
import api from '../utils/api.js'
import { setToken } from '../utils/auth.js'

export default function LoginModal({ open, onClose, onAuthed }) {
  const [mode, setMode] = useState('login')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  if (!open) return null

  async function handleSubmit(e){
    e.preventDefault()
    setError(''); setLoading(true)
    const data = Object.fromEntries(new FormData(e.currentTarget))
    try{
      if(mode==='login'){
        const res = await api.post('/auth/login', { email: data.email, password: data.password })
        setToken(res.data.token); onAuthed && onAuthed(res.data.user); onClose()
      }else{
        const res = await api.post('/auth/signup', {
          email: data.email, password: data.password, name: data.name, username: data.username,
          sport: data.sport || '', position: data.position || '', avatarUrl: data.avatarUrl || ''
        })
        setToken(res.data.token); onAuthed && onAuthed(res.data.user); onClose()
      }
    }catch(e){
      setError(e?.response?.data?.error || 'Something went wrong')
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-40 grid place-items-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative z-10 w-[92vw] max-w-md rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl p-6 shadow-2xl">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">{mode==='login' ? 'Welcome back' : 'Create account'}</h3>
          <button onClick={onClose} className="text-white/60 hover:text-white">✕</button>
        </div>
        <form onSubmit={handleSubmit} className="mt-5 space-y-3">
          {mode==='signup' && (
            <>
              <div>
                <label className="text-sm text-white/70">Name</label>
                <input name="name" required className="mt-1 w-full rounded-xl bg-transparent border border-white/10 px-3 py-2 outline-none" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm text-white/70">Username</label>
                <input name="username" required className="mt-1 w-full rounded-xl bg-transparent border border-white/10 px-3 py-2 outline-none" placeholder="handle" />
              </div>
            </>
          )}
          <div>
            <label className="text-sm text-white/70">Email</label>
            <input name="email" type="email" required className="mt-1 w-full rounded-xl bg-transparent border border-white/10 px-3 py-2 outline-none" placeholder="you@school.edu" />
          </div>
          <div>
            <label className="text-sm text-white/70">Password</label>
            <input name="password" type="password" required className="mt-1 w-full rounded-xl bg-transparent border border-white/10 px-3 py-2 outline-none" placeholder="••••••••" />
          </div>
          {mode==='signup' && (
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-sm text-white/70">Sport</label>
                <input name="sport" className="mt-1 w-full rounded-xl bg-transparent border border-white/10 px-3 py-2 outline-none" placeholder="Soccer" />
              </div>
              <div>
                <label className="text-sm text-white/70">Position</label>
                <input name="position" className="mt-1 w-full rounded-xl bg-transparent border border-white/10 px-3 py-2 outline-none" placeholder="FWD" />
              </div>
              <div className="col-span-2">
                <label className="text-sm text-white/70">Avatar URL</label>
                <input name="avatarUrl" className="mt-1 w-full rounded-xl bg-transparent border border-white/10 px-3 py-2 outline-none" placeholder="https://…" />
              </div>
            </div>
          )}
          {error && <div className="text-red-300 text-sm">{error}</div>}
          <button disabled={loading} type="submit" className="w-full rounded-xl bg-amber-300 text-black font-semibold py-2.5 hover:bg-amber-200 disabled:opacity-70">
            {loading ? 'Please wait…' : (mode==='login' ? 'Sign in' : 'Create account')}
          </button>
        </form>
        <div className="text-sm text-white/70 mt-3">
          {mode==='login' ? (
            <>No account? <button onClick={()=>setMode('signup')} className="text-amber-300">Sign up</button></>
          ) : (
            <>Already have an account? <button onClick={()=>setMode('login')} className="text-amber-300">Sign in</button></>
          )}
        </div>
      </div>
    </div>
  )
}