'use client';

import { Linkedin, Twitter, Github, Mail } from 'lucide-react';

const teamCategories = [
  {
    title: 'Core Team',
    members: [
      {
        name: 'Arjun Krishnan',
        role: 'Festival Convenor',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
        linkedin: '#',
        twitter: '#',
      },
      {
        name: 'Priya Sharma',
        role: 'Co-Convenor',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
        linkedin: '#',
        twitter: '#',
      },
      {
        name: 'Rahul Menon',
        role: 'Technical Head',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
        linkedin: '#',
        github: '#',
      },
      {
        name: 'Sneha Patel',
        role: 'Design Head',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
        linkedin: '#',
        twitter: '#',
      },
    ],
  },
  {
    title: 'Department Heads',
    members: [
      {
        name: 'Vikram Singh',
        role: 'Events Coordinator',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
        linkedin: '#',
      },
      {
        name: 'Ananya Reddy',
        role: 'Workshops Lead',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop',
        linkedin: '#',
      },
      {
        name: 'Karthik Nair',
        role: 'Sponsorship Head',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop',
        linkedin: '#',
      },
      {
        name: 'Meera Iyer',
        role: 'Marketing Lead',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop',
        linkedin: '#',
        twitter: '#',
      },
      {
        name: 'Arun Kumar',
        role: 'Logistics Head',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop',
        linkedin: '#',
      },
      {
        name: 'Divya Mohan',
        role: 'Cultural Head',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop',
        linkedin: '#',
        twitter: '#',
      },
    ],
  },
];

export default function Team() {
  return (
    <section id="team" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-800">
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-900/50 border border-accent-purple/30 mb-6">
            <span className="text-xs font-mono text-accent-purple tracking-wider">THE FORCE BEHIND</span>
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Our <span className="gradient-text">Team</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Meet the passionate individuals who work tirelessly to make Almago an unforgettable experience.
          </p>
        </div>

        {/* Team Categories */}
        {teamCategories.map((category, catIndex) => (
          <div key={category.title} className="mb-16 last:mb-0">
            {/* Category Title */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-gradient-to-r from-accent-cyan to-transparent"></div>
              <h3 className="font-heading font-semibold text-xl text-accent-cyan tracking-wider">
                {category.title}
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-accent-cyan/50 to-transparent"></div>
            </div>

            {/* Team Grid */}
            <div className={`grid grid-cols-2 md:grid-cols-3 ${catIndex === 0 ? 'lg:grid-cols-4' : 'lg:grid-cols-6'} gap-6`}>
              {category.members.map((member) => (
                <div
                  key={member.name}
                  className="group card-cyber p-4 text-center hover:border-accent-purple/50"
                >
                  {/* Avatar */}
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan to-accent-purple rounded-full p-0.5">
                      <div className="w-full h-full rounded-full overflow-hidden bg-dark-900">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-accent-cyan/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>

                  {/* Info */}
                  <h4 className="font-medium text-white mb-1 group-hover:text-accent-cyan transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-gray-500 text-sm mb-3">{member.role}</p>

                  {/* Social Links */}
                  <div className="flex items-center justify-center gap-2">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        className="w-8 h-8 rounded-lg bg-dark-700 flex items-center justify-center text-gray-500 hover:text-accent-cyan hover:bg-dark-600 transition-colors"
                      >
                        <Linkedin size={14} />
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        className="w-8 h-8 rounded-lg bg-dark-700 flex items-center justify-center text-gray-500 hover:text-accent-cyan hover:bg-dark-600 transition-colors"
                      >
                        <Twitter size={14} />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        className="w-8 h-8 rounded-lg bg-dark-700 flex items-center justify-center text-gray-500 hover:text-accent-cyan hover:bg-dark-600 transition-colors"
                      >
                        <Github size={14} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Join Team CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block card-cyber p-8 max-w-2xl">
            <h3 className="font-heading font-bold text-2xl text-white mb-4">
              Want to be part of Almago 2027?
            </h3>
            <p className="text-gray-400 mb-6">
              We're always looking for passionate individuals to join our team. 
              Get involved and help shape the future of tech fests!
            </p>
            <a href="/contact" className="btn-cyber inline-flex items-center gap-2">
              <Mail size={16} />
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
