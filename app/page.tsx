import { SiteHeader } from '@/components/site-header'
import { HeroSlider } from '@/components/hero-slider'
import { Highlights } from '@/components/highlights'
import { AboutSection } from '@/components/about-section'
import { ProgramsSection } from '@/components/programs-section'
import { StatsSection } from '@/components/stats-section'
import { NoticesSection } from '@/components/notices-section'
import { SiteFooter } from '@/components/site-footer'

export default function HomePage() {
  return (
    <main id="top" className="min-h-screen bg-background">
      <SiteHeader />
      <HeroSlider />
      <Highlights />
      <AboutSection />
      <ProgramsSection />
      <StatsSection />
      <NoticesSection />
      <SiteFooter />
    </main>
  )
}
