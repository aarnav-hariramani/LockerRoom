import React from 'react'
import { Heart, MessageCircle, Share2 } from 'lucide-react'
import { formatNum } from '../utils/formatNum.js'

export default function PostCard({ post }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
      <div className="p-4 flex items-center gap-3">
        <img src={post.author.photo} alt={post.author.name} className="h-10 w-10 rounded-full object-cover" />
        <div>
          <p className="font-semibold leading-tight">{post.author.name}</p>
          <p className="text-xs text-white/60">{post.author.sport} • {post.author.position}</p>
        </div>
      </div>
      {post.media && (
        <div className="bg-black/40">
          <img src={post.media} alt="highlight" className="w-full object-cover max-h-[460px]" />
        </div>
      )}
      <div className="p-4 space-y-3">
        <p className="text-white/90">{post.text}</p>
        <div className="flex items-center gap-4 text-white/70 text-sm">
          <span className="inline-flex items-center gap-1"><Heart className="h-4 w-4" /> {formatNum(post.likes)}</span>
          <span className="inline-flex items-center gap-1"><MessageCircle className="h-4 w-4" /> {formatNum(post.comments)}</span>
          <span className="inline-flex items-center gap-1"><Share2 className="h-4 w-4" /> Share</span>
        </div>
      </div>
    </div>
  )
}