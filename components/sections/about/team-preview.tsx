"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Globe, Mail } from 'lucide-react'
import Link from 'next/link'

function CleanPortrait({ member, index }: { member: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col"
    >
      <div className="w-full aspect-[3/4] mb-8 overflow-hidden rounded-[2rem] relative bg-slate-100">
        <img 
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        
        {/* Subtle hover overlay with icons */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
          <Link 
            href="#" 
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
          >
            <Globe size={20} />
          </Link>
          <Link 
            href="#" 
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75"
          >
            <Mail size={20} />
          </Link>
        </div>
      </div>
      
      <div className="text-center px-4">
        <h4 className="text-2xl font-bold text-foreground mb-2 tracking-tight group-hover:text-primary transition-colors duration-300">{member.name}</h4>
        <p className="font-bold text-xs uppercase tracking-[0.2em] text-primary/70 mb-4">{member.role}</p>
        <p className="text-muted-foreground leading-relaxed font-light text-sm max-w-sm mx-auto">
          {member.desc}
        </p>
      </div>
    </motion.div>
  )
}

export function TeamPreview() {
  const team = [
    {
      name: "Sarah Jenkins",
      role: "Creative Director",
      desc: "Sarah brings 10+ years of award-winning design experience, ensuring every pixel perfectly aligns with your brand's vision.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Marcus Chen",
      role: "Lead Developer",
      desc: "An expert in modern web architecture, Marcus leads our engineering team to build scalable, lightning-fast applications.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Elena Rodriguez",
      role: "Product Strategist",
      desc: "Elena bridges the gap between business goals and user needs, crafting digital strategies that drive real measurable growth.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
    }
  ]

  return (
    <section className="py-32 bg-background relative overflow-hidden border-b border-primary/10">
      <div className="container max-w-7xl relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-6"
          >
            Our Team
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-foreground tracking-tighter leading-[1.1]"
          >
            The people behind <br /> the pixels.
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {team.map((member, index) => (
            <CleanPortrait key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
