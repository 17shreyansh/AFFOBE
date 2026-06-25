"use client"

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-24 pb-12 rounded-t-[3rem] mt-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <h2 className="text-fluid-3xl font-heading font-bold leading-tight mb-8">
              Let's build something <br/> extraordinary.
            </h2>
            <div className="flex gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-transparent border-b border-background/30 pb-2 text-lg focus:outline-none focus:border-background transition-colors w-full max-w-sm"
              />
              <Button variant="outline" className="rounded-full border-background text-background hover:bg-background hover:text-foreground">
                <ArrowRight size={20} />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Agency', 'Work', 'Services', 'Journal'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Socials</h4>
            <ul className="space-y-4">
              {['Instagram', 'Twitter', 'LinkedIn', 'Behance', 'Dribbble'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
          <p>© 2026 AGENCY. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-background transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-background transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
