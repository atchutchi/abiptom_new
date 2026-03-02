import Image from 'next/image'
import Link from 'next/link'
import SpotlightCard from '@/components/reactbits/SpotlightCard'
import type { PortfolioItem } from '@/types'

interface WorkCardProps {
  item: PortfolioItem
  isMain?: boolean
}

export default function WorkCard({ item, isMain = false }: WorkCardProps) {
  return (
    <Link
      href={`/portfolio/${item.slug}`}
      className={`block ${isMain ? 'md:col-span-2' : ''}`}
    >
      <SpotlightCard className="bg-black-card h-full border border-white/5 hover:border-yellow/30 transition-colors duration-300">
        <div className="aspect-video overflow-hidden relative">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            sizes={isMain ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
          />
        </div>
        <div className="p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-black uppercase text-white">{item.title}</h3>
          <div className="flex items-center gap-3 mt-2">
            <span className="h-px w-8 bg-yellow shrink-0" />
            <span className="text-xs uppercase tracking-widest text-gray-dark">{item.subtitle}</span>
          </div>
        </div>
      </SpotlightCard>
    </Link>
  )
}
