import dynamic from 'next/dynamic'
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { AnimatedContact } from "@/components/sections/contact/animated-contact"

const ContactFaq = dynamic(() => import("@/components/sections/contact/contact-faq").then(mod => mod.ContactFaq), { ssr: true })

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      {/* The new immersive, animated contact section acts as the Hero and Form combined */}
      <div className="flex-1 mt-20">
        <AnimatedContact />
      </div>

      <ContactFaq />
      
      <Footer />
    </main>
  )
}
