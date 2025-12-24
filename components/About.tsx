'use client';

import { useRef } from 'react';
import { Calendar, Users, Trophy, Lightbulb } from 'lucide-react';

const stats = [
  { icon: Calendar, value: '3', label: 'Days', suffix: '' },
  { icon: Users, value: '10', label: 'Participants', suffix: 'K+' },
  { icon: Trophy, value: '50', label: 'Events', suffix: '+' },
  { icon: Lightbulb, value: '100', label: 'Ideas Showcased', suffix: '+' },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dark-900">
        <div className="absolute inset-0 cyber-grid opacity-30"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-accent-purple/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-accent-cyan/10 to-transparent"></div>
      </div>

      <div ref={containerRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-800/50 border border-accent-cyan/30 mb-6">
            <span className="w-2 h-2 bg-accent-cyan rounded-full"></span>
            <span className="text-xs font-mono text-accent-cyan tracking-wider">ABOUT ALMAGO</span>
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            About <span className="gradient-text">Almago</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto"></div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              <span className="text-accent-cyan font-semibold">Almago 2026</span> is the ultimate celebration of 
              technology, innovation, and creativity. Hosted at Amrita Vishwa Vidyapeetham, Bangalore, this dynamic 3-day 
              extravaganza brings together students, professionals, and tech enthusiasts from across the nation.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Leading a Leap Forward — Dive into exciting competitions, hands-on workshops, and interactive sessions covering the latest 
              in engineering, robotics, AI, and sustainable technologies. More than just a competition, Almago 
              is a celebration of collaboration and knowledge exchange.
            </p>
            <p className="text-gray-400 leading-relaxed">
              With diverse events catering to different interests and skill sets, it's a vibrant showcase of 
              curiosity and creativity. Beyond tech, TechVerse incorporates cultural elements, creating a 
              festive and engaging atmosphere for everyone.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {['Hackathons', 'Workshops', 'Tech Talks', 'Networking'].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent-cyan rounded-full"></div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
              {['Gaming Arena', 'Robotics', 'AI/ML Events', 'Cultural Night'].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent-purple rounded-full"></div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative Frame */}
              <div className="absolute inset-0 border-2 border-accent-cyan/30 rounded-2xl transform rotate-3"></div>
              <div className="absolute inset-0 border-2 border-accent-purple/30 rounded-2xl transform -rotate-3"></div>
              
              {/* Main Visual */}
              <div className="relative bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl p-8 h-full flex items-center justify-center glow-border">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-2xl animate-pulse"></div>
                    <div className="absolute inset-1 bg-dark-900 rounded-xl flex items-center justify-center">
                      <span className="font-heading font-black text-4xl gradient-text">A</span>
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-white mb-2">Almago</h3>
                  <p className="text-accent-cyan font-mono text-sm">EST. 2020</p>
                  <div className="mt-4 pt-4 border-t border-gray-800">
                    <p className="text-gray-400 text-sm">Leading a Leap Forward</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent-cyan/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent-purple/20 rounded-full blur-xl animate-pulse delay-500"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="card-cyber p-6 text-center group"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="text-accent-cyan" size={24} />
                </div>
                <div className="font-heading font-bold text-3xl md:text-4xl text-white mb-1">
                  {stat.value}<span className="text-accent-cyan">{stat.suffix}</span>
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
