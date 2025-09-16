import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../utils/api.js'
import { setToken, setUser, setAvatar } from '../utils/auth.js'

/**
 * Fix: after login, update UI immediately (no refresh).
 */
export default function LoginPage(){
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function submit(e){
    e.preventDefault()
    setError(''); setLoading(true)
    try{
      const res = await api.post('/auth/login', { email, password })
      setToken(res.data.token)
      if(res.data.user){
        setUser(res.data.user)
        if(res.data.user.avatarUrl) setAvatar(res.data.user.avatarUrl)
      }
      sessionStorage.setItem('lr_auth_just_now', '1')
      // notify same tab so NavBar flips instantly
      window.dispatchEvent(new Event('lr-auth-changed'))
      window.location.href = '/'
    }catch(err){
      setError(err?.response?.data?.error || 'Invalid credentials')
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white grid place-items-center p-4">
      <div className="w-[92vw] max-w-md rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl p-6 shadow-2xl">
        <h1 className="text-2xl font-extrabold mb-2">Welcome back</h1>
        <p className="text-white/70 mb-6">Sign in to your Locker <span className="text-amber-300">Room</span> account</p>

        <form onSubmit={submit} className="space-y-3">
          <div>
            <label className="block text-sm text-white/80 mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-300"
              placeholder="you@school.edu"
            />
          </div>
          <div>
            <label className="block text-sm text-white/80 mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-300"
              placeholder="••••••••"
            />
          </div>

          {error && <div className="text-red-300 text-sm">{error}</div>}

          <button
            disabled={loading}
            type="submit"
            className="w-full bg-amber-300 text-black font-semibold py-2.5 rounded-xl hover:bg-amber-200 disabled:opacity-70"
          >
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>

        <div className="text-sm text-white/70 mt-3">
          New here? <a href="/signup" className="text-amber-300">Create an account</a>
        </div>
      </div>
    </div>
  )
}
