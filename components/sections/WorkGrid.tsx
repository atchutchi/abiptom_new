'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { gsap } from '@/lib/gsap'
import { portfolioItems } from '@/lib/data'
import WorkCard from './WorkCard'

interface WorkGridProps {
  limit?: number
  showLink?: boolean
}

export default function WorkGrid({ limit = 6, showLink = true }: WorkGridProps) {
  const sectionRef = useRef<HTMLElement>(null)

  const featured = portfolioItems.slice(0, limit)

  useEffect(() => {
    if (!sectionRef.current) return

    const left = sectionRef.current.querySelector('.text-work-container')
    const grid = sectionRef.current.querySelector('.works-grid')

    if (left && grid) {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: left, start: 'top 70%', once: true },
      })
      tl.fromTo(left, { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' })
      tl.fromTo(grid, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.6')
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-white-off py-20 px-6 md:px-16"
      data-header-color="black"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">
        <div className="text-work-container lg:sticky lg:top-24 self-start">
          <h2 className="text-[clamp(48px,6vw,80px)] font-display uppercase leading-none text-black">
            Portfólio
          </h2>
          <p className="mt-4 text-gray-dark text-base leading-relaxed">
            Projectos que fazem a diferença. Veja como transformamos ideias em resultados.
          </p>
          {showLink && (
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 mt-6 text-sm font-bold uppercase tracking-wider text-black hover:text-yellow-dark transition-colors"
            >
              Ver todo o portfólio
              <ArrowRight size={16} />
            </Link>
          )}
        </div>

        <div className="works-grid grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-gray-light">
          {featured.map((item, index) => (
            <WorkCard key={item.slug} item={item} isMain={index === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
