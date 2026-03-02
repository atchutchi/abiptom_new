'use client'

import { use, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { portfolioItems } from '@/lib/data'
import Modal from '@/components/ui/Modal'

export default function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  const [videoOpen, setVideoOpen] = useState(false)
  const item = portfolioItems.find((p) => p.slug === slug)

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <h1 className="text-4xl font-display text-white mb-4">Projecto não encontrado</h1>
          <Link href="/portfolio" className="text-yellow hover:text-yellow-hover transition-colors">
            Voltar ao Portfólio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="min-h-screen bg-white" data-header-color="black">
        {/* Back link */}
        <div className="px-6 md:px-16 pt-28 pb-6">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-dark hover:text-black transition-colors"
          >
            <ArrowLeft size={16} />
            Voltar ao Portfólio
          </Link>
        </div>

        {/* Hero Image */}
        <div className="px-6 md:px-16">
          <div className="relative aspect-video max-h-[70vh] w-full overflow-hidden bg-gray-light">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            {item.videoUrl && (
              <button
                onClick={() => setVideoOpen(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors cursor-pointer group"
              >
                <div className="w-20 h-20 rounded-full bg-yellow flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M8 5V19L19 12L8 5Z" fill="#0A0A0A" />
                  </svg>
                </div>
              </button>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="px-6 md:px-16 py-16">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-yellow flex-shrink-0" />
              <span className="text-xs uppercase tracking-widest text-gray-dark">
                {item.category}
              </span>
            </div>
            <h1 className="text-[clamp(36px,5vw,72px)] font-display uppercase leading-tight text-black">
              {item.title}
            </h1>
            <p className="mt-4 text-lg text-gray-dark">{item.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {item.videoUrl && (
        <Modal isOpen={videoOpen} onClose={() => setVideoOpen(false)}>
          <div className="aspect-video">
            <iframe
              src={item.videoUrl}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={item.title}
            />
          </div>
        </Modal>
      )}
    </>
  )
}
