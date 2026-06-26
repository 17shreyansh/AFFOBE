"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "@/components/animations/split-text";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const videoOverlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Cinematic Fade In
      tl.fromTo(videoOverlayRef.current,
        { opacity: 1 }, // Start fully black
        { opacity: 0.4, duration: 3, ease: "power2.inOut" } // Fade to reveal video
      );

      tl.from(".cinematic-text", { 
        y: 30, 
        opacity: 0, 
        duration: 2, 
        ease: "power3.out", 
        stagger: 0.3 
      }, 1);

      tl.from(".cinematic-line", {
        scaleX: 0,
        opacity: 0,
        duration: 1.5,
        ease: "power3.inOut"
      }, 2);

      // Subtle Parallax on scroll
      gsap.to(textContainerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: 150,
        opacity: 0,
      });

    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-primary selection:bg-white/20 selection:text-white"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden w-full h-full">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105"
          // Using a high-quality abstract placeholder video. Replace with your actual video asset.
          src="https://cdn.pixabay.com/video/2020/05/21/40049-425026937_large.mp4"
        />
        {/* Cinematic Dark Overlay */}
        <div ref={videoOverlayRef} className="absolute inset-0 bg-primary opacity-100 z-10 mix-blend-multiply" />
      </div>

      {/* Main Content */}
      <div ref={textContainerRef} className="container relative z-20 h-full flex flex-col justify-center items-center text-center">
        
        <div className="cinematic-text mb-6">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-medium text-white/60">
            The Future of Digital
          </p>
        </div>

        <h1 className="cinematic-text text-[12vw] sm:text-[8vw] lg:text-[7vw] font-black leading-[0.9] tracking-tighter text-white mb-8">
          <span className="block overflow-hidden pb-2">
            ALL IN ONE
          </span>
          <span className="block overflow-hidden pb-2 text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.9)]">
            SOLUTION.
          </span>
        </h1>

        <div className="cinematic-text max-w-xl mx-auto mb-12">
          <p className="text-base md:text-lg text-white/70 font-light leading-relaxed">
            Elevating brands through seamless integration. We provide the complete digital infrastructure to scale your vision.
          </p>
        </div>
        
        <div className="cinematic-text">
          <Link 
            href="/work" 
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 font-bold text-xs tracking-[0.2em] uppercase flex items-center gap-3">
              Discover <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>

      </div>

      {/* Cinematic Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <div className="cinematic-line w-[1px] h-16 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/3 bg-white animate-[scroll-down_2s_ease-in-out_infinite]" />
        </div>
      </div>

    </section>
  );
}
