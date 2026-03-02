import { MapPin, Phone, Mail } from 'lucide-react'
import { contactInfo } from '@/lib/data'
import ContactForm from '@/components/contact/ContactForm'
import BlurText from '@/components/reactbits/BlurText'
import FadeContent from '@/components/reactbits/FadeContent'
import DecryptedText from '@/components/reactbits/DecryptedText'

export default function ContactoPage() {
  return (
    <>
      <section className="min-h-[50vh] flex items-end bg-black px-6 md:px-16 pb-16 pt-32">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-[clamp(60px,10vw,160px)] font-display uppercase leading-none text-white">Contacto</h1>
          <div className="mt-4">
            <BlurText text="Vamos trabalhar juntos" className="text-xl text-white/50" delay={80} animateBy="words" />
          </div>
        </div>
      </section>

      <section className="bg-black-soft px-6 md:px-16 py-20" data-header-color="yellow">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeContent direction="left">
            <h2 className="text-3xl font-display uppercase text-yellow mb-8">
              <DecryptedText text="Vamos conversar" speed={40} trigger="view" className="font-display text-3xl" />
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-12">
              Tem um projecto em mente? Quer saber como podemos ajudar o seu negócio a crescer?
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-yellow/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-yellow" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.15em] text-gray-dark mb-1">Endereço</h4>
                  <p className="text-white/80">{contactInfo.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-yellow/10 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-yellow" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.15em] text-gray-dark mb-1">Telefone</h4>
                  {contactInfo.phones.map((phone) => (
                    <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="block text-white/80 hover:text-yellow transition-colors">{phone}</a>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-yellow/10 flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-yellow" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.15em] text-gray-dark mb-1">Email</h4>
                  <a href={`mailto:${contactInfo.email}`} className="text-white/80 hover:text-yellow transition-colors">{contactInfo.email}</a>
                </div>
              </div>
            </div>
          </FadeContent>

          <FadeContent direction="right" delay={0.2}>
            <ContactForm />
          </FadeContent>
        </div>
      </section>
    </>
  )
}
