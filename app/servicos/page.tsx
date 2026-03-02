import type { Metadata } from 'next'
import ServicesSection from '@/components/sections/ServicesSection'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Serviços',
  description:
    'Descubra os nossos serviços: Design Gráfico, Desenvolvimento Web, Social Media, Produção de Vídeo e muito mais.',
}

const packages = [
  {
    name: 'Básico',
    features: ['4 posts/mês', '1 plataforma', 'Relatório mensal básico', 'Design simples'],
  },
  {
    name: 'Silver',
    features: ['8 posts/mês', '2 plataformas', 'Relatório mensal detalhado', 'Design personalizado', 'Stories semanais'],
  },
  {
    name: 'Gold',
    features: ['16 posts/mês', '3 plataformas', 'Relatório bi-semanal', 'Design premium', 'Stories diários', 'Gestão de comentários'],
    highlighted: true,
  },
  {
    name: 'Platinum',
    features: ['Posts ilimitados', 'Todas as plataformas', 'Relatório semanal', 'Design exclusivo', 'Stories diários', 'Gestão completa', 'Campanhas pagas'],
  },
]

export default function ServicosPage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[70vh] flex items-end bg-black px-6 md:px-16 pb-16 pt-32">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-[clamp(60px,10vw,160px)] font-display uppercase leading-none text-white">
            O Que <span className="text-yellow">Fazemos</span>
          </h1>
          <p className="mt-6 text-lg text-white/60 max-w-2xl">
            Soluções completas de marketing digital, design e tecnologia para impulsionar o seu negócio.
          </p>
        </div>
      </section>

      <ServicesSection />

      {/* Social Media Packages */}
      <section className="py-20 px-6 md:px-16 bg-black" data-header-color="yellow">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[clamp(36px,5vw,72px)] font-display uppercase text-white leading-tight mb-4">
            Pacotes Social Media
          </h2>
          <p className="text-white/60 mb-12 max-w-xl">
            Escolha o pacote ideal para a gestão das suas redes sociais.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`p-8 border transition-all duration-300 ${
                  pkg.highlighted
                    ? 'border-yellow bg-yellow/5'
                    : 'border-white/10 hover:border-yellow/30'
                }`}
              >
                <h3 className={`text-2xl font-display uppercase mb-6 ${
                  pkg.highlighted ? 'text-yellow' : 'text-white'
                }`}>
                  {pkg.name}
                </h3>
                <ul className="flex flex-col gap-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 bg-yellow flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <span className="text-xs uppercase tracking-wider text-gray-dark">
                  Consultar preço
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
