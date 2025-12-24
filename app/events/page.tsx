'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Code, Cpu, Gamepad2, Mic, Palette, Rocket, Brain, Filter, Search } from 'lucide-react';

const categories = [
  { id: 'all', name: 'All Events', icon: Rocket },
  { id: 'technical', name: 'Technical', icon: Code },
  { id: 'robotics', name: 'Robotics', icon: Cpu },
  { id: 'gaming', name: 'Gaming', icon: Gamepad2 },
  { id: 'cultural', name: 'Cultural', icon: Mic },
  { id: 'design', name: 'Design', icon: Palette },
  { id: 'ai', name: 'AI/ML', icon: Brain },
];

const allEvents = [
  {
    id: 1,
    title: 'Code Conquest',
    category: 'technical',
    description: 'A 24-hour competitive programming challenge to test your algorithmic skills. Solve complex problems and prove your coding prowess.',
    prize: '₹50,000',
    team: '1-2 members',
    date: 'March 15, 2026',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
    featured: true,
    registrationFee: '₹200',
    venue: 'Computer Center',
  },
  {
    id: 2,
    title: 'RoboWars',
    category: 'robotics',
    description: 'Build and battle your robots in this exciting combat robotics competition. Design, build, and fight your way to victory.',
    prize: '₹75,000',
    team: '3-5 members',
    date: 'March 16, 2026',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
    featured: true,
    registrationFee: '₹500',
    venue: 'Arena Ground',
  },
  {
    id: 3,
    title: 'Valorant Championship',
    category: 'gaming',
    description: 'Compete in the ultimate esports showdown with teams from across the country. Show your tactical skills in this 5v5 shooter.',
    prize: '₹40,000',
    team: '5 members',
    date: 'March 15, 2026',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop',
    featured: false,
    registrationFee: '₹300',
    venue: 'E-Sports Arena',
  },
  {
    id: 4,
    title: 'AI Innovation Challenge',
    category: 'ai',
    description: 'Build AI solutions to solve real-world problems in this 48-hour hackathon. Push the boundaries of artificial intelligence.',
    prize: '₹1,00,000',
    team: '2-4 members',
    date: 'March 15-17, 2026',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    featured: true,
    registrationFee: '₹400',
    venue: 'Innovation Lab',
  },
  {
    id: 5,
    title: 'Drone Racing',
    category: 'robotics',
    description: 'Navigate your drone through challenging obstacle courses at high speed. Test your piloting skills in this adrenaline-pumping event.',
    prize: '₹30,000',
    team: '1-2 members',
    date: 'March 16, 2026',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop',
    featured: false,
    registrationFee: '₹250',
    venue: 'Open Ground',
  },
  {
    id: 6,
    title: 'UI/UX Designathon',
    category: 'design',
    description: 'Design intuitive and beautiful interfaces for the apps of tomorrow. Showcase your creativity and user-centric thinking.',
    prize: '₹35,000',
    team: '1-3 members',
    date: 'March 16, 2026',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    featured: false,
    registrationFee: '₹200',
    venue: 'Design Studio',
  },
  {
    id: 7,
    title: 'Battle of Bands',
    category: 'cultural',
    description: 'Showcase your musical talent and compete for the ultimate rock glory. Electrify the audience with your performance.',
    prize: '₹45,000',
    team: '4-8 members',
    date: 'March 16, 2026',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
    featured: true,
    registrationFee: '₹500',
    venue: 'Main Stage',
  },
  {
    id: 8,
    title: 'CTF Cybersecurity',
    category: 'technical',
    description: 'Capture the flag competition testing your hacking and security skills. Find vulnerabilities and claim the flags.',
    prize: '₹60,000',
    team: '2-4 members',
    date: 'March 16, 2026',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
    featured: false,
    registrationFee: '₹300',
    venue: 'Cyber Lab',
  },
  {
    id: 9,
    title: 'Line Follower',
    category: 'robotics',
    description: 'Build an autonomous robot that can follow a line path. Optimize for speed and accuracy to win.',
    prize: '₹25,000',
    team: '2-3 members',
    date: 'March 15, 2026',
    image: 'https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?w=600&h=400&fit=crop',
    featured: false,
    registrationFee: '₹200',
    venue: 'Robotics Lab',
  },
  {
    id: 10,
    title: 'FIFA Tournament',
    category: 'gaming',
    description: 'Show your virtual football skills in this FIFA tournament. Compete against the best and claim the championship.',
    prize: '₹20,000',
    team: '1 member',
    date: 'March 17, 2026',
    image: 'https://images.unsplash.com/photo-1493711662062-fa541f7f76cb?w=600&h=400&fit=crop',
    featured: false,
    registrationFee: '₹150',
    venue: 'Gaming Zone',
  },
  {
    id: 11,
    title: 'Dance Fusion',
    category: 'cultural',
    description: 'Express yourself through dance. Solo and group performances welcome in all dance styles.',
    prize: '₹35,000',
    team: '1-8 members',
    date: 'March 17, 2026',
    image: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=600&h=400&fit=crop',
    featured: false,
    registrationFee: '₹200',
    venue: 'Main Stage',
  },
  {
    id: 12,
    title: 'Web Development Sprint',
    category: 'technical',
    description: 'Build a complete web application in 6 hours. Speed, creativity, and functionality matter.',
    prize: '₹40,000',
    team: '1-3 members',
    date: 'March 15, 2026',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
    featured: false,
    registrationFee: '₹250',
    venue: 'Lab 102',
  },
];

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEvents = allEvents.filter((event) => {
    const matchesCategory = activeCategory === 'all' || event.category === activeCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="relative min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-dark-900">
          <div className="absolute inset-0 cyber-grid opacity-30"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl mb-6">
            <span className="gradient-text">All Events</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Explore our diverse range of events at Almago - from technical competitions to cultural showcases.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="relative py-8 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-dark-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan transition-colors"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-accent-cyan to-accent-purple text-dark-900'
                      : 'bg-dark-800 border border-gray-700 text-gray-400 hover:border-accent-cyan hover:text-accent-cyan'
                  }`}
                >
                  <Icon size={16} />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-dark-800">
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No events found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="group card-cyber overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
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
                  <div className="p-6">
                    <h3 className="font-heading font-semibold text-xl text-white mb-2 group-hover:text-accent-cyan transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {event.description}
                    </p>
                    
                    {/* Meta Info */}
                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">Prize Pool:</span>
                        <span className="text-accent-cyan font-semibold">{event.prize}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">Team Size:</span>
                        <span className="text-gray-300">{event.team}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">Date:</span>
                        <span className="text-gray-300">{event.date}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">Registration:</span>
                        <span className="text-accent-purple">{event.registrationFee}</span>
                      </div>
                    </div>

                    {/* Register Button */}
                    <Link
                      href={`/events/${event.id}`}
                      className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-accent-cyan/20 to-accent-purple/20 border border-accent-cyan/30 rounded-lg text-sm font-medium text-accent-cyan hover:border-accent-cyan hover:bg-accent-cyan/10 transition-all group/btn"
                    >
                      Register Now
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
