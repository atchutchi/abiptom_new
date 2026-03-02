'use client'

import { use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { blogPosts } from '@/lib/data'

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <h1 className="text-4xl font-display text-white mb-4">Artigo não encontrado</h1>
          <Link href="/blog" className="text-yellow hover:text-yellow-hover transition-colors">
            Voltar ao Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white" data-header-color="black">
      {/* Back link */}
      <div className="px-6 md:px-16 pt-28 pb-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-dark hover:text-black transition-colors"
        >
          <ArrowLeft size={16} />
          Voltar ao Blog
        </Link>
      </div>

      {/* Hero Image */}
      <div className="px-6 md:px-16">
        <div className="relative aspect-video max-h-[60vh] w-full overflow-hidden bg-gray-light">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      </div>

      {/* Content */}
      <article className="px-6 md:px-16 py-16">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-gray-dark">{post.date}</span>
          <h1 className="text-[clamp(28px,4vw,48px)] font-black uppercase leading-tight text-black mt-4">
            {post.title}
          </h1>
          <div className="h-px w-16 bg-yellow my-8" />
          <div className="text-lg text-gray-deeper leading-relaxed">
            <p>{post.excerpt}</p>
          </div>
        </div>
      </article>
    </div>
  )
}
