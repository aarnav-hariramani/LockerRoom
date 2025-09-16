import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { getToken, getUser, getAvatar } from '../utils/auth.js'

/**
 * Make the profile page match the same dark theme.
 */
export default function ProfilePage(){
  const [authed, setAuthed] = useState(!!getToken())
  const [user, setUser] = useState(getUser() || {})
  const [avatar, setAvatar] = useState(getAvatar())

  useEffect(() => {
    const onStorage = (e) => {
      if(e.key === 'lr_token') setAuthed(!!e.newValue)
      if(e.key === 'lr_user') try { setUser(JSON.parse(e.newValue || '{}')) } catch {}
      if(e.key === 'lr_avatar') setAvatar(e.newValue || '')
    }
    const onAuth = () => {
      setAuthed(!!getToken())
      setUser(getUser() || {})
      setAvatar(getAvatar() || '')
    }
    window.addEventListener('storage', onStorage)
    window.addEventListener('lr-auth-changed', onAuth)
    return () => {
      window.removeEventListener('storage', onStorage)
      window.removeEventListener('lr-auth-changed', onAuth)
    }
  }, [])

  if(!authed) return <Navigate to="/login" replace />

  const initials = (user?.name || 'A A').split(' ').slice(0,2).map(n => n[0] || '').join('').toUpperCase()

  return (
    <div className="min-h-[100dvh] bg-neutral-950 text-white">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-amber-200 via-yellow-400 to-orange-500 grid place-items-center text-black text-xl font-black overflow-hidden">
            {avatar ? <img src={avatar} alt="" className="h-full w-full object-cover rounded-2xl" /> : initials}
          </div>
          <div>
            <h1 className="text-2xl font-extrabold">{user?.name || 'Your Profile'}</h1>
            <div className="text-white/60">@{user?.username || 'username'}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <h2 className="text-white/80 font-semibold mb-2">Sport</h2>
            <div className="text-white/90">{user?.sport || '—'}</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <h2 className="text-white/80 font-semibold mb-2">Position</h2>
            <div className="text-white/90">{user?.position || '—'}</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <h2 className="text-white/80 font-semibold mb-2">School</h2>
            <div className="text-white/90">{user?.school || '—'}</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <h2 className="text-white/80 font-semibold mb-2">Email</h2>
            <div className="text-white/90">{user?.email || '—'}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
