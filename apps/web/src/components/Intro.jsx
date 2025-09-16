import React from 'react'
import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'

export default function Intro({ onComplete }) {
  const delay = 0.6
  const duration = 1.2

  return (
    <motion.div
      key="intro"
      className="fixed inset-0 z-30 bg-neutral-950"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { delay: duration, duration: 0.5 } }}
    >
      {/* Center logo */}
      <div className="absolute inset-0 grid place-items-center pointer-events-none">
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3">
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-amber-300 via-yellow-400 to-orange-500 shadow-2xl grid place-items-center">
              <Shield className="h-6 w-6 text-black" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">
              Locker <span className="text-amber-300">Room</span>
            </h1>
          </div>
          <p className="mt-2 text-white/60">Where athletes open doors.</p>
        </motion.div>
      </div>

      {/* Doors */}
      <motion.div className="absolute inset-0 flex">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{ delay, duration, ease: [0.22, 1, 0.36, 1] }}
          className="w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center border-r border-white/10 shadow-2xl"
          style={{ boxShadow: 'inset -50px 0 80px rgba(0,0,0,0.6)' }}
        >
          <div className="h-full w-full bg-black/50" />
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: '100%' }}
          transition={{ delay, duration, ease: [0.22, 1, 0.36, 1] }}
          className="w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center border-l border-white/10 shadow-2xl"
          style={{ boxShadow: 'inset 50px 0 80px rgba(0,0,0,0.6)' }}
          onAnimationComplete={onComplete}
        >
          <div className="h-full w-full bg-black/50" />
        </motion.div>
      </motion.div>

      {/* Light sweep */}
      <motion.div
        initial={{ x: '-20%', opacity: 0 }}
        animate={{ x: '120%', opacity: [0, 1, 0] }}
        transition={{ delay: delay + 0.1, duration: duration, ease: 'easeInOut' }}
        className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white/5 via-white/20 to-transparent skew-x-12"
      />
    </motion.div>
  )
}