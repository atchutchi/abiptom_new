'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import FadeContent from '@/components/reactbits/FadeContent'
import ScrollFloat from '@/components/reactbits/ScrollFloat'
import { portfolioItems } from '@/lib/data'
import WorkCard from './WorkCard'

interface WorkGridProps {
  limit?: number
  showLink?: boolean
}

export default function WorkGrid({ limit = 6, showLink = true }: WorkGridProps) {
  const featured = portfolioItems.slice(0, limit)

  return (
    <section className="bg-black py-20 px-6 md:px-16" data-header-color="yellow">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <ScrollFloat>
            <h2 className="text-[clamp(48px,6vw,80px)] font-display uppercase leading-none text-white">
              Portfólio
            </h2>
          </ScrollFloat>
          {showLink && (
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-yellow hover:text-yellow-hover transition-colors">
              Ver tudo <ArrowRight size={16} />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featured.map((item, index) => (
            <FadeContent key={item.slug} delay={index * 0.1} direction="up">
              <WorkCard item={item} isMain={index === 0} />
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  )
}
