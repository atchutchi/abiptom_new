import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { BlogPost } from '@/types'

interface NewsCardProps {
  post: BlogPost
}

export default function NewsCard({ post }: NewsCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`flex overflow-hidden group ${
        post.isHorizontal ? 'flex-col md:flex-row' : 'flex-col'
      }`}
    >
      <div className={`overflow-hidden flex-shrink-0 ${
        post.isHorizontal ? 'aspect-video md:w-2/5' : 'aspect-video'
      }`}>
        <div className="relative w-full h-full">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
      </div>
      <div className="p-4 md:p-6 flex flex-col justify-center">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-bold text-base leading-tight text-black group-hover:text-yellow-dark transition-colors">
            {post.title}
          </h3>
          <ArrowUpRight size={18} className="flex-shrink-0 text-gray-dark mt-0.5" />
        </div>
        <span className="text-xs text-gray-dark mt-2 block">{post.date}</span>
        <p className="text-sm text-gray-deeper leading-relaxed mt-2 line-clamp-2">{post.excerpt}</p>
      </div>
    </Link>
  )
}
