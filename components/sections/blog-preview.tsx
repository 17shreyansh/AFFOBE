"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import Link from 'next/link'
import { MouseParallax, ScrollParallax } from '@/components/animations/parallax'

const posts = [
  {
    title: 'The Future of Fintech: AI-Driven Risk Assessment',
    category: 'Fintech Insights',
    date: 'Oct 12, 2026',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Explore how artificial intelligence is fundamentally changing how financial institutions evaluate and manage risk portfolios.'
  },
  {
    title: 'Scaling Enterprise IT Infrastructure for Global Reach',
    category: 'Architecture',
    date: 'Sep 28, 2026',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
    excerpt: 'A comprehensive guide to transitioning monolithic legacy systems to highly available, globally distributed microservices.'
  },
  {
    title: 'Optimizing Digital Performance for Conversion Rates',
    category: 'Digital Growth',
    date: 'Sep 15, 2026',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    excerpt: 'How fractional improvements in core web vitals and server response times correlate directly to increased revenue.'
  }
]

export function BlogPreview() {
  return (
    <section className="py-24 md:py-32 overflow-hidden bg-background relative border-t border-border">
      {/* Background blueprint details */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute left-1/4 top-0 w-[1px] h-full bg-primary/30"></div>
        <div className="absolute right-1/4 top-0 w-[1px] h-full bg-primary/30"></div>
        <ScrollParallax speed={0.1} className="absolute inset-0 blueprint-grid"></ScrollParallax>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <MouseParallax strength={0.02}>
            <p className="text-xs uppercase tracking-widest font-mono text-primary mb-6">
              [ Intelligence ]
            </p>
            <h2 className="text-[10vw] sm:text-[6vw] font-black uppercase text-foreground tracking-tighter leading-none mb-8">
              Industry <span className="text-transparent text-outline">Insights</span>
            </h2>
          </MouseParallax>
          
          <div className="glass-panel p-6 rounded-2xl max-w-2xl w-full border-t-4 border-t-primary flex flex-col md:flex-row gap-8 justify-between text-left mt-8">
            <p className="font-mono text-sm text-muted-foreground flex-1">
              <span className="text-primary">{`>`}</span> ANALYZING MARKET TRENDS...<br/>
              <span className="text-primary">{`>`}</span> DECODING DIGITAL STRATEGY...
            </p>
            <Link 
              href="/insights"
              className="group flex items-center justify-center gap-2 font-mono text-sm uppercase text-primary border border-primary/30 px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300 flex-1 md:flex-none"
            >
              Access Archive <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {posts.map((post, index) => (
            <motion.article 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col cursor-interactive"
            >
              <div className="glass-panel rounded-3xl overflow-hidden border border-primary/20 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(37,99,235,0.15)] transition-all duration-500 flex flex-col h-full">
                
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[16/9] w-full p-2">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-105"
                    />
                    
                    {/* Category Tag */}
                    <div className="absolute top-4 left-4 z-20 bg-background/80 backdrop-blur-md border border-primary/20 px-4 py-1.5 rounded-full text-[10px] font-mono font-bold text-primary tracking-widest uppercase">
                      {post.category}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 font-mono text-primary/70 text-[10px] tracking-wider mb-2">
                    <Calendar size={12} className="text-primary" />
                    <span>[ {post.date} ]</span>
                  </div>
                  
                  <h3 className="text-base md:text-lg font-black uppercase tracking-tight leading-tight mb-2 text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-primary font-mono text-xs font-bold tracking-widest uppercase mt-auto group-hover:gap-3 transition-all duration-300">
                    <span className="border-b border-transparent group-hover:border-primary pb-0.5 transition-colors duration-300">Read Record</span> 
                    <ArrowRight size={14} className="ml-1 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
