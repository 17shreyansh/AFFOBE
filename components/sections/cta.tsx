"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { MagneticButton } from '@/components/animations/magnetic-button'

export function CTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-primary text-primary-foreground">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none" />
      
      <div className="container relative z-10 flex flex-col items-center text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-fluid-4xl font-heading font-black uppercase tracking-tighter mb-8"
        >
          Ready to <br/> Dominate?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl font-medium max-w-2xl mb-12 opacity-90"
        >
          Join the ranks of industry leaders. Let's create something that shifts culture and drives unprecedented growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <MagneticButton strength={50}>
            <Button variant="premium" size="lg" className="h-20 px-12 text-xl rounded-full bg-background text-foreground hover:bg-background/90 hover:-translate-y-2">
              Start Your Project
            </Button>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}
