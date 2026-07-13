"use client"

import React, { useEffect, useRef } from 'react'
import { motion, useInView, useSpring, useTransform, useMotionValue, useMotionTemplate } from 'framer-motion'
import { Calendar, CheckCircle2, HeartHandshake, Globe2 } from 'lucide-react'

function AnimatedCounter({ value, duration = 2.5 }: { value: number, duration?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })
  
  const springValue = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
    damping: 20,
    stiffness: 50
  })
  
  const displayValue = useTransform(springValue, (current) => Math.floor(current))
  
  useEffect(() => {
    if (inView) {
      springValue.set(value)
    }
  }, [inView, springValue, value])
  
  return <motion.span ref={ref}>{displayValue}</motion.span>
}

// Custom "God-Tier" 3D Magnetic Card Component
function MagneticCard({ stat, index }: { stat: { value: number; label: string; suffix: string; icon: React.ReactNode }; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  
  // Motion values for mouse tracking (absolute pixels for border/glare)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Motion values for 3D tilt (normalized -0.5 to 0.5)
  const normX = useMotionValue(0)
  const normY = useMotionValue(0)

  // Spring values for smooth return
  const smoothX = useSpring(normX, { damping: 20, stiffness: 150 })
  const smoothY = useSpring(normY, { damping: 20, stiffness: 150 })

  // Transform values for 3D rotation (tilting up to 20 degrees)
  const rotateX = useTransform(smoothY, [-0.5, 0.5], ["20deg", "-20deg"])
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ["-20deg", "20deg"])
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    
    // Absolute position for gradients
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
    
    // Normalized position for 3D tilt
    normX.set((e.clientX - rect.left) / rect.width - 0.5)
    normY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    normX.set(0)
    normY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
        transformStyle: "preserve-3d"
      }}
      className="relative w-full h-[320px] rounded-[2rem] p-[2px] cursor-pointer group bg-white shadow-xl shadow-primary/5"
    >
      {/* Dynamic Glowing Border */}
      <motion.div
        className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              hsl(var(--primary)),
              transparent 80%
            )
          `,
        }}
      />

      {/* Actual Card Inner Container */}
      <div className="relative w-full h-full bg-white rounded-[calc(2rem-2px)] flex flex-col items-center justify-center p-8 overflow-hidden z-10">
        
        {/* Holographic Foil Glare Effect */}
        <motion.div
          className="absolute inset-0 z-30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-color-dodge"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                rgba(59, 130, 246, 0.15),
                rgba(147, 51, 234, 0.05),
                transparent 50%
              )
            `,
          }}
        />

        {/* Massive Inner Watermark (Deep Parallax) */}
        <div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden"
          style={{ transform: "translateZ(-50px)" }}
        >
          <div className="text-[15rem] font-black font-heading text-slate-50 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 select-none tracking-tighter">
            {stat.value}
          </div>
        </div>
        
        {/* Animated Icon (Mid Parallax) */}
        <div 
          className="absolute top-8 left-8 text-primary/20 group-hover:text-primary transition-colors duration-500 z-10" 
          style={{ transform: "translateZ(30px)" }}
        >
          <div className="group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500">
            {stat.icon}
          </div>
        </div>

        {/* Main Number (High Parallax) */}
        <div 
          className="text-[5rem] md:text-[6rem] lg:text-[7rem] font-heading font-black mb-2 flex justify-center items-start tracking-tighter text-slate-800 drop-shadow-sm group-hover:scale-110 transition-transform duration-500 z-20" 
          style={{ transform: "translateZ(60px)" }}
        >
          <AnimatedCounter value={stat.value} />
          <span className="text-primary text-4xl md:text-5xl lg:text-6xl mt-4 ml-1">{stat.suffix}</span>
        </div>
        
        {/* Label (Mid Parallax) */}
        <p 
          className="text-muted-foreground font-semibold text-sm md:text-base uppercase tracking-[0.2em] group-hover:text-primary transition-colors duration-500 z-20 text-center" 
          style={{ transform: "translateZ(40px)" }}
        >
          {stat.label}
        </p>
      </div>
    </motion.div>
  )
}

export function CompanyStats() {
  const stats = [
    { value: 12, label: "Years of Work", suffix: "+", icon: <Calendar size={48} strokeWidth={1.5} /> },
    { value: 450, label: "Projects Finished", suffix: "+", icon: <CheckCircle2 size={48} strokeWidth={1.5} /> },
    { value: 98, label: "Happy Clients", suffix: "%", icon: <HeartHandshake size={48} strokeWidth={1.5} /> },
    { value: 24, label: "Countries Reached", suffix: "", icon: <Globe2 size={48} strokeWidth={1.5} /> }
  ]

  return (
    <section className="py-32 bg-blue-50/50 relative overflow-hidden border-y border-primary/10">
      {/* Massive Background Animated Watermark */}
      <div className="absolute top-[60%] -translate-y-1/2 left-0 w-full flex items-center overflow-hidden pointer-events-none select-none z-0 opacity-5">
        <motion.div
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          className="flex whitespace-nowrap min-w-max"
        >
          <span className="text-[15rem] md:text-[35rem] font-black font-heading leading-none text-primary">
            AFFOBE&nbsp;&nbsp;&nbsp;AFFOBE&nbsp;&nbsp;&nbsp;AFFOBE&nbsp;&nbsp;&nbsp;
          </span>
          <span className="text-[15rem] md:text-[35rem] font-black font-heading leading-none text-primary">
            AFFOBE&nbsp;&nbsp;&nbsp;AFFOBE&nbsp;&nbsp;&nbsp;AFFOBE&nbsp;&nbsp;&nbsp;
          </span>
        </motion.div>
      </div>

      <div className="container relative z-10 max-w-7xl perspective-[2000px]">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 inline-block px-4 py-1.5 rounded-full bg-primary/10"
          >
            By The Numbers
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-black text-foreground tracking-tight"
          >
            Our Global Impact
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <MagneticCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
