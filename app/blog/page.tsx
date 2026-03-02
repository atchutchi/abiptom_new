import type { Metadata } from 'next'
import { blogPosts } from '@/lib/data'
import NewsCard from '@/components/sections/NewsCard'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Artigos, notícias e insights sobre marketing digital, design e tecnologia na Guiné-Bissau.',
}

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[70vh] flex items-end bg-black px-6 md:px-16 pb-16 pt-32">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-[clamp(80px,12vw,180px)] font-display uppercase leading-none text-white">
            Blog
          </h1>
          <p className="mt-6 text-lg text-white/60 max-w-2xl">
            Notícias, insights e artigos sobre marketing digital, design e tecnologia.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-white-off py-20 px-6 md:px-16" data-header-color="black">
        <div className="max-w-7xl mx-auto">
          {/* Featured Post */}
          {blogPosts[0] && (
            <div className="mb-12 bg-white">
              <NewsCard post={{ ...blogPosts[0], isHorizontal: true }} />
            </div>
          )}

          {/* Rest */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5">
            {blogPosts.slice(1).map((post) => (
              <div key={post.slug} className="bg-white">
                <NewsCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
