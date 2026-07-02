"use client"

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'

export function CompanyStory() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Parallax for massive background typography
  const yBg = useTransform(scrollYProgress, [0, 1], [-200, 200])
  const opacityBg = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.3, 0])

  // Magnetic Box Effect
  const boxRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  // Smooth out the rotation
  const rotateX = useSpring(useTransform(y, [-100, 100], [15, -15]), { stiffness: 150, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-100, 100], [-15, 15]), { stiffness: 150, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!boxRef.current) return
    const rect = boxRef.current.getBoundingClientRect()
    // Calculate mouse position relative to center of the box
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set(e.clientX - centerX)
    y.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <section ref={containerRef} className="py-32 bg-background border-y border-primary/10 relative overflow-hidden">
      
      {/* Massive Background Typography Parallax */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0"
        style={{ y: yBg, opacity: opacityBg }}
      >
        <span className="text-[8rem] md:text-[18rem] lg:text-[22rem] font-black font-heading tracking-tighter text-transparent text-outline whitespace-nowrap" style={{ WebkitTextStroke: '3px hsl(var(--primary))' }}>
          AFFOBE
        </span>
      </motion.div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-16 lg:gap-24">
          
          <div className="flex-1 w-full relative">
            {/* Geometric Image Mask */}
            <motion.div 
              initial={{ opacity: 0, clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)' }}
              whileInView={{ opacity: 1, clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] as any }}
              className="relative h-full min-h-[500px] w-full group bg-primary overflow-hidden"
            >
              <Image 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" 
                alt="Company culture"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={80}
                className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
            </motion.div>
            
            {/* Magnetic Floating Box */}
            <div className="absolute -right-8 -bottom-8 hidden md:block max-w-[280px] z-20" style={{ perspective: 1000 }}>
              <motion.div
                ref={boxRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                animate={{ y: [0, -10, 0] }}
                transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
                className="bg-background/80 backdrop-blur-md p-8 shadow-2xl border border-primary/20 relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" style={{ transform: "translateZ(-10px)" }} />
                <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
                  <div className="text-5xl font-black text-primary mb-2 font-heading tracking-tighter">100%</div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-[0.2em] leading-relaxed">Independent<br/>& Founder Led</p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center py-8 relative">
            {/* Animated Accent Lines */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              className="absolute left-[-20px] top-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden lg:block"
            />

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
            >
              <h2 className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-8 border-b border-primary/10 pb-4 inline-block relative">
                Our Foundation
                {/* Small animated dot */}
                <motion.span 
                  animate={{ opacity: [1, 0.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary"
                />
              </h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-10 leading-[1.1] tracking-tight relative z-10">
                <span className="bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">Built on</span> <br />
                <span 
                  className="text-transparent text-outline inline-block relative" 
                  style={{ 
                    WebkitTextStroke: '1px hsl(var(--primary))',
                    filter: 'drop-shadow(0 0 15px hsl(var(--primary) / 0.5))'
                  }}
                >
                  great
                </span> <br />
                <span className="text-foreground">ideas.</span>
              </h3>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] as any }}
              className="space-y-6 text-muted-foreground font-light leading-relaxed text-lg relative z-10"
            >
              <p>
                AFFOBE started with a simple goal: a group of designers and coders wanting to make websites that look amazing and work perfectly.
              </p>
              <p>
                We do more than just write code. We solve real business problems and help you grow. We believe every part of your website is a chance to build your brand.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
