'use client'

import LogoLoop from '@/components/reactbits/LogoLoop'
import { clientLogos } from '@/lib/data'

interface ClientLogosProps {
  limit?: number
}

export default function ClientLogos({ limit }: ClientLogosProps) {
  const logos = limit ? clientLogos.slice(0, limit) : clientLogos
  const items = logos.map((c) => ({ src: c.logo, alt: c.name }))

  return (
    <section className="py-16 bg-black overflow-hidden" data-header-color="yellow">
      <div className="max-w-7xl mx-auto px-6 md:px-16 mb-8">
        <p className="text-xs uppercase tracking-[0.15em] text-gray-dark text-center">Quem confia em nós</p>
      </div>
      <LogoLoop items={items} speed={40} pauseOnHover className="py-4" />
      <LogoLoop items={items} speed={35} direction="right" pauseOnHover className="py-4 mt-2" />
    </section>
  )
}
