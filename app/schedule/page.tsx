'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Schedule from '@/components/Schedule';

export default function SchedulePage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-8 overflow-hidden">
        <div className="absolute inset-0 bg-dark-900">
          <div className="absolute inset-0 cyber-grid opacity-30"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl mb-6">
            <span className="gradient-text">Event Schedule</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Three days of non-stop innovation, learning, and excitement. Plan your Almago journey.
          </p>
        </div>
      </section>

      <Schedule />
      <Footer />
    </main>
  );
}
