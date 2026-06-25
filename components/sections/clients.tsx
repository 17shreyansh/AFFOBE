"use client"

import React from 'react'
import { motion } from 'framer-motion'

const clients = [
  "GOOGLE", "APPLE", "NIKE", "TESLA", "SAMSUNG", "META", "AMAZON", "NETFLIX", "SPOTIFY", "LVMH"
]

export function Clients() {
  return (
    <section className="py-24 bg-background overflow-hidden border-y border-border/40">
      <div className="container mb-12">
        <h3 className="text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Trusted by Global Industry Leaders
        </h3>
      </div>
      
      <div className="relative flex whitespace-nowrap">
        {/* We use two identical sets of items to create a seamless infinite loop */}
        <motion.div 
          className="flex gap-24 px-12 items-center"
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {clients.concat(clients).map((client, index) => (
            <span 
              key={index} 
              className="text-4xl md:text-6xl font-heading font-bold text-foreground/20 hover:text-foreground transition-colors duration-300"
            >
              {client}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
