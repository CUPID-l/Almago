'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
    alt: 'Tech Conference',
    category: 'events',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
    alt: 'Robotics Competition',
    category: 'robotics',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop',
    alt: 'Cultural Night',
    category: 'cultural',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop',
    alt: 'Hackathon',
    category: 'events',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop',
    alt: 'Workshop Session',
    category: 'workshops',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop',
    alt: 'Team Collaboration',
    category: 'events',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop',
    alt: 'Presentation',
    category: 'events',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop',
    alt: 'Celebration',
    category: 'cultural',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop',
    alt: 'Networking',
    category: 'events',
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop',
    alt: 'Awards Ceremony',
    category: 'cultural',
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=800&h=600&fit=crop',
    alt: 'VR Experience',
    category: 'events',
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    alt: 'Drone Show',
    category: 'robotics',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-800">
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-900/50 border border-accent-cyan/30 mb-6">
            <span className="text-xs font-mono text-gray-400">INITIALIZING...</span>
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="gradient-text">Gallery</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Relive the moments from previous editions of Almago. A visual journey through 
            innovation, creativity, and celebration.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`relative group cursor-pointer overflow-hidden rounded-xl ${
                index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-square">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-medium">{image.alt}</p>
                  <p className="text-accent-cyan text-sm capitalize">{image.category}</p>
                </div>
              </div>

              {/* Border Glow */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent-cyan/50 rounded-xl transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Marquee Text */}
        <div className="mt-16 overflow-hidden">
          <div className="marquee-container py-4 border-y border-gray-800">
            <div className="marquee-content flex items-center gap-8 text-gray-600 font-heading text-xl">
              {[...Array(4)].map((_, i) => (
                <span key={i} className="flex items-center gap-8 whitespace-nowrap">
                  <span>INNOVATION</span>
                  <span className="text-accent-cyan">★</span>
                  <span>TECHNOLOGY</span>
                  <span className="text-accent-purple">★</span>
                  <span>CREATIVITY</span>
                  <span className="text-accent-pink">★</span>
                  <span>EXCELLENCE</span>
                  <span className="text-accent-orange">★</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-dark-900/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white transition-colors"
          >
            <X size={32} />
          </button>
          
          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-6 p-3 bg-dark-800/50 rounded-full text-gray-400 hover:text-white hover:bg-dark-700 transition-all"
          >
            <ChevronLeft size={32} />
          </button>
          
          <button
            onClick={() => navigateImage('next')}
            className="absolute right-6 p-3 bg-dark-800/50 rounded-full text-gray-400 hover:text-white hover:bg-dark-700 transition-all"
          >
            <ChevronRight size={32} />
          </button>

          <div className="max-w-5xl max-h-[80vh] mx-4">
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-xl"
            />
            <div className="text-center mt-4">
              <p className="text-white font-medium">{galleryImages[selectedImage].alt}</p>
              <p className="text-gray-400 text-sm">{selectedImage + 1} / {galleryImages.length}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
