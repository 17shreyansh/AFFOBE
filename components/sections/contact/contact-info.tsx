"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export function ContactInfo() {
  const contactDetails = [
    {
      title: "Office Address",
      icon: <MapPin className="w-5 h-5 text-primary" />,
      lines: ["123 Innovation Drive, Suite 400", "San Francisco, CA 94103", "United States"],
    },
    {
      title: "Email Us",
      icon: <Mail className="w-5 h-5 text-primary" />,
      lines: ["hello@affobe.com", "support@affobe.com", "careers@affobe.com"],
    },
    {
      title: "Call Us",
      icon: <Phone className="w-5 h-5 text-primary" />,
      lines: ["+1 (555) 123-4567", "+1 (555) 987-6543", "Toll Free: 1-800-AFFOBE"],
    },
    {
      title: "Business Hours",
      icon: <Clock className="w-5 h-5 text-primary" />,
      lines: ["Monday - Friday", "9:00 AM - 6:00 PM PST", "Weekend: Closed"],
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
    }
  }

  return (
    <div className="flex flex-col h-full justify-center lg:pr-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
        className="mb-16"
      >
        <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-6">
          Contact Details
        </h2>
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-foreground tracking-tighter mb-8 leading-[1.1]">
          We'd love to hear <br /> from you.
        </h3>
        <p className="text-muted-foreground text-lg leading-relaxed font-light max-w-md">
          Reach out to us through any of the channels below. We strive to respond to all inquiries within 24 hours.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid sm:grid-cols-2 gap-x-8 gap-y-16"
      >
        {contactDetails.map((detail, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group flex flex-col items-start"
          >
            <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-500">
              <div className="group-hover:brightness-0 group-hover:invert transition-all duration-500">
                {detail.icon}
              </div>
            </div>
            
            <h4 className="text-xl font-bold text-foreground mb-4 tracking-tight">
              {detail.title}
            </h4>
            
            <div className="space-y-1.5">
              {detail.lines.map((line, i) => (
                <p key={i} className="text-muted-foreground text-sm font-light">
                  {line}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
