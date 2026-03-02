'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { teamMembers } from '@/lib/data'
import { User } from 'lucide-react'

export default function TeamSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const cards = containerRef.current.querySelectorAll('.team-card')
    gsap.fromTo(
      cards,
      { x: 280, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          once: true,
        },
      }
    )
  }, [])

  return (
    <section className="py-20 px-6 md:px-16 bg-white-off">
      <div className="max-w-7xl mx-auto">
        <h2 className="slide-in-heading text-[clamp(36px,5vw,72px)] font-display uppercase text-black leading-tight mb-12">
          Equipa
        </h2>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div key={member.name} className="team-card bg-white p-8 group">
              <div className="w-20 h-20 rounded-full bg-gray-light flex items-center justify-center mb-6">
                <User size={32} className="text-gray-dark" />
              </div>
              <h3 className="text-lg font-black uppercase text-black">
                {member.name}
              </h3>
              <div className="flex items-center gap-3 mt-2">
                <span className="h-px w-8 bg-yellow flex-shrink-0" />
                <span className="text-xs uppercase tracking-widest text-gray-dark">
                  {member.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
