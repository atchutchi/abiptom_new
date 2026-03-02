import type { Metadata } from 'next'
import AnimatedSection from '@/components/ui/AnimatedSection'
import TeamSection from '@/components/sections/TeamSection'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Quem Somos',
  description:
    'Conheça a ABIPTOM - Consultores especializados em Marketing, Design Gráfico e Desenvolvimento Web em Guiné-Bissau.',
}

const values = [
  'Compromisso com a Qualidade',
  'Inovação Focada',
  'Profissionalismo',
  'Integridade',
  'Respeito pelo Cliente',
]

export default function QuemSomosPage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[70vh] flex items-end bg-black px-6 md:px-16 pb-16 pt-32">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-[clamp(60px,10vw,160px)] font-display uppercase leading-none text-white">
            Quem <span className="text-yellow">Somos</span>
          </h1>
        </div>
      </section>

      {/* Information Section */}
      <AnimatedSection
        className="min-h-screen bg-black px-6 md:px-16 py-24"
        dataHeaderColor="yellow"
        animation="fade-in"
      >
        <div className="max-w-7xl mx-auto">
          <div className="overflow-hidden mb-12">
            <h2 className="slide-in-heading text-[clamp(36px,5vw,72px)] font-display uppercase text-white leading-tight">
              ABIPTOM. Somos guardiões das novas tecnologias.
            </h2>
          </div>

          <div
            className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl flex flex-col gap-6"
            data-animation="fade-in"
          >
            <p>
              Somos a ABIPTOM, SARL, um grupo de Consultores nacionais e internacionais
              especializados em Marketing, Design Gráfico e Web Design e Desenvolvimento de Software.
            </p>
            <p>
              Com uma forte presença na Guiné-Bissau, transformamos ideias em realidade digital.
              Trabalhamos com marcas que têm grandes ambições e construímos experiências que
              fazem a diferença.
            </p>
            <p>
              <strong className="text-yellow">Missão:</strong> Entregar resultados excepcionais
              através de soluções criativas e tecnológicas que impulsionam o crescimento dos
              nossos clientes.
            </p>
            <p>
              <strong className="text-yellow">Visão:</strong> Ser referência no campo da tecnologia
              e design na Guiné-Bissau e na sub-região da África Ocidental.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Team */}
      <TeamSection />

      {/* Values */}
      <section className="py-20 px-6 md:px-16 bg-black" data-header-color="yellow">
        <div className="max-w-7xl mx-auto">
          <h2 className="slide-in-heading text-[clamp(36px,5vw,72px)] font-display uppercase text-white leading-tight mb-12">
            Valores
          </h2>

          <div className="stagger-container">
            <ul className="flex flex-col gap-6">
              {values.map((value) => (
                <li
                  key={value}
                  className="stagger-item flex items-center gap-4 text-2xl md:text-3xl font-display uppercase text-white/80"
                >
                  <span className="w-3 h-3 bg-yellow flex-shrink-0" />
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
