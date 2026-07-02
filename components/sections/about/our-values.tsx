"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Diamond, Lightbulb, Users, Trophy } from 'lucide-react'

export function OurValues() {
  const [activeIndex, setActiveIndex] = useState(0)

  const values = [
    {
      title: "High Quality",
      icon: <Diamond className="w-8 h-8" />,
      desc: "We always try to do our best work. We want everything we make to be perfectly crafted, secure, and highly performant for your users.",
      subtitle: "Uncompromising Standards"
    },
    {
      title: "New Ideas",
      icon: <Lightbulb className="w-8 h-8" />,
      desc: "We don't just copy others. We experiment with the latest tech to bring innovative, future-proof solutions to your business.",
      subtitle: "Constant Innovation"
    },
    {
      title: "Teamwork",
      icon: <Users className="w-8 h-8" />,
      desc: "We get the best results when we work closely with you. We treat your product as if it were our own, with total transparency.",
      subtitle: "Collaborative Spirit"
    },
    {
      title: "On Time",
      icon: <Trophy className="w-8 h-8" />,
      desc: "We always do what we say we will. We finish projects on time, on budget, and exactly to the specifications we agreed upon.",
      subtitle: "Proven Reliability"
    }
  ]

  // Auto-rotate the wheel every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % values.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  // Calculate rotation to bring the active item to the 3 o'clock position (Right side)
  const wheelRotation = 90 - (activeIndex * 90)
  const iconCounterRotation = -wheelRotation

  return (
    <section className="py-32 bg-background border-b border-primary/10 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0" />
      
      <div className="container max-w-7xl relative z-10">
        
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-6 inline-block px-4 py-1.5 rounded-full bg-primary/10"
          >
            Our Core Values
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-heading font-black text-foreground tracking-tighter leading-[1.1]"
          >
            What drives us.
          </motion.h3>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-32 min-h-[600px]">
          
          {/* Left Side: The Interactive Wheel */}
          <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] shrink-0">
            {/* The structural rings */}
            <div className="absolute inset-0 rounded-full border border-primary/10" />
            <div className="absolute inset-8 rounded-full border border-dashed border-primary/20" />
            <div className="absolute inset-24 rounded-full bg-primary/5 backdrop-blur-3xl flex items-center justify-center shadow-[inset_0_0_50px_rgba(59,130,246,0.1)]">
              {/* Inner glowing core */}
              <div className="w-16 h-16 rounded-full bg-primary shadow-[0_0_40px_rgba(59,130,246,0.5)] flex items-center justify-center text-white">
                <span className="font-bold text-xl">{activeIndex + 1}/4</span>
              </div>
            </div>

            {/* The Rotating Wheel */}
            <motion.div 
              className="absolute inset-0 z-20"
              animate={{ rotate: wheelRotation }}
              transition={{ type: "spring", damping: 25, stiffness: 100 }}
            >
              {values.map((value, index) => {
                const isActive = activeIndex === index
                
                // Position logic: 0=Top, 1=Right, 2=Bottom, 3=Left
                const leftPos = index === 1 ? '100%' : index === 3 ? '0%' : '50%'
                const topPos = index === 0 ? '0%' : index === 2 ? '100%' : '50%'

                return (
                  <motion.div 
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`absolute w-20 h-20 md:w-24 md:h-24 -ml-10 -mt-10 md:-ml-12 md:-mt-12 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-500 shadow-2xl
                      ${isActive ? 'bg-primary text-white border-4 border-background scale-110' : 'bg-white text-primary border border-primary/10 hover:scale-105 hover:bg-slate-50'}
                    `}
                    style={{ left: leftPos, top: topPos }}
                    animate={{ rotate: iconCounterRotation }} // Counter-rotate so icons stay upright
                    transition={{ type: "spring", damping: 25, stiffness: 100 }}
                  >
                    <div className={isActive ? 'animate-pulse' : ''}>
                      {value.icon}
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Connecting Line to Content (Visible only on Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-[100%] w-32 h-[2px] bg-gradient-to-r from-primary to-transparent -translate-y-1/2 z-0" />
          </div>

          {/* Right Side: The Dynamic Content */}
          <div className="flex-1 max-w-xl text-center lg:text-left relative h-[300px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as any }}
                className="absolute inset-0 flex flex-col justify-center"
              >
                <h4 className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4">
                  {values[activeIndex].subtitle}
                </h4>
                <h5 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-foreground tracking-tighter mb-8 leading-[1.1]">
                  {values[activeIndex].title}
                </h5>
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-light">
                  {values[activeIndex].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}
