"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const journeySteps = [
  {
    year: "2012",
    title: "The Beginning",
    desc: "Founded in a small garage with a vision to revolutionize digital experiences for local businesses. Just three developers and a lot of coffee.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    year: "2015",
    title: "First Major Milestone",
    desc: "Landed our first Fortune 500 client, expanding our team to 20 people and moving into our first official downtown office.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    year: "2018",
    title: "Going Global",
    desc: "Opened our second office in London, officially becoming a global agency. Began specializing in large-scale enterprise web applications.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop",
  },
  {
    year: "2021",
    title: "Design Excellence",
    desc: "Won three consecutive Awwwards for our minimalist, high-performance web designs, establishing our signature aesthetic.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    year: "2024",
    title: "The Future",
    desc: "Leading the industry in AI-integrated web platforms and premium digital experiences. Over 400 successful projects delivered worldwide.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
  }
]

function StickyCard({ step }: { step: any }) {
  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        className="relative flex flex-col md:flex-row w-[90%] md:w-[80%] max-w-6xl h-[500px] md:h-[600px] rounded-[2rem] shadow-2xl overflow-hidden bg-slate-50 text-slate-900 border border-primary/5"
      >
        {/* Text Content Area */}
        <div className="flex-1 p-10 md:p-16 flex flex-col justify-between z-10 bg-slate-50">
          <div>
            <h2 className="text-6xl md:text-8xl font-heading font-black tracking-tighter opacity-10 text-primary">
              {step.year}
            </h2>
          </div>
          
          <div className="max-w-xl">
            <h3 className="text-3xl md:text-5xl font-heading font-black mb-6 tracking-tight">
              {step.title}
            </h3>
            <p className="text-lg md:text-xl leading-relaxed font-light text-slate-600">
              {step.desc}
            </p>
          </div>
        </div>

        {/* Cinematic Image Area */}
        <div className="hidden md:block flex-1 relative h-full">
          <div className="absolute inset-0 bg-black/10 z-10" />
          <img 
            src={step.image} 
            alt={step.title} 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  )
}

export function OurJourney() {
  const containerRef = useRef(null)

  return (
    <section className="bg-background relative border-y border-primary/10">
      <div className="py-24 md:py-32 sticky top-0 z-0">
        <div className="container max-w-7xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 inline-block px-4 py-1.5 rounded-full bg-primary/10"
          >
            Our Journey
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-heading font-black text-foreground tracking-tighter leading-[1.1]"
          >
            A timeline of <br /> our progress.
          </motion.h3>
        </div>
      </div>

      <div ref={containerRef} className="relative z-10 -mt-[30vh]">
        {journeySteps.map((step, index) => (
          <StickyCard 
            key={index} 
            step={step} 
          />
        ))}
      </div>
    </section>
  )
}
