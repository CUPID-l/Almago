'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Events', href: '/events' },
  { name: 'Workshops', href: '/workshops' },
  { name: 'Schedule', href: '/schedule' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Team', href: '/team' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-900/95 backdrop-blur-md border-b border-accent-cyan/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-cyan to-accent-purple rounded-lg flex items-center justify-center">
                <span className="font-heading font-bold text-xl text-dark-900">A</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-lg blur opacity-30"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-heading font-bold text-xl gradient-text">ALMAGO</h1>
              <p className="text-xs text-gray-400 tracking-widest">2026</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-accent-cyan transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-cyan to-accent-purple group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Register Button */}
          <div className="hidden lg:block">
            <Link href="/register" className="btn-cyber text-sm">
              Register Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-300 hover:text-accent-cyan"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="bg-dark-800/95 backdrop-blur-md border-t border-accent-cyan/20 px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block px-4 py-3 text-gray-300 hover:text-accent-cyan hover:bg-dark-700/50 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/register"
            className="block text-center btn-cyber text-sm mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Register Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
