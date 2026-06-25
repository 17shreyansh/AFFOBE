"use client";

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollParallax, MouseParallax } from "@/components/animations/parallax";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'Aura Sync',
    category: 'Digital Architecture',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    size: 'large',
    speed: 0.8
  },
  {
    id: 2,
    title: 'Nexus Flow',
    category: 'Spatial Web',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop',
    size: 'small',
    speed: 1.2
  },
  {
    id: 3,
    title: 'Prism UI',
    category: 'Design System',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop',
    size: 'medium',
    speed: 0.6
  },
  {
    id: 4,
    title: 'Orbit',
    category: 'Motion Identity',
    image: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1200&auto=format&fit=crop',
    size: 'large',
    speed: 1.4
  }
];

export function FeaturedWork() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Image reveal masks
      gsap.utils.toArray(".project-image-container").forEach((container: any) => {
        const image = container.querySelector("img");
        
        gsap.fromTo(image, 
          { scale: 1.2, opacity: 0 },
          { 
            scale: 1, 
            opacity: 1, 
            duration: 1.5, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: container,
              start: "top 80%",
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative bg-background py-40 overflow-hidden">
      
      {/* Background large typography */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.02] z-0">
        <ScrollParallax speed={0.4}>
          <h2 className="text-[35vw] font-black uppercase leading-none whitespace-nowrap text-primary">
            PORTFOLIO
          </h2>
        </ScrollParallax>
      </div>

      <div className="container relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 border-b border-border pb-10">
          <div>
            <p className="text-xs uppercase tracking-widest font-mono text-primary mb-4">
              [ Selected Projects ]
            </p>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Digital <br/> Ecosystems
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-4 group cursor-interactive mt-8 md:mt-0">
            <span className="text-sm font-bold uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">
              View Archive
            </span>
            <div className="w-12 h-[1px] bg-foreground group-hover:bg-primary transition-colors"></div>
          </button>
        </div>

        {/* Masonry-ish Floating Grid */}
        <div className="flex flex-col gap-32">
          
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-16 md:gap-8">
            <div className="w-full md:w-[60%]">
              <ScrollParallax speed={projects[0].speed}>
                <ProjectCard project={projects[0]} />
              </ScrollParallax>
            </div>
            <div className="w-full md:w-[30%] md:mt-64">
              <ScrollParallax speed={projects[1].speed}>
                <ProjectCard project={projects[1]} />
              </ScrollParallax>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-16 md:gap-8">
            <div className="w-full md:w-[40%] md:mt-32">
              <ScrollParallax speed={projects[2].speed}>
                <ProjectCard project={projects[2]} />
              </ScrollParallax>
            </div>
            <div className="w-full md:w-[50%]">
              <ScrollParallax speed={projects[3].speed}>
                <ProjectCard project={projects[3]} />
              </ScrollParallax>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: any }) {
  return (
    <div className="group cursor-interactive w-full" data-cursor="view">
      <MouseParallax strength={0.02} className="relative project-image-container overflow-hidden rounded-2xl aspect-[4/3] bg-secondary/20 mb-8">
        
        {/* Hover Video Placeholder (CSS logic here just simulates the reveal) */}
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none"></div>
        
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
        />
        
        {/* Floating blueprint overlay on hover */}
        <div className="absolute inset-0 blueprint-grid opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none z-20"></div>

      </MouseParallax>
      
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <div className="w-4 h-[1px] bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></div>
          <p className="text-xs font-mono uppercase tracking-widest text-primary">
            {project.category}
          </p>
        </div>
        <h3 className="text-3xl font-black uppercase tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
      </div>
    </div>
  );
}
