import React, { useRef, useState } from 'react'
import api from '../utils/api.js'

export default function Composer({ onClose, avatar }) {
  const [text, setText] = useState('')
  const [mediaUrl, setMediaUrl] = useState('')   // will hold a data: URL for png
  const [preview, setPreview] = useState('')
  const [posting, setPosting] = useState(false)
  const fileInputRef = useRef(null)

  function onFile(e){
    const file = e.target.files?.[0]
    if(!file) return
    if(file.type !== 'image/png' && !file.name.toLowerCase().endsWith('.png')){
      alert('Please choose a .png image')
      return
    }
    const reader = new FileReader()
    reader.onload = () => {
      const dataUrl = reader.result || ''
      setMediaUrl(String(dataUrl))
      setPreview(String(dataUrl))
    }
    reader.readAsDataURL(file)
  }

  async function submit(){
    if(!text.trim() && !mediaUrl) return
    try{
      setPosting(true)
      await api.post('/posts', { text, mediaUrl: mediaUrl || undefined })
      if(onClose) onClose()
      // Hard reload so the feed shows the new post immediately (no alert)
      window.location.reload()
    }catch(e){
      setPosting(false)
      alert(e?.response?.data?.error || 'Failed to post')
    }
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 mt-6">
      <div className="flex items-center gap-3">
        <img src={avatar} alt="avatar" className="h-10 w-10 rounded-full object-cover" />
        <input
          value={text}
          onChange={(e)=>setText(e.target.value)}
          placeholder="Share an update…"
          className="flex-1 bg-transparent outline-none placeholder-white/50"
        />
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Hidden file input restricted to PNG */}
          <input
            ref={fileInputRef}
            id="composer-file"
            type="file"
            accept="image/png,.png"
            className="hidden"
            onChange={onFile}
          />
          {/* Visible trigger styled like the URL pill you had */}
          <label
            htmlFor="composer-file"
            className="cursor-pointer select-none px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-sm"
          >
            Upload .png
          </label>

          {preview && (
            <img
              src={preview}
              alt="preview"
              className="h-16 w-16 object-cover rounded-lg border border-white/10"
            />
          )}
        </div>

        <div className="flex gap-2">
          <button
            onClick={onClose}
            disabled={posting}
            className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 disabled:opacity-60"
          >
            Cancel
          </button>
          <button
            onClick={submit}
            disabled={posting}
            className="px-4 py-1.5 rounded-xl bg-amber-300 text-black font-semibold hover:bg-amber-200 disabled:opacity-60"
          >
            {posting ? 'Posting…' : 'Post'}
          </button>
        </div>
      </div>
    </div>
  )
}
