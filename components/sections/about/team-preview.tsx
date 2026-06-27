"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Globe, Mail } from 'lucide-react'
import Link from 'next/link'

export function TeamPreview() {
  const team = [
    {
      name: "Alex Sterling",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
      desc: "Alex used to lead tech teams at big companies. He started AFFOBE to bring great design and coding together."
    },
    {
      name: "Samantha Reed",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
      desc: "An award-winning designer who loves making websites that look good and feel great to use."
    },
    {
      name: "David Chen",
      role: "Head of Engineering",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
      desc: "An expert coder who makes sure our websites are fast, safe, and can handle a lot of visitors."
    }
  ]

  return (
    <section className="py-32 bg-black border-y border-white/10 relative overflow-hidden">
      <div className="container max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/20 text-white text-xs font-medium uppercase tracking-[0.2em] mb-8"
            >
              Our Team
            </motion.div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-heading font-black text-white max-w-3xl leading-[1] tracking-tighter"
            >
              The <span className="text-gray-600">people</span> behind <br/> our great work.
            </motion.h3>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-zinc-900">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-x-0 bottom-0 p-6 flex items-center justify-end gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 bg-gradient-to-t from-black/80 to-transparent">
                  <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors">
                    <Globe size={18} />
                  </Link>
                  <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors">
                    <Mail size={18} />
                  </Link>
                </div>
              </div>
              
              <div>
                <h4 className="text-2xl font-bold text-white mb-2 tracking-tight">{member.name}</h4>
                <p className="font-medium text-xs uppercase tracking-[0.2em] text-primary mb-4">{member.role}</p>
                <p className="text-gray-400 leading-relaxed font-light text-sm">
                  {member.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
