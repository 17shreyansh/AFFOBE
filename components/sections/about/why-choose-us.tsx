"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Layout, Zap, Shield, HeartHandshake, ArrowRight } from 'lucide-react'

export function WhyChooseUs() {
  const features = [
    {
      title: "Custom Design",
      icon: <Layout className="w-6 h-6 text-white" />,
      desc: "We don't use templates. We make sure every part of your website is made just for you.",
    },
    {
      title: "Fast Speed",
      icon: <Zap className="w-6 h-6 text-white" />,
      desc: "We build websites that load very fast and work smoothly without any problems.",
    },
    {
      title: "Top Security",
      icon: <Shield className="w-6 h-6 text-white" />,
      desc: "We use the best tools to make sure your website and data are always safe.",
    },
    {
      title: "True Partners",
      icon: <HeartHandshake className="w-6 h-6 text-white" />,
      desc: "We work with you like we are part of your team. We care about your success.",
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
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
    <section className="py-32 bg-black border-y border-white/10 relative overflow-hidden">
      <div className="container relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 text-left lg:sticky lg:top-32"
          >
            <h2 className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-8 border-b border-white/10 pb-4 inline-block">
              Why Choose Us
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black mb-8 text-white leading-[1] tracking-tighter">
              More than <br/>
              <span className="text-transparent text-outline" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)' }}>code and</span> <br/>
              design.
            </h3>
            <p className="text-lg text-gray-400 leading-relaxed max-w-md font-light mb-12">
              Working with AFFOBE means choosing a team that only does high-quality work. We bring great design and strong coding to every project we take on.
            </p>
            <button className="group flex items-center gap-4 text-white text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors duration-300">
              Start a project
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary transition-colors duration-300">
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </button>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex-1 w-full flex flex-col"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative border-b border-white/10 last:border-0 py-10"
              >
                <div className="flex items-start gap-8">
                  <div className="w-12 h-12 rounded-none border border-white/10 flex items-center justify-center bg-zinc-900 group-hover:bg-white group-hover:border-white transition-colors duration-500 shrink-0">
                    <div className="group-hover:invert transition-all duration-500">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
