"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'

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
    <section className="py-32 bg-secondary/30">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-foreground">
              Industry Insights
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Expert perspectives on performance engineering, fintech innovation, and digital transformation.
            </p>
          </div>
          <Button variant="outline" className="rounded-full border-primary/20 text-primary hover:bg-primary hover:text-white">
            View All Articles <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary tracking-wide uppercase">
                  {post.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                  <Calendar size={14} />
                  <span>{post.date}</span>
             </div>
                <h3 className="text-xl font-bold font-heading mb-4 text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-8 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-primary font-semibold text-sm mt-auto group-hover:gap-2 transition-all">
                  Read Article <ArrowRight size={16} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
