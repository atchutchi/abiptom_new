import HeroSection from '@/components/hero/HeroSection'
import BigStatement from '@/components/sections/BigStatement'
import WorkGrid from '@/components/sections/WorkGrid'
import NewsGrid from '@/components/sections/NewsGrid'
import CTASection from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="relative z-10">
        <BigStatement />
        <WorkGrid limit={6} showLink />
        <NewsGrid limit={3} showLink />
        <CTASection />
      </div>
    </>
  )
}
