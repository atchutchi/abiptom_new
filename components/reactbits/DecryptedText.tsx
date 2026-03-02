'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

interface DecryptedTextProps {
  text: string
  className?: string
  speed?: number
  characters?: string
  trigger?: 'hover' | 'view'
}

export default function DecryptedText({
  text,
  className = '',
  speed = 50,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%',
  trigger = 'view',
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text.replace(/./g, ' '))
  const [isAnimating, setIsAnimating] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  const animate = useCallback(() => {
    if (isAnimating || hasAnimated) return
    setIsAnimating(true)

    let iteration = 0
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' '
            if (index < iteration) return char
            return characters[Math.floor(Math.random() * characters.length)]
          })
          .join('')
      )

      iteration += 1 / 3

      if (iteration >= text.length) {
        clearInterval(interval)
        setDisplayText(text)
        setIsAnimating(false)
        setHasAnimated(true)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed, characters, isAnimating, hasAnimated])

  useEffect(() => {
    if (trigger !== 'view' || !ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate()
          observer.unobserve(ref.current as Element)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [trigger, animate])

  return (
    <span
      ref={ref}
      className={`font-mono ${className}`}
      onMouseEnter={trigger === 'hover' ? animate : undefined}
    >
      {displayText}
    </span>
  )
}
