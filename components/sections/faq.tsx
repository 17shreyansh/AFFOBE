"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { MouseParallax, ScrollParallax } from '@/components/animations/parallax'

const faqs = [
  {
    id: "01",
    question: "What is your typical project timeline?",
    answer: "Our comprehensive digital transformations typically span 12 to 16 weeks. This allows for deep strategic alignment, iterative design, robust engineering, and meticulous quality assurance to ensure an award-winning result."
  },
  {
    id: "02",
    question: "Do you work with startups or only enterprise clients?",
    answer: "While we partner with Fortune 500 companies, we also collaborate with ambitious startups that have secured Series A funding or higher. We look for visionary founders who understand the value of premium digital experiences."
  },
  {
    id: "03",
    question: "How do you handle post-launch support and growth?",
    answer: "Launch is just the beginning. We offer dedicated growth and retainer partnerships, providing continuous optimization, performance marketing, and iterative product enhancements to maximize your ROI."
  },
  {
    id: "04",
    question: "What technologies do you specialize in?",
    answer: "We leverage a modern, scalable stack including Next.js, React, TypeScript, WebGL/Three.js for immersive 3D experiences, GSAP for cinematic motion, and headless CMS architectures (Sanity, Contentful) for ultimate flexibility."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 md:py-32 overflow-hidden bg-background relative border-t border-border">
      {/* Background blueprint details */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute left-1/4 top-0 w-[1px] h-full bg-primary/30"></div>
        <div className="absolute right-1/4 top-0 w-[1px] h-full bg-primary/30"></div>
        <ScrollParallax speed={0.1} className="absolute inset-0 blueprint-grid"></ScrollParallax>
      </div>

      <div className="container relative z-10 max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <MouseParallax strength={0.02}>
            <p className="text-xs uppercase tracking-widest font-mono text-primary mb-6">
              [ Knowledge Base ]
            </p>
            <h2 className="text-[10vw] sm:text-[6vw] font-black uppercase text-foreground tracking-tighter leading-none mb-4">
              Frequently <span className="text-transparent text-outline">Asked</span>
            </h2>
          </MouseParallax>
        </div>
        
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            
            return (
              <div 
                key={index} 
                className={cn(
                  "glass-panel rounded-2xl cursor-interactive overflow-hidden transition-all duration-500 border",
                  isOpen 
                    ? "border-primary/50 shadow-[0_0_40px_rgba(37,99,235,0.15)]" 
                    : "border-primary/20 hover:border-primary/40"
                )}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <div className="flex justify-between items-center gap-6 p-6 md:p-8 relative">
                  {/* Active highlight bar */}
                  <div className={cn(
                    "absolute left-0 top-0 bottom-0 w-1 transition-colors duration-500",
                    isOpen ? "bg-primary" : "bg-transparent group-hover:bg-primary/20"
                  )} />

                  <div className="flex items-center gap-6 flex-1">
                    <span className="font-mono text-xs md:text-sm text-primary/60 font-bold tracking-widest">
                      [ {faq.id} ]
                    </span>
                    <h3 className={cn(
                      "text-lg md:text-xl font-black uppercase tracking-tight transition-colors duration-300",
                      isOpen ? "text-primary" : "text-foreground group-hover:text-primary/80"
                    )}>
                      {faq.question}
                    </h3>
                  </div>

                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 flex-shrink-0 bg-background/50 backdrop-blur-sm",
                    isOpen ? "border-primary text-primary" : "border-primary/20 text-muted-foreground group-hover:border-primary/50 group-hover:text-primary"
                  )}>
                    <motion.div
                      initial={false}
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </motion.div>
                  </div>
                </div>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 md:p-8 pt-0 pl-6 md:pl-20 border-t border-primary/10">
                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
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
