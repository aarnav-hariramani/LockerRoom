import React, { useState } from 'react'
import { useLocation, useNavigate, Navigate } from 'react-router-dom'
import api from '../utils/api.js'
import { setToken, setUser } from '../utils/auth.js'

/**
 * After signup, store token and notify app (no refresh).
 */
export default function SignupStep2(){
  const loc = useLocation()
  const navigate = useNavigate()
  const cred = loc.state || null
  const [form, setForm] = useState({ name:'', username:'', sport:'', position:'', school:'' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  if(!cred) return <Navigate to="/signup" replace />

  function onChange(e){
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  async function submit(e){
    e.preventDefault()
    setError(''); setLoading(true)
    try{
      const res = await api.post('/auth/signup', {
        email: cred.email,
        password: cred.password,
        ...form
      })
      setToken(res.data.token)
      if(res.data.user) setUser(res.data.user)
      sessionStorage.setItem('lr_auth_just_now', '1')
      window.dispatchEvent(new Event('lr-auth-changed'))
      window.location.href = '/'
    }catch(err){
      setError(err?.response?.data?.error || 'Could not create account')
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white grid place-items-center p-4">
      <div className="w-[92vw] max-w-md rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl p-6 shadow-2xl">
        <h1 className="text-2xl font-extrabold mb-2">Tell us about you</h1>
        <p className="text-white/70 mb-6">Just a few details to complete your profile.</p>

        <form onSubmit={submit} className="space-y-3">
          <div className="grid grid-cols-1 gap-3">
            <div>
              <label className="block text-sm text-white/80 mb-1">Full name</label>
              <input name="name" value={form.name} onChange={onChange} required className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-300" />
            </div>
            <div>
              <label className="block text-sm text-white/80 mb-1">Username</label>
              <input name="username" value={form.username} onChange={onChange} required className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-300" />
            </div>
            <div>
              <label className="block text-sm text-white/80 mb-1">Sport</label>
              <input name="sport" value={form.sport} onChange={onChange} required className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-300" />
            </div>
            <div>
              <label className="block text-sm text-white/80 mb-1">Position</label>
              <input name="position" value={form.position} onChange={onChange} className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-300" />
            </div>
            <div>
              <label className="block text-sm text-white/80 mb-1">School</label>
              <input name="school" value={form.school} onChange={onChange} className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-300" />
            </div>
          </div>

          {error && <div className="text-red-300 text-sm">{error}</div>}

          <button disabled={loading} type="submit" className="w-full bg-amber-300 text-black font-semibold py-2.5 rounded-xl hover:bg-amber-200 disabled:opacity-70">
            {loading ? 'Creating…' : 'Finish setup'}
          </button>
        </form>
      </div>
    </div>
  )
}
