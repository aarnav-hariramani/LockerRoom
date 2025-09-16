import React, { useState } from 'react'
import { useLocation, useNavigate, Navigate } from 'react-router-dom'
import api from '../utils/api.js'
import { setToken } from '../utils/auth.js'

export default function SignupStep2(){
  const loc = useLocation()
  const navigate = useNavigate()
  const cred = loc.state || null
  const [form, setForm] = useState({ name:'', username:'', sport:'', position:'', school:'' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  if(!cred) return <Navigate to="/signup" replace />

  function onChange(e){
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function submit(e){
    e.preventDefault()
    setError(''); setLoading(true)
    try{
      const res = await api.post('/auth/signup', {
        email: cred.email,
        password: cred.password,
        name: form.name,
        username: form.username,
        sport: form.sport || '',
        position: form.position || '',
        school: form.school || ''
      })
      setToken(res.data.token)
      sessionStorage.setItem('lr_auth_just_now', '1')
      navigate('/')
    }catch(err){
      setError(err?.response?.data?.error || 'Could not create account')
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white grid place-items-center p-4">
      <div className="w-[92vw] max-w-md rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl p-6 shadow-2xl">
        <h1 className="text-2xl font-bold">Create account</h1>
        <p className="text-white/60 mt-1">Step 2 of 2 — Tell us about you</p>

        <form onSubmit={submit} className="mt-6 space-y-3">
          <div>
            <label className="text-sm text-white/70">Full name</label>
            <input name="name" value={form.name} onChange={onChange} required placeholder="Your name"
              className="mt-1 w-full rounded-xl bg-transparent border border-white/10 px-3 py-2 outline-none placeholder-white/50" />
          </div>
          <div>
            <label className="text-sm text-white/70">Username</label>
            <input name="username" value={form.username} onChange={onChange} required placeholder="handle"
              className="mt-1 w-full rounded-xl bg-transparent border border-white/10 px-3 py-2 outline-none placeholder-white/50" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-sm text-white/70">Sport</label>
              <input name="sport" value={form.sport} onChange={onChange} required placeholder="Soccer"
                className="mt-1 w-full rounded-xl bg-transparent border border-white/10 px-3 py-2 outline-none placeholder-white/50" />
            </div>
            <div>
              <label className="text-sm text-white/70">Position (optional)</label>
              <input name="position" value={form.position} onChange={onChange} placeholder="FWD"
                className="mt-1 w-full rounded-xl bg-transparent border border-white/10 px-3 py-2 outline-none placeholder-white/50" />
            </div>
          </div>
          <div>
            <label className="text-sm text-white/70">School</label>
            <input name="school" value={form.school} onChange={onChange} required placeholder="Your school"
              className="mt-1 w-full rounded-xl bg-transparent border border-white/10 px-3 py-2 outline-none placeholder-white/50" />
          </div>

          {error && <div className="text-red-300 text-sm">{error}</div>}

          <button disabled={loading} type="submit" className="w-full rounded-xl bg-amber-300 text-black font-semibold py-2.5 hover:bg-amber-200 disabled:opacity-70">
            {loading ? 'Creating…' : 'Create account'}
          </button>
        </form>

        <div className="text-sm text-white/70 mt-3">
          Already have an account? <a href="/login" className="text-amber-300">Sign in</a>
        </div>
      </div>
    </div>
  )
}
