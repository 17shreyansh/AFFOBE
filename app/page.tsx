import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Services } from '@/components/sections/services'
import { FeaturedWork } from '@/components/sections/featured-work'
import { Clients } from '@/components/sections/clients'
import { Team } from '@/components/sections/team'
import { Gallery } from '@/components/sections/gallery'
import { BlogPreview } from '@/components/sections/blog-preview'
import { Testimonials } from '@/components/sections/testimonials'
import { FAQ } from '@/components/sections/faq'
import { CTA } from '@/components/sections/cta'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      
      <Hero />
      <Clients />
      <About />
      <Services />
      <FeaturedWork />
      <Team />
      <Gallery />
      <BlogPreview />
      <FAQ />
      <CTA />
      <Testimonials />
      
      <Footer />
    </main>
  )
}
