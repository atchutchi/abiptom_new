import PrimaryButton from '@/components/ui/PrimaryButton'

export default function CTASection() {
  return (
    <section
      className="py-32 px-6 md:px-16 bg-yellow text-center"
      data-header-color="black"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-[clamp(36px,5vw,72px)] font-display uppercase leading-tight text-black">
          Pronto para transformar a sua marca?
        </h2>
        <p className="mt-6 text-lg text-black/70 leading-relaxed">
          Vamos trabalhar juntos para criar algo extraordinário. A ABIPTOM está pronta para elevar o seu negócio.
        </p>
        <div className="mt-10">
          <PrimaryButton href="/contacto" className="bg-black text-white hover:bg-black-soft">
            Fale Connosco
          </PrimaryButton>
        </div>
      </div>
    </section>
  )
}
