"use client";

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollParallax, MouseParallax } from "@/components/animations/parallax";
import { SplitText } from "@/components/animations/split-text";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { year: "2024", title: "System Initialization", description: "The foundation of our digital architecture was laid." },
  { year: "2025", title: "Framework Expansion", description: "Scaling the infrastructure to support global digital experiences." },
  { year: "2026", title: "Spatial Integration", description: "Breaking the flat web. Introducing depth and dimension." },
];

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!containerRef.current || !pathRef.current) return;

    const path = pathRef.current;
    const pathLength = path.getTotalLength();
    
    gsap.set(path, { strokeDasharray: pathLength, strokeDashoffset: pathLength });

    const ctx = gsap.context(() => {
      // Draw line on scroll
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom bottom",
          scrub: 1,
        }
      });

      // Animate milestones
      gsap.utils.toArray(".milestone-node").forEach((node: any, i) => {
        gsap.from(node, {
          opacity: 0,
          x: i % 2 === 0 ? -50 : 50,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: node,
            start: "top 80%",
          }
        });
      });

      // Floating stats
      gsap.utils.toArray(".floating-stat").forEach((stat: any) => {
        gsap.from(stat, {
          opacity: 0,
          y: 50,
          scale: 0.9,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: stat,
            start: "top 85%",
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative bg-background text-foreground py-32 overflow-hidden">
      
      {/* Background blueprint details */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute left-1/4 top-0 w-[1px] h-full bg-primary/30"></div>
        <div className="absolute right-1/4 top-0 w-[1px] h-full bg-primary/30"></div>
        <ScrollParallax speed={0.1} className="absolute inset-0 blueprint-grid"></ScrollParallax>
      </div>

      <div className="container relative z-10">
        
        {/* Intro */}
        <div className="text-center mb-32 max-w-4xl mx-auto">
          <MouseParallax strength={0.02}>
            <p className="text-xs uppercase tracking-widest font-mono text-primary mb-6">
              [ Core Protocol ]
            </p>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase text-balance leading-[0.9] tracking-tighter">
              We engineer <span className="text-transparent text-outline">Digital</span> Experiences.
            </h3>
          </MouseParallax>
        </div>

        {/* Floating Statistics Layer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40 relative z-20">
          <ScrollParallax speed={0.8} className="floating-stat">
            <div className="glass-panel p-8 rounded-2xl flex flex-col items-center text-center border-t-4 border-t-primary">
              <span className="text-6xl font-black text-primary mb-2">99.9%</span>
              <span className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Uptime precision</span>
            </div>
          </ScrollParallax>
          <ScrollParallax speed={1.2} className="floating-stat md:mt-16">
            <div className="glass-panel p-8 rounded-2xl flex flex-col items-center text-center border-t-4 border-t-primary">
              <span className="text-6xl font-black text-primary mb-2">60fps</span>
              <span className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Motion fidelity</span>
            </div>
          </ScrollParallax>
          <ScrollParallax speed={0.9} className="floating-stat md:-mt-8">
            <div className="glass-panel p-8 rounded-2xl flex flex-col items-center text-center border-t-4 border-t-primary">
              <span className="text-6xl font-black text-primary mb-2">0</span>
              <span className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Compromises</span>
            </div>
          </ScrollParallax>
        </div>

        {/* Timeline Journey */}
        <div className="relative max-w-5xl mx-auto py-20">
          
          {/* Connecting SVG Line */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] z-0 hidden md:block">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 2 1000">
              <path 
                ref={pathRef}
                d="M1,0 L1,1000" 
                fill="none" 
                stroke="hsl(var(--primary))" 
                strokeWidth="2"
                className="opacity-50"
              />
            </svg>
          </div>

          <div className="flex flex-col gap-24 relative z-10">
            {milestones.map((milestone, index) => (
              <div key={index} className={`milestone-node flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* Content Side */}
                <div className={`w-full md:w-1/2 flex flex-col ${index % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}>
                  <MouseParallax strength={0.03}>
                    <div className="glass-panel p-8 rounded-2xl border border-primary/20 relative group">
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <h4 className="text-2xl font-black uppercase mb-2 text-foreground">{milestone.title}</h4>
                      <p className="text-muted-foreground font-mono text-sm">{milestone.description}</p>
                    </div>
                  </MouseParallax>
                </div>

                {/* Center Node */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background border-4 border-primary items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)] z-20">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                </div>

                {/* Year Side */}
                <div className={`w-full md:w-1/2 flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                  <ScrollParallax speed={index % 2 === 0 ? 0.8 : 1.1}>
                    <span className="text-[8vw] md:text-[6vw] font-black text-transparent text-outline opacity-40">
                      {milestone.year}
                    </span>
                  </ScrollParallax>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
