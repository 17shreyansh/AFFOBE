"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Diamond, Lightbulb, Users, Trophy } from 'lucide-react'

export function OurValues() {
  const values = [
    {
      title: "High Quality",
      icon: <Diamond className="w-10 h-10 text-white" />,
      desc: "We always try to do our best work. We want everything we make to be perfect."
    },
    {
      title: "New Ideas",
      icon: <Lightbulb className="w-10 h-10 text-white" />,
      desc: "We don't just copy others. We like to try new things and keep learning."
    },
    {
      title: "Teamwork",
      icon: <Users className="w-10 h-10 text-white" />,
      desc: "We get the best results when we work closely with you. We win as a team."
    },
    {
      title: "On Time",
      icon: <Trophy className="w-10 h-10 text-white" />,
      desc: "We always do what we say we will. We finish projects on time and on budget."
    }
  ]

  return (
    <section className="py-32 bg-black border-y border-white/10 relative overflow-hidden">
      <div className="container max-w-7xl relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/20 text-white text-xs font-medium uppercase tracking-[0.2em] mb-8"
          >
            Our Values
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-heading font-black text-white tracking-tighter"
          >
            What we <span className="text-gray-600">believe in.</span>
          </motion.h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group bg-black p-12 hover:bg-zinc-950 transition-colors duration-500 flex flex-col justify-between min-h-[360px]"
            >
              <div className="mb-12 opacity-50 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:-translate-y-2 group-hover:scale-110">
                {value.icon}
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  {value.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed font-light group-hover:text-gray-300 transition-colors duration-500">
                  {value.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
