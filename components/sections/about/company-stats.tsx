"use client"

import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'

function AnimatedCounter({ value, duration = 2.5 }: { value: number, duration?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })
  
  const springValue = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
    damping: 20,
    stiffness: 50
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
    <section className="py-32 bg-black border-y border-white/10 relative overflow-hidden">
      <div className="container relative z-10 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-l border-white/10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center p-12 border-b border-r border-white/10 hover:bg-white/5 transition-colors duration-500 flex flex-col justify-center items-center group"
            >
              <div className="text-6xl md:text-7xl lg:text-8xl font-heading font-black mb-4 flex justify-center items-center text-white tracking-tighter">
                <AnimatedCounter value={stat.value} />
                <span className="text-primary">{stat.suffix}</span>
              </div>
              <p className="text-gray-400 font-medium text-xs md:text-sm uppercase tracking-[0.2em] group-hover:text-white transition-colors duration-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
