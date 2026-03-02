'use client'

import Image from 'next/image'

interface LogoItem {
  src: string
  alt: string
}

interface LogoLoopProps {
  items: LogoItem[]
  speed?: number
  direction?: 'left' | 'right'
  pauseOnHover?: boolean
  className?: string
}

export default function LogoLoop({
  items,
  speed = 30,
  direction = 'left',
  pauseOnHover = true,
  className = '',
}: LogoLoopProps) {
  const doubled = [...items, ...items]
  const animationDirection = direction === 'left' ? 'normal' : 'reverse'

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={`flex items-center gap-12 ${pauseOnHover ? 'hover:[animation-play-state:paused]' : ''}`}
        style={{
          animation: `logoScroll ${speed}s linear infinite`,
          animationDirection,
          width: 'max-content',
        }}
      >
        {doubled.map((item, index) => (
          <div
            key={`${item.alt}-${index}`}
            className="flex items-center justify-center shrink-0 w-24 h-16 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={96}
              height={64}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes logoScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
