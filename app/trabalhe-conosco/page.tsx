import type { Metadata } from 'next'
import PrimaryButton from '@/components/ui/PrimaryButton'

export const metadata: Metadata = {
  title: 'Trabalhe Conosco',
  description:
    'Junte-se à equipa ABIPTOM. Estamos sempre à procura de talentos criativos e apaixonados por tecnologia.',
}

const benefits = [
  'Ambiente de trabalho criativo e colaborativo',
  'Projectos desafiantes e de impacto',
  'Oportunidades de crescimento profissional',
  'Equipa multicultural e diversa',
  'Flexibilidade e equilíbrio trabalho-vida',
]

const openings = [
  {
    title: 'Designer Gráfico',
    type: 'Tempo Integral',
    description: 'Procuramos um designer criativo com experiência em branding, social media e materiais impressos.',
  },
  {
    title: 'Desenvolvedor Web Frontend',
    type: 'Tempo Integral',
    description: 'Experiência com React, Next.js e Tailwind CSS para criar experiências web modernas.',
  },
  {
    title: 'Gestor de Social Media',
    type: 'Tempo Integral',
    description: 'Gestão de conteúdo e estratégia de redes sociais para clientes diversos.',
  },
]

export default function TrabalheConoscoPage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[70vh] flex items-end bg-black px-6 md:px-16 pb-16 pt-32">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-[clamp(48px,8vw,120px)] font-display uppercase leading-none text-white">
            Trabalhe <span className="text-yellow">Conosco</span>
          </h1>
          <p className="mt-6 text-lg text-white/60 max-w-2xl">
            Junte-se à equipa que está a transformar o panorama digital da Guiné-Bissau.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-black-soft py-20 px-6 md:px-16" data-header-color="yellow">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[clamp(36px,5vw,72px)] font-display uppercase text-white leading-tight mb-12">
            Porquê a ABIPTOM?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-4 p-6 border border-white/10">
                <span className="w-2 h-2 bg-yellow mt-2 flex-shrink-0" />
                <p className="text-white/80 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-white-off py-20 px-6 md:px-16" data-header-color="black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[clamp(36px,5vw,72px)] font-display uppercase text-black leading-tight mb-12">
            Vagas Abertas
          </h2>

          <div className="flex flex-col gap-4">
            {openings.map((opening) => (
              <div
                key={opening.title}
                className="bg-white p-8 border border-gray-light hover:border-yellow transition-colors group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-black uppercase text-black group-hover:text-yellow-dark transition-colors">
                      {opening.title}
                    </h3>
                    <span className="text-xs uppercase tracking-wider text-gray-dark mt-1 block">
                      {opening.type}
                    </span>
                    <p className="mt-3 text-gray-deeper">{opening.description}</p>
                  </div>
                  <PrimaryButton href="/contacto" className="flex-shrink-0">
                    Candidatar
                  </PrimaryButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
