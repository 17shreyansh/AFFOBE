"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { MagneticButton } from '@/components/animations/magnetic-button'
import { ScrollParallax } from '@/components/animations/parallax'

export function CTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-background">
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        
        {/* The Massive Blue Box (Uno Reverse) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full rounded-[2.5rem] md:rounded-[4rem] overflow-hidden bg-primary p-10 md:p-24 flex flex-col items-center text-center shadow-[0_0_80px_rgba(37,99,235,0.3)]"
        >
          {/* Subtle Animated White Lighting within the solid blue card */}
          <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none mix-blend-overlay"></div>

          {/* White Glowing Top Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 mb-8 bg-white/10 border border-white/30 rounded-full px-5 py-2 backdrop-blur-md relative z-10"
          >
            <Sparkles size={14} className="text-white" />
            <span className="text-xs uppercase tracking-[0.2em] font-mono text-white font-bold">
              Project Initiation
            </span>
          </motion.div>

          {/* Stunning White Typography */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[11vw] sm:text-[8vw] md:text-[6vw] font-black uppercase text-white tracking-tighter leading-[0.9] mb-8 relative z-10"
          >
            Ready to <br/>
            <span className="text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.9)] drop-shadow-sm">
              Dominate?
            </span>
          </motion.h2>
          
          {/* Refined Copy in White */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto mb-12 relative z-10"
          >
            Join the ranks of industry leaders. Let's engineer a digital presence that shifts culture and drives unprecedented growth.
          </motion.p>

          {/* Highly Attractive Interactive Button (White outline -> White fill -> Blue text) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative z-10"
          >
            <MagneticButton strength={40}>
              <button className="group relative flex items-center justify-center gap-3 h-16 md:h-20 px-8 md:px-12 rounded-full bg-transparent overflow-hidden border border-white/50 text-white font-bold text-sm md:text-base uppercase tracking-widest transition-all duration-500 hover:border-white hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                {/* Sweep hover effect filling with white */}
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                
                {/* Text turns primary blue on hover */}
                <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
                  Deploy Project
                </span>
                
                {/* Arrow turns primary blue on hover */}
                <ArrowRight size={18} className="relative z-10 text-white group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
              </button>
            </MagneticButton>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
