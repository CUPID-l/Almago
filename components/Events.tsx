'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Code, Cpu, Gamepad2, Mic, Palette, Rocket, Brain, Wrench } from 'lucide-react';

const categories = [
  { id: 'all', name: 'All Events', icon: Rocket },
  { id: 'technical', name: 'Technical', icon: Code },
  { id: 'robotics', name: 'Robotics', icon: Cpu },
  { id: 'gaming', name: 'Gaming', icon: Gamepad2 },
  { id: 'cultural', name: 'Cultural', icon: Mic },
  { id: 'design', name: 'Design', icon: Palette },
  { id: 'ai', name: 'AI/ML', icon: Brain },
];

const events = [
  {
    id: 1,
    title: 'Code Conquest',
    category: 'technical',
    description: 'A 24-hour competitive programming challenge to test your algorithmic skills.',
    prize: '₹50,000',
    team: '1-2 members',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
    featured: true,
  },
  {
    id: 2,
    title: 'RoboWars',
    category: 'robotics',
    description: 'Build and battle your robots in this exciting combat robotics competition.',
    prize: '₹75,000',
    team: '3-5 members',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
    featured: true,
  },
  {
    id: 3,
    title: 'Valorant Championship',
    category: 'gaming',
    description: 'Compete in the ultimate esports showdown with teams from across the country.',
    prize: '₹40,000',
    team: '5 members',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
    featured: false,
  },
  {
    id: 4,
    title: 'AI Innovation Challenge',
    category: 'ai',
    description: 'Build AI solutions to solve real-world problems in this 48-hour hackathon.',
    prize: '₹1,00,000',
    team: '2-4 members',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
    featured: true,
  },
  {
    id: 5,
    title: 'Drone Racing',
    category: 'robotics',
    description: 'Navigate your drone through challenging obstacle courses at high speed.',
    prize: '₹30,000',
    team: '1-2 members',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=300&fit=crop',
    featured: false,
  },
  {
    id: 6,
    title: 'UI/UX Designathon',
    category: 'design',
    description: 'Design intuitive and beautiful interfaces for the apps of tomorrow.',
    prize: '₹35,000',
    team: '1-3 members',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
    featured: false,
  },
  {
    id: 7,
    title: 'Battle of Bands',
    category: 'cultural',
    description: 'Showcase your musical talent and compete for the ultimate rock glory.',
    prize: '₹45,000',
    team: '4-8 members',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
    featured: true,
  },
  {
    id: 8,
    title: 'CTF Cybersecurity',
    category: 'technical',
    description: 'Capture the flag competition testing your hacking and security skills.',
    prize: '₹60,000',
    team: '2-4 members',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop',
    featured: false,
  },
];

export default function Events() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredEvents = activeCategory === 'all' 
    ? events 
    : events.filter(event => event.category === activeCategory);

  return (
    <section id="events" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-800">
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-900/50 border border-accent-cyan/30 mb-6">
            <span className="w-2 h-2 bg-accent-purple rounded-full"></span>
            <span className="text-xs font-mono text-accent-cyan tracking-wider">EVENTS & COMPETITIONS</span>
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Experience <span className="gradient-text">Almago</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Embark on a journey with our diverse events and competitions. From coding challenges to 
            robotics battles, there's something for everyone at Almago.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-accent-cyan to-accent-purple text-dark-900'
                    : 'bg-dark-900/50 border border-gray-700 text-gray-400 hover:border-accent-cyan hover:text-accent-cyan'
                }`}
              >
                <Icon size={16} />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="group card-cyber overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/20 to-transparent"></div>
                {event.featured && (
                  <div className="absolute top-3 right-3 px-3 py-1 bg-accent-orange/90 rounded-full text-xs font-semibold text-dark-900">
                    FEATURED
                  </div>
                )}
                <div className="absolute bottom-3 left-3 px-3 py-1 bg-dark-900/80 rounded-full text-xs font-mono text-accent-cyan border border-accent-cyan/30">
                  {event.category.toUpperCase()}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-heading font-semibold text-lg text-white mb-2 group-hover:text-accent-cyan transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>
                
                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs mb-4">
                  <div className="flex items-center gap-2 text-accent-cyan">
                    <span className="font-mono">PRIZE:</span>
                    <span className="font-semibold">{event.prize}</span>
                  </div>
                  <div className="text-gray-500">
                    {event.team}
                  </div>
                </div>

                {/* Register Button */}
                <Link
                  href={`/events/${event.id}`}
                  className="flex items-center justify-center gap-2 w-full py-2.5 bg-dark-700 border border-gray-700 rounded-lg text-sm font-medium text-gray-300 hover:border-accent-cyan hover:text-accent-cyan transition-colors group/btn"
                >
                  View Details
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/events" className="btn-cyber inline-flex items-center gap-2">
            View All Events
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
