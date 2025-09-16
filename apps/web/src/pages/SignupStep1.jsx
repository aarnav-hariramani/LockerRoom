import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignupStep1(){
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPwd, setShowPwd] = useState(false)
  const [error, setError] = useState('')

  const hasLen = password.length >= 8
  const hasNum = /\d/.test(password)
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>_\-+=/\\[\]`~;]/.test(password)
  const strongScore = (hasLen + hasNum + hasSpecial)

  function validate(){
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) return setError('Enter a valid email.'), false
    if (!/\.edu$/i.test(email)) return setError('Email must end with .edu'), false
    if (!(hasLen && hasNum && hasSpecial)) return setError('Password must be 8+ chars with a number & symbol.'), false
    setError(''); return true
  }

  function next(e){
    e.preventDefault()
    if (!validate()) return
    navigate('/signup/details', { state: { email, password } })
  }

  return (
    <div className="min-h-screen bg-black text-white grid place-items-center p-4">
      <div className="w-[92vw] max-w-md rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl p-6 shadow-2xl">
        <h1 className="text-2xl font-bold">Create account</h1>
        <p className="text-white/60 mt-1">Step 1 of 2 — School email & password</p>

        <form onSubmit={next} className="mt-6 space-y-4">
          <div>
            <label className="text-sm text-white/70">School Email (.edu)</label>
            <input value={email} onChange={e=>setEmail(e.target.value)} type="email" required placeholder="you@school.edu"
              className="mt-1 w-full rounded-xl bg-transparent border border-white/10 px-3 py-2 outline-none placeholder-white/50" />
          </div>
          <div>
            <label className="text-sm text-white/70">Password</label>
            <div className="flex gap-2 items-center">
              <input value={password} onChange={e=>setPassword(e.target.value)} type={showPwd?'text':'password'} required placeholder="••••••••"
                className="mt-1 w-full rounded-xl bg-transparent border border-white/10 px-3 py-2 outline-none placeholder-white/50" />
              <button type="button" onClick={()=>setShowPwd(s=>!s)} className="mt-1 px-3 py-2 rounded-xl bg-white/10">👁</button>
            </div>

            <div className="mt-2">
              <div className="h-1.5 rounded bg-white/10 overflow-hidden">
                <div className={`h-full ${strongScore>=1?'bg-red-400':''} ${strongScore>=2?'bg-yellow-300':''} ${strongScore>=3?'bg-green-400':''}`}
                     style={{width: `${(strongScore/3)*100}%`}}/>
              </div>
              <ul className="text-xs mt-2 space-y-1 text-white/70">
                <li className={hasLen?'text-green-300':''}>• 8+ characters</li>
                <li className={hasNum?'text-green-300':''}>• At least one number</li>
                <li className={hasSpecial?'text-green-300':''}>• At least one special symbol</li>
              </ul>
            </div>
          </div>

          {error && <div className="text-red-300 text-sm">{error}</div>}

          <button type="submit" className="w-full rounded-xl bg-amber-300 text-black font-semibold py-2.5 hover:bg-amber-200">Continue</button>
        </form>

        <div className="text-sm text-white/70 mt-3">
          Already have an account? <a href="/login" className="text-amber-300">Sign in</a>
        </div>
      </div>
    </div>
  )
}
