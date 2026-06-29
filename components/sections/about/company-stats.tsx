"use client"

import React, { useRef, useEffect } from 'react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'

function AnimatedCounter({ value, duration = 2.5 }: { value: number, duration?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })
  
  const springValue = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  })
  
  const displayValue = useTransform(springValue, (current) => Math.floor(current))
  
  useEffect(() => {
    if (inView) {
      springValue.set(value)
    }
  }, [inView, springValue, value])
  
  return <motion.span ref={ref}>{displayValue}</motion.span>
}

export function CompanyStats() {
  const stats = [
    { value: 12, label: "Years of Work", suffix: "+" },
    { value: 450, label: "Projects Finished", suffix: "+" },
    { value: 98, label: "Happy Clients", suffix: "%" },
    { value: 24, label: "Countries Reached", suffix: "" }
  ]

  return (
    <section className="py-32 bg-background border-b border-primary/10">
      <div className="container max-w-7xl">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-6"
          >
            By The Numbers
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-foreground tracking-tighter leading-[1.1]"
          >
            Our Global Impact
          </motion.h3>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-heading font-black tracking-tighter text-foreground mb-4 flex items-start">
                <AnimatedCounter value={stat.value} />
                <span className="text-primary text-3xl md:text-4xl lg:text-5xl mt-2 ml-1">{stat.suffix}</span>
              </div>
              <p className="text-muted-foreground font-medium text-sm md:text-base uppercase tracking-[0.2em]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
