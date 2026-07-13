"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Our comprehensive digital transformations typically span 12 to 16 weeks. This allows for deep strategic alignment, iterative design, robust engineering, and meticulous quality assurance to ensure an award-winning result."
  },
  {
    question: "Do you work with startups or only enterprise clients?",
    answer: "While we partner with Fortune 500 companies, we also collaborate with ambitious startups that have secured Series A funding or higher. We look for visionary founders who understand the value of premium digital experiences."
  },
  {
    question: "How do you handle post-launch support and growth?",
    answer: "Launch is just the beginning. We offer dedicated growth and retainer partnerships, providing continuous optimization, performance marketing, and iterative product enhancements to maximize your ROI."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We leverage a modern, scalable stack including Next.js, React, TypeScript, WebGL/Three.js for immersive 3D experiences, GSAP for cinematic motion, and headless CMS architectures (Sanity, Contentful) for ultimate flexibility."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-32 bg-background">
      <div className="container max-w-4xl">
        <h2 className="text-fluid-4xl font-heading font-bold mb-16 text-center">
          Frequently Asked
        </h2>
        
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            
            return (
              <div 
                key={index} 
                className="border-b border-border py-6 cursor-pointer group"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <div className="flex justify-between items-center gap-8">
                  <h3 className={cn(
                    "text-xl md:text-2xl font-medium font-heading transition-colors duration-300",
                    isOpen ? "text-primary" : "text-foreground group-hover:text-primary/80"
                  )}>
                    {faq.question}
                  </h3>
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 flex-shrink-0",
                    isOpen ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground group-hover:border-foreground"
                  )}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </div>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                      className="overflow-hidden"
                    >
                      <p className="text-muted-foreground text-lg pt-6 pb-2 pr-12 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
