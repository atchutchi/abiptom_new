'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Facebook, Instagram, Linkedin, Youtube, Music2 } from 'lucide-react'
import { navLinks, contactInfo, socialLinks } from '@/lib/data'
import { gsap } from '@/lib/gsap'

interface FullscreenNavProps {
  isOpen: boolean
  onClose: () => void
}

const socialIcons: Record<string, React.ElementType> = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
  music2: Music2,
}

export default function FullscreenNav({ isOpen, onClose }: FullscreenNavProps) {
  const menuRef = useRef<HTMLDivElement>(null)
  const linksRef = useRef<HTMLUListElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    if (!menuRef.current || !linksRef.current) return

    const menu = menuRef.current
    const links = linksRef.current.querySelectorAll('li')

    if (isOpen) {
      gsap.to(menu, { x: 0, duration: 0.6, ease: 'power3.inOut' })
      gsap.fromTo(
        links,
        { x: 80, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.08, duration: 0.5, ease: 'power3.out', delay: 0.3 }
      )
    } else {
      gsap.to(menu, { x: '100%', duration: 0.5, ease: 'power3.inOut' })
    }
  }, [isOpen])

  return (
    <div
      ref={menuRef}
      className="fixed inset-0 bg-black z-40 translate-x-full will-change-transform"
    >
      <div className="flex flex-col justify-between h-full pt-24 pb-12 px-8 md:px-16">
        <nav>
          <ul ref={linksRef} className="flex flex-col gap-2 md:gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className={`block text-5xl md:text-7xl lg:text-8xl font-display uppercase transition-colors duration-200 ${
                    pathname === link.href ? 'text-yellow' : 'text-white hover:text-yellow'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 mt-auto pt-8">
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-gray-dark mb-3">Contacto</h4>
            <p className="text-sm text-white/80">{contactInfo.address}</p>
            {contactInfo.phones.map((phone) => (
              <p key={phone} className="text-sm text-white/80">{phone}</p>
            ))}
            <p className="text-sm text-white/80">{contactInfo.email}</p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-gray-dark mb-3">Redes Sociais</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.icon]
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-yellow transition-colors duration-200"
                    aria-label={social.platform}
                  >
                    {Icon && <Icon size={20} />}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
