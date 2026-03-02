'use client'

import Aurora from '@/components/reactbits/Aurora'
import BlurText from '@/components/reactbits/BlurText'

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black" data-header-color="transparent">
      <Aurora colors={['#F5C518', '#E6B800', '#C9A000']} />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <h1 className="text-[clamp(80px,14vw,220px)] font-display uppercase leading-none text-yellow tracking-wider">
          ABIPTOM
        </h1>

        <div className="mt-6">
          <BlurText
            text="Marketing · Design · Tecnologia"
            className="text-lg md:text-2xl text-white/80 font-light tracking-wider justify-center"
            delay={80}
            animateBy="words"
          />
        </div>

        <div className="mt-4">
          <BlurText
            text="Bissau, Guiné-Bissau"
            className="text-sm text-white/40 uppercase tracking-[0.3em] justify-center"
            delay={120}
            animateBy="letters"
          />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-[0.2em] text-white/40">Scroll</span>
        <div className="w-px h-8 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-yellow animate-[scrollLine_1.5s_ease-in-out_infinite]" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(0); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  )
}
