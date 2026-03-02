'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface FadeContentProps {
  children: React.ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  duration?: number
  blur?: boolean
  distance?: number
}

export default function FadeContent({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.6,
  blur = false,
  distance = 40,
}: FadeContentProps) {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(ref.current as Element)
        }
      },
      { threshold: 0.1, rootMargin: '-50px' }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const directionMap = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  }

  const { x, y } = directionMap[direction]

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        x,
        y,
        filter: blur ? 'blur(8px)' : 'blur(0px)',
      }}
      animate={inView ? { opacity: 1, x: 0, y: 0, filter: 'blur(0px)' } : undefined}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
