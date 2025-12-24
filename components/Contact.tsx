'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    details: 'almago@blr.amrita.edu',
    subtext: 'We reply within 24 hours',
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: '+91 98765 43210',
    subtext: 'Mon - Sat, 9AM - 6PM',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    details: 'Amrita Vishwa Vidyapeetham',
    subtext: 'Bangalore, Karnataka - 560035',
  },
];

const faqs = [
  {
    question: 'How can I register for Almago?',
    answer: 'You can register through our website by clicking the "Register Now" button. Registration opens 2 months before the event.',
  },
  {
    question: 'Is accommodation provided?',
    answer: 'Yes, we provide accommodation for outstation participants at nominal charges. Details will be shared upon registration.',
  },
  {
    question: 'Can I participate in multiple events?',
    answer: 'Yes! You can participate in multiple events as long as there are no schedule conflicts. Check the schedule page for timing.',
  },
  {
    question: 'Are there any participation fees?',
    answer: 'Some events have nominal participation fees while workshops are charged separately. Details are available on each event page.',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-800">
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-accent-cyan/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-accent-purple/10 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-900/50 border border-accent-cyan/30 mb-6">
            <MessageSquare size={14} className="text-accent-cyan" />
            <span className="text-xs font-mono text-accent-cyan tracking-wider">GET IN TOUCH</span>
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="gradient-text">Reach Out</span> To Us
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Have questions about Almago? We're here to help. Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card-cyber p-8">
            <h3 className="font-heading font-semibold text-xl text-white mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-dark-700 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-dark-700 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-dark-700 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan transition-colors"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-700 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-accent-cyan to-accent-purple text-dark-900 font-heading font-semibold uppercase tracking-wider rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & FAQ */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.title} className="card-cyber p-5 text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 flex items-center justify-center">
                      <Icon className="text-accent-cyan" size={20} />
                    </div>
                    <h4 className="font-medium text-white text-sm mb-1">{info.title}</h4>
                    <p className="text-accent-cyan text-sm">{info.details}</p>
                    <p className="text-gray-500 text-xs mt-1">{info.subtext}</p>
                  </div>
                );
              })}
            </div>

            {/* FAQ Section */}
            <div className="card-cyber p-6">
              <h3 className="font-heading font-semibold text-xl text-white mb-6 flex items-center gap-2">
                <Clock size={20} className="text-accent-purple" />
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-gray-800 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-dark-700/50 transition-colors"
                    >
                      <span className="text-white text-sm font-medium">{faq.question}</span>
                      <span className={`text-accent-cyan transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </button>
                    {expandedFaq === index && (
                      <div className="px-4 py-3 bg-dark-700/30 border-t border-gray-800">
                        <p className="text-gray-400 text-sm">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="card-cyber p-4 h-48">
              <div className="w-full h-full rounded-lg bg-dark-700 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="mx-auto text-accent-cyan mb-2" />
                  <p className="text-gray-400 text-sm">Interactive Map</p>
                  <a href="#" className="text-accent-cyan text-xs hover:underline">
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
