'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Palette, Code, Share2, Video, Camera, Zap, TrendingUp, Cpu, Network } from 'lucide-react'
import SpotlightCard from '@/components/reactbits/SpotlightCard'
import FadeContent from '@/components/reactbits/FadeContent'
import { services } from '@/lib/data'

const iconMap: Record<string, React.ElementType> = {
  palette: Palette, code: Code, share2: Share2, video: Video, camera: Camera,
  zap: Zap, 'trending-up': TrendingUp, cpu: Cpu, network: Network,
}

export default function ServicesSection() {
  return (
    <section className="bg-black-soft py-20 px-6 md:px-16" data-header-color="yellow">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[clamp(48px,6vw,80px)] font-display uppercase leading-none text-white mb-12">Serviços</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon]
            return (
              <FadeContent key={service.slug} delay={index * 0.08} direction="up">
                <Link href={`/servicos/${service.slug}`} className="block h-full">
                  <SpotlightCard className="bg-black-card border border-white/5 hover:border-yellow/30 transition-colors h-full">
                    {service.image && (
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                        <Image src={service.image} alt={service.title} fill className="object-cover" sizes="400px" />
                      </div>
                    )}
                    <div className="relative p-8">
                      {Icon && <Icon size={32} className="text-yellow mb-4" />}
                      <h3 className="text-lg font-bold uppercase text-white">{service.title}</h3>
                      <p className="mt-3 text-sm text-white/60 leading-relaxed">{service.description}</p>
                    </div>
                  </SpotlightCard>
                </Link>
              </FadeContent>
            )
          })}
        </div>
      </div>
    </section>
  )
}
