'use client'

import { useEffect, useRef, useState } from 'react'
import { useMotionValue, useTransform, animate } from 'framer-motion'

interface CountUpProps {
  target: number
  duration?: number
  className?: string
  suffix?: string
  prefix?: string
}

export default function CountUp({
  target,
  duration = 2,
  className = '',
  suffix = '',
  prefix = '',
}: CountUpProps) {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, (v) => Math.round(v))
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(ref.current as Element)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) return
    const controls = animate(motionValue, target, {
      duration,
      ease: [0.25, 0.1, 0.25, 1],
    })
    return () => controls.stop()
  }, [inView, target, duration, motionValue])

  useEffect(() => {
    const unsubscribe = rounded.on('change', (v) => setDisplayValue(v))
    return () => unsubscribe()
  }, [rounded])

  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue}{suffix}
    </span>
  )
}
