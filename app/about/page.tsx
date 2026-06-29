import React from 'react'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { CTA } from '@/components/sections/cta'
import { AboutHero } from '@/components/sections/about/about-hero'
import { CompanyStory } from '@/components/sections/about/company-story'
import { MissionVision } from '@/components/sections/about/mission-vision'
import { OurJourney } from '@/components/sections/about/our-journey'
import { WhyChooseUs } from '@/components/sections/about/why-choose-us'
import { OurValues } from '@/components/sections/about/our-values'
import { TeamPreview } from '@/components/sections/about/team-preview'
import { CompanyStats } from '@/components/sections/about/company-stats'

export const metadata = {
  title: 'About Us - AFFOBE',
  description: 'Learn more about AFFOBE, our mission, vision, and the team behind our premium digital experiences.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar alwaysSolid={true} />
      
      <div className="w-full">
        <AboutHero />
        <CompanyStory />
        <MissionVision />
        <CompanyStats />
        <OurJourney />
        <WhyChooseUs />
        <OurValues />
        <TeamPreview />
        <CTA />
      </div>

      <Footer />
    </main>
  )
}
