'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!heroRef.current) return

    ScrollTrigger.create({
      trigger: heroRef.current,
      start: 'top top',
      end: '+=100%',
      pin: true,
      pinSpacing: true,
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden bg-black"
      data-header-color="transparent"
    >
      {/* Background gradient as placeholder for video/image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black-soft to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,197,24,0.08)_0%,transparent_70%)]" />
      </div>

      {/* SVG Mask with ABIPTOM text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          viewBox="0 0 1200 200"
          className="w-[90vw] max-w-[1200px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <mask id="abiptom-mask">
              <rect width="100%" height="100%" fill="white" />
              <text
                x="50%"
                y="50%"
                dominantBaseline="central"
                textAnchor="middle"
                fontSize="180"
                fontFamily="'Bebas Neue', sans-serif"
                fontWeight="400"
                fill="black"
                letterSpacing="0.05em"
              >
                ABIPTOM
              </text>
            </mask>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="#F5C518"
            mask="url(#abiptom-mask)"
          />
        </svg>
      </div>

      {/* Bottom left text */}
      <div className="absolute bottom-8 left-6 md:left-16">
        <p className="text-xs uppercase tracking-[0.2em] text-white/60">
          Bissau · Guiné-Bissau
        </p>
      </div>

      {/* Bottom right scroll indicator */}
      <div className="absolute bottom-8 right-6 md:right-16 flex items-center gap-2">
        <span className="text-xs uppercase tracking-[0.2em] text-white/60">Scroll</span>
        <svg
          width="12"
          height="24"
          viewBox="0 0 12 24"
          fill="none"
          className="animate-bounce"
        >
          <path
            d="M6 0V22M6 22L1 17M6 22L11 17"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </section>
  )
}
