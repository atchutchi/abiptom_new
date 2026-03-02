'use client'

import { useEffect } from 'react'
import { ScrollTrigger } from '@/lib/gsap'
import { initHeaderColorChange, initSlideInHeadings, initFadeInContent, initStaggerItems } from '@/lib/animations'

export default function GSAPProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const header = document.querySelector('header')
    if (header) {
      initHeaderColorChange(header as HTMLElement)
    }
    initSlideInHeadings()
    initFadeInContent()
    initStaggerItems()

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return <>{children}</>
}
