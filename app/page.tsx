import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Services } from '@/components/sections/services'
import { FeaturedWork } from '@/components/sections/featured-work'
import { Clients } from '@/components/sections/clients'
import { FAQ } from '@/components/sections/faq'
import { CTA } from '@/components/sections/cta'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      
      <Hero />
      <About />
      <Services />
      <FeaturedWork />
      <Clients />
      <FAQ />
      <CTA />
      
      <Footer />
    </main>
  )
}
