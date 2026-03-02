import Link from 'next/link'
import StarBorder from '@/components/reactbits/StarBorder'

export default function CTASection() {
  return (
    <section className="py-32 px-6 md:px-16 bg-yellow text-center" data-header-color="black">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-[clamp(36px,5vw,72px)] font-display uppercase leading-tight text-black">
          Pronto para transformar a sua marca?
        </h2>
        <p className="mt-6 text-lg text-black/70 leading-relaxed">
          Vamos trabalhar juntos para criar algo extraordinário.
        </p>
        <div className="mt-10">
          <StarBorder color="#0A0A0A" speed="4s">
            <Link href="/contacto" className="inline-flex items-center justify-center px-10 py-5 font-bold uppercase tracking-wider text-sm bg-black text-white hover:bg-black-soft transition-colors">
              Fale Connosco
            </Link>
          </StarBorder>
        </div>
      </div>
    </section>
  )
}
