'use client'

import { use } from 'react'
import Link from 'next/link'
import { ArrowLeft, Palette, Code, Share2, Video, Camera, Zap, TrendingUp, Cpu, Network } from 'lucide-react'
import { services } from '@/lib/data'
import PrimaryButton from '@/components/ui/PrimaryButton'

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

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <h1 className="text-4xl font-display text-white mb-4">Serviço não encontrado</h1>
          <Link href="/servicos" className="text-yellow hover:text-yellow-hover transition-colors">
            Voltar aos Serviços
          </Link>
        </div>
      </div>
    )
  }

  const Icon = iconMap[service.icon]

  return (
    <div className="min-h-screen bg-black">
      {/* Back link */}
      <div className="px-6 md:px-16 pt-28 pb-6">
        <Link
          href="/servicos"
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-dark hover:text-white transition-colors"
        >
          <ArrowLeft size={16} />
          Voltar aos Serviços
        </Link>
      </div>

      {/* Content */}
      <section className="px-6 md:px-16 py-16">
        <div className="max-w-4xl">
          {Icon && <Icon size={48} className="text-yellow mb-8" />}
          <h1 className="text-[clamp(48px,6vw,96px)] font-display uppercase leading-none text-white">
            {service.title}
          </h1>
          <p className="mt-8 text-xl text-white/70 leading-relaxed max-w-2xl">
            {service.description}
          </p>

          <div className="mt-12">
            <PrimaryButton href="/contacto">
              Solicitar Orçamento
            </PrimaryButton>
          </div>
        </div>
      </section>
    </div>
  )
}
