"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const services = [
  {
    title: 'Brand Strategy',
    description: 'We craft comprehensive brand architectures that resonate with your target audience and stand the test of time.',
    image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Digital Products',
    description: 'Award-winning websites and applications built with cutting-edge technology and human-centric design.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Motion Design',
    description: 'Cinematic animations and 3D experiences that bring your brand narrative to life.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Growth Marketing',
    description: 'Data-driven campaigns that scale your business globally and maximize ROI.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
  }
]

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0)

  return (
    <section className="py-32 bg-secondary text-secondary-foreground">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <h2 className="text-3xl md:text-5xl font-heading font-bold leading-none">
            Capabilities
          </h2>
          <p className="text-lg max-w-sm text-muted-foreground mt-8 md:mt-0 font-medium">
            End-to-end digital solutions for modern forward-thinking enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t-2 border-primary/10 pt-12">
          {/* Services List */}
          <div className="lg:col-span-7 flex flex-col">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                className={cn(
                  "group py-8 flex flex-col md:flex-row justify-between md:items-center gap-8 cursor-pointer border-b border-border transition-all duration-300",
                  hoveredIndex === index ? "text-primary" : "text-foreground"
                )}
              >
                <h3 className="text-2xl font-heading font-bold w-full md:w-1/2 transition-transform duration-500 group-hover:translate-x-4">
                  {service.title}
                </h3>
                <p className="w-full md:w-1/2 text-base md:text-lg text-muted-foreground group-hover:text-foreground transition-colors">
                  {service.description}
                </p>
                <div className="hidden md:flex justify-end ml-4">
                  <div className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500",
                    hoveredIndex === index ? "bg-primary text-primary-foreground shadow-md" : "bg-muted text-muted-foreground"
                  )}>
                    <ArrowUpRight size={20} className={cn("transition-transform duration-500", hoveredIndex === index && "rotate-45")} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Hover Image Reveal */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="sticky top-32 w-full aspect-[4/5] overflow-hidden rounded-3xl shadow-xl shadow-primary/5">
              <AnimatePresence mode="wait">
                {hoveredIndex !== null && (
                  <motion.img
                    key={hoveredIndex}
                    src={services[hoveredIndex].image}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Service visual"
                  />
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
