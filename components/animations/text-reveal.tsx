"use client"

import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

interface TextRevealProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: string
}

export function TextReveal({ children, className, ...props }: TextRevealProps) {
  const container = useRef<HTMLHeadingElement>(null)

  useGSAP(() => {
    const chars = container.current?.querySelectorAll('.char')
    if (!chars) return

    gsap.fromTo(
      chars,
      { opacity: 0.2 },
      {
        opacity: 1,
        stagger: 0.05,
        ease: 'none',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
          end: 'bottom 50%',
          scrub: true,
        },
      }
    )
  }, { scope: container })

  const splitText = (text: string) => {
    return text.split('').map((char, i) => (
      <span key={i} className="char transition-colors duration-500">
        {char}
      </span>
    ))
  }

  return (
    <h2
      ref={container}
      className={cn('text-fluid-4xl font-bold leading-tight font-heading', className)}
      {...props}
    >
      {splitText(children)}
    </h2>
  )
}
