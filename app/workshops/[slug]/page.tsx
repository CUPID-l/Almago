'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Calendar, Clock, MapPin, Users, CreditCard, CheckCircle, ArrowRight, BookOpen, Award, Package } from 'lucide-react';
import { allWorkshops } from '@/lib/data';

export default function WorkshopDetailPage({ params }: { params: { slug: string } }) {
  const workshop = allWorkshops.find((w) => w.slug === params.slug);

  if (!workshop) {
    notFound();
  }

  const relatedWorkshops = allWorkshops
    .filter((w) => w.id !== workshop.id)
    .slice(0, 3);

  return (
    <main className="relative min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-dark-900">
          <div className="absolute inset-0 cyber-grid opacity-30"></div>
          <div className={`absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br ${workshop.color} opacity-10 rounded-full blur-3xl`}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          {/* Back Button */}
          <Link
            href="/workshops"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-accent-purple transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Workshops
          </Link>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Workshop Icon */}
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${workshop.color} p-0.5 mb-6`}>
                <div className="w-full h-full bg-dark-900 rounded-2xl flex items-center justify-center">
                  <BookOpen className="text-white" size={36} />
                </div>
              </div>

              <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
                {workshop.title}
              </h1>

              {/* Instructor Info */}
              <div className="flex items-center gap-4 mb-8">
                <img
                  src={workshop.instructorImage}
                  alt={workshop.instructor}
                  className="w-14 h-14 rounded-full object-cover border-2 border-accent-purple"
                />
                <div>
                  <p className="text-white font-medium">by {workshop.instructor}</p>
                  <p className="text-gray-500 text-sm">{workshop.designation}</p>
                </div>
              </div>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed whitespace-pre-line">
                {workshop.longDescription}
              </p>

              {/* Workshop Details Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                <div className="card-cyber p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-cyan/20 flex items-center justify-center">
                    <Calendar className="text-accent-cyan" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Date</p>
                    <p className="text-white font-medium">{workshop.date}</p>
                  </div>
                </div>
                <div className="card-cyber p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-purple/20 flex items-center justify-center">
                    <Clock className="text-accent-purple" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Time</p>
                    <p className="text-white font-medium">{workshop.time}</p>
                  </div>
                </div>
                <div className="card-cyber p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-pink/20 flex items-center justify-center">
                    <MapPin className="text-accent-pink" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Venue</p>
                    <p className="text-white font-medium">{workshop.venue}</p>
                  </div>
                </div>
                <div className="card-cyber p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-orange/20 flex items-center justify-center">
                    <Users className="text-accent-orange" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Capacity</p>
                    <p className="text-white font-medium">{workshop.capacity}</p>
                  </div>
                </div>
              </div>

              {/* About Instructor */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-2xl text-white mb-6">About the Instructor</h2>
                <div className="card-cyber p-6">
                  <div className="flex items-start gap-6">
                    <img
                      src={workshop.instructorImage}
                      alt={workshop.instructor}
                      className="w-24 h-24 rounded-xl object-cover"
                    />
                    <div>
                      <h3 className="font-heading font-semibold text-xl text-white mb-1">{workshop.instructor}</h3>
                      <p className="text-accent-purple mb-3">{workshop.designation}</p>
                      <p className="text-gray-400">{workshop.instructorBio}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Topics Covered */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-2xl text-white mb-6">Topics Covered</h2>
                <div className="card-cyber p-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {workshop.topics.map((topic, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${workshop.color} flex items-center justify-center flex-shrink-0`}>
                          <span className="font-heading font-bold text-white text-sm">{index + 1}</span>
                        </div>
                        <span className="text-gray-300">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Prerequisites */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-2xl text-white mb-6">Prerequisites</h2>
                <div className="card-cyber p-6">
                  <ul className="space-y-3">
                    {workshop.prerequisites.map((prereq, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                        <span className="text-gray-300">{prereq}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* What You'll Take Away */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-2xl text-white mb-6">What You'll Take Away</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {workshop.takeaways.map((takeaway, index) => (
                    <div key={index} className="card-cyber p-4 flex items-center gap-3">
                      <Award className="text-accent-orange flex-shrink-0" size={20} />
                      <span className="text-gray-300">{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Materials Provided */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-2xl text-white mb-6">Materials Provided</h2>
                <div className="card-cyber p-6">
                  <div className="flex flex-wrap gap-3">
                    {workshop.materials.map((material, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-dark-700 rounded-full text-gray-300 border border-gray-700 flex items-center gap-2"
                      >
                        <Package size={14} className="text-accent-cyan" />
                        {material}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Registration Card */}
                <div className="card-cyber p-6 border-accent-purple/30">
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <CreditCard className="text-accent-purple" size={24} />
                      <span className="text-gray-400">Workshop Fee</span>
                    </div>
                    <p className="font-heading font-bold text-4xl gradient-text">{workshop.fee}</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between py-3 border-b border-gray-800">
                      <span className="text-gray-400">Duration</span>
                      <span className="font-semibold text-white">{workshop.duration}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-800">
                      <span className="text-gray-400">Seats Available</span>
                      <span className="font-semibold text-white">{workshop.capacity}</span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <span className="text-gray-400">Date</span>
                      <span className="font-semibold text-accent-cyan">{workshop.date}</span>
                    </div>
                  </div>

                  <Link
                    href="/register"
                    className="w-full py-4 bg-gradient-to-r from-accent-purple to-accent-pink text-white font-heading font-semibold text-center uppercase tracking-wider rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    Register for Workshop
                    <ArrowRight size={16} />
                  </Link>

                  <p className="text-center text-gray-500 text-sm mt-4">
                    Limited seats. Register early!
                  </p>
                </div>

                {/* Quick Facts */}
                <div className="card-cyber p-6">
                  <h3 className="font-heading font-semibold text-white mb-4">Quick Facts</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-400">
                      <Clock size={16} className="text-accent-cyan" />
                      {workshop.duration} of hands-on learning
                    </li>
                    <li className="flex items-center gap-3 text-gray-400">
                      <BookOpen size={16} className="text-accent-purple" />
                      {workshop.topics.length} topics covered
                    </li>
                    <li className="flex items-center gap-3 text-gray-400">
                      <Award size={16} className="text-accent-orange" />
                      Certificate included
                    </li>
                    <li className="flex items-center gap-3 text-gray-400">
                      <Package size={16} className="text-accent-pink" />
                      Materials provided
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Workshops */}
      {relatedWorkshops.length > 0 && (
        <section className="relative py-16 bg-dark-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl text-white mb-8">
              Other Workshops You Might Like
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedWorkshops.map((relWorkshop) => (
                <Link
                  key={relWorkshop.id}
                  href={`/workshops/${relWorkshop.slug}`}
                  className="card-cyber p-6 group hover:border-accent-purple/50"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${relWorkshop.color} p-0.5 mb-4`}>
                    <div className="w-full h-full bg-dark-900 rounded-xl flex items-center justify-center">
                      <BookOpen className="text-white" size={24} />
                    </div>
                  </div>
                  <h3 className="font-heading font-semibold text-white mb-2 group-hover:text-accent-purple transition-colors">
                    {relWorkshop.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-3">by {relWorkshop.instructor}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-accent-purple font-semibold">{relWorkshop.fee}</span>
                    <span className="text-gray-500">{relWorkshop.duration}</span>
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
