import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { getToken, getUser, getAvatar } from '../utils/auth.js'

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
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  if(!authed) return <Navigate to="/login" replace />

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-3xl mx-auto px-4 pt-24 pb-16">
        <div className="flex items-center gap-4">
          <img src={avatar || 'https://api.dicebear.com/9.x/initials/svg?seed=' + (user?.name || 'LR')}
               alt="avatar" className="h-16 w-16 rounded-full ring-2 ring-white/10" />
          <div>
            <h1 className="text-2xl font-bold text-white">{user?.name || 'Your Profile'}</h1>
            <p className="text-white/60">@{user?.username || 'username'}</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
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
