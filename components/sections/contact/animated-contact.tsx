"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from 'framer-motion'
import { MapPin, Phone, Mail, Loader2, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function AnimatedContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  // Mouse tracking for the entire container to create a subtle ambient glow
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - left)
    mouseY.set(e.clientY - top)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    if (!formData.name || !formData.email || !formData.message || !formData.service) {
      setStatus('error')
      setErrorMessage('Please fill in all required fields.')
      return
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again.')
    }
  }

  const inputClasses = "w-full bg-slate-50/50 border border-slate-200 rounded-2xl px-6 py-5 text-sm md:text-base focus:outline-none focus:bg-white focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all duration-500 placeholder:text-muted-foreground/40 shadow-[inset_0_2px_10px_rgba(0,0,0,0.01)] hover:border-primary/30"

  return (
    <section className="py-24 md:py-32 relative flex items-center justify-center min-h-[90vh] bg-slate-50">
      
      {/* Massive Infinite Background Marquee */}
      <div className="absolute top-[40%] -translate-y-1/2 left-0 w-full flex items-center overflow-hidden pointer-events-none select-none z-0 opacity-5">
        <motion.div
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 50, ease: "linear", repeat: Infinity }}
          className="flex whitespace-nowrap min-w-max"
        >
          <span className="text-[12rem] md:text-[20rem] font-black font-heading leading-none text-primary uppercase">
            SAY HELLO • SAY HELLO • SAY HELLO • 
          </span>
          <span className="text-[12rem] md:text-[20rem] font-black font-heading leading-none text-primary uppercase">
            SAY HELLO • SAY HELLO • SAY HELLO • 
          </span>
        </motion.div>
      </div>
      
      <div className="container max-w-7xl relative z-10 px-4 md:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          onMouseMove={handleMouseMove}
          className="relative w-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.07)] flex flex-col lg:flex-row bg-white border border-slate-100"
        >
          {/* Ambient Interactive Glow */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-30 opacity-[0.15] mix-blend-color-dodge hidden lg:block"
            style={{
              background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, var(--primary), transparent 80%)`
            }}
          />

          {/* LEFT SIDE: Radar Map & Contact Info */}
          <div className="lg:w-2/5 relative bg-slate-900 text-white p-12 md:p-16 flex flex-col justify-between overflow-hidden">
            
            {/* Architectural Grid / Radar Background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none z-0"
                 style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(2)' }} 
            />
            
            {/* Pulsing Radar Marker (Representing Noida) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
              <div className="relative flex items-center justify-center w-24 h-24">
                <motion.div 
                  animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
                  className="absolute inset-0 rounded-full bg-primary"
                />
                <motion.div 
                  animate={{ scale: [1, 1.8], opacity: [0.8, 0] }}
                  transition={{ duration: 2.5, delay: 0.5, repeat: Infinity, ease: "easeOut" }}
                  className="absolute inset-0 rounded-full bg-primary"
                />
                <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.8)] z-10" />
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-[#020817] via-transparent to-[#020817] pointer-events-none z-0 opacity-80" />

            <div className="relative z-10">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tighter mb-4 leading-[1.1] text-white"
              >
                Let&apos;s build <br className="hidden md:block" /> the future.
              </motion.h2>
              <p className="text-white/60 text-lg font-light leading-relaxed max-w-sm mb-16">
                Ready to elevate your digital presence? Send us a message and our team will get back to you within 24 hours.
              </p>
            </div>

            {/* Premium Floating Contact Details */}
            <div className="relative z-10 space-y-8">
              {[
                { icon: <Mail className="w-5 h-5" />, title: "Email Us", detail: "hello@affobe.com" },
                { icon: <Phone className="w-5 h-5" />, title: "Call Us", detail: "+91 8859868597" },
                { icon: <MapPin className="w-5 h-5" />, title: "Visit Us", detail: "A-24, First Floor, Sector 63, Noida Uttar Pradesh -201301" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (i * 0.1), duration: 0.8 }}
                  className="flex items-start gap-5 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:border-primary transition-all duration-500 shrink-0 shadow-lg">
                    {item.icon}
                  </div>
                  <div className="pt-1">
                    <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">{item.title}</p>
                    <p className="text-white/90 font-medium text-base tracking-tight group-hover:text-white transition-colors">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: The Highly Styled Form */}
          <div className="lg:w-3/5 p-8 md:p-16 relative z-10 flex flex-col justify-center">
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-2xl mx-auto">
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col gap-2 group relative">
                  <label htmlFor="name" className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-2 group-focus-within:text-primary transition-colors">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="John Doe"
                  />
                </div>
                
                {/* Email */}
                <div className="flex flex-col gap-2 group relative">
                  <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-2 group-focus-within:text-primary transition-colors">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="hello@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Phone */}
                <div className="flex flex-col gap-2 group relative">
                  <label htmlFor="phone" className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-2 group-focus-within:text-primary transition-colors">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="+91 0000000000"
                  />
                </div>
                
                {/* Services */}
                <div className="flex flex-col gap-2 group relative">
                  <label htmlFor="service" className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-2 group-focus-within:text-primary transition-colors">
                    Select Service <span className="text-red-500">*</span>
                  </label>
                  <select 
                    id="service" 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`${inputClasses} text-foreground appearance-none cursor-pointer`}
                  >
                    <option value="" disabled className="text-muted-foreground">Choose a service...</option>
                    <option value="Web Design">Web Design & UI/UX</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile App">Mobile App Development</option>
                    <option value="SEO & Marketing">SEO & Digital Marketing</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2 group relative">
                <label htmlFor="message" className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-2 group-focus-within:text-primary transition-colors">
                  Project Details <span className="text-red-500">*</span>
                </label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClasses} resize-none min-h-[140px]`}
                  placeholder="Tell us about your goals, timeline, and what you'd like to achieve..."
                />
              </div>

              {/* Status & Submit */}
              <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-6">
                
                <AnimatePresence mode="wait">
                  {status === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
                      className="text-red-500 text-sm flex items-center gap-2 font-medium bg-red-50 px-4 py-2 rounded-full"
                    >
                      <AlertCircle size={16} /> {errorMessage}
                    </motion.div>
                  )}
                  {status === 'success' && (
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
                      className="text-primary text-sm flex items-center gap-2 font-medium bg-primary/10 px-4 py-2 rounded-full"
                    >
                      <CheckCircle2 size={16} /> Message sent successfully!
                    </motion.div>
                  )}
                  {status === 'idle' || status === 'loading' ? <div className="hidden md:block" /> : null}
                </AnimatePresence>

                <Button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full md:w-auto bg-primary text-white rounded-full px-12 py-7 font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-4 shadow-[0_10px_40px_rgba(59,130,246,0.4)] group overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {status === 'loading' ? <><Loader2 className="w-4 h-4 animate-spin" /> SENDING</> : 'SEND MESSAGE'}
                    {status !== 'loading' && <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />}
                  </span>
                </Button>
              </div>

            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
