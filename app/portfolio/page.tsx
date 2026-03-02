'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { portfolioItems, portfolioFilters } from '@/lib/data'
import WorkCard from '@/components/sections/WorkCard'

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('Todos')
  const titleRef = useRef<HTMLHeadingElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  const filtered =
    activeFilter === 'Todos'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter)

  useEffect(() => {
    if (!titleRef.current) return
    gsap.fromTo(
      titleRef.current,
      { y: 150, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    )
  }, [])

  useEffect(() => {
    if (!gridRef.current) return
    const cards = gridRef.current.querySelectorAll('.card-work-anim')
    gsap.fromTo(
      cards,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.05, duration: 0.4, ease: 'power2.out' }
    )
  }, [activeFilter])

  return (
    <div className="min-h-screen bg-white" data-header-color="black">
      <div className="px-6 md:px-16 pt-32 pb-12">
        <h1
          ref={titleRef}
          className="text-[clamp(80px,12vw,180px)] font-display uppercase leading-none text-black"
        >
          Portfólio
        </h1>
      </div>

      {/* Filters */}
      <div className="px-6 md:px-16 pb-8">
        <div className="flex flex-wrap gap-3">
          {portfolioFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 text-xs uppercase tracking-wider font-bold transition-all duration-300 cursor-pointer ${
                activeFilter === filter
                  ? 'bg-yellow text-black'
                  : 'bg-gray-light text-gray-dark hover:bg-gray-mid hover:text-black'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div
        ref={gridRef}
        className="px-6 md:px-16 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5"
      >
        {filtered.map((item, index) => (
          <div key={item.slug} className="card-work-anim">
            <WorkCard item={item} isMain={index === 0} />
          </div>
        ))}
      </div>
    </div>
  )
}
