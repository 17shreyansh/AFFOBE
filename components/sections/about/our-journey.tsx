"use client"

import React from 'react'
import { motion } from 'framer-motion'

export function OurJourney() {
  const journeySteps = [
    {
      year: "2012",
      title: "The Beginning",
      desc: "Founded in a small garage with a vision to revolutionize digital experiences for local businesses. Just three developers and a lot of coffee."
    },
    {
      year: "2015",
      title: "First Major Milestone",
      desc: "Landed our first Fortune 500 client, expanding our team to 20 people and moving into our first official downtown office."
    },
    {
      year: "2018",
      title: "Going Global",
      desc: "Opened our second office in London, officially becoming a global agency. Began specializing in large-scale enterprise web applications."
    },
    {
      year: "2021",
      title: "Design Excellence",
      desc: "Won three consecutive Awwwards for our minimalist, high-performance web designs, establishing our signature aesthetic."
    },
    {
      year: "2024",
      title: "The Future",
      desc: "Leading the industry in AI-integrated web platforms and premium digital experiences. Over 400 successful projects delivered worldwide."
    }
  ]

  return (
    <section className="py-32 bg-background border-b border-primary/10">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-6"
          >
            Our Journey
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-foreground tracking-tighter leading-[1.1]"
          >
            A timeline of <br /> our progress.
          </motion.h3>
        </div>

        <div className="relative border-l border-primary/20 ml-4 md:ml-12 pl-8 md:pl-16 space-y-24">
          {journeySteps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute w-4 h-4 rounded-full bg-primary -left-[39px] md:-left-[71px] top-2 shadow-[0_0_0_8px_hsl(var(--background))]" />
              
              <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-16">
                <div className="md:w-32 shrink-0">
                  <h4 className="text-3xl md:text-4xl font-heading font-black text-primary tracking-tighter">
                    {step.year}
                  </h4>
                </div>
                
                <div className="flex-1">
                  <h5 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight">
                    {step.title}
                  </h5>
                  <p className="text-muted-foreground text-lg leading-relaxed font-light max-w-2xl">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
