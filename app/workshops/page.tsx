'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Clock, Users, ArrowRight, Wrench, Cpu, Code, Palette, Brain, Rocket, Calendar, MapPin, CheckCircle } from 'lucide-react';

const workshops = [
  {
    id: 1,
    title: 'Machine Learning Fundamentals',
    instructor: 'Dr. Priya Sharma',
    designation: 'AI Research Lead, TechCorp',
    duration: '4 hours',
    capacity: '50 seats',
    date: 'March 15, 2026',
    time: '10:00 AM - 2:00 PM',
    venue: 'Lab 101',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    fee: '₹500',
    description: 'Learn the basics of ML algorithms, data preprocessing, and model training with hands-on projects. This workshop covers supervised learning, neural networks basics, and practical implementation using Python.',
    prerequisites: ['Basic Python knowledge', 'Understanding of statistics', 'Laptop with Python installed'],
    topics: ['Introduction to ML', 'Data Preprocessing', 'Supervised Learning', 'Model Training', 'Evaluation Metrics'],
  },
  {
    id: 2,
    title: 'IoT & Embedded Systems',
    instructor: 'Prof. Rajesh Kumar',
    designation: 'Professor, Electronics Dept.',
    duration: '6 hours',
    capacity: '40 seats',
    date: 'March 15, 2026',
    time: '9:00 AM - 3:00 PM',
    venue: 'Electronics Lab',
    icon: Cpu,
    color: 'from-cyan-500 to-blue-500',
    fee: '₹600',
    description: 'Build smart devices using Arduino and Raspberry Pi. Create your own IoT project from scratch. Learn about sensors, actuators, and cloud connectivity.',
    prerequisites: ['Basic electronics knowledge', 'C programming basics'],
    topics: ['Arduino Basics', 'Sensor Integration', 'Raspberry Pi Setup', 'IoT Protocols', 'Cloud Integration'],
  },
  {
    id: 3,
    title: 'Full Stack Web Development',
    instructor: 'Arun Menon',
    designation: 'Senior Developer, InnovateLabs',
    duration: '8 hours',
    capacity: '60 seats',
    date: 'March 16, 2026',
    time: '9:00 AM - 5:00 PM',
    venue: 'Lab 102',
    icon: Code,
    color: 'from-green-500 to-emerald-500',
    fee: '₹800',
    description: 'Master React, Node.js, and MongoDB. Build and deploy a complete web application. Learn modern development practices and deployment strategies.',
    prerequisites: ['HTML/CSS basics', 'JavaScript fundamentals', 'Laptop with Node.js installed'],
    topics: ['React Fundamentals', 'Node.js & Express', 'MongoDB Basics', 'REST APIs', 'Deployment'],
  },
  {
    id: 4,
    title: 'UI/UX Design Masterclass',
    instructor: 'Sneha Patel',
    designation: 'Design Director, DesignHub',
    duration: '5 hours',
    capacity: '45 seats',
    date: 'March 16, 2026',
    time: '10:00 AM - 3:00 PM',
    venue: 'Design Studio',
    icon: Palette,
    color: 'from-orange-500 to-red-500',
    fee: '₹450',
    description: 'Learn design thinking, wireframing, and prototyping using Figma and Adobe XD. Create user-centered designs that delight users.',
    prerequisites: ['Basic design sense', 'Figma account (free)'],
    topics: ['Design Thinking', 'User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
  },
  {
    id: 5,
    title: 'Drone Building & Programming',
    instructor: 'Vikram Singh',
    designation: 'Founder, DroneWorks',
    duration: '7 hours',
    capacity: '30 seats',
    date: 'March 17, 2026',
    time: '9:00 AM - 4:00 PM',
    venue: 'Robotics Lab',
    icon: Rocket,
    color: 'from-yellow-500 to-orange-500',
    fee: '₹1200',
    description: 'Build your own drone from scratch and learn to program autonomous flight patterns. Includes drone kit that you take home!',
    prerequisites: ['Basic electronics knowledge', 'Interest in drones'],
    topics: ['Drone Components', 'Assembly', 'Flight Controllers', 'Programming', 'Autonomous Flight'],
  },
  {
    id: 6,
    title: 'Cybersecurity Essentials',
    instructor: 'Ananya Reddy',
    designation: 'Security Consultant, CyberShield',
    duration: '5 hours',
    capacity: '50 seats',
    date: 'March 17, 2026',
    time: '10:00 AM - 3:00 PM',
    venue: 'Cyber Lab',
    icon: Wrench,
    color: 'from-red-500 to-pink-500',
    fee: '₹550',
    description: 'Explore ethical hacking, penetration testing, and network security fundamentals. Learn to identify and fix vulnerabilities.',
    prerequisites: ['Basic networking knowledge', 'Linux basics preferred'],
    topics: ['Network Security', 'Web Vulnerabilities', 'Penetration Testing', 'Security Tools', 'Best Practices'],
  },
];

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
            Deep dive into cutting-edge technologies with our expert-led workshops at Almago. Get hands-on experience and build projects you can showcase.
          </p>
        </div>
      </section>

      {/* Workshops List */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-dark-800">
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {workshops.map((workshop) => {
              const Icon = workshop.icon;
              return (
                <div
                  key={workshop.id}
                  className="card-cyber p-8 hover:border-accent-purple/50"
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
                          <h3 className="font-heading font-bold text-2xl text-white mb-1">
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
                          {workshop.topics.map((topic) => (
                            <span
                              key={topic}
                              className="px-3 py-1 bg-dark-700 rounded-full text-sm text-gray-400 border border-gray-700"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Prerequisites */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Prerequisites:</h4>
                        <ul className="space-y-1">
                          {workshop.prerequisites.map((prereq) => (
                            <li key={prereq} className="flex items-center gap-2 text-sm text-gray-500">
                              <CheckCircle size={14} className="text-green-500" />
                              {prereq}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right - Details Card */}
                    <div className="bg-dark-700/50 rounded-xl p-6 border border-gray-800">
                      <div className="space-y-4 mb-6">
                        <div className="flex items-center gap-3 text-sm">
                          <Calendar size={16} className="text-accent-cyan" />
                          <div>
                            <p className="text-white">{workshop.date}</p>
                            <p className="text-gray-500">{workshop.time}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <MapPin size={16} className="text-accent-purple" />
                          <span className="text-gray-300">{workshop.venue}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <Clock size={16} className="text-accent-orange" />
                          <span className="text-gray-300">{workshop.duration}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <Users size={16} className="text-accent-pink" />
                          <span className="text-gray-300">{workshop.capacity}</span>
                        </div>
                      </div>

                      <div className="border-t border-gray-700 pt-4 mb-4">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-gray-400">Registration Fee</span>
                          <span className="font-heading font-bold text-2xl text-accent-cyan">{workshop.fee}</span>
                        </div>
                      </div>

                      <Link
                        href={`/workshops/${workshop.id}`}
                        className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-accent-purple to-accent-pink text-white font-heading font-semibold uppercase tracking-wider rounded-lg hover:opacity-90 transition-opacity"
                      >
                        Register Now
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
