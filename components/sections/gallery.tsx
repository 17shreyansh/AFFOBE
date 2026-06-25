"use client";

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const imagesCol1 = [
  {
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop",
    aspect: "aspect-[4/5]",
    size: "w-[80%]",
    align: "ml-auto"
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    aspect: "aspect-video",
    size: "w-full",
    align: "mx-0"
  },
];

const imagesCol2 = [
  {
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
    aspect: "aspect-square",
    size: "w-[60%]",
    align: "mx-auto"
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop",
    aspect: "aspect-[3/4]",
    size: "w-[90%]",
    align: "mr-auto"
  },
];

export function Gallery() {
  const containerRef = useRef<HTMLElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !col1Ref.current || !col2Ref.current) return;

    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const ctx = gsap.context(() => {
        // Subtle Parallax for entire columns
        gsap.to(col1Ref.current, {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        });

        gsap.to(col2Ref.current, {
          yPercent: -30,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        });

        // Image internal parallax
        const imgs = gsap.utils.toArray('.gallery-img');
        imgs.forEach((img: any) => {
          gsap.to(img, {
            yPercent: 10,
            ease: "none",
            scrollTrigger: {
              trigger: img.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            }
          });
        });
      }, containerRef);
      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 md:py-48 overflow-hidden bg-background border-t border-border">
      <div className="container relative z-10">
        
        <div className="text-center mb-32 md:mb-48 relative z-20">
          <p className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-6">Exhibition</p>
          <h2 className="text-[12vw] sm:text-[8vw] font-serif italic text-foreground tracking-tighter leading-none">
            Moments in <span className="font-sans font-black uppercase not-italic">Time.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-start h-[200vh] md:h-auto">
          
          <div ref={col1Ref} className="flex flex-col gap-32 w-full pt-0 md:pt-32">
            
            <div className="text-center max-w-sm mx-auto mb-16 px-4">
              <p className="text-xl font-serif italic text-muted-foreground">
                "Design is not just what it looks like and feels like. Design is how it works."
              </p>
            </div>

            {imagesCol1.map((item, i) => (
              <div key={i} className={`relative ${item.aspect} ${item.size} ${item.align} overflow-hidden group cursor-interactive border border-border shadow-xl`} data-cursor="view">
                <div className="absolute inset-0 bg-secondary/50"></div>
                <img 
                  src={item.src} 
                  alt="Gallery exhibition" 
                  className="gallery-img absolute inset-0 w-full h-[120%] -top-[10%] object-cover filter grayscale mix-blend-multiply opacity-80 transition-all duration-[1.5s] ease-out group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute -bottom-6 left-0 text-xs font-mono uppercase tracking-widest text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                  Exhibit 0{i + 1}
                </div>
              </div>
            ))}
          </div>

          <div ref={col2Ref} className="flex flex-col gap-48 w-full">
            {imagesCol2.map((item, i) => (
              <div key={i} className={`relative ${item.aspect} ${item.size} ${item.align} overflow-hidden group cursor-interactive border border-border shadow-2xl`} data-cursor="view">
                <div className="absolute inset-0 bg-secondary/50"></div>
                <img 
                  src={item.src} 
                  alt="Gallery exhibition" 
                  className="gallery-img absolute inset-0 w-full h-[120%] -top-[10%] object-cover filter grayscale mix-blend-multiply opacity-80 transition-all duration-[1.5s] ease-out group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute -right-8 top-1/2 -translate-y-1/2 rotate-90 origin-left text-xs font-mono uppercase tracking-widest text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Vol. {i + 3}
                </div>
              </div>
            ))}

            <div className="text-left max-w-sm pl-16 border-l border-primary mt-16">
              <p className="text-lg font-serif italic text-foreground">
                Documenting our creative process, spatial environments, and the culture of craft.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
