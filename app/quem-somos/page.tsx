'use client'

import Aurora from '@/components/reactbits/Aurora'
import BlurText from '@/components/reactbits/BlurText'
import FadeContent from '@/components/reactbits/FadeContent'
import ScrollFloat from '@/components/reactbits/ScrollFloat'
import CountUp from '@/components/reactbits/CountUp'
import DecryptedText from '@/components/reactbits/DecryptedText'
import StarBorder from '@/components/reactbits/StarBorder'
import TeamSection from '@/components/sections/TeamSection'
import ClientLogos from '@/components/sections/ClientLogos'
import CTASection from '@/components/sections/CTASection'
import Link from 'next/link'

const stats = [
  { number: 50, suffix: '+', label: 'Projectos Realizados' },
  { number: 30, suffix: '+', label: 'Clientes Satisfeitos' },
  { number: 6, suffix: '', label: 'Anos de Experiência' },
  { number: 9, suffix: '', label: 'Serviços Especializados' },
]

const values = [
  { title: 'Compromisso com a Qualidade', description: 'Cada projecto é tratado com o mais alto padrão de excelência.' },
  { title: 'Inovação Focada', description: 'Adoptamos as mais recentes tecnologias e tendências.' },
  { title: 'Profissionalismo', description: 'Cumprimos prazos e comunicamos de forma transparente.' },
  { title: 'Integridade', description: 'Honestidade e transparência em todas as relações.' },
  { title: 'Respeito pelo Cliente', description: 'Ouvimos e adaptamos soluções às necessidades reais.' },
]

export default function QuemSomosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden" data-header-color="transparent">
        <Aurora colors={['#F5C518', '#C9A000', '#E6B800']} />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-[clamp(60px,10vw,160px)] font-display uppercase leading-none text-white">
            Quem <span className="text-yellow">Somos</span>
          </h1>
          <div className="mt-6">
            <BlurText text="Fazemos grandes coisas desde Bissau" className="text-lg md:text-2xl text-white/60 justify-center" delay={80} animateBy="words" />
          </div>
        </div>
      </section>

      {/* Information */}
      <section className="bg-black px-6 md:px-16 py-24 md:py-32" data-header-color="yellow">
        <div className="max-w-7xl mx-auto">
          <ScrollFloat className="mb-16">
            <h2 className="text-[clamp(36px,5vw,72px)] font-display uppercase text-white leading-tight">
              ABIPTOM. <span className="text-yellow">Somos guardiões</span> das novas tecnologias.
            </h2>
          </ScrollFloat>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <div className="flex flex-col gap-6">
              <FadeContent delay={0.1}>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                  Somos a <strong className="text-white">ABIPTOM, SARL</strong>, um grupo de Consultores nacionais e internacionais especializados em Marketing, Design Gráfico e Desenvolvimento de Software.
                </p>
              </FadeContent>
              <FadeContent delay={0.2}>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                  Com uma forte presença na Guiné-Bissau, transformamos ideias em realidade digital. Trabalhamos com marcas que têm grandes ambições.
                </p>
              </FadeContent>
            </div>

            <div className="flex flex-col gap-8">
              <FadeContent delay={0.3}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-px bg-yellow" />
                  <h3 className="text-xs uppercase tracking-[0.15em] text-yellow font-semibold">Missão</h3>
                </div>
                <p className="text-lg text-white/70 leading-relaxed">Entregar resultados excepcionais através de soluções criativas e tecnológicas que impulsionam o crescimento dos nossos clientes.</p>
              </FadeContent>
              <FadeContent delay={0.4}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-px bg-yellow" />
                  <h3 className="text-xs uppercase tracking-[0.15em] text-yellow font-semibold">Visão</h3>
                </div>
                <p className="text-lg text-white/70 leading-relaxed">Ser referência no campo da tecnologia e design na Guiné-Bissau e na sub-região da África Ocidental.</p>
              </FadeContent>
              <FadeContent delay={0.5}>
                <StarBorder>
                  <Link href="/portfolio" className="inline-flex items-center justify-center px-8 py-4 font-bold uppercase tracking-wider text-sm bg-yellow text-black hover:bg-yellow-hover transition-colors">
                    Ver Portfólio
                  </Link>
                </StarBorder>
              </FadeContent>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-yellow py-20 px-6 md:px-16" data-header-color="black">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <CountUp target={stat.number} suffix={stat.suffix} duration={2.5} className="block text-[clamp(48px,6vw,80px)] font-display leading-none text-black" />
              <span className="block mt-2 text-sm uppercase tracking-wider font-semibold text-black/70">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <TeamSection />

      {/* Values */}
      <section className="py-24 md:py-32 px-6 md:px-16 bg-black" data-header-color="yellow">
        <div className="max-w-7xl mx-auto">
          <ScrollFloat className="mb-16">
            <h2 className="text-[clamp(36px,5vw,72px)] font-display uppercase text-white leading-tight">
              Os Nossos <span className="text-yellow">Valores</span>
            </h2>
          </ScrollFloat>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {values.map((value, index) => (
              <FadeContent key={value.title} delay={index * 0.1} direction="up">
                <div className="bg-black p-8 md:p-10 group hover:bg-black-card transition-colors duration-500 h-full">
                  <span className="block text-[64px] font-display leading-none text-yellow/20 mb-4">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl font-display uppercase text-white group-hover:text-yellow transition-colors duration-300 mb-4">
                    <DecryptedText text={value.title} speed={30} trigger="view" className="font-display" />
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-300">{value.description}</p>
                </div>
              </FadeContent>
            ))}
          </div>
        </div>
      </section>

      <ClientLogos />
      <CTASection />
    </>
  )
}
