// Note: This is a new/experimental hero section meant to sit alongside the existing hero.tsx,
// so it can be swapped in later via a simple import change.

'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Layout, 
  Smartphone, 
  Code2, 
  Rocket, 
  Globe, 
  Zap, 
  CheckCircle2, 
  Cloud 
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Badge {
  icon: React.ElementType;
  label: string;
  position: string; // Tailwind positioning classes e.g., "top-10 left-10"
}

interface HeroSlide {
  id: string;
  headlineBlue: string;
  subtext: string;
  image: string;
  badges: Badge[];
  name?: string;
  role?: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: "website-dev",
    headlineBlue: "Powerful Business",
    subtext: "We build fast, modern, and SEO-optimized websites designed to grow your brand and drive results.",
    image: "/heroteam/heroimg1.jpeg",
    badges: [],
    name: "Atul Jain",
    role: "Co-Founder & CEO"
  },
  {
    id: "app-dev",
    headlineBlue: "Scalable Mobile & Web",
    subtext: "Deliver exceptional user experiences with our custom-built, high-performance app solutions.",
    image: "/heroteam/heroimg2.jpeg",
    badges: [],
    name: "Mayank Jain",
    role: "UI/UX Designer"
  },
  {
    id: "custom-software",
    headlineBlue: "Tailored Software",
    subtext: "Automate your workflows and scale efficiently with our custom enterprise software solutions.",
    image: "/heroteam/heroimg3.jpeg",
    badges: [],
    name: "Shreyansh",
    role: "Full Stack Developer"
  }
];

