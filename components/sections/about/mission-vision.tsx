"use client"

import React from 'react'
import { motion } from 'framer-motion'

export function MissionVision() {
  return (
    <section className="py-32 bg-background border-y border-primary/10">
      <div className="container max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 md:gap-32">
          
          {/* Mission */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-6">
              Our Mission
            </h2>
            <h3 className="text-4xl lg:text-5xl font-heading font-black text-foreground tracking-tight mb-8 leading-[1.1]">
              Building digital <br className="hidden lg:block" /> excellence.
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed font-light">
              To build great websites that help businesses grow and succeed online, mixing good tech with beautiful, clean design. We believe in simplicity, performance, and delivering actual value.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-6">
              Our Vision
            </h2>
            <h3 className="text-4xl lg:text-5xl font-heading font-black text-foreground tracking-tight mb-8 leading-[1.1]">
              Global standard <br className="hidden lg:block" /> for design.
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed font-light">
              To be known worldwide as a top digital agency that delivers high-quality work, solves hard problems, and creates amazing, highly usable designs without the unnecessary clutter.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
