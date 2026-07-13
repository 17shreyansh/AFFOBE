"use client"

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, Variants } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import ImageTrail from '@/components/animations/ImageTrail'
export function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Cinematic parallax effects
  const yText = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.15])

  // Staggered text reveal variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  }

  return (
    <section ref={containerRef} className="relative h-screen min-h-[800px] w-full overflow-hidden bg-black flex items-center justify-center">

      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale: scaleImage }}
      >
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2500&auto=format&fit=crop"
          alt="The AFFOBE team"
          fill
          priority
          sizes="100vw"
          quality={85}
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        {/* Subtle vignette / overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
      </motion.div>

      {/* Image Trail Background Effect */}
      <div className="absolute inset-0 z-[5]">
        <ImageTrail
          items={[
            'https://picsum.photos/id/287/300/300',
            'https://picsum.photos/id/1001/300/300',
            'https://picsum.photos/id/1025/300/300',
            'https://picsum.photos/id/1026/300/300',
            'https://picsum.photos/id/1027/300/300',
            'https://picsum.photos/id/1028/300/300',
            'https://picsum.photos/id/1029/300/300',
            'https://picsum.photos/id/1030/300/300',
          ]}
          variant={1}
        />
      </div>

      {/* Main Content */}
      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="container relative z-10 flex flex-col items-center justify-center text-center mt-20 pointer-events-none"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mb-10"
        >
          <span className="text-primary tracking-[0.3em] uppercase text-sm font-semibold border border-primary/30 px-6 py-2 rounded-full">
            About Us
          </span>
        </motion.div>

        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl lg:text-[8rem] font-heading font-black text-white leading-[0.9] tracking-tighter uppercase max-w-5xl mx-auto"
        >
          <motion.span variants={itemVariants} className="block">Designing</motion.span>
          <motion.span variants={itemVariants} className="block text-transparent text-outline" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>Powerful</motion.span>
          <motion.span variants={itemVariants} className="block">Solutions.</motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mt-12 text-lg md:text-2xl text-gray-300 max-w-2xl font-light leading-relaxed"
        >
          We build amazing websites that look great and work perfectly.
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white/50"
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>

    </section>
  )
}
