"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Target, Eye, ArrowUpRight } from 'lucide-react'

export function MissionVision() {
  const cards = [
    {
      title: "Our Mission",
      icon: <Target className="w-8 h-8 text-white transition-transform duration-500 group-hover:scale-110" />,
      description: "To build great websites that help businesses grow and succeed online, mixing good tech with beautiful design."
    },
    {
      title: "Our Vision",
      icon: <Eye className="w-8 h-8 text-white transition-transform duration-500 group-hover:scale-110" />,
      description: "To be known worldwide as a top digital agency that delivers high-quality work, solves hard problems, and creates amazing designs."
    }
  ]

  return (
    <section className="py-32 bg-black border-y border-white/10">
      <div className="container max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative p-10 lg:p-16 flex flex-col justify-between min-h-[400px] border border-white/5 bg-zinc-950/50 hover:bg-white transition-colors duration-700 ${index === 0 ? 'lg:border-r' : ''}`}
            >
              <div className="flex justify-between items-start mb-12">
                <div className="w-16 h-16 rounded-full bg-black border border-white/10 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-colors duration-500">
                  {card.icon}
                </div>
                <ArrowUpRight className="w-8 h-8 text-white/20 group-hover:text-black transition-colors duration-500" />
              </div>
              
              <div>
                <h3 className="text-4xl lg:text-5xl font-heading font-black mb-6 text-white group-hover:text-black transition-colors duration-500 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-xl text-gray-400 group-hover:text-gray-600 transition-colors duration-500 leading-relaxed font-light">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
