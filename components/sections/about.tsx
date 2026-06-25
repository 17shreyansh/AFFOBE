"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { TextReveal } from '@/components/animations/text-reveal'
import { ShieldCheck, Cpu, Globe } from 'lucide-react'

export function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={containerRef} className="py-32 md:py-48 bg-background relative z-10 overflow-hidden rounded-t-[3rem] -mt-[3rem]">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute bottom-[10%] right-[5%] w-[30rem] h-[30rem] bg-blue-500/5 rounded-full blur-[80px] mix-blend-screen" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-primary" />
              <h3 className="text-sm font-bold uppercase tracking-widest text-primary">
                About AFFOBE
              </h3>
            </div>
            
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] w-full shadow-2xl group border border-border">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0" />
              <motion.img 
                style={{ y }}
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop" 
                alt="Cybersecurity and Tech infrastructure" 
                className="w-full h-[120%] object-cover absolute top-[-10%] left-0"
              />
              
              {/* Floating Badge */}
              <motion.div 
                className="absolute bottom-8 left-8 right-8 bg-background/80 backdrop-blur-md border border-border/50 p-6 rounded-2xl z-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Enterprise Grade</p>
                    <p className="text-sm text-muted-foreground">Secure & Scalable IT</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div className="lg:col-span-6 lg:col-start-7">
            <TextReveal className="text-4xl md:text-5xl lg:text-6xl mb-8">
              Driving the Future of Digital Business
            </TextReveal>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              AFFOBE is a premier technology partner specializing in high-performance digital solutions, fintech innovations, and enterprise-grade IT infrastructure. We bridge the gap between complex technology and seamless user experiences.
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {[
                { icon: <Cpu className="w-6 h-6" />, title: 'Advanced Tech', desc: 'Leveraging AI and modern frameworks.' },
                { icon: <Globe className="w-6 h-6" />, title: 'Global Scale', desc: 'Deployments across multiple continents.' }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                >
                  <div className="text-primary mt-1">{feature.icon}</div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              {[
                { number: '99.9%', label: 'Uptime' },
                { number: '500+', label: 'Clients' },
                { number: '$5B+', label: 'Processed' }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                >
                  <h4 className="text-3xl md:text-4xl font-bold font-heading mb-1 text-foreground">{stat.number}</h4>
                  <p className="text-primary text-xs uppercase tracking-wider font-semibold">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
