'use client'

import { motion, type Easing } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface BlurTextProps {
  text: string
  delay?: number
  className?: string
  animateBy?: 'words' | 'letters'
  direction?: 'top' | 'bottom'
  threshold?: number
}

export default function BlurText({
  text,
  delay = 100,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
}: BlurTextProps) {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('')
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(ref.current as Element)
        }
      },
      { threshold }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  const fromY = direction === 'top' ? -30 : 30

  return (
    <p ref={ref} className={`flex flex-wrap ${className}`}>
      {elements.map((segment, index) => (
        <motion.span
          key={`${segment}-${index}`}
          initial={{ filter: 'blur(10px)', opacity: 0, y: fromY }}
          animate={inView ? { filter: 'blur(0px)', opacity: 1, y: 0 } : undefined}
          transition={{
            duration: 0.5,
            delay: (index * delay) / 1000,
            ease: [0.25, 0.1, 0.25, 1] as unknown as Easing,
          }}
          className="inline-block will-change-[filter,transform,opacity]"
        >
          {segment === ' ' ? '\u00A0' : segment}
          {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </p>
  )
}
