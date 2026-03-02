'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Palette, Code, Share2, Video, Camera, Zap, TrendingUp, Cpu, Network } from 'lucide-react'
import { gsap } from '@/lib/gsap'
import { services } from '@/lib/data'

const iconMap: Record<string, React.ElementType> = {
  palette: Palette,
  code: Code,
  share2: Share2,
  video: Video,
  camera: Camera,
  zap: Zap,
  'trending-up': TrendingUp,
  cpu: Cpu,
  network: Network,
}

export default function ServicesSection() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!gridRef.current) return

    const cards = gridRef.current.querySelectorAll('.service-card')
    gsap.fromTo(
      cards,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 75%',
          once: true,
        },
      }
    )
  }, [])

  return (
    <section className="bg-black-soft py-20 px-6 md:px-16" data-header-color="yellow">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[clamp(48px,6vw,80px)] font-display uppercase leading-none text-white mb-12">
          Serviços
        </h2>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <Link
                key={service.slug}
                href={`/servicos/${service.slug}`}
                className="service-card group bg-black-card border border-white/5 p-8 transition-all duration-300 hover:border-yellow/50"
              >
                {Icon && <Icon size={32} className="text-yellow mb-4" />}
                <h3 className="text-lg font-bold uppercase text-white group-hover:text-yellow transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">
                  {service.description}
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
