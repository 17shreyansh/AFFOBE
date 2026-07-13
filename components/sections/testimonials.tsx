"use client"

import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ArrowLeft, ArrowRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CTO, TechVision Enterprise",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    text: "The architectural overhaul they delivered was nothing short of revolutionary. Our system latency dropped by 60%, and their team's understanding of scalable infrastructure is unmatched in the industry."
  },
  {
    name: "Michael Chen",
    role: "Founder, Zenith Financial",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    text: "Finding an agency that truly understands the intersection of premium design and complex backend engineering is rare. They didn't just build our platform; they elevated our entire brand identity."
  },
  {
    name: "Elena Rodriguez",
    role: "VP of Product, Quantum Scale",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    text: "Their attention to the micro-interactions and overall UX is phenomenal. Our conversion rates doubled within the first month of launch. They are true masters of their craft."
  }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [direction, setDirection] = useState(1)

  const nextTestimonial = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (isHovered) return
    const timer = setInterval(nextTestimonial, 6000)
    return () => clearInterval(timer)
  }, [isHovered, nextTestimonial])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 40 : -40,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 40 : -40,
      opacity: 0,
    }),
  }

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div 
          className="relative bg-[#0a0a0a] rounded-[2rem] p-8 md:p-12 lg:p-16 border border-zinc-800/50 shadow-2xl overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Decorative Quote */}
          <div className="absolute top-8 left-8 md:top-12 md:left-12 text-zinc-800/50 pointer-events-none">
            <Quote size={120} strokeWidth={1} />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center justify-between">
            
            {/* Content area */}
            <div className="flex-1 w-full relative h-[320px] sm:h-[280px] md:h-[240px] flex flex-col justify-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                  className="w-full flex flex-col h-full justify-between"
                >
                  <div>
                    {/* Stars */}
                    <div className="flex gap-1.5 mb-8">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>

                    {/* Text */}
                    <h3 className="text-xl md:text-2xl font-heading text-white leading-relaxed mb-8">
                      &quot;{testimonials[currentIndex].text}&quot;
                    </h3>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-5 mt-auto">
                    <Image 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name}
                      width={64}
                      height={64}
                      className="w-16 h-16 rounded-full object-cover border-2 border-zinc-800"
                    />
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-zinc-400 text-sm font-medium uppercase tracking-wider">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation arrows */}
            <div className="flex md:flex-col gap-4 mt-8 md:mt-0 shrink-0 md:ml-8">
              <button 
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                className="w-14 h-14 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
              >
                <ArrowLeft size={24} />
              </button>
              <button 
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="w-14 h-14 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
              >
                <ArrowRight size={24} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
