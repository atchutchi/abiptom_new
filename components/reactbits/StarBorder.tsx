'use client'

interface StarBorderProps {
  children: React.ReactNode
  className?: string
  color?: string
  speed?: string
}

export default function StarBorder({
  children,
  className = '',
  color = '#F5C518',
  speed = '6s',
}: StarBorderProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      <div
        className="absolute inset-0 overflow-hidden rounded-[inherit]"
        style={{
          background: `linear-gradient(${color}, transparent) border-box`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px',
        }}
      >
        <div
          className="absolute inset-[-100%] animate-spin"
          style={{
            background: `conic-gradient(from 0deg, transparent 0%, ${color} 10%, transparent 20%)`,
            animationDuration: speed,
          }}
        />
      </div>
      <div className="relative">{children}</div>
    </div>
  )
}
