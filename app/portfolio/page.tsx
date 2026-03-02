'use client'

import { useState } from 'react'
import ScrollFloat from '@/components/reactbits/ScrollFloat'
import FadeContent from '@/components/reactbits/FadeContent'
import { portfolioItems, portfolioFilters } from '@/lib/data'
import WorkCard from '@/components/sections/WorkCard'

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('Todos')

  const filtered = activeFilter === 'Todos'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <div className="min-h-screen bg-black">
      <div className="px-6 md:px-16 pt-32 pb-12">
        <ScrollFloat>
          <h1 className="text-[clamp(80px,12vw,180px)] font-display uppercase leading-none text-white">
            Portfólio
          </h1>
        </ScrollFloat>
      </div>

      <div className="px-6 md:px-16 pb-8">
        <div className="flex flex-wrap gap-3">
          {portfolioFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 text-xs uppercase tracking-wider font-bold transition-all duration-300 cursor-pointer border ${
                activeFilter === filter
                  ? 'bg-yellow text-black border-yellow'
                  : 'bg-transparent text-white/60 border-white/10 hover:border-yellow/50 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 md:px-16 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((item, index) => (
          <FadeContent key={item.slug} delay={index * 0.05} direction="up">
            <WorkCard item={item} isMain={index === 0 && activeFilter === 'Todos'} />
          </FadeContent>
        ))}
      </div>
    </div>
  )
}
