'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import FadeContent from '@/components/reactbits/FadeContent'
import ScrollFloat from '@/components/reactbits/ScrollFloat'
import { blogPosts } from '@/lib/data'
import NewsCard from './NewsCard'

interface NewsGridProps {
  limit?: number
  showLink?: boolean
}

export default function NewsGrid({ limit = 3, showLink = true }: NewsGridProps) {
  const posts = blogPosts.slice(0, limit)

  return (
    <section className="bg-black-soft py-20 px-6 md:px-16" data-header-color="yellow">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <ScrollFloat>
            <h2 className="text-[clamp(48px,6vw,80px)] font-display uppercase leading-none text-white">Blog</h2>
          </ScrollFloat>
          {showLink && (
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-yellow hover:text-yellow-hover transition-colors">
              Ver todos <ArrowRight size={16} />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post, index) => (
            <FadeContent key={post.slug} delay={index * 0.15} direction="up">
              <NewsCard post={post} />
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  )
}
