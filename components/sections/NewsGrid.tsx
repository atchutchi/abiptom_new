'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { blogPosts } from '@/lib/data'
import NewsCard from './NewsCard'
import AnimatedSection from '@/components/ui/AnimatedSection'

interface NewsGridProps {
  limit?: number
  showLink?: boolean
}

export default function NewsGrid({ limit = 3, showLink = true }: NewsGridProps) {
  const posts = blogPosts.slice(0, limit)
  const firstPost = posts[0]
  const restPosts = posts.slice(1)

  return (
    <AnimatedSection
      className="bg-black py-20 px-6 md:px-16"
      dataHeaderColor="yellow"
      animation="fade-in"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-[clamp(48px,6vw,80px)] font-display uppercase leading-none text-white">
            Blog
          </h2>
          {showLink && (
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white hover:text-yellow transition-colors"
            >
              Ver todos
              <ArrowRight size={16} />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0.5 bg-black-card">
          {firstPost && (
            <div className="lg:col-span-2 bg-white-off">
              <NewsCard post={firstPost} />
            </div>
          )}
          {restPosts.map((post) => (
            <div key={post.slug} className="bg-white-off">
              <NewsCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
