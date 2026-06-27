"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export function OurJourney() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  // Animate the line drawing down/across
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => {
    setMounted(true)
  }, [])

  const milestones = [
    { year: "2018", title: "The Beginning", desc: "Started as a small design shop with a team of 3 people." },
    { year: "2020", title: "Growing Up", desc: "Added coding to our services to build complete websites." },
    { year: "2022", title: "Going Global", desc: "Opened our second office and started working with big companies worldwide." },
    { year: "2024", title: "Leading the Way", desc: "Known as a top digital agency that makes great web experiences." }
  ]

  return (
    <section ref={containerRef} className="py-32 bg-black border-y border-white/10 relative overflow-hidden">
      <div className="container relative z-10 max-w-7xl">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/20 text-white text-xs font-medium uppercase tracking-[0.2em] mb-8"
          >
            Our Journey
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-heading font-black text-white tracking-tighter"
          >
            How we <span className="text-gray-600">grew.</span>
          </motion.h3>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Base Track */}
          <div className="absolute top-0 md:top-[42px] left-[13px] md:left-0 w-[1px] md:w-full h-full md:h-[1px] bg-white/10 -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2">
            {/* Animated Fill */}
            {mounted && (
              <motion.div 
                className="absolute top-0 left-0 bg-white"
                style={{ 
                  width: window.innerWidth >= 768 ? lineWidth : '100%',
                  height: window.innerWidth < 768 ? lineHeight : '100%'
                }}
              />
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-12 md:pl-0 pt-0 md:pt-20 group"
              >
                {/* Node */}
                <div className="absolute top-0 md:top-auto md:-top-[50px] left-[13px] md:left-1/2 w-4 h-4 rounded-full bg-black border-[2px] border-white z-10 -translate-x-1/2 md:mt-20 group-hover:scale-150 group-hover:bg-white transition-all duration-500" />
                
                <div className="md:text-center p-2 transition-all duration-300">
                  <h4 className="text-3xl md:text-5xl font-heading font-black text-white/20 group-hover:text-white transition-colors duration-500 mb-4 tracking-tighter">
                    {milestone.year}
                  </h4>
                  <h5 className="text-xl font-bold text-white mb-4">
                    {milestone.title}
                  </h5>
                  <p className="text-gray-400 leading-relaxed text-sm font-light">
                    {milestone.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
