'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface ScrollFloatProps {
  children: React.ReactNode
  className?: string
}

export default function ScrollFloat({ children, className = '' }: ScrollFloatProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -60])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9])

  return (
    <motion.div ref={ref} style={{ y, opacity, scale }} className={className}>
      {children}
    </motion.div>
  )
}
