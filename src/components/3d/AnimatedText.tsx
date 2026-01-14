'use client'

import { motion } from 'framer-motion'

export default function AnimatedText({ text }: { text: string }) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.h1 
        className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-cyan-500 bg-clip-text text-transparent relative"
        style={{
          textShadow: '0 0 30px rgba(168, 85, 247, 0.5), 0 0 60px rgba(6, 182, 212, 0.3)',
          transform: 'perspective(500px) rotateX(10deg)',
          transformStyle: 'preserve-3d'
        }}
        animate={{
          textShadow: [
            '0 0 30px rgba(168, 85, 247, 0.5), 0 0 60px rgba(6, 182, 212, 0.3)',
            '0 0 40px rgba(168, 85, 247, 0.8), 0 0 80px rgba(6, 182, 212, 0.5)',
            '0 0 30px rgba(168, 85, 247, 0.5), 0 0 60px rgba(6, 182, 212, 0.3)'
          ],
          transform: [
            'perspective(500px) rotateX(10deg) translateY(0px)',
            'perspective(500px) rotateX(10deg) translateY(-5px)',
            'perspective(500px) rotateX(10deg) translateY(0px)'
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {text}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent blur-xl opacity-50"
          animate={{
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {text}
        </motion.div>
      </motion.h1>
    </motion.div>
  )
}