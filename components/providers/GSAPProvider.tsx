'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

export default function GSAPProvider({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      // Slide-in headings
      gsap.utils.toArray<HTMLElement>('.slide-in-heading').forEach((el) => {
        gsap.fromTo(
          el,
          { x: 600, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          }
        )
      })

      // Fade-in content
      gsap.utils.toArray<HTMLElement>('[data-animation="fade-in"]').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 150, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          }
        )
      })

      // Stagger containers
      gsap.utils.toArray<HTMLElement>('.stagger-container').forEach((container) => {
        const items = container.querySelectorAll('.stagger-item')
        gsap.fromTo(
          items,
          { x: 280, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: { trigger: container, start: 'top 75%', once: true },
          }
        )
      })

      // Header color change based on data-header-color
      const header = document.querySelector('header')
      if (header) {
        const sections = document.querySelectorAll('[data-header-color]')
        sections.forEach((section) => {
          ScrollTrigger.create({
            trigger: section,
            start: 'top 80px',
            end: 'bottom 80px',
            onEnter: () => {
              const color = (section as HTMLElement).dataset.headerColor
              header.setAttribute('data-color', color ?? 'transparent')
            },
            onEnterBack: () => {
              const color = (section as HTMLElement).dataset.headerColor
              header.setAttribute('data-color', color ?? 'transparent')
            },
          })
        })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return <div ref={containerRef}>{children}</div>
}
