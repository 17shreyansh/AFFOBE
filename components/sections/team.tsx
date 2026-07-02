"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    name: 'Sarah',
    surname: 'Jenkins',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop',
    align: 'left'
  },
  {
    name: 'David',
    surname: 'Chen',
    role: 'Technical Lead',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop',
    align: 'right'
  },
  {
    name: 'Elena',
    surname: 'Rodriguez',
    role: 'Art Director',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1200&auto=format&fit=crop',
    align: 'left'
  }
];

export function Team() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const portraits = gsap.utils.toArray('.portrait-container');
      
      portraits.forEach((portrait: any) => {
        const img = portrait.querySelector('img');
        
        // Parallax image within crop
        gsap.to(img, {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: portrait,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-32 md:py-48 bg-background relative z-10 overflow-hidden" ref={containerRef}>
      
      {/* Decorative background typography */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full text-center pointer-events-none opacity-5">
        <h2 className="text-[25vw] font-black uppercase leading-none whitespace-nowrap mix-blend-multiply">
          The Studio
        </h2>
      </div>

      <div className="container relative z-10">
        
        <div className="mb-32 flex justify-between items-start border-t border-foreground pt-8">
          <p className="text-xs uppercase tracking-widest font-mono">
            [ Directors ]
          </p>
          <div className="text-right">
            <h2 className="text-5xl md:text-7xl font-serif italic">
              Faces behind <br/> the <span className="font-sans font-black uppercase not-italic">work.</span>
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-32 md:gap-48 mt-32">
          {team.map((member, index) => (
            <div 
              key={index}
              className={`relative flex flex-col md:flex-row items-center gap-8 ${member.align === 'right' ? 'md:flex-row-reverse' : ''}`}
            >
              
              {/* Portrait */}
              <div className="w-full md:w-[45%] lg:w-[35%]">
                <div 
                  className="portrait-container relative w-full aspect-[2/3] overflow-hidden group cursor-interactive border border-border shadow-2xl"
                >
                  <Image 
                    src={member.image} 
                    alt={`${member.name} ${member.surname}`}
                    fill
                    className="absolute inset-0 w-full h-[120%] -top-[10%] object-cover filter grayscale opacity-90 transition-all duration-1000 ease-out group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 [will-change:transform,filter]"
                  />
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              </div>
              
              {/* Giant Overlapping Typography */}
              <div className={`w-full md:w-[55%] lg:w-[65%] flex flex-col justify-center ${member.align === 'right' ? 'md:items-end text-right' : 'md:items-start text-left'} absolute md:relative top-1/2 -translate-y-1/2 md:top-auto md:translate-y-0 z-20 pointer-events-none`}>
                <h3 className="flex flex-col uppercase font-black leading-[0.8] tracking-tighter mix-blend-difference text-white md:mix-blend-normal md:text-foreground">
                  <span className="text-[15vw] md:text-[10vw] ml-4 md:ml-0">{member.name}</span>
                  <span className="text-[15vw] md:text-[10vw] text-transparent text-outline md:text-outline-hover ml-12 md:ml-24">{member.surname}</span>
                </h3>
                <div className="mt-8 flex items-center gap-4 ml-4 md:ml-0 bg-background/80 md:bg-transparent p-2 md:p-0 backdrop-blur-sm md:backdrop-blur-none">
                  {member.align === 'left' && <div className="w-12 h-[1px] bg-primary"></div>}
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">{member.role}</p>
                  {member.align === 'right' && <div className="w-12 h-[1px] bg-primary"></div>}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
