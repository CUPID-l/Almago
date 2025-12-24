'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Calendar, Clock, MapPin, Users, Trophy, CreditCard, CheckCircle, Phone, ArrowRight } from 'lucide-react';
import { allEvents } from '@/lib/data';

const categoryColors: Record<string, string> = {
  technical: 'from-accent-cyan to-blue-500',
  robotics: 'from-orange-500 to-red-500',
  gaming: 'from-purple-500 to-pink-500',
  cultural: 'from-pink-500 to-rose-500',
  design: 'from-yellow-500 to-orange-500',
  ai: 'from-green-500 to-emerald-500',
};

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = allEvents.find((e) => e.slug === params.slug);

  if (!event) {
    notFound();
  }

  const relatedEvents = allEvents
    .filter((e) => e.category === event.category && e.id !== event.id)
    .slice(0, 3);

  return (
    <main className="relative min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-dark-900/95 to-dark-900"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          {/* Back Button */}
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-accent-cyan transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Events
          </Link>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Category Badge */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${categoryColors[event.category]} mb-6`}>
                <span className="text-xs font-mono text-white uppercase tracking-wider">
                  {event.category}
                </span>
              </div>

              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                {event.title}
              </h1>

              {event.featured && (
                <span className="inline-block px-3 py-1 bg-accent-orange/20 border border-accent-orange text-accent-orange text-sm rounded-full mb-6">
                  ⭐ Featured Event
                </span>
              )}

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {event.longDescription}
              </p>

              {/* Event Details Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                <div className="card-cyber p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-cyan/20 flex items-center justify-center">
                    <Calendar className="text-accent-cyan" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Date</p>
                    <p className="text-white font-medium">{event.date}</p>
                  </div>
                </div>
                <div className="card-cyber p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-purple/20 flex items-center justify-center">
                    <Clock className="text-accent-purple" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Time</p>
                    <p className="text-white font-medium">{event.time}</p>
                  </div>
                </div>
                <div className="card-cyber p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-pink/20 flex items-center justify-center">
                    <MapPin className="text-accent-pink" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Venue</p>
                    <p className="text-white font-medium">{event.venue}</p>
                  </div>
                </div>
                <div className="card-cyber p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-orange/20 flex items-center justify-center">
                    <Users className="text-accent-orange" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Team Size</p>
                    <p className="text-white font-medium">{event.team}</p>
                  </div>
                </div>
              </div>

              {/* Rounds */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-2xl text-white mb-6">Event Rounds</h2>
                <div className="space-y-4">
                  {event.rounds.map((round, index) => (
                    <div key={index} className="card-cyber p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center flex-shrink-0">
                          <span className="font-heading font-bold text-white">{index + 1}</span>
                        </div>
                        <div>
                          <h3 className="font-heading font-semibold text-white mb-2">{round.name}</h3>
                          <p className="text-gray-400">{round.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rules */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-2xl text-white mb-6">Rules & Guidelines</h2>
                <div className="card-cyber p-6">
                  <ul className="space-y-3">
                    {event.rules.map((rule, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                        <span className="text-gray-300">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Requirements */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-2xl text-white mb-6">What You Need</h2>
                <div className="card-cyber p-6">
                  <ul className="space-y-3">
                    {event.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent-cyan mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Registration Card */}
                <div className="card-cyber p-6 border-accent-cyan/30">
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Trophy className="text-accent-orange" size={24} />
                      <span className="text-gray-400">Prize Pool</span>
                    </div>
                    <p className="font-heading font-bold text-4xl gradient-text">{event.prize}</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between py-3 border-b border-gray-800">
                      <span className="text-gray-400">Registration Fee</span>
                      <span className="font-semibold text-white">{event.registrationFee}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-800">
                      <span className="text-gray-400">Team Size</span>
                      <span className="font-semibold text-white">{event.team}</span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <span className="text-gray-400">Category</span>
                      <span className="font-semibold text-accent-cyan capitalize">{event.category}</span>
                    </div>
                  </div>

                  <Link
                    href="/register"
                    className="w-full py-4 bg-gradient-to-r from-accent-cyan to-accent-purple text-dark-900 font-heading font-semibold text-center uppercase tracking-wider rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    Register Now
                    <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Coordinators */}
                <div className="card-cyber p-6">
                  <h3 className="font-heading font-semibold text-white mb-4">Event Coordinators</h3>
                  <div className="space-y-4">
                    {event.coordinators.map((coordinator, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 flex items-center justify-center">
                          <Phone className="text-accent-cyan" size={16} />
                        </div>
                        <div>
                          <p className="text-white font-medium">{coordinator.name}</p>
                          <p className="text-gray-500 text-sm">{coordinator.phone}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Events */}
      {relatedEvents.length > 0 && (
        <section className="relative py-16 bg-dark-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl text-white mb-8">
              More {event.category.charAt(0).toUpperCase() + event.category.slice(1)} Events
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedEvents.map((relEvent) => (
                <Link
                  key={relEvent.id}
                  href={`/events/${relEvent.slug}`}
                  className="card-cyber overflow-hidden group hover:border-accent-cyan/50"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={relEvent.image}
                      alt={relEvent.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading font-semibold text-white mb-2 group-hover:text-accent-cyan transition-colors">
                      {relEvent.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-3 line-clamp-2">{relEvent.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-accent-orange font-semibold">{relEvent.prize}</span>
                      <span className="text-gray-500 text-sm">{relEvent.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
