import HeroSection from '@/components/hero/HeroSection'
import BigStatement from '@/components/sections/BigStatement'
import WorkGrid from '@/components/sections/WorkGrid'
import ClientLogos from '@/components/sections/ClientLogos'
import NewsGrid from '@/components/sections/NewsGrid'
import CTASection from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BigStatement />
      <WorkGrid limit={6} showLink />
      <ClientLogos />
      <NewsGrid limit={3} showLink />
      <CTASection />
    </>
  )
}
