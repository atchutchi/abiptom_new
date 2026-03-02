import Aurora from '@/components/reactbits/Aurora'
import BlurText from '@/components/reactbits/BlurText'
import ServicesSection from '@/components/sections/ServicesSection'
import StarBorder from '@/components/reactbits/StarBorder'
import CTASection from '@/components/sections/CTASection'
import FadeContent from '@/components/reactbits/FadeContent'

const packages = [
  { name: 'Básico', features: ['4 posts/mês', '1 plataforma', 'Relatório mensal básico', 'Design simples'] },
  { name: 'Silver', features: ['8 posts/mês', '2 plataformas', 'Relatório mensal detalhado', 'Design personalizado', 'Stories semanais'] },
  { name: 'Gold', features: ['16 posts/mês', '3 plataformas', 'Relatório bi-semanal', 'Design premium', 'Stories diários', 'Gestão de comentários'], highlighted: true },
  { name: 'Platinum', features: ['Posts ilimitados', 'Todas as plataformas', 'Relatório semanal', 'Design exclusivo', 'Stories diários', 'Gestão completa', 'Campanhas pagas'] },
]

export default function ServicosPage() {
  return (
    <>
      <section className="relative min-h-[70vh] flex items-end bg-black overflow-hidden px-6 md:px-16 pb-16 pt-32">
        <Aurora colors={['#F5C518', '#C9A000', '#E6B800']} />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <h1 className="text-[clamp(60px,10vw,160px)] font-display uppercase leading-none text-white">
            O Que <span className="text-yellow">Fazemos</span>
          </h1>
          <div className="mt-6">
            <BlurText text="Soluções completas de marketing digital, design e tecnologia" className="text-lg text-white/60 max-w-2xl" delay={60} animateBy="words" />
          </div>
        </div>
      </section>

      <ServicesSection />

      <section className="py-20 px-6 md:px-16 bg-black" data-header-color="yellow">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[clamp(36px,5vw,72px)] font-display uppercase text-white leading-tight mb-4">Pacotes Social Media</h2>
          <p className="text-white/60 mb-12 max-w-xl">Escolha o pacote ideal para a gestão das suas redes sociais.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {packages.map((pkg, index) => (
              <FadeContent key={pkg.name} delay={index * 0.1} direction="up">
                {pkg.highlighted ? (
                  <StarBorder className="h-full">
                    <div className="p-8 border border-yellow bg-yellow/5 h-full">
                      <h3 className="text-2xl font-display uppercase mb-6 text-yellow">{pkg.name}</h3>
                      <ul className="flex flex-col gap-3 mb-8">
                        {pkg.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                            <span className="w-1.5 h-1.5 bg-yellow shrink-0" />{f}
                          </li>
                        ))}
                      </ul>
                      <span className="text-xs uppercase tracking-wider text-gray-dark">Consultar preço</span>
                    </div>
                  </StarBorder>
                ) : (
                  <div className="p-8 border border-white/10 hover:border-yellow/30 transition-colors h-full">
                    <h3 className="text-2xl font-display uppercase mb-6 text-white">{pkg.name}</h3>
                    <ul className="flex flex-col gap-3 mb-8">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                          <span className="w-1.5 h-1.5 bg-yellow shrink-0" />{f}
                        </li>
                      ))}
                    </ul>
                    <span className="text-xs uppercase tracking-wider text-gray-dark">Consultar preço</span>
                  </div>
                )}
              </FadeContent>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
