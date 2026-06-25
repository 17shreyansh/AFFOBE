"use client";

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const clients = [
  { name: "Global Finance", sector: "Fintech" },
  { name: "AeroSpace X", sector: "Engineering" },
  { name: "NeoBank", sector: "Fintech" },
  { name: "Lumina", sector: "Healthcare" },
  { name: "Stripe", sector: "Payments" },
  { name: "Vercel", sector: "Infrastructure" },
  { name: "Quantum", sector: "Data" },
  { name: "Apex Labs", sector: "Research" }
];

export function Clients() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Staggered reveal for the client cells
      gsap.fromTo(".client-cell",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 bg-background relative overflow-hidden border-t border-border">
      
      {/* Soft background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-20 text-center md:text-left">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">
              Our Network
            </h3>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">Leaders</span>
            </h2>
          </div>
          <p className="text-muted-foreground font-mono text-sm max-w-sm">
            We build digital infrastructure for the world's most ambitious companies.
          </p>
        </div>
        
        {/* Architectural Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-border relative">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="client-cell group relative aspect-[4/3] border-b border-r border-border flex flex-col items-center justify-center p-8 overflow-hidden cursor-interactive bg-background"
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Hover Top Line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></div>
              
              {/* Content */}
              <span className="text-xl md:text-2xl font-black tracking-tight text-foreground/80 group-hover:text-primary transition-colors duration-300 mb-2">
                {client.name}
              </span>
              <span className="text-[10px] uppercase tracking-widest font-mono text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                {client.sector}
              </span>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
