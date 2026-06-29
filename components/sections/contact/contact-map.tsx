"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

export function ContactMap() {
  return (
    <div className="mb-32 w-full max-w-[100vw] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 text-center"
      >
        <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-6">
          Our Location
        </h2>
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-foreground tracking-tighter leading-[1.1]">
          Find us in the <br className="md:hidden" /> real world.
        </h3>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-[600px] bg-slate-50/50 rounded-[3rem] overflow-hidden group mx-auto"
      >
        {/* Placeholder for actual Google Maps iframe */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center mb-8 group-hover:-translate-y-3 transition-transform duration-700 ease-out">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <p className="text-muted-foreground font-bold uppercase tracking-[0.2em] text-xs mb-3">
              Google Maps Integration Placeholder
            </p>
            <p className="text-slate-400 font-light text-base max-w-sm mx-auto">
              Replace this block with your actual Google Maps embed iframe when ready.
            </p>
          </div>
        </div>

        {/* Subtle Decorative Grid */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.02]"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '32px 32px' }}
        />
      </motion.div>
    </div>
  )
}
