import React, { useState } from 'react'
import api from '../utils/api.js'

export default function Composer({ onClose, avatar }) {
  const [text, setText] = useState('')
  const [mediaUrl, setMediaUrl] = useState('')
  const [preview, setPreview] = useState('')

  function onFile(e){
    const file = e.target.files?.[0]
    if(!file) return
    const reader = new FileReader()
    reader.onload = () => { setMediaUrl(reader.result); setPreview(reader.result) }
    reader.readAsDataURL(file)
  }

  async function submit(){
    if(!text.trim()) return
    try{
      await api.post('/posts', { text, mediaUrl: mediaUrl || undefined })
      onClose && onClose()
      alert('Posted! It will appear in feeds shortly.')
    }catch(e){
      alert(e?.response?.data?.error || 'Failed to post')
    }
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 mt-6">
      <div className="flex items-center gap-3">
        <img src={avatar} alt="avatar" className="h-10 w-10 rounded-full object-cover" />
        <input value={text} onChange={(e)=>setText(e.target.value)} placeholder="Share your highlight, stats, or update…" className="flex-1 bg-transparent outline-none placeholder-white/50" />
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="flex gap-2 text-sm">
          <input value={mediaUrl} onChange={(e)=>setMediaUrl(e.target.value)} placeholder="Optional image/video URL" className="px-3 py-1.5 rounded-xl bg-white/10 placeholder-white/50 outline-none"/>
        {preview && (<img src={preview} alt="preview" className="h-16 w-16 object-cover rounded-lg border border-white/10" />)}
        </div>
        <div className="flex gap-2">
          <button onClick={onClose} className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15">Cancel</button>
          <button onClick={submit} className="px-4 py-1.5 rounded-xl bg-amber-300 text-black font-semibold hover:bg-amber-200">Post</button>
        </div>
      </div>
    </div>
  )
}