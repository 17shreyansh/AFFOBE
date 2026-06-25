"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const services = [
  {
    title: 'Brand Strategy',
    description: 'We craft comprehensive brand architectures that resonate with your target audience and stand the test of time.',
  },
  {
    title: 'Digital Products',
    description: 'Award-winning websites and applications built with cutting-edge technology and human-centric design.',
  },
  {
    title: 'Motion Design',
    description: 'Cinematic animations and 3D experiences that bring your brand narrative to life.',
  },
  {
    title: 'Growth Marketing',
    description: 'Data-driven campaigns that scale your business globally and maximize ROI.',
  }
]

export function Services() {
  return (
    <section className="py-32 bg-foreground text-background">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <h2 className="text-fluid-4xl font-heading font-bold leading-none">
            Capabilities
          </h2>
          <p className="text-lg max-w-sm text-background/70 mt-8 md:mt-0">
            End-to-end digital solutions for modern forward-thinking brands.
          </p>
        </div>

        <div className="grid grid-cols-1 border-t border-background/20">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group border-b border-background/20 py-12 flex flex-col md:flex-row justify-between md:items-center gap-8 cursor-pointer hover:bg-background/5 px-4 transition-colors"
            >
              <h3 className="text-fluid-2xl font-heading font-medium w-full md:w-1/3 transition-transform duration-500 group-hover:translate-x-4">
                {service.title}
              </h3>
              <p className="text-background/70 w-full md:w-1/3 text-lg">
                {service.description}
              </p>
              <div className="w-full md:w-auto flex justify-end">
                <div className="w-16 h-16 rounded-full border border-background/20 flex items-center justify-center transition-all duration-500 group-hover:bg-background group-hover:text-foreground">
                  <ArrowUpRight size={24} className="transition-transform duration-500 group-hover:rotate-45" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
