'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

export default function ContactPage() {
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
            <span className="gradient-text">Contact</span> Us
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Have questions? We're here to help. Reach out to us through any of the channels below.
          </p>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
