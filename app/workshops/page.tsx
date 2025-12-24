'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Clock, Users, ArrowRight, Wrench, Calendar, MapPin, CheckCircle, Brain, Cpu, Code, Palette, Rocket, Shield, Smartphone, Link as LinkIcon } from 'lucide-react';
import { allWorkshops } from '@/lib/data';

const iconMap: Record<string, any> = {
  Brain,
  Cpu,
  Code,
  Palette,
  Rocket,
  Shield,
  Smartphone,
  Link: LinkIcon,
  Wrench,
};

export default function WorkshopsPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-dark-900">
          <div className="absolute inset-0 cyber-grid opacity-30"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-800/50 border border-accent-purple/30 mb-6">
            <Wrench size={14} className="text-accent-purple" />
            <span className="text-xs font-mono text-accent-purple tracking-wider">HANDS-ON LEARNING</span>
          </div>
          <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl mb-6">
            <span className="gradient-text">Workshops</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Deep dive into cutting-edge technologies with our {allWorkshops.length} expert-led workshops at Almago 2026. Get hands-on experience and build projects you can showcase.
          </p>
        </div>
      </section>

      {/* Workshop Stats */}
      <section className="relative py-8 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-accent-cyan mb-1">{allWorkshops.length}</div>
              <div className="text-gray-400 text-sm">Workshops</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-accent-purple mb-1">40+</div>
              <div className="text-gray-400 text-sm">Hours of Learning</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-accent-pink mb-1">8</div>
              <div className="text-gray-400 text-sm">Expert Instructors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-accent-orange mb-1">350+</div>
              <div className="text-gray-400 text-sm">Total Seats</div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops List */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-dark-800">
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {allWorkshops.map((workshop) => {
              const Icon = iconMap[workshop.icon] || Wrench;
              return (
                <Link
                  key={workshop.id}
                  href={`/workshops/${workshop.slug}`}
                  className="block card-cyber p-8 hover:border-accent-purple/50 group"
                >
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left - Main Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${workshop.color} p-0.5 flex-shrink-0`}>
                          <div className="w-full h-full bg-dark-900 rounded-xl flex items-center justify-center">
                            <Icon className="text-white" size={28} />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-heading font-bold text-2xl text-white mb-1 group-hover:text-accent-purple transition-colors">
                            {workshop.title}
                          </h3>
                          <p className="text-gray-400">
                            by <span className="text-accent-purple">{workshop.instructor}</span>
                          </p>
                          <p className="text-gray-500 text-sm">{workshop.designation}</p>
                        </div>
                      </div>

                      <p className="text-gray-400 mb-6">{workshop.description}</p>

                      {/* Topics */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-300 mb-3">What you'll learn:</h4>
                        <div className="flex flex-wrap gap-2">
                          {workshop.topics.slice(0, 5).map((topic) => (
                            <span
                              key={topic}
                              className="px-3 py-1 bg-dark-700 rounded-full text-sm text-gray-400 border border-gray-700"
                            >
                              {topic}
                            </span>
                          ))}
                          {workshop.topics.length > 5 && (
                            <span className="px-3 py-1 bg-dark-700 rounded-full text-sm text-accent-purple border border-gray-700">
                              +{workshop.topics.length - 5} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Prerequisites */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Prerequisites:</h4>
                        <ul className="space-y-1">
                          {workshop.prerequisites.slice(0, 3).map((prereq) => (
                            <li key={prereq} className="flex items-center gap-2 text-sm text-gray-500">
                              <CheckCircle size={14} className="text-green-500" />
                              {prereq}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right - Quick Info */}
                    <div className="lg:border-l lg:border-gray-800 lg:pl-8">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-gray-400">
                          <Calendar size={18} className="text-accent-cyan" />
                          <span>{workshop.date}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-400">
                          <Clock size={18} className="text-accent-purple" />
                          <span>{workshop.time}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-400">
                          <MapPin size={18} className="text-accent-pink" />
                          <span>{workshop.venue}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-400">
                          <Users size={18} className="text-accent-orange" />
                          <span>{workshop.capacity}</span>
                        </div>
                      </div>

                      <div className="mt-6 pt-6 border-t border-gray-800">
                        <div className="text-center mb-4">
                          <span className="text-gray-500 text-sm">Workshop Fee</span>
                          <p className="text-2xl font-heading font-bold text-accent-purple">{workshop.fee}</p>
                        </div>
                        <div className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-accent-purple/20 to-accent-pink/20 border border-accent-purple/30 rounded-lg text-sm font-medium text-accent-purple group-hover:border-accent-purple group-hover:bg-accent-purple/10 transition-all">
                          View Details
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl text-white mb-4">
            Can't decide which workshop to attend?
          </h2>
          <p className="text-gray-400 mb-8">
            Register for multiple workshops and get a combo discount! Contact us for more details.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="btn-cyber inline-flex items-center justify-center gap-2">
              Register Now
              <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="px-6 py-3 border border-gray-700 rounded-lg text-gray-300 hover:border-accent-cyan hover:text-accent-cyan transition-colors">
              Contact for Combo Offers
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
