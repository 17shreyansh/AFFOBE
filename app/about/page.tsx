import React from 'react'
import dynamic from 'next/dynamic'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { AboutHero } from '@/components/sections/about/about-hero'

// Lazy-load below-the-fold heavy components for massive initial JS payload reduction
const CompanyStory = dynamic(() => import('@/components/sections/about/company-story').then(mod => mod.CompanyStory), { ssr: true })
const MissionVision = dynamic(() => import('@/components/sections/about/mission-vision').then(mod => mod.MissionVision), { ssr: true })
const OurJourney = dynamic(() => import('@/components/sections/about/our-journey').then(mod => mod.OurJourney), { ssr: true })
const WhyChooseUs = dynamic(() => import('@/components/sections/about/why-choose-us').then(mod => mod.WhyChooseUs), { ssr: true })
const OurValues = dynamic(() => import('@/components/sections/about/our-values').then(mod => mod.OurValues), { ssr: true })
const TeamPreview = dynamic(() => import('@/components/sections/about/team-preview').then(mod => mod.TeamPreview), { ssr: true })
const CompanyStats = dynamic(() => import('@/components/sections/about/company-stats').then(mod => mod.CompanyStats), { ssr: true })
const CTA = dynamic(() => import('@/components/sections/cta').then(mod => mod.CTA), { ssr: true })

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
