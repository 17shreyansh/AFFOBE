"use client"

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Search, Calendar } from 'lucide-react'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { MouseParallax } from '@/components/animations/parallax'

// Spotlight Card Component adapted for any theme with Frosted Glass
const SpotlightCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      className={`relative overflow-hidden rounded-[2.5rem] border-2 border-border/30 bg-card/40 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 ${className}`}
      data-cursor="view"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 z-30 mix-blend-overlay"
        style={{
          opacity: isFocused ? 1 : 0,
          background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, var(--primary, rgba(100,100,100,0.2)), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
};

const allPosts = [
  {
    title: 'The Future of Fintech: AI-Driven Risk Assessment',
    category: 'Fintech Insights',
    date: 'Oct 12, 2026',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop',
    excerpt: 'Explore how artificial intelligence is fundamentally changing how financial institutions evaluate and manage risk portfolios.',
    featured: true
  },
  {
    title: 'Scaling Enterprise IT Infrastructure',
    category: 'Architecture',
    date: 'Sep 28, 2026',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Transitioning monolithic legacy systems to highly available microservices.'
  },
  {
    title: 'Optimizing Digital Performance',
    category: 'Digital Growth',
    date: 'Sep 15, 2026',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    excerpt: 'How core web vitals and server response times correlate to revenue.',
    span: true
  },
  {
    title: 'Designing for the Spatial Web',
    category: 'UX/UI Design',
    date: 'Aug 22, 2026',
    image: 'https://images.unsplash.com/photo-1506729623306-b5a934d88b53?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Creating immersive, 3D interfaces that break free from 2D constraints.'
  },
  {
    title: 'The Role of Edge Computing',
    category: 'Engineering',
    date: 'Aug 05, 2026',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Moving computation closer to data to improve latency and costs.'
  }
];

const categories = ["All", "Fintech Insights", "Architecture", "Digital Growth", "UX/UI Design", "Engineering"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? allPosts 
    : allPosts.filter(post => post.category === activeCategory);

  const featuredPost = filteredPosts.find(p => p.featured) || filteredPosts[0];
  const gridPosts = filteredPosts.filter(p => p !== featuredPost);

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20 flex flex-col relative overflow-hidden">
      <Navbar alwaysSolid={true} />
      
      <div className="flex-1 w-full pt-32 pb-24 relative z-10">
        
        {/* Featured Post (Glassmorphism + Parallax) */}
        <AnimatePresence mode="wait">
          {(activeCategory === "All" || featuredPost?.category === activeCategory) && featuredPost && (
            <motion.section 
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="container mb-16 md:mb-24"
            >
              <Link href="#" className="block group">
                <SpotlightCard className="aspect-[16/10] lg:aspect-[21/9]">
                  <div className="absolute inset-0 flex flex-col lg:flex-row">
                    {/* Left Side: Content */}
                    <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-20 bg-gradient-to-br from-card via-card/80 to-transparent">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg shadow-primary/20">
                          Featured
                        </span>
                        <span className="text-muted-foreground text-sm font-semibold tracking-wide">{featuredPost.category}</span>
                      </div>
                      
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6 text-foreground max-w-2xl leading-[1.1] tracking-tight group-hover:text-primary transition-colors duration-500">
                        {featuredPost.title}
                      </h2>
                      
                      <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed font-light">
                        {featuredPost.excerpt}
                      </p>
                      
                      <div className="flex items-center text-foreground font-bold text-lg gap-3 mt-auto group-hover:gap-5 transition-all duration-300">
                        <span className="group-hover:text-primary transition-colors">Read Article</span> 
                        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center border border-border/50 group-hover:bg-primary group-hover:border-primary shadow-sm transition-colors">
                          <ArrowUpRight className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
                        </div>
                      </div>
                    </div>

                    {/* Right Side: Image with Parallax */}
                    <div className="absolute inset-0 lg:relative lg:flex-1 h-full w-full overflow-hidden bg-muted">
                      <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-card/80 via-transparent to-transparent z-10 pointer-events-none" />
                      <MouseParallax strength={0.04} className="w-full h-full">
                        <Image 
                          src={featuredPost.image} 
                          alt={featuredPost.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          quality={85}
                          className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 opacity-90"
                          priority
                        />
                      </MouseParallax>
                    </div>
                  </div>
                </SpotlightCard>
              </Link>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Premium Pill Filters */}
        <section className="container mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 p-3 rounded-[2rem] border-2 border-border/30 bg-secondary/20 backdrop-blur-xl shadow-sm">
            <div className="flex flex-nowrap overflow-x-auto w-full md:w-auto gap-2 hide-scrollbar mask-edges">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-7 py-3.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                    activeCategory === category 
                      ? 'bg-background text-foreground shadow-md border border-border/50 scale-105' 
                      : 'bg-transparent text-muted-foreground hover:bg-background/50 hover:text-foreground'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="relative w-full md:w-72 shrink-0 md:mr-2">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full pl-12 pr-6 py-4 rounded-full bg-background/50 border-2 border-border/30 focus:border-primary/50 focus:bg-background outline-none transition-all text-sm text-foreground font-medium placeholder:text-muted-foreground/70"
              />
            </div>
          </div>
        </section>

        {/* Bento Grid */}
        <section className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
            <AnimatePresence mode="popLayout">
              {gridPosts.map((post, index) => (
                <motion.article 
                  layout
                  key={post.title}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={post.span ? 'md:col-span-2 lg:col-span-2' : ''}
                >
                  <Link href="#" className="block h-full group">
                    <SpotlightCard className="h-full flex flex-col">
                      <div className={`relative overflow-hidden bg-muted ${post.span ? 'aspect-[21/9]' : 'aspect-[16/11]'}`}>
                        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10 pointer-events-none" />
                        <Image 
                          src={post.image} 
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          quality={75}
                          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 opacity-90"
                        />
                        <div className="absolute top-6 left-6 z-20">
                          <span className="bg-background/90 backdrop-blur-md border border-border/50 px-4 py-1.5 rounded-full text-xs font-bold text-foreground tracking-widest uppercase shadow-sm">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-8 md:p-10 flex flex-col flex-grow relative z-20 -mt-12 bg-gradient-to-t from-card via-card to-transparent pt-12">
                        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4 font-semibold tracking-wide">
                          <Calendar size={14} />
                          <span>{post.date}</span>
                        </div>
                        <h3 className={`font-bold font-heading mb-4 text-foreground group-hover:text-primary transition-colors duration-300 leading-tight tracking-tight ${post.span ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'}`}>
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground mb-8 flex-grow leading-relaxed font-light line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="mt-auto flex justify-between items-center pt-6 border-t-2 border-border/30">
                          <span className="text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors uppercase tracking-wider">Read Article</span>
                          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center border border-border/50 group-hover:bg-primary group-hover:border-primary transition-colors">
                            <ArrowUpRight className="w-4 h-4 text-foreground group-hover:text-primary-foreground transition-colors" />
                          </div>
                        </div>
                      </div>
                    </SpotlightCard>
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
          
          {gridPosts.length === 0 && !featuredPost && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-32 flex flex-col items-center justify-center text-center border-2 border-dashed border-border/50 rounded-[3rem] mt-12 bg-card/40 backdrop-blur-sm shadow-inner"
            >
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-6 border border-border/50 shadow-sm">
                <Search className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="text-3xl font-black font-heading text-foreground mb-3">No articles found</h3>
              <p className="text-muted-foreground max-w-md text-lg font-light">We couldn't find any articles in this category right now.</p>
            </motion.div>
          )}
        </section>
      </div>

      <Footer />
    </main>
  )
}
