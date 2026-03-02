'use client'

import ScrollFloat from '@/components/reactbits/ScrollFloat'
import BlurText from '@/components/reactbits/BlurText'
import FadeContent from '@/components/reactbits/FadeContent'
import StarBorder from '@/components/reactbits/StarBorder'
import Link from 'next/link'

export default function BigStatement() {
  return (
    <section className="min-h-screen flex items-center bg-black px-6 md:px-16 py-24" data-header-color="yellow">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 lg:gap-24">
          <ScrollFloat>
            <h2 className="text-[clamp(48px,8vw,120px)] font-display uppercase leading-[0.9] text-white">
              SOMOS{' '}
              <span className="text-yellow">ABIPTOM</span>
              <br />
              FAZEMOS
              <br />
              COISAS GRANDES
            </h2>
          </ScrollFloat>

          <FadeContent direction="right" delay={0.3} className="max-w-md shrink-0">
            <BlurText
              text="Transformamos ideias em realidade digital. Trabalhamos com marcas que têm grandes ambições."
              className="text-lg text-white/70 leading-relaxed"
              delay={60}
              animateBy="words"
            />
            <div className="mt-8">
              <StarBorder>
                <Link href="/contacto" className="inline-flex items-center justify-center px-8 py-4 font-bold uppercase tracking-wider text-sm bg-yellow text-black hover:bg-yellow-hover transition-colors">
                  Fale Connosco
                </Link>
              </StarBorder>
            </div>
          </FadeContent>
        </div>
      </div>
    </section>
  )
}
