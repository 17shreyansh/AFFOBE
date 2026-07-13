"use client"

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useSpring, useTransform, useMotionValue, useMotionTemplate } from 'framer-motion'
import { Globe, Mail } from 'lucide-react'
import Link from 'next/link'

// Custom Magnetic 3D Portrait Component
function MagneticPortrait({ member, index }: { member: { name: string; role: string; desc: string; image: string }; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  
  // Motion values for absolute mouse tracking (for glares)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Motion values for 3D tilt
  const normX = useMotionValue(0)
  const normY = useMotionValue(0)

  // Spring smoothing for 3D rotation
  const smoothX = useSpring(normX, { damping: 20, stiffness: 150 })
  const smoothY = useSpring(normY, { damping: 20, stiffness: 150 })

  const rotateX = useTransform(smoothY, [-0.5, 0.5], ["15deg", "-15deg"])
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ["-15deg", "15deg"])
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    
    // Absolute position
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
    
    // Normalized position
    normX.set((e.clientX - rect.left) / rect.width - 0.5)
    normY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    normX.set(0)
    normY.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      className="group relative flex flex-col items-center"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1200,
          transformStyle: "preserve-3d"
        }}
        className="w-full aspect-[3/4] mb-8 relative cursor-pointer"
      >
        {/* The Card Body */}
        <div className="absolute inset-0 rounded-[2rem] overflow-hidden bg-slate-100 shadow-2xl shadow-primary/10">
          <Image 
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            quality={80}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          
          {/* Holographic Glare Overlay */}
          <motion.div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  400px circle at ${mouseX}px ${mouseY}px,
                  rgba(255, 255, 255, 0.4),
                  transparent 60%
                )
              `,
            }}
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
        </div>

        {/* Deep Parallax Floating Social Icons */}
        <div 
          className="absolute inset-0 flex items-center justify-center gap-6 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500"
          style={{ transform: "translateZ(80px)" }}
        >
          <Link 
            href="#" 
            className="pointer-events-auto w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 transform -translate-y-4 group-hover:translate-y-0"
          >
            <Globe size={24} />
          </Link>
          <Link 
            href="#" 
            className="pointer-events-auto w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 transform -translate-y-4 group-hover:translate-y-0 delay-75"
          >
            <Mail size={24} />
          </Link>
        </div>
      </motion.div>
      
      <div className="text-center px-4">
        <h4 className="text-2xl font-bold text-foreground mb-2 tracking-tight transition-colors duration-300">{member.name}</h4>
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
      <div className="container max-w-7xl relative z-10 perspective-[2000px]">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-6 inline-block px-4 py-1.5 rounded-full bg-primary/10"
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
            <MagneticPortrait key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
