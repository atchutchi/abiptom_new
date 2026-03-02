'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: 'fade-in' | 'slide-left' | 'slide-right' | 'slide-up'
  delay?: number
  dataHeaderColor?: string
}

export default function AnimatedSection({
  children,
  className = '',
  animation = 'fade-in',
  delay = 0,
  dataHeaderColor,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const el = ref.current
    const animations: Record<string, { from: gsap.TweenVars; to: gsap.TweenVars }> = {
      'fade-in': { from: { y: 80, opacity: 0 }, to: { y: 0, opacity: 1 } },
      'slide-left': { from: { x: -200, opacity: 0 }, to: { x: 0, opacity: 1 } },
      'slide-right': { from: { x: 200, opacity: 0 }, to: { x: 0, opacity: 1 } },
      'slide-up': { from: { y: 150, opacity: 0 }, to: { y: 0, opacity: 1 } },
    }

    const anim = animations[animation]
    const ctx = gsap.context(() => {
      gsap.fromTo(el, anim.from, {
        ...anim.to,
        duration: 1,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        },
      })
    }, el)

    return () => ctx.revert()
  }, [animation, delay])

  return (
    <section
      ref={ref}
      className={className}
      {...(dataHeaderColor ? { 'data-header-color': dataHeaderColor } : {})}
    >
      {children}
    </section>
  )
}
