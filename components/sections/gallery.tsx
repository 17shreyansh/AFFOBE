"use client";

import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollParallax, MouseParallax } from "@/components/animations/parallax";

gsap.registerPlugin(ScrollTrigger);

const baseImages = [
  "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop",
];

// Duplicate to get 12 cards for a full continuous orbit
const allImages = Array.from({ length: 12 }).map((_, i) => ({
  src: baseImages[i % baseImages.length]
}));

export function Gallery() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const isHoveredRef = useRef(false);
  const [radii, setRadii] = useState({ x: 0, z: 0 });

  useEffect(() => {
    const updateRadii = () => {
      if (window.innerWidth < 768) {
        setRadii({ x: window.innerWidth * 0.4, z: window.innerWidth * 0.3 });
      } else if (window.innerWidth < 1024) {
        setRadii({ x: window.innerWidth * 0.35, z: 250 });
      } else {
        setRadii({ x: 500, z: 350 });
      }
    };
    updateRadii();
    window.addEventListener('resize', updateRadii);
    return () => window.removeEventListener('resize', updateRadii);
  }, []);

  useEffect(() => {
    if (radii.x === 0) return; // Wait for initialization

    let animationFrameId: number;
    let rotation = 0;
    // Speed: negative makes it rotate right to left
    const speed = -0.0025; 

    const render = () => {
      if (!isHoveredRef.current) {
        rotation += speed;
      }

      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        // Calculate current angle for this specific card
        const angle = (i / allImages.length) * Math.PI * 2 + rotation;
        
        // Elliptical path math
        const x = Math.sin(angle) * radii.x;
        const z = Math.cos(angle) * radii.z;

        // Depth factor between 0 (back) and 1 (front)
        const depthFactor = (z + radii.z) / (2 * radii.z);

        // Dynamically calculate aesthetics based on 3D depth
        const scale = 0.6 + (0.4 * depthFactor); // Scale down back cards slightly
        const opacity = 0.15 + (0.85 * depthFactor); // Back cards are transparent
        const blurAmount = (1 - depthFactor) * 8; // Max 8px blur at the back
        const rotateY = angle * (180 / Math.PI); // Face outward from center

        // Apply pure DOM manipulation to bypass React render cycle for 60fps
        card.style.transform = `translate3d(calc(-50% + ${x}px), -50%, ${z}px) rotateY(${rotateY}deg) scale(${scale})`;
        card.style.opacity = opacity.toString();
        card.style.filter = `blur(${blurAmount}px)`;
        card.style.zIndex = Math.round(depthFactor * 100).toString();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [radii]);

  return (
    <section ref={containerRef} className="py-24 md:py-32 overflow-hidden bg-background border-t border-border relative">
      {/* Background blueprint details */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute left-1/4 top-0 w-[1px] h-full bg-primary/30"></div>
        <div className="absolute right-1/4 top-0 w-[1px] h-full bg-primary/30"></div>
        <ScrollParallax speed={0.1} className="absolute inset-0 blueprint-grid"></ScrollParallax>
      </div>

      <div className="container relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-16 md:mb-32 relative z-20 flex flex-col items-center w-full">
          <MouseParallax strength={0.02}>
            <p className="text-xs uppercase tracking-widest font-mono text-primary mb-6">
              [ Visual Records ]
            </p>
            <h2 className="text-[10vw] sm:text-[6vw] font-black uppercase text-foreground tracking-tighter leading-none mb-12">
              Visual <span className="text-transparent text-outline">Archive</span>
            </h2>
          </MouseParallax>
          
          <div className="glass-panel p-6 rounded-2xl max-w-2xl w-full border-t-4 border-t-primary flex flex-col md:flex-row gap-8 justify-between text-left">
            <p className="font-mono text-sm text-muted-foreground flex-1">
              <span className="text-primary">{`>`}</span> ARCHIVING VISUAL DATA...<br/>
              <span className="text-primary">{`>`}</span> RENDERING SPATIAL MEMORIES...
            </p>
            <p className="font-mono text-sm text-muted-foreground uppercase flex-1 border-l border-primary/30 pl-8">
              <span className="text-primary font-bold">STATUS:</span> ACTIVE<br/>
              <span className="text-primary font-bold">PROTOCOL:</span> VISUAL_ARCHIVE
            </p>
          </div>
        </div>

        {/* Premium 3D Infinite Circular Gallery */}
        <div 
          className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center"
          style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
          onMouseEnter={() => isHoveredRef.current = true}
          onMouseLeave={() => isHoveredRef.current = false}
        >
          {radii.x > 0 && allImages.map((item, i) => (
            <div 
              key={i}
              ref={el => { if (el) cardsRef.current[i] = el; }}
              className="absolute left-1/2 top-1/2 w-[120px] h-[160px] md:w-[200px] md:h-[260px] origin-center will-change-transform"
            >
              <div className="relative w-full h-full group cursor-interactive glass-panel p-2 rounded-2xl border border-primary/20 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(37,99,235,0.3)] transition-all duration-300">
                <div className="relative w-full h-full overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                  <img 
                    src={item.src} 
                    alt={`Orbit record ${i}`} 
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
                  />
                </div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-primary/20 whitespace-nowrap">
                  [ Record {String(i + 1).padStart(2, '0')} ]
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
