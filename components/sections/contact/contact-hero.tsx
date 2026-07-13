"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export function ContactHero() {
  return (
    <section className="relative w-full bg-background pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden border-b border-primary/10">
      <div className="container max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-8 bg-primary/5 w-fit">
              Contact Us
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-heading font-black text-foreground leading-[1] tracking-tighter mb-8">
              Let&apos;s Get in <br />
              <span className="text-primary">Touch.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-md font-light">
              Whether you have a specific project in mind, need expert technical consulting, or just want to say hello, our team is ready to listen and help you achieve your goals.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="relative w-full aspect-square lg:aspect-[4/3] rounded-[2rem] overflow-hidden bg-slate-100"
          >
            <Image 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" 
              alt="Team collaboration" 
              fill
              className="w-full h-full object-cover"
            />
            {/* Very subtle dark overlay so it doesn't clash with navbar if it scrolls over */}
            <div className="absolute inset-0 bg-black/5" />
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
