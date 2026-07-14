import dynamic from 'next/dynamic'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import NewHero from '@/components/sections/NewHero'

const About = dynamic(() => import('@/components/sections/about').then(mod => mod.About), { ssr: true })
const Services = dynamic(() => import('@/components/sections/services').then(mod => mod.Services), { ssr: true })
const FeaturedWork = dynamic(() => import('@/components/sections/featured-work').then(mod => mod.FeaturedWork), { ssr: true })
const Clients = dynamic(() => import('@/components/sections/clients').then(mod => mod.Clients), { ssr: true })
const Team = dynamic(() => import('@/components/sections/team').then(mod => mod.Team), { ssr: true })
const Gallery = dynamic(() => import('@/components/sections/gallery').then(mod => mod.Gallery), { ssr: true })
const BlogPreview = dynamic(() => import('@/components/sections/blog-preview').then(mod => mod.BlogPreview), { ssr: true })
const Testimonials = dynamic(() => import('@/components/sections/testimonials').then(mod => mod.Testimonials), { ssr: true })
const FAQ = dynamic(() => import('@/components/sections/faq').then(mod => mod.FAQ), { ssr: true })
const CTA = dynamic(() => import('@/components/sections/cta').then(mod => mod.CTA), { ssr: true })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      
      <NewHero />
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
