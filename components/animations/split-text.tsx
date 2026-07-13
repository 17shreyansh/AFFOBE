"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SplitTextProps {
  text: string;
  className?: string;
  as?: React.ElementType;
  delay?: number;
}

export function SplitText({
  text,
  className = "",
  as: Component = "div",
  delay = 0,
}: SplitTextProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !containerRef.current) return;

    const chars = containerRef.current.querySelectorAll(".char");
    
    gsap.fromTo(
      chars,
      {
        yPercent: 100,
        opacity: 0,
        rotateX: -90,
      },
      {
        yPercent: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1,
        stagger: 0.02,
        ease: "power4.out",
        delay: delay,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      }
    );
  }, [isMounted, delay]);

  // Split words first to maintain word wrapping, then split characters
  const words = text.split(" ");

  return (
    <Component
      ref={containerRef}
      className={`${className} flex flex-wrap`}
      style={{ perspective: "1000px" }}
      aria-label={text}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="word inline-block overflow-hidden mr-[0.25em]">
          {word.split("").map((char, charIndex) => (
            <span
              key={charIndex}
              className="char inline-block translate-y-[100%] opacity-0"
              aria-hidden="true"
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </Component>
  );
}
