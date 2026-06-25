"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollParallaxProps {
  children?: React.ReactNode;
  speed?: number; // < 1 means slower than scroll, > 1 means faster
  className?: string;
}

export function ScrollParallax({ children, speed = 0.5, className = "" }: ScrollParallaxProps) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!triggerRef.current || !targetRef.current) return;

    // Calculate Y movement based on speed.
    // If speed is 0.5, it moves half as fast as you scroll.
    // We achieve this by moving the element inside its container.
    const yPercent = (1 - speed) * 100;

    const ctx = gsap.context(() => {
      gsap.to(targetRef.current, {
        yPercent: yPercent,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, triggerRef);

    return () => ctx.revert();
  }, [speed]);

  return (
    <div ref={triggerRef} className={`relative ${className}`}>
      <div ref={targetRef} className="will-change-transform">
        {children}
      </div>
    </div>
  );
}

interface MouseParallaxProps {
  children?: React.ReactNode;
  strength?: number;
  className?: string;
}

export function MouseParallax({ children, strength = 0.05, className = "" }: MouseParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const target = targetRef.current;
    if (!container || !target) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = (clientX / innerWidth - 0.5) * 2; // -1 to 1
      const yPos = (clientY / innerHeight - 0.5) * 2; // -1 to 1

      gsap.to(target, {
        x: xPos * strength * 100,
        y: yPos * strength * 100,
        duration: 1,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [strength]);

  return (
    <div ref={containerRef} className={className}>
      <div ref={targetRef} className="will-change-transform">
        {children}
      </div>
    </div>
  );
}