export default function NewHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // --- 3D Parallax Logic ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // We rotate slightly less on the Y axis to keep the slider feeling solid
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-3deg", "3deg"]);
  
  // Spring config for ultra-smooth easing
  const springConfig = { damping: 30, stiffness: 100, mass: 1.5 };
  const smoothRotateX = useSpring(rotateX, springConfig);
  const smoothRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Smoothly reset 3D rotation when mouse leaves
    mouseX.set(0);
    mouseY.set(0);
  };

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered, nextSlide]);

  const slide = heroSlides[currentSlide];

  return (
    <div className="flex flex-col w-full bg-white relative">

      <section 
        className="relative w-full flex items-center justify-center py-12 md:py-20 lg:py-24 perspective-[2000px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[85rem] relative z-10">
          
          {/* PREMIUM RAZORPAY-STYLE WRAPPER CARD WITH 3D PARALLAX */}
          <motion.div 
            style={{ rotateX: smoothRotateX, rotateY: smoothRotateY }}
            className="relative w-full bg-white border border-[#E5E7EB] rounded-[2rem] lg:rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col lg:flex-row min-h-[500px] lg:min-h-[550px] transform-gpu"
          >
            
            {/* Subtle Grid Texture for Premium Polish */}
            <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }} />

            {/* Navigation Arrows - Fixed to the edges of the card */}
            <button 
              onClick={prevSlide}
              className="absolute left-3 lg:left-6 top-1/2 -translate-y-1/2 z-40 w-12 h-12 flex items-center justify-center rounded-full bg-white/90 hover:bg-white hover:scale-110 active:scale-95 border border-gray-200 text-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-600 backdrop-blur-md"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-3 lg:right-6 top-1/2 -translate-y-1/2 z-40 w-12 h-12 flex items-center justify-center rounded-full bg-white/90 hover:bg-white hover:scale-110 active:scale-95 border border-gray-200 text-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-600 backdrop-blur-md"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* LEFT COLUMN: Text Content (50-55%) */}
            <div className="w-full lg:w-[55%] px-6 pt-16 pb-12 md:px-12 md:py-20 lg:p-20 flex flex-col justify-center relative z-30">
              <h1 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.1] mb-6">
                {/* DYNAMIC BLUE HEADLINE */}
                <div className="block text-blue-600 mb-2 relative h-[1.1em] overflow-hidden">
                  <AnimatePresence>
                    <motion.span
                      key={slide.id}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -30, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute left-0 top-0"
                    >
                      {slide.headlineBlue}
                    </motion.span>
                  </AnimatePresence>
                </div>
                {/* GRADIENT HEADLINE */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">Solutions that Convert</span>
              </h1>
              
              {/* DYNAMIC SUBTEXT */}
              <div className="relative mb-12 grid">
                {/* Invisible text block sets the height of the container to match the longest subtext for zero layout shift */}
                <p className="invisible col-start-1 row-start-1 text-base md:text-lg leading-relaxed font-medium pointer-events-none" aria-hidden="true">
                  We build fast, modern, and SEO-optimized websites designed to grow your brand and drive results.
                </p>
                <AnimatePresence>
                  <motion.p
                    key={slide.id}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 text-base md:text-lg text-gray-600 leading-relaxed font-medium"
                  >
                    {slide.subtext}
                  </motion.p>
                </AnimatePresence>
              </div>
              
              {/* FIXED BUTTONS */}
              <div className="flex flex-wrap items-center gap-6">
                <Link 
                  href="/contact"
                  className="relative inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-blue-600 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(37,99,235,0.6)] hover:bg-blue-500 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                >
                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black" />
                  <span className="relative">Sign Now</span>
                </Link>
                
                <Link 
                  href="/portfolio"
                  className="inline-flex items-center justify-center text-base font-semibold text-blue-600 hover:text-blue-800 transition-colors group"
                >
                  See Our Work
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* RIGHT COLUMN: Image Area (45-50%) */}
            <div className="w-full h-[300px] sm:h-[400px] lg:h-auto lg:absolute lg:top-0 lg:bottom-0 lg:right-0 lg:w-[48%] relative z-10">
              


              <AnimatePresence>
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 z-10"
                >
                  {/* Image blending directly into the slider without a box */}
                  <Image 
                    src={slide.image} 
                    alt={slide.headlineBlue} 
                    fill 
                    className="object-cover object-top lg:object-[right_top] mix-blend-normal"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />



                  {/* Floating Badges */}
                  {slide.badges.map((badge, idx) => (
                    <div
                      key={`${slide.id}-badge-${idx}`}
                      className={`absolute ${badge.position} bg-white/95 backdrop-blur-sm px-4 py-3 rounded-full shadow-xl shadow-gray-300/40 flex items-center gap-3 z-30 border border-gray-100`}
                    >
                      <div className="bg-blue-50 p-2 rounded-full">
                        <badge.icon className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                      </div>
                      <span className="text-sm md:text-base font-bold text-gray-900 whitespace-nowrap pr-2">{badge.label}</span>
                    </div>
                  ))}

                  {/* Team Member Name Tag */}
                  {(slide.name || slide.role) && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8 bg-white/80 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl shadow-black/5 border border-white/60 z-30"
                    >
                      <div className="flex flex-col text-right lg:text-left">
                        <span className="text-sm font-bold text-gray-900">{slide.name}</span>
                        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider mt-0.5">{slide.role}</span>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>

            </div>

            {/* Animated Progress Indicators */}
            <div className="absolute bottom-6 md:bottom-8 left-6 md:left-12 lg:left-20 flex items-center gap-3 z-40">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`relative h-2.5 rounded-full overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ${
                    idx === currentSlide ? 'w-12 bg-gray-200' : 'w-2.5 bg-gray-200 hover:bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  {idx === currentSlide && !isHovered && (
                    <motion.div
                      key={`progress-${currentSlide}`}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5, ease: "linear" }}
                      className="absolute top-0 left-0 h-full bg-blue-600"
                    />
                  )}
                  {idx === currentSlide && isHovered && (
                    <div className="absolute top-0 left-0 h-full w-full bg-blue-600" />
                  )}
                </button>
              ))}
            </div>
            
          </motion.div>
        </div>
      </section>

      {/* FIXED Trust bar row of logos below hero */}
      <div className="w-full border-t border-gray-100 bg-white/80 backdrop-blur-md py-6 md:py-8 z-20 relative">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl flex flex-col md:flex-row justify-center lg:justify-between items-center gap-6 lg:gap-12">
          <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider text-center md:text-left">
            Trusted by innovative teams
          </span>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="font-bold text-xl md:text-2xl text-gray-800 tracking-tight">TechCorp</div>
            <div className="font-bold text-xl md:text-2xl text-gray-800 italic">Innovate.io</div>
            <div className="font-bold text-xl md:text-2xl text-gray-800 tracking-tighter">GlobalSys</div>
            <div className="font-bold text-xl md:text-2xl text-gray-800 hidden sm:block">FutureApp</div>
            <div className="font-bold text-xl md:text-2xl text-gray-800 uppercase tracking-widest hidden lg:block">Nexus</div>
          </div>
        </div>
      </div>
    </div>
  );
}
