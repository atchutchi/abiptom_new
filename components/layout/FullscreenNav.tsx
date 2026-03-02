'use client'

import { useEffect, useRef } from 'react'
import { Facebook, Instagram, Linkedin, Youtube, Music2 } from 'lucide-react'
import { navLinks, contactInfo, socialLinks } from '@/lib/data'
import FlowingMenu from '@/components/reactbits/FlowingMenu'

interface FullscreenNavProps {
  isOpen: boolean
  onClose: () => void
}

const socialIcons: Record<string, React.ElementType> = {
  facebook: Facebook, instagram: Instagram, linkedin: Linkedin, youtube: Youtube, music2: Music2,
}

export default function FullscreenNav({ isOpen, onClose }: FullscreenNavProps) {
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!menuRef.current) return
    if (isOpen) {
      menuRef.current.style.transform = 'translateX(0)'
    } else {
      menuRef.current.style.transform = 'translateX(100%)'
    }
  }, [isOpen])

  const menuItems = navLinks.map((link) => ({
    href: link.href,
    label: link.label,
    onClick: onClose,
  }))

  return (
    <div
      ref={menuRef}
      className="fixed inset-0 bg-black z-40 translate-x-full transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
    >
      <div className="flex flex-col justify-between h-full pt-24 pb-12 px-8 md:px-16">
        <FlowingMenu items={menuItems} />

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
                  <a key={social.platform} href={social.url} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-yellow transition-colors duration-200" aria-label={social.platform}>
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
