'use client';

import Link from 'next/link';
import { Clock, Users, ArrowRight, Wrench, Cpu, Code, Palette, Brain, Rocket } from 'lucide-react';

const workshops = [
  {
    id: 1,
    title: 'Machine Learning Fundamentals',
    instructor: 'Dr. Priya Sharma',
    duration: '4 hours',
    capacity: '50 seats',
    date: 'March 15, 2026',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    description: 'Learn the basics of ML algorithms, data preprocessing, and model training with hands-on projects.',
  },
  {
    id: 2,
    title: 'IoT & Embedded Systems',
    instructor: 'Prof. Rajesh Kumar',
    duration: '6 hours',
    capacity: '40 seats',
    date: 'March 15, 2026',
    icon: Cpu,
    color: 'from-cyan-500 to-blue-500',
    description: 'Build smart devices using Arduino and Raspberry Pi. Create your own IoT project from scratch.',
  },
  {
    id: 3,
    title: 'Full Stack Web Development',
    instructor: 'Arun Menon',
    duration: '8 hours',
    capacity: '60 seats',
    date: 'March 16, 2026',
    icon: Code,
    color: 'from-green-500 to-emerald-500',
    description: 'Master React, Node.js, and MongoDB. Build and deploy a complete web application.',
  },
  {
    id: 4,
    title: 'UI/UX Design Masterclass',
    instructor: 'Sneha Patel',
    duration: '5 hours',
    capacity: '45 seats',
    date: 'March 16, 2026',
    icon: Palette,
    color: 'from-orange-500 to-red-500',
    description: 'Learn design thinking, wireframing, and prototyping using Figma and Adobe XD.',
  },
  {
    id: 5,
    title: 'Drone Building & Programming',
    instructor: 'Vikram Singh',
    duration: '7 hours',
    capacity: '30 seats',
    date: 'March 17, 2026',
    icon: Rocket,
    color: 'from-yellow-500 to-orange-500',
    description: 'Build your own drone from scratch and learn to program autonomous flight patterns.',
  },
  {
    id: 6,
    title: 'Cybersecurity Essentials',
    instructor: 'Ananya Reddy',
    duration: '5 hours',
    capacity: '50 seats',
    date: 'March 17, 2026',
    icon: Wrench,
    color: 'from-red-500 to-pink-500',
    description: 'Explore ethical hacking, penetration testing, and network security fundamentals.',
  },
];

export default function Workshops() {
  return (
    <section id="workshops" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900">
        <div className="absolute inset-0 cyber-grid opacity-30"></div>
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl -translate-y-1/2"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-800/50 border border-accent-purple/30 mb-6">
            <Wrench size={14} className="text-accent-purple" />
            <span className="text-xs font-mono text-accent-purple tracking-wider">HANDS-ON LEARNING</span>
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="gradient-text">Workshops</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Dive deep into cutting-edge technologies with our expert-led workshops at Almago. 
            Get hands-on experience and build projects you can showcase.
          </p>
        </div>

        {/* Workshops Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workshops.map((workshop) => {
            const Icon = workshop.icon;
            return (
              <div
                key={workshop.id}
                className="group card-cyber p-6 hover:border-accent-purple/50"
              >
                {/* Icon & Date */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${workshop.color} p-0.5`}>
                    <div className="w-full h-full bg-dark-900 rounded-xl flex items-center justify-center">
                      <Icon className="text-white" size={24} />
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-dark-700 rounded-full text-xs font-mono text-gray-400">
                    {workshop.date}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-heading font-semibold text-xl text-white mb-2 group-hover:text-accent-purple transition-colors">
                  {workshop.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  by <span className="text-gray-300">{workshop.instructor}</span>
                </p>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                  {workshop.description}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 mb-6 text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock size={14} className="text-accent-cyan" />
                    {workshop.duration}
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Users size={14} className="text-accent-purple" />
                    {workshop.capacity}
                  </div>
                </div>

                {/* Register Button */}
                <Link
                  href={`/workshops/${workshop.id}`}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-accent-purple/20 to-accent-pink/20 border border-accent-purple/30 rounded-lg text-sm font-medium text-accent-purple hover:border-accent-purple hover:bg-accent-purple/10 transition-all group/btn"
                >
                  Register Now
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/workshops" className="btn-cyber inline-flex items-center gap-2 border-accent-purple text-accent-purple hover:bg-accent-purple/10">
            View All Workshops
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
