'use client'

interface AuroraProps {
  className?: string
  colors?: string[]
}

export default function Aurora({
  className = '',
  colors = ['#F5C518', '#E6B800', '#C9A000'],
}: AuroraProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-black" />
      {colors.map((color, i) => (
        <div
          key={i}
          className="absolute rounded-full blur-[120px] opacity-20 animate-pulse"
          style={{
            background: color,
            width: `${40 + i * 15}%`,
            height: `${40 + i * 15}%`,
            left: `${10 + i * 20}%`,
            top: `${10 + i * 15}%`,
            animationDuration: `${4 + i * 2}s`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
    </div>
  )
}
