'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from '@/lib/gsap'
import PrimaryButton from '@/components/ui/PrimaryButton'

export default function BigStatement() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const el = sectionRef.current
    const title = el.querySelector('.statement-title')
    const desc = el.querySelector('.statement-desc')

    if (title) {
      gsap.fromTo(title, { y: 100, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: title, start: 'top 85%', once: true },
      })
    }
    if (desc) {
      gsap.fromTo(desc, { y: 80, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, delay: 0.3, ease: 'power3.out',
        scrollTrigger: { trigger: desc, start: 'top 85%', once: true },
      })
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center bg-black px-6 md:px-16 py-24"
      data-header-color="yellow"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 lg:gap-24">
          <h2 className="statement-title text-[clamp(48px,8vw,120px)] font-display uppercase leading-[0.9] text-white">
            SOMOS{' '}
            <span className="inline-block w-[140px] md:w-[240px] h-[80px] md:h-[140px] rounded-lg overflow-hidden align-middle mx-1 md:mx-2 relative">
              <Image
                src="/images/portfolio/websites/arn.png"
                alt="ARN"
                fill
                className="object-cover"
                sizes="240px"
              />
            </span>{' '}
            <span className="text-yellow">ABIPTOM</span>{' '}
            <br className="hidden md:block" />
            FAZEMOS{' '}
            <span className="inline-block w-[160px] md:w-[280px] h-[90px] md:h-[160px] rounded-lg overflow-hidden align-middle mx-1 md:mx-2 relative">
              <Image
                src="/images/portfolio/graphicdesign/bissaurising-banner.png"
                alt="Bissau Rising"
                fill
                className="object-cover"
                sizes="280px"
              />
            </span>{' '}
            <br className="hidden md:block" />
            COISAS GRANDES
          </h2>

          <div className="statement-desc max-w-md flex-shrink-0">
            <p className="text-lg text-white/70 leading-relaxed mb-2">
              Transformamos ideias em realidade digital.
            </p>
            <p className="text-lg text-white/70 leading-relaxed mb-2">
              Trabalhamos com marcas que têm grandes ambições.
            </p>
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              Construímos experiências que fazem a diferença.
            </p>
            <PrimaryButton href="/contacto">Fale Connosco</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}
