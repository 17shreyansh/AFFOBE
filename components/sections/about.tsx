"use client"

import React from 'react'
import { TextReveal } from '@/components/animations/text-reveal'

export function About() {
  return (
    <section className="py-32 md:py-48 bg-background relative z-10 rounded-t-[3rem] -mt-[3rem]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
              [ Who We Are ]
            </h3>
          </div>
          <div className="lg:col-span-8">
            <TextReveal className="text-fluid-3xl font-heading mb-12">
              We are a collective of visionaries, designers, and engineers united by a single purpose: to build digital experiences that redefine what is possible on the web.
            </TextReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
              {[
                { number: '15+', label: 'Years of Excellence' },
                { number: '200+', label: 'Global Awards' },
                { number: '1B+', label: 'Revenue Generated' }
              ].map((stat, i) => (
                <div key={i} className="border-t border-border pt-6">
                  <h4 className="text-fluid-2xl font-bold font-heading mb-2">{stat.number}</h4>
                  <p className="text-muted-foreground text-sm uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
