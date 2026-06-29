"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Diamond, Lightbulb, Users, Trophy } from 'lucide-react'

export function OurValues() {
  const values = [
    {
      title: "High Quality",
      icon: <Diamond className="w-5 h-5 text-primary" />,
      desc: "We always try to do our best work. We want everything we make to be perfectly crafted and highly performant."
    },
    {
      title: "New Ideas",
      icon: <Lightbulb className="w-5 h-5 text-primary" />,
      desc: "We don't just copy others. We experiment with the latest tech to bring innovative solutions to your business."
    },
    {
      title: "Teamwork",
      icon: <Users className="w-5 h-5 text-primary" />,
      desc: "We get the best results when we work closely with you. We treat your product as if it were our own."
    },
    {
      title: "On Time",
      icon: <Trophy className="w-5 h-5 text-primary" />,
      desc: "We always do what we say we will. We finish projects on time, on budget, and exactly to spec."
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <section className="py-32 bg-background border-b border-primary/10 relative overflow-hidden">
      <div className="container max-w-7xl relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-6"
          >
            Our Values
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-foreground tracking-tighter leading-[1.1]"
          >
            What we believe in.
          </motion.h3>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 gap-x-12 gap-y-20 lg:gap-x-24"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group flex flex-col items-start"
            >
              <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary transition-all duration-500">
                <div className="group-hover:brightness-0 group-hover:invert transition-all duration-500">
                  {value.icon}
                </div>
              </div>
              
              <h4 className="text-2xl font-bold text-foreground mb-4 tracking-tight">
                {value.title}
              </h4>
              
              <p className="text-muted-foreground text-lg leading-relaxed font-light">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
