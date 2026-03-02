'use client'

import Image from 'next/image'
import TiltedCard from '@/components/reactbits/TiltedCard'
import FadeContent from '@/components/reactbits/FadeContent'
import ScrollFloat from '@/components/reactbits/ScrollFloat'
import { teamMembers } from '@/lib/data'

function getInitials(name: string): string {
  return name.split(' ').filter((_, i, arr) => i === 0 || i === arr.length - 1).map((w) => w[0]).join('').toUpperCase()
}

export default function TeamSection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-16 bg-white-off" data-header-color="black">
      <div className="max-w-7xl mx-auto">
        <ScrollFloat className="mb-16">
          <h2 className="text-[clamp(36px,5vw,72px)] font-display uppercase text-black leading-tight">
            A Nossa <span className="text-yellow-dark">Equipa</span>
          </h2>
        </ScrollFloat>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <FadeContent key={member.name} delay={index * 0.1} direction="up">
              <TiltedCard className="bg-white overflow-hidden h-full">
                <div className="p-8 md:p-10">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-8 relative">
                    {member.image ? (
                      <Image src={member.image} alt={member.name} fill className="object-cover" sizes="96px" />
                    ) : (
                      <div className="w-full h-full bg-black flex items-center justify-center">
                        <span className="text-xl font-display text-yellow">{getInitials(member.name)}</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-black uppercase text-black leading-tight">{member.name}</h3>
                  <div className="flex items-center gap-3 mt-3">
                    <span className="h-px w-10 bg-yellow shrink-0" />
                    <span className="text-xs uppercase tracking-[0.12em] text-gray-dark font-semibold">{member.role}</span>
                  </div>
                </div>
              </TiltedCard>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  )
}
