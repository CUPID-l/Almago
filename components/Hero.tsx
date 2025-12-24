'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Sparkles } from 'lucide-react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-dark-900">
        <div className="absolute inset-0 cyber-grid"></div>
        <div className="absolute inset-0 hex-pattern"></div>
        
        {/* Floating Orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
          }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-pink/5 rounded-full blur-3xl"
        ></div>
      </div>

      {/* Scanline Effect */}
      <div className="absolute inset-0 scanline pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status Bar */}
        <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-dark-800/50 border border-accent-cyan/30 mb-8 backdrop-blur-sm">
          <span className="flex items-center gap-2 text-xs font-mono text-accent-cyan">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            SYSTEM STATUS ACTIVE
          </span>
          <span className="w-px h-4 bg-gray-700"></span>
          <span className="text-xs font-mono text-gray-400">SIGNAL ███████ 100%</span>
        </div>

        {/* Tagline */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-accent-purple/10 border border-accent-purple/30 text-accent-purple text-sm font-medium">
            <Sparkles size={14} />
            #LEADINGALEAPFORWARD
          </span>
        </div>

        {/* Main Title */}
        <h1 className="font-heading font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-4">
          <span className="gradient-text-animated">ALMAGO</span>
        </h1>
        
        {/* Year */}
        <div className="relative inline-block mb-8">
          <span className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white">2026</span>
          <div className="absolute -inset-4 bg-accent-cyan/20 blur-2xl -z-10"></div>
        </div>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light mb-4">
          <span className="text-accent-cyan font-medium">Leading a Leap Forward</span>
        </p>
        <p className="max-w-2xl mx-auto text-gray-400 mb-12">
          Amrita Vishwa Vidyapeetham, Bangalore presents three days of groundbreaking innovation, 
          immersive workshops, thrilling competitions, and unforgettable cultural performances.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="/events" className="btn-cyber px-8 py-4 text-base">
            Explore Events
          </Link>
          <Link
            href="/register"
            className="px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-purple text-dark-900 font-heading font-semibold text-base uppercase tracking-wider rounded hover:opacity-90 transition-opacity"
          >
            Register Now
          </Link>
        </div>

        {/* Event Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="card-cyber p-6 text-center">
            <div className="text-3xl font-heading font-bold text-accent-cyan mb-1">50+</div>
            <div className="text-gray-400 text-sm">Events</div>
          </div>
          <div className="card-cyber p-6 text-center">
            <div className="text-3xl font-heading font-bold text-accent-purple mb-1">20+</div>
            <div className="text-gray-400 text-sm">Workshops</div>
          </div>
          <div className="card-cyber p-6 text-center">
            <div className="text-3xl font-heading font-bold text-accent-pink mb-1">₹5L+</div>
            <div className="text-gray-400 text-sm">Prize Pool</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-gray-400">
          <span className="text-xs font-mono mb-2">SCROLL</span>
          <ChevronDown size={20} className="text-accent-cyan" />
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-24 left-8 w-32 h-32 border-l-2 border-t-2 border-accent-cyan/30"></div>
      <div className="absolute bottom-8 right-8 w-32 h-32 border-r-2 border-b-2 border-accent-purple/30"></div>
    </section>
  );
}
