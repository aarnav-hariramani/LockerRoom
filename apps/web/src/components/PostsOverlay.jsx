import React, { useEffect, useState } from 'react'
import PostCard from './PostCard.jsx'
import api from '../utils/api.js'

export default function PostsOverlay({ onClose }) {
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    const run = async () => {
      try{
        const res = await api.get('/feed?limit=50')
        setPosts(res.data.posts || [])
      }catch(e){
        setPosts([])
      }
    }
    run()
  }, [])

  return (
    <div className="fixed inset-0 z-40">
      <div className="absolute inset-0 bg-black/70" onClick={onClose}/>
      <div className="absolute inset-0 overflow-y-auto p-4 md:p-8">
        <div className="mx-auto max-w-4xl space-y-4">
          <div className="sticky top-2 z-10 flex justify-end">
            <button onClick={onClose} className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-white/90">Close</button>
          </div>
          {posts===null && <div className="text-white/60">Loading…</div>}
          {posts?.length===0 && <div className="text-white/60">No posts yet. Follow athletes and check back soon.</div>}
          {posts?.map(p => <PostCard key={p.id} post={{
            id: p.id,
            text: p.text,
            media: p.mediaUrl,
            likes: p._count?.likes || 0,
            comments: p._count?.comments || 0,
            author: {
              name: p.author?.name || 'Unknown',
              sport: p.author?.sport || '',
              position: p.author?.position || '',
              photo: p.author?.avatarUrl || 'https://i.pravatar.cc/100'
            }
          }} />)}
        </div>
      </div>
    </div>
  )
}