import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../utils/api.js'
import { setToken, setUser, setAvatar } from '../utils/auth.js'

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
      setToken(res.data.token);
      if(res.data.user){ setUser(res.data.user); if(res.data.user.avatarUrl) setAvatar(res.data.user.avatarUrl) }
      sessionStorage.setItem('lr_auth_just_now', '1')
      navigate('/')
    }catch(err){
      setError(err?.response?.data?.error || 'Invalid email or password')
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white grid place-items-center p-4">
      <div className="w-[92vw] max-w-md rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl p-6 shadow-2xl">
        <h1 className="text-2xl font-bold">Sign in</h1>
        <form onSubmit={submit} className="mt-6 space-y-4">
          <div>
            <label className="text-sm text-white/70">Email</label>
            <input value={email} onChange={e=>setEmail(e.target.value)} type="email" required placeholder="you@school.edu"
              className="mt-1 w-full rounded-xl bg-transparent border border-white/10 px-3 py-2 outline-none placeholder-white/50" />
          </div>
          <div>
            <label className="text-sm text-white/70">Password</label>
            <input value={password} onChange={e=>setPassword(e.target.value)} type="password" required placeholder="••••••••"
              className="mt-1 w-full rounded-xl bg-transparent border border-white/10 px-3 py-2 outline-none placeholder-white/50" />
          </div>

          {error && <div className="text-red-300 text-sm">{error}</div>}

          <button disabled={loading} type="submit" className="w-full rounded-xl bg-amber-300 text-black font-semibold py-2.5 hover:bg-amber-200 disabled:opacity-70">
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
