'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { useState } from 'react'

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
}

export default function AnimatedCard({ children, className = "" }: AnimatedCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    
    setMousePosition({
      x: (x - 0.5) * 20,
      y: (y - 0.5) * -20
    })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      className="perspective-1000"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <Card
        className={`${className} relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateY(${mousePosition.x}deg) rotateX(${mousePosition.y}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300"
          animate={{
            background: [
              "linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, transparent 50%, rgba(6, 182, 212, 0.1) 100%)",
              "linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, transparent 50%, rgba(6, 182, 212, 0.2) 100%)",
              "linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, transparent 50%, rgba(6, 182, 212, 0.1) 100%)"
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <CardContent className="relative z-10">
          {children}
        </CardContent>
      </Card>
    </motion.div>
  )
}