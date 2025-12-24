'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Code, Cpu, Gamepad2, Mic, Palette, Rocket, Brain, Search } from 'lucide-react';
import { allEvents } from '@/lib/data';

const categories = [
  { id: 'all', name: 'All Events', icon: Rocket },
  { id: 'technical', name: 'Technical', icon: Code },
  { id: 'robotics', name: 'Robotics', icon: Cpu },
  { id: 'gaming', name: 'Gaming', icon: Gamepad2 },
  { id: 'cultural', name: 'Cultural', icon: Mic },
  { id: 'design', name: 'Design', icon: Palette },
  { id: 'ai', name: 'AI/ML', icon: Brain },
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-800/50 border border-accent-cyan/30 mb-6">
            <Rocket size={14} className="text-accent-cyan" />
            <span className="text-xs font-mono text-accent-cyan tracking-wider">JANUARY 12-15, 2026</span>
          </div>
          <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl mb-6">
            <span className="gradient-text">All Events</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Explore {allEvents.length}+ exciting events at Almago 2026 - from technical competitions to cultural showcases. Four days of innovation and fun!
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
          {/* Results Count */}
          <p className="text-gray-400 mb-8">
            Showing {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''}
          </p>

          {filteredEvents.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No events found matching your criteria.</p>
              <button 
                onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                className="mt-4 text-accent-cyan hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <Link
                  key={event.id}
                  href={`/events/${event.slug}`}
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
                        ⭐ FEATURED
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
                        <span className="text-accent-orange font-semibold">{event.prize}</span>
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

                    {/* View Details Button */}
                    <div className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-accent-cyan/20 to-accent-purple/20 border border-accent-cyan/30 rounded-lg text-sm font-medium text-accent-cyan group-hover:border-accent-cyan group-hover:bg-accent-cyan/10 transition-all">
                      View Details
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
