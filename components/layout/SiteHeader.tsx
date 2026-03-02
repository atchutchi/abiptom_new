'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import FullscreenNav from './FullscreenNav'

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [navOpen])

  return (
    <>
      <header
        ref={headerRef}
        data-color="transparent"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-black/95 backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-16 py-5">
          <Link href="/" className="relative z-50">
            <span className="text-2xl md:text-3xl font-display tracking-wider text-yellow">
              ABIPTOM
            </span>
          </Link>

          <button
            onClick={() => setNavOpen(!navOpen)}
            className="relative z-50 flex flex-col gap-1.5 p-2 group cursor-pointer"
            aria-label={navOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            <span
              className={`block w-7 h-0.5 bg-white transition-all duration-300 ${
                navOpen ? 'rotate-45 translate-y-2' : 'group-hover:bg-yellow'
              }`}
            />
            <span
              className={`block w-7 h-0.5 bg-white transition-all duration-300 ${
                navOpen ? 'opacity-0' : 'group-hover:bg-yellow'
              }`}
            />
            <span
              className={`block w-7 h-0.5 bg-white transition-all duration-300 ${
                navOpen ? '-rotate-45 -translate-y-2' : 'group-hover:bg-yellow'
              }`}
            />
          </button>
        </div>
      </header>
      <FullscreenNav isOpen={navOpen} onClose={() => setNavOpen(false)} />
    </>
  )
}
