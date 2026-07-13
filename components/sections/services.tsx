"use client";

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollParallax, MouseParallax } from "@/components/animations/parallax";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Digital Ecosystems',
    description: 'We construct digital worlds. Pure, uncompromising identity systems built for the spatial web.',
    number: '01'
  },
  {
    title: 'Platform Architecture',
    description: 'Interfaces that feel alive. Component-led systems designed with the precision of modern engineering.',
    number: '02'
  },
  {
    title: 'Interactive Motion',
    description: 'Breaking the flat page. We build environments. Immersive, motion-rich digital architecture that responds to you.',
    number: '03'
  },
  {
    title: 'Creative Direction',
    description: 'Holistic vision from concept to execution. We dictate the mood, tone, and visual rhythm of the digital experience.',
    number: '04'
  }
];

export function Services() {
  const containerRef = useRef<HTMLElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !panelsRef.current) return;

    const panels = gsap.utils.toArray(".service-panel") as HTMLElement[];
    
    const ctx = gsap.context(() => {
      // Create a pinned timeline for overlapping panels
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%", // Scroll for 3 screen heights
          scrub: 1,
          pin: true,
        }
      });

      // Initially hide panels except first
      gsap.set(panels.slice(1), { yPercent: 100, opacity: 0, scale: 0.9, rotationX: 10 });

      panels.forEach((panel: HTMLElement, i) => {
        if (i === 0) return; // Skip first panel as it's already visible
        
        // Animate out previous panel
        tl.to(panels[i - 1], {
          yPercent: -20,
          scale: 0.95,
          opacity: 0.5,
          rotationX: -5,
          ease: "none"
        }, i);

        // Animate in current panel
        tl.to(panel, {
          yPercent: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
          ease: "power2.out"
        }, i);
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen bg-background overflow-hidden flex items-center justify-center">
      
      {/* Background Layer (Parallax) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ScrollParallax speed={0.3} className="w-full h-full">
          <div className="absolute inset-0 blueprint-grid opacity-20"></div>
          {/* Large background typography */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03]">
            <h2 className="text-[25vw] font-black tracking-tighter whitespace-nowrap">SYSTEMS</h2>
          </div>
        </ScrollParallax>
      </div>

      <div className="container relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-between gap-12 py-20">
        
        {/* Left: Static Title */}
        <div className="w-full md:w-1/3 flex flex-col items-start z-20">
          <MouseParallax strength={0.02}>
            <p className="text-xs uppercase tracking-widest font-mono text-primary mb-4">
              [ Capabilities ]
            </p>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
              Architecture <br />
              <span className="text-transparent text-outline">Modules</span>
            </h2>
          </MouseParallax>
        </div>

        {/* Right: Floating Panels Container */}
        <div ref={panelsRef} className="w-full md:w-2/3 h-[60vh] relative perspective-[1000px]">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-panel absolute inset-0 w-full h-full flex items-center justify-center"
            >
              <MouseParallax strength={0.04} className="w-full h-full flex items-center justify-center">
                <div className="glass-panel w-full max-w-lg p-10 md:p-14 rounded-3xl flex flex-col gap-8 shadow-2xl border border-white/60 dark:border-white/10 relative overflow-hidden group">
                  
                  {/* Decorative Blueprint Line inside panel */}
                  <div className="absolute top-0 right-10 w-[1px] h-full bg-primary/20"></div>
                  
                  <div className="text-[8vw] sm:text-[5vw] font-black leading-none text-primary/10 absolute top-4 right-8 select-none pointer-events-none">
                    {service.number}
                  </div>
                  
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black uppercase mb-4 leading-none tracking-tight text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-sans max-w-sm">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="mt-8 flex items-center gap-4 group-hover:gap-6 transition-all duration-300">
                    <div className="w-8 h-[1px] bg-primary"></div>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary cursor-interactive">
                      Initialize
                    </span>
                  </div>
                </div>
              </MouseParallax>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
