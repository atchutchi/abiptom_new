import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Youtube, Music2, Mail, Phone, MapPin } from 'lucide-react'
import { socialLinks, contactInfo } from '@/lib/data'

const socialIcons: Record<string, React.ElementType> = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
  music2: Music2,
}

const quickLinks = [
  { href: '/', label: 'Início' },
  { href: '/quem-somos', label: 'Quem Somos' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/portfolio', label: 'Portfólio' },
  { href: '/blog', label: 'Blog' },
  { href: '/contacto', label: 'Contacto' },
]

const serviceLinks = [
  'Design Gráfico',
  'Desenvolvimento Web',
  'Social Media',
  'Produção de Vídeo',
  'Fotografia',
  'Animação 2D',
]

export default function SiteFooter() {
  return (
    <footer className="bg-black">
      <div className="h-px bg-yellow mx-6 md:mx-16" />

      <div className="px-6 md:px-16 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div>
            <span className="text-3xl font-display tracking-wider text-yellow">ABIPTOM</span>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Transformamos ideias em realidade digital. Marketing, Design e Tecnologia ao serviço do seu negócio.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.icon]
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-yellow transition-colors duration-200"
                    aria-label={social.platform}
                  >
                    {Icon && <Icon size={18} />}
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-yellow font-semibold mb-6">Links Rápidos</h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-yellow transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-yellow font-semibold mb-6">Serviços</h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <span className="text-sm text-white/60">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-yellow font-semibold mb-6">Contacto</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-yellow mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/60">{contactInfo.address}</span>
              </div>
              {contactInfo.phones.map((phone) => (
                <div key={phone} className="flex items-center gap-3">
                  <Phone size={16} className="text-yellow flex-shrink-0" />
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-sm text-white/60 hover:text-yellow transition-colors duration-200">
                    {phone}
                  </a>
                </div>
              ))}
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-yellow flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="text-sm text-white/60 hover:text-yellow transition-colors duration-200">
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-px bg-white/10 mx-6 md:mx-16" />
      <div className="px-6 md:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/40">&copy; {new Date().getFullYear()} ABIPTOM, SARL. Todos os direitos reservados.</p>
        <p className="text-xs text-white/40">Bissau, Guiné-Bissau</p>
      </div>
    </footer>
  )
}
