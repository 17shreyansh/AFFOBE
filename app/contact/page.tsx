import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { AnimatedContact } from "@/components/sections/contact/animated-contact"
import { ContactFaq } from "@/components/sections/contact/contact-faq"

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
