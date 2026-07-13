"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    subject: '',
    budget: '',
    message: ''
  })
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

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

    // Basic Validation
    if (!formData.name || !formData.email || !formData.message || !formData.subject) {
      setStatus('error')
      setErrorMessage('Please fill in all required fields.')
      return
    }

    // Simulate API Call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setStatus('success')
      setFormData({ 
        name: '', email: '', phone: '', company: '', website: '', subject: '', budget: '', message: '' 
      })
      
      // Reset success state after a few seconds
      setTimeout(() => {
        setStatus('idle')
      }, 5000)
    } catch {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again later.')
    }
  }

  // Soft, perfectly rounded input design
  const inputClasses = "w-full bg-slate-50/50 border border-transparent rounded-2xl px-6 py-4 text-sm focus:outline-none focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all duration-300 placeholder:text-muted-foreground/40"

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      className="w-full h-full flex flex-col justify-center"
    >
      <div className="mb-10">
        <h3 className="text-3xl md:text-4xl font-heading font-black text-foreground tracking-tight mb-4">
          Send us a message
        </h3>
        <p className="text-muted-foreground text-lg font-light">
          Tell us about your project, and we&apos;ll get back to you shortly.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        
        {/* Personal Details Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-3">
            <label htmlFor="name" className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground pl-2">
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
          
          <div className="flex flex-col gap-3">
            <label htmlFor="email" className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground pl-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={inputClasses}
              placeholder="john@example.com"
            />
          </div>
        </div>

        {/* Professional Details Row */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-3">
            <label htmlFor="phone" className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground pl-2">
              Phone
            </label>
            <input 
              type="tel" 
              id="phone" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={inputClasses}
              placeholder="+1 (555) 000-0000"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="company" className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground pl-2">
              Company
            </label>
            <input 
              type="text" 
              id="company" 
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={inputClasses}
              placeholder="Acme Corp"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="website" className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground pl-2">
              Website URL
            </label>
            <input 
              type="url" 
              id="website" 
              name="website"
              value={formData.website}
              onChange={handleChange}
              className={inputClasses}
              placeholder="https://example.com"
            />
          </div>
        </div>

        {/* Project Details Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-3">
            <label htmlFor="subject" className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground pl-2">
              Service Interested In <span className="text-red-500">*</span>
            </label>
            <select 
              id="subject" 
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`${inputClasses} text-foreground appearance-none cursor-pointer`}
            >
              <option value="">Select a service...</option>
              <option value="Web Design & Development">Web Design & Development</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="UI/UX Branding">UI/UX & Branding</option>
              <option value="Digital Marketing & SEO">Digital Marketing & SEO</option>
              <option value="General Inquiry">General Inquiry</option>
            </select>
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="budget" className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground pl-2">
              Estimated Budget
            </label>
            <select 
              id="budget" 
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className={`${inputClasses} text-foreground appearance-none cursor-pointer`}
            >
              <option value="">Select a range...</option>
              <option value="< $5,000">Less than $5,000</option>
              <option value="$5,000 - $10,000">$5,000 - $10,000</option>
              <option value="$10,000 - $25,000">$10,000 - $25,000</option>
              <option value="$25,000+">$25,000+</option>
              <option value="Not Sure Yet">Not Sure Yet</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="message" className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground pl-2">
            Project Details <span className="text-red-500">*</span>
          </label>
          <textarea 
            id="message" 
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className={`${inputClasses} resize-none`}
            placeholder="Tell us about your project goals, timeline, and requirements..."
          />
        </div>

        {/* Status Messages */}
        <AnimatePresence mode="wait">
          {status === 'error' && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-red-50 text-red-600 rounded-2xl px-6 py-4 text-sm flex items-center gap-3"
            >
              <AlertCircle size={18} />
              {errorMessage}
            </motion.div>
          )}
          
          {status === 'success' && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-green-50 text-green-700 rounded-2xl px-6 py-4 text-sm flex items-center gap-3"
            >
              <CheckCircle2 size={18} />
              Thank you! Your project details have been sent successfully. We will be in touch shortly.
            </motion.div>
          )}
        </AnimatePresence>

        <Button 
          type="submit" 
          disabled={status === 'loading'}
          className="mt-4 w-full md:w-auto md:self-start bg-primary text-primary-foreground rounded-full px-12 py-7 font-bold uppercase tracking-[0.2em] text-xs hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-lg shadow-primary/20"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </>
          ) : (
            'Send Project Inquiry'
          )}
        </Button>
      </form>
    </motion.div>
  )
}
