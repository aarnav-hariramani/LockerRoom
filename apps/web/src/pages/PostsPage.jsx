import React, { useEffect, useState } from 'react'
import PostCard from '../components/PostCard.jsx'
import PostComposeModal from '../components/PostComposeModal.jsx'
import api from '../utils/api.js'
import { getAvatar } from '../utils/auth.js'

/**
 * Enforce dark page background to match the site.
 */
export default function PostsPage(){
  const [posts, setPosts] = useState(null)
  const [avatar, setAvatar] = useState(getAvatar() || 'https://i.pravatar.cc/100')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const url = new URL(window.location.href)
    if(url.searchParams.get('compose') === '1') setOpen(true)
  }, [])

  useEffect(() => {
    async function load(){
      try{
        const res = await api.get('/feed?limit=20')
        setPosts(res.data?.posts || [])
      }catch{
        setPosts([])
      }
    }
    load()
  }, [])

  function closeModal(){
    setOpen(false)
    const url = new URL(window.location.href)
    url.searchParams.delete('compose')
    window.history.replaceState(null, '', url)
  }

  return (
    <div className="min-h-[100dvh] bg-neutral-950 text-white">
      <div className="mx-auto max-w-5xl px-4 py-6">
        <h1 className="text-2xl font-extrabold">Posts</h1>

        {!posts && <div className="mt-6 text-white/70">Loading feed…</div>}
        {posts && posts.length === 0 && <div className="mt-6 text-white/70">No posts yet.</div>}

        {posts && posts.length > 0 && (
          <div className="mt-6 space-y-4">
            {posts.map(p => (
              <PostCard key={p.id} post={{
                id: p.id,
                text: p.text || p.caption || '',
                media: p.mediaUrl,
                likes: p._count?.likes || 0,
                comments: p._count?.comments || 0,
                author: {
                  name: p.author?.name || 'Unknown',
                  sport: p.author?.sport || '',
                  position: p.author?.position || '',
                  photo: p.author?.avatarUrl || avatar
                }
              }} />
            ))}
          </div>
        )}
      </div>
      <PostComposeModal open={open} onClose={closeModal} avatar={avatar} />
    </div>
  )
}
