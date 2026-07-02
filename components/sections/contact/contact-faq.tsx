"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

export function ContactFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary depending on scope and complexity. A typical corporate website takes 6-8 weeks from discovery to launch, while complex web applications may take 3-6 months. We provide a detailed timeline during the proposal phase."
    },
    {
      question: "Do you offer post-launch support and maintenance?",
      answer: "Yes, we offer comprehensive maintenance retainers. This includes security updates, performance monitoring, regular backups, and a dedicated amount of hours for ongoing feature development or design tweaks."
    },
    {
      question: "What is your pricing structure?",
      answer: "We offer both fixed-price project engagements and dedicated team retainers. Pricing is based on the specific requirements, team size needed, and timeline of your project. Contact us for a custom quote."
    },
    {
      question: "Will I have a dedicated project manager?",
      answer: "Absolutely. Every client is assigned a dedicated technical project manager who serves as your single point of contact, ensuring clear communication and timely delivery throughout the entire engagement."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We specialize in modern, scalable web technologies including React, Next.js, Node.js, TypeScript, and cloud infrastructure on AWS and Vercel. We always choose the best stack tailored to your specific business needs."
    }
  ]

  return (
    <div className="max-w-4xl mx-auto mb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
        className="mb-16 text-center"
      >
        <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-6">
          Common Questions
        </h2>
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-foreground tracking-tighter leading-[1.1]">
          Frequently Asked <br/> Questions.
        </h3>
      </motion.div>

      <div className="flex flex-col">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index

          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
              className="border-b border-primary/10"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between py-8 text-left group"
              >
                <h4 className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 pr-8 ${isOpen ? 'text-primary' : 'text-foreground group-hover:text-primary'}`}>
                  {faq.question}
                </h4>
                <div className={`shrink-0 transition-transform duration-500 ${isOpen ? 'text-primary rotate-180' : 'text-muted-foreground group-hover:text-primary group-hover:scale-110'}`}>
                  {isOpen ? <Minus size={24} strokeWidth={1.5} /> : <Plus size={24} strokeWidth={1.5} />}
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-muted-foreground text-lg leading-relaxed font-light pr-12">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
