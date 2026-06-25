"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    title: 'Aura',
    category: 'E-Commerce / 3D',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop',
  },
  {
    title: 'Nova',
    category: 'Fintech / App',
    image: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=2000&auto=format&fit=crop',
  },
  {
    title: 'Lumina',
    category: 'Brand / WebGL',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2000&auto=format&fit=crop',
  }
]

export function FeaturedWork() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  return (
    <section ref={containerRef} className="py-32 bg-background">
      <div className="container">
        <div className="flex justify-between items-end mb-20">
          <h2 className="text-fluid-4xl font-heading font-bold">Selected<br/>Works</h2>
          <a href="/portfolio" className="hidden md:flex items-center gap-2 text-lg font-medium hover:text-primary transition-colors pb-4 border-b border-transparent hover:border-primary">
            View All Archive <ArrowRight size={20} />
          </a>
        </div>

        <div className="flex flex-col gap-12 md:gap-32">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: any, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  })

  // Parallax effect for the inner image placeholder
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <div ref={cardRef} className="group relative w-full flex flex-col md:even:items-end">
      <div className={`relative overflow-hidden rounded-3xl w-full md:w-3/4 aspect-[4/3] md:aspect-[16/9] bg-muted`}>
        <motion.div 
          style={{ y, scale: 1.1 }} 
          className="absolute inset-0"
        >
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
        </motion.div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
            View Case Study
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-between items-start w-full md:w-3/4">
        <div>
          <h3 className="text-3xl font-heading font-bold mb-2">{project.title}</h3>
          <p className="text-muted-foreground">{project.category}</p>
        </div>
        <span className="text-muted-foreground font-mono">0{index + 1}</span>
      </div>
    </div>
  )
}
