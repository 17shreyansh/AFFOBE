"use client"

import React, { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { IoLogoInstagram, IoLogoFacebook, IoLogoYoutube, IoLogoLinkedin } from 'react-icons/io5'
import { Button } from '@/components/ui/button'
import { motion, useInView } from 'framer-motion'
import dynamic from 'next/dynamic'

const Lightfall = dynamic(() => import('@/components/Lightfall'), { ssr: false })

export function Footer() {
  const bottomRef = useRef<HTMLDivElement>(null)
  // Trigger exactly when the absolute bottom of the footer comes into view
  const isInView = useInView(bottomRef, { once: true, margin: "0px" })

  return (
    <footer 
      className="text-primary-foreground min-h-screen md:min-h-0 md:h-[90vh] w-full rounded-t-[3rem] mt-24 flex flex-col justify-between overflow-hidden relative z-0"
    >
      <div className="absolute inset-0 z-[-1] pointer-events-auto">
        <Lightfall
          colors={['#386bf5', '#386bf5', '#386bf5']}
          backgroundColor="#0a192f"
          speed={0.5}
          streakCount={2}
          streakWidth={1}
          streakLength={1}
          glow={1}
          density={0.6}
          twinkle={1}
          zoom={3}
          backgroundGlow={1}
          opacity={1}
          mouseInteraction
          mouseStrength={0.5}
          mouseRadius={1}
        />
      </div>
      
      <div className="w-full pt-16 md:pt-8 px-4 md:px-8 relative z-10 pointer-events-none">
        <div className="overflow-hidden mb-8 md:mb-6 flex justify-center">
          <h1 className="text-[11vw] sm:text-[10vw] md:text-[9vw] leading-none font-heading font-black tracking-tighter text-center uppercase whitespace-nowrap flex text-white">
            {"Let's Start".split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ y: "-100%", rotate: -10, opacity: 0 }}
                animate={isInView ? { y: 0, rotate: 0, opacity: 1 } : { y: "-100%", rotate: -10, opacity: 0 }}
                transition={{ 
                  duration: 1, 
                  ease: [0.16, 1, 0.3, 1] as [number, number, number, number], 
                  delay: index * 0.05 
                }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h1>
        </div>
      </div>

      <div className="container flex-grow flex flex-col justify-center py-12 md:py-4 relative z-10 pointer-events-none text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pointer-events-auto">
          <div className="lg:col-span-5">
            <h2 className="text-2xl md:text-4xl font-heading font-bold leading-tight mb-4 md:mb-6">
              Ready to create something <br className="hidden md:block" /> extraordinary?
            </h2>
            <div className="flex flex-col gap-4 max-w-xs md:max-w-sm">
              <p className="text-sm md:text-base text-white/70 mb-2">
                Join our newsletter to stay up to date on features and releases.
              </p>
              <div className="flex gap-4 relative group">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-transparent border-b border-white/30 pb-2 text-base md:text-sm focus:outline-none focus:border-white transition-colors w-full peer placeholder:text-white/50 text-white"
                />
                <Button 
                  size="icon" 
                  className="rounded-full h-8 w-8 md:h-10 md:w-10 bg-white text-[#020817] hover:bg-white/90 absolute right-0 bottom-2 transition-transform group-hover:scale-110 shadow-md"
                >
                  <ArrowRight size={16} className="md:w-5 md:h-5" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 lg:col-start-8">
            <h4 className="text-xs md:text-sm font-bold mb-4 md:mb-6 text-white/50 uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-3 md:space-y-3">
              {['Home', 'Agency', 'Work', 'Services', 'Journal'].map((item) => (
                <li key={item} className="overflow-hidden">
                  <Link href={`/${item.toLowerCase()}`} className="group relative inline-block text-lg md:text-base font-medium hover:text-white transition-colors text-white/80">
                    <span className="relative z-10">{item}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 lg:col-start-11">
            <h4 className="text-xs md:text-sm font-bold mb-4 md:mb-6 text-white/50 uppercase tracking-widest">Socials</h4>
            <ul className="space-y-3 md:space-y-3">
              {[
                { name: 'Instagram', icon: IoLogoInstagram, href: '#' },
                { name: 'Facebook', icon: IoLogoFacebook, href: '#' },
                { name: 'YouTube', icon: IoLogoYoutube, href: '#' },
                { name: 'LinkedIn', icon: IoLogoLinkedin, href: '#' },
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="group relative inline-flex items-center gap-2 text-lg md:text-base font-medium hover:text-white transition-colors text-white/80 pb-1">
                    <item.icon className="w-5 h-5" />
                    <span className="relative z-10">{item.name}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="container py-6 md:py-6 border-t border-white/20 relative z-10 pointer-events-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-xs md:text-sm text-white/60 text-center md:text-left">
          <p className="font-medium text-white/80">© 2026 AFFOBE. All rights reserved.</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
        {/* Invisible element at the very bottom to trigger the animation */}
        <div ref={bottomRef} className="absolute bottom-0 left-0 w-full h-1" aria-hidden="true" />
      </div>
    </footer>
  )
}
