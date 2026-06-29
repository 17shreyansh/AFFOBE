import React from 'react'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { CTA } from '@/components/sections/cta'
import { ContactInfo } from '@/components/sections/contact/contact-info'
import { ContactForm } from '@/components/sections/contact/contact-form'

export const metadata = {
  title: 'Contact Us - AFFOBE',
  description: 'Get in touch with the AFFOBE team.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar alwaysSolid={true} />
      
      <div className="w-full pt-32 pb-24 md:pt-48 md:pb-32">
        <div className="container max-w-7xl mx-auto">
          {/* Simple 2-column layout: Form on left, Info on right */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
