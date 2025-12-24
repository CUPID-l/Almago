'use client';

import Link from 'next/link';
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin, Youtube, Github } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Events', href: '/events' },
  { name: 'Workshops', href: '/workshops' },
  { name: 'Schedule', href: '/schedule' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Team', href: '/team' },
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative bg-dark-900 border-t border-accent-cyan/20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-cyan to-accent-purple rounded-lg flex items-center justify-center">
                <span className="font-heading font-bold text-xl text-dark-900">A</span>
              </div>
              <div>
                <h2 className="font-heading font-bold text-xl gradient-text">ALMAGO</h2>
                <p className="text-xs text-gray-400 tracking-widest">2026</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading a Leap Forward. Join us at Amrita Vishwa Vidyapeetham, Bangalore for three days of innovation, 
              learning, and unforgettable experiences.
            </p>
            <div className="status-bar">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              SYSTEM STATUS: ACTIVE
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-accent-cyan mb-6 tracking-wider">QUICK LINKS</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent-cyan transition-colors text-sm flex items-center group"
                  >
                    <span className="w-0 h-px bg-accent-cyan group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-accent-cyan mb-6 tracking-wider">REACH OUT</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-accent-cyan mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">almago@blr.amrita.edu</p>
                  <p className="text-gray-500 text-xs">General Inquiries</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-accent-cyan mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">+91 98765 43210</p>
                  <p className="text-gray-500 text-xs">Mon - Sat, 9AM - 6PM</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-accent-cyan mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">Amrita Vishwa Vidyapeetham</p>
                  <p className="text-gray-500 text-xs">Bangalore, Karnataka - 560035</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading font-semibold text-accent-cyan mb-6 tracking-wider">STAY UPDATED</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get the latest updates about events and workshops.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-dark-800 border border-accent-cyan/30 rounded-lg text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-accent-cyan transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-accent-cyan/20 to-accent-purple/20 border border-accent-cyan text-accent-cyan font-heading text-sm font-semibold rounded-lg hover:bg-accent-cyan/10 transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-dark-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-accent-cyan hover:border-accent-cyan transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-500 text-sm">
                © 2026 Almago. All rights reserved.
              </p>
              <p className="text-gray-600 text-xs mt-1">
                Amrita Vishwa Vidyapeetham, Bangalore
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-accent-purple to-transparent"></div>
    </footer>
  );
}
