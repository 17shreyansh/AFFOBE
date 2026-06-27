"use client"

import React from 'react'
import { motion } from 'framer-motion'

export function CompanyStory() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-16 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 w-full relative"
          >
            {/* Curtain Reveal Container */}
            <div className="relative h-full min-h-[500px] w-full rounded-2xl overflow-hidden group">
              <motion.div 
                initial={{ height: "100%" }}
                whileInView={{ height: "0%" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, delay: 0.2, ease: [0.77, 0, 0.175, 1] }}
                className="absolute inset-0 bg-white z-20 origin-top"
              />
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" 
                alt="Company culture"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            
            {/* Floating Editorial Element */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -right-8 -bottom-8 bg-black p-8 rounded-none border border-white/10 hidden md:block max-w-[280px]"
            >
              <div className="text-5xl font-black text-white mb-2 font-heading tracking-tighter">100%</div>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-[0.2em] leading-relaxed">Independent<br/>& Founder Led</p>
            </motion.div>
          </motion.div>

          <div className="flex-1 flex flex-col justify-center py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-8 border-b border-white/10 pb-4 inline-block">
                Our Foundation
              </h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-10 text-white leading-[1.1] tracking-tight">
                Built on <br />
                <span className="text-transparent text-outline" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)' }}>great</span> <br />
                ideas.
              </h3>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8 text-gray-400 text-lg leading-relaxed font-light"
            >
              <p>
                AFFOBE started with a simple goal: a group of designers and coders wanting to make websites that look amazing and work perfectly.
              </p>
              <p>
                We do more than just write code. We solve real business problems and help you grow. We believe every part of your website is a chance to build your brand.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
