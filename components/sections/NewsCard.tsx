import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import GlareHover from '@/components/reactbits/GlareHover'
import type { BlogPost } from '@/types'

interface NewsCardProps {
  post: BlogPost
}

export default function NewsCard({ post }: NewsCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className={`block ${post.isHorizontal ? 'md:col-span-2' : ''}`}>
      <GlareHover className="bg-black-card border border-white/5 hover:border-yellow/20 transition-colors h-full">
        <div className={`flex ${post.isHorizontal ? 'flex-col md:flex-row' : 'flex-col'}`}>
          <div className={`overflow-hidden relative ${post.isHorizontal ? 'aspect-video md:w-2/5 md:aspect-auto md:min-h-[200px]' : 'aspect-video'}`}>
            <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-500 hover:scale-105" sizes="400px" />
          </div>
          <div className="p-4 md:p-6 flex flex-col justify-center">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-bold text-base leading-tight text-white">{post.title}</h3>
              <ArrowUpRight size={18} className="shrink-0 text-yellow mt-0.5" />
            </div>
            <span className="text-xs text-gray-dark mt-2 block">{post.date}</span>
            <p className="text-sm text-white/50 leading-relaxed mt-2 line-clamp-2">{post.excerpt}</p>
          </div>
        </div>
      </GlareHover>
    </Link>
  )
}
