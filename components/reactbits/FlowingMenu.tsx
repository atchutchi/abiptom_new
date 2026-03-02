'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

interface FlowingMenuItem {
  href: string
  label: string
  onClick?: () => void
}

interface FlowingMenuProps {
  items: FlowingMenuItem[]
  className?: string
}

export default function FlowingMenu({ items, className = '' }: FlowingMenuProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <nav className={className}>
      <ul className="flex flex-col">
        {items.map((item, index) => (
          <li
            key={item.href}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative overflow-hidden"
          >
            <Link
              href={item.href}
              onClick={item.onClick}
              className="block relative"
            >
              <motion.div
                className="py-2"
                animate={{
                  x: hoveredIndex === index ? 20 : 0,
                  skewX: hoveredIndex === index ? -2 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <span className={`text-5xl md:text-7xl lg:text-8xl font-display uppercase transition-colors duration-200 ${
                  hoveredIndex === index ? 'text-yellow' : 'text-white'
                }`}>
                  {item.label}
                </span>
              </motion.div>

              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute inset-0 bg-white/5"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    style={{ originX: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
