'use client'

import { useRef, useState } from 'react'

interface TiltedCardProps {
  children: React.ReactNode
  className?: string
  maxTilt?: number
  scale?: number
}

export default function TiltedCard({
  children,
  className = '',
  maxTilt = 10,
  scale = 1.02,
}: TiltedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState('')

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const rotateX = (0.5 - y) * maxTilt
    const rotateY = (x - 0.5) * maxTilt
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`)
  }

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)')
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-200 ease-out ${className}`}
      style={{ transform, transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  )
}
