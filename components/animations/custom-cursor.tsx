"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState("");

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = cursorDotRef.current;
    if (!cursor || !dot) return;

    // Snappy, almost instant tracking for the outer ring to remove the 'lazy' feeling
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.08, ease: "power2.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.08, ease: "power2.out" });
    
    // Instant tracking for the inner dot
    const dotXTo = gsap.quickTo(dot, "x", { duration: 0, ease: "none" });
    const dotYTo = gsap.quickTo(dot, "y", { duration: 0, ease: "none" });

    const moveCursor = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      dotXTo(e.clientX);
      dotYTo(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const isInteractive = 
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-interactive');

      const viewContainer = target.closest('[data-cursor="view"]');

      if (viewContainer) {
        setIsHovering(true);
        setHoverText("View");
      } else if (isInteractive) {
        setIsHovering(true);
        setHoverText("");
      } else {
        setIsHovering(false);
        setHoverText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);

    // Initial positioning off-screen to avoid flash
    gsap.set([cursor, dot], { xPercent: -50, yPercent: -50, opacity: 1 });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Outer Ring / Label Container */}
      <div
        ref={cursorRef}
        className={`pointer-events-none fixed top-0 left-0 z-[100] flex items-center justify-center rounded-full transition-all duration-300 ease-out hidden md:flex backdrop-blur-sm border ${
          isHovering ? "border-primary/50 bg-primary/10" : "border-primary/30"
        }`}
        style={{
          width: isHovering ? "80px" : "32px",
          height: isHovering ? "80px" : "32px",
        }}
      >
        <span 
          className={`text-primary text-[10px] uppercase tracking-widest font-mono transition-opacity duration-200 ${isHovering && hoverText ? 'opacity-100' : 'opacity-0'}`}
        >
          {hoverText}
        </span>
      </div>
      
      {/* Inner Dot */}
      <div 
        ref={cursorDotRef}
        className={`pointer-events-none fixed top-0 left-0 z-[100] rounded-full bg-primary hidden md:block transition-all duration-300 ${
          isHovering ? "w-1 h-1 opacity-50" : "w-1.5 h-1.5 opacity-100"
        }`}
      />
    </>
  );
}
