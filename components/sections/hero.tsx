"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { MagneticButton } from '@/components/animations/magnetic-button'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section 
      ref={containerRef}
      className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-background"
    >
      {/* Background Noise/Texture could go here */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_100%)] pointer-events-none" />

      <motion.div 
        style={{ y, opacity }}
        className="container relative z-10 flex flex-col items-center text-center mt-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="inline-block px-4 py-1.5 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8"
        >
          <span className="text-sm font-medium tracking-wide uppercase text-muted-foreground">
            Awwwards Site of the Month
          </span>
        </motion.div>

        <motion.h1 
          className="text-fluid-5xl font-heading font-black leading-[0.9] tracking-tighter mb-6 uppercase"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          We Create <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
            Digital Icons
          </span>
        </motion.h1>

        <motion.p 
          className="text-fluid-lg text-muted-foreground max-w-2xl mb-12 font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        >
          We are a global digital agency crafting premium experiences that elevate brands to their ultimate potential. Not just another website—a digital masterpiece.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
        >
          <MagneticButton strength={40}>
            <Button variant="premium" size="lg" className="rounded-full h-16 px-10 text-lg">
              Explore Our Work
            </Button>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}
