"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from 'framer-motion'
import { Target, Eye, ArrowUpRight } from 'lucide-react'

function AbstractPanel({ 
  card, 
  index, 
  hoveredIndex, 
  setHoveredIndex, 
  isDesktop 
}: { 
  card: any, 
  index: number, 
  hoveredIndex: number | null, 
  setHoveredIndex: (v: number | null) => void,
  isDesktop: boolean 
}) {
  const isHovered = hoveredIndex === index
  const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index
  const isPrimaryBg = index === 1

  let desktopWidth = "50%"
  if (hoveredIndex !== null) {
    desktopWidth = isHovered ? "70%" : "30%"
  }

  // Mouse Spotlight Effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - left)
    mouseY.set(e.clientY - top)
  }

  return (
    <motion.div
      layout
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      onMouseMove={handleMouseMove}
      transition={{ type: "spring", stiffness: 200, damping: 30 }}
      style={{ width: isDesktop ? desktopWidth : '100%' }}
      className={`relative flex-1 md:flex-none flex flex-col justify-between p-12 md:p-20 overflow-hidden cursor-pointer ${card.bgClass} group min-h-[400px]`}
    >
      {/* Interactive Spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, ${isPrimaryBg ? 'rgba(255,255,255,0.08)' : 'hsl(var(--primary) / 0.05)'}, transparent 80%)`,
        }}
      />

      {/* Abstract Glowing Orb */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute top-0 right-0 w-96 h-96 rounded-full mix-blend-multiply blur-3xl opacity-30 pointer-events-none z-0
          ${isPrimaryBg ? 'bg-indigo-900/40' : 'bg-primary/10'}`}
      />

      {/* Infinite Marquee Typography */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full flex items-center overflow-hidden pointer-events-none select-none z-0 opacity-[0.03]">
        <motion.div
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          className="flex whitespace-nowrap min-w-max"
        >
          <span className={`text-[12rem] md:text-[30rem] font-black font-heading leading-none ${isPrimaryBg ? 'text-white' : 'text-primary'}`}>
            {card.watermark}&nbsp;&nbsp;&nbsp;{card.watermark}&nbsp;&nbsp;&nbsp;{card.watermark}&nbsp;&nbsp;&nbsp;
          </span>
          <span className={`text-[12rem] md:text-[30rem] font-black font-heading leading-none ${isPrimaryBg ? 'text-white' : 'text-primary'}`}>
            {card.watermark}&nbsp;&nbsp;&nbsp;{card.watermark}&nbsp;&nbsp;&nbsp;{card.watermark}&nbsp;&nbsp;&nbsp;
          </span>
        </motion.div>
      </div>

      <motion.div layout className="relative z-10 flex justify-between items-start">
        <div className={`w-20 h-20 rounded-2xl border flex items-center justify-center transition-all duration-500 group-hover:scale-110
          ${isPrimaryBg ? "bg-white/10 border-white/20 text-white" : "bg-primary/5 border-primary/10 text-primary group-hover:bg-primary"}
        `}>
          <div className={!isPrimaryBg ? "group-hover:brightness-0 group-hover:invert transition-all duration-500" : ""}>
            {card.icon}
          </div>
        </div>
        
        <div className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-500
          ${isPrimaryBg ? "border-white/20 text-white group-hover:bg-white/20" : "border-primary/20 text-primary group-hover:bg-primary group-hover:text-white"}
        `}>
          <ArrowUpRight className="w-6 h-6 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </motion.div>

      <motion.div layout className="relative z-10 max-w-2xl mt-12 md:mt-0">
        <motion.h3 
          layout="position"
          className={`text-4xl md:text-5xl lg:text-7xl font-heading font-black mb-6 tracking-tight transition-colors duration-500 whitespace-nowrap
            ${isPrimaryBg ? "text-white" : "text-foreground group-hover:text-primary"}
          `}
        >
          {card.title}
        </motion.h3>
        
        <AnimatePresence mode="wait">
          {(!isOtherHovered) && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`text-xl lg:text-2xl font-light leading-relaxed transition-colors duration-500
                ${isPrimaryBg ? "text-white/80" : "text-muted-foreground group-hover:text-slate-700"}
              `}
            >
              {card.description}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

export function MissionVision() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const checkIsDesktop = () => setIsDesktop(window.innerWidth >= 768)
    checkIsDesktop()
    window.addEventListener('resize', checkIsDesktop)
    return () => window.removeEventListener('resize', checkIsDesktop)
  }, [])

  const cards = [
    {
      title: "Our Mission",
      watermark: "MISSION",
      icon: <Target className="w-10 h-10 transition-transform duration-500" />,
      description: "To build great websites that help businesses grow and succeed online, mixing good tech with beautiful design.",
      bgClass: "bg-blue-50"
    },
    {
      title: "Our Vision",
      watermark: "VISION",
      icon: <Eye className="w-10 h-10 transition-transform duration-500" />,
      description: "To be known worldwide as a top digital agency that delivers high-quality work, solves hard problems, and creates amazing designs.",
      bgClass: "bg-primary"
    }
  ]

  return (
    <section className="h-auto md:h-[700px] w-full flex flex-col md:flex-row relative overflow-hidden border-y border-primary/10 bg-background">
      {cards.map((card, index) => (
        <AbstractPanel 
          key={index}
          card={card}
          index={index}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
          isDesktop={isDesktop}
        />
      ))}
    </section>
  )
}
