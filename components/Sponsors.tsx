'use client';

type TierType = 'platinum' | 'gold' | 'silver';

interface Sponsor {
  name: string;
  tier: TierType;
  logo: string;
}

const sponsors: Sponsor[] = [
  { name: 'TechCorp', tier: 'platinum', logo: 'TC' },
  { name: 'InnovateLabs', tier: 'platinum', logo: 'IL' },
  { name: 'FutureTech', tier: 'gold', logo: 'FT' },
  { name: 'CodeWave', tier: 'gold', logo: 'CW' },
  { name: 'DataDriven', tier: 'gold', logo: 'DD' },
  { name: 'CloudNine', tier: 'silver', logo: 'CN' },
  { name: 'QuantumLeap', tier: 'silver', logo: 'QL' },
  { name: 'ByteForce', tier: 'silver', logo: 'BF' },
  { name: 'NexGen', tier: 'silver', logo: 'NG' },
  { name: 'CyberSphere', tier: 'silver', logo: 'CS' },
];

const tierColors: Record<TierType, string> = {
  platinum: 'from-gray-200 to-gray-400',
  gold: 'from-yellow-400 to-amber-500',
  silver: 'from-gray-400 to-gray-500',
};

export default function Sponsors() {
  return (
    <section id="sponsors" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900">
        <div className="absolute inset-0 cyber-grid opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-800/50 border border-accent-orange/30 mb-6">
            <span className="text-xs font-mono text-accent-orange tracking-wider">OUR PARTNERS</span>
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="gradient-text">Sponsors</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Almago is made possible by the generous support of our sponsors and partners.
          </p>
        </div>

        {/* Platinum Sponsors */}
        <div className="mb-12">
          <h3 className="text-center font-heading text-lg text-gray-400 mb-6 tracking-wider">
            PLATINUM SPONSORS
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {sponsors
              .filter((s) => s.tier === 'platinum')
              .map((sponsor) => (
                <div
                  key={sponsor.name}
                  className="group w-48 h-32 card-cyber flex items-center justify-center hover:border-gray-300/50"
                >
                  <div className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-2 rounded-xl bg-gradient-to-br ${tierColors[sponsor.tier]} flex items-center justify-center`}>
                      <span className="font-heading font-bold text-xl text-dark-900">{sponsor.logo}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{sponsor.name}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-12">
          <h3 className="text-center font-heading text-lg text-gray-400 mb-6 tracking-wider">
            GOLD SPONSORS
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {sponsors
              .filter((s) => s.tier === 'gold')
              .map((sponsor) => (
                <div
                  key={sponsor.name}
                  className="group w-40 h-28 card-cyber flex items-center justify-center hover:border-yellow-500/50"
                >
                  <div className="text-center">
                    <div className={`w-12 h-12 mx-auto mb-2 rounded-lg bg-gradient-to-br ${tierColors[sponsor.tier]} flex items-center justify-center`}>
                      <span className="font-heading font-bold text-lg text-dark-900">{sponsor.logo}</span>
                    </div>
                    <span className="text-gray-400 text-xs">{sponsor.name}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="mb-12">
          <h3 className="text-center font-heading text-lg text-gray-400 mb-6 tracking-wider">
            SILVER SPONSORS
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {sponsors
              .filter((s) => s.tier === 'silver')
              .map((sponsor) => (
                <div
                  key={sponsor.name}
                  className="group w-32 h-24 card-cyber flex items-center justify-center hover:border-gray-500/50"
                >
                  <div className="text-center">
                    <div className={`w-10 h-10 mx-auto mb-1 rounded-lg bg-gradient-to-br ${tierColors[sponsor.tier]} flex items-center justify-center`}>
                      <span className="font-heading font-bold text-sm text-dark-900">{sponsor.logo}</span>
                    </div>
                    <span className="text-gray-500 text-xs">{sponsor.name}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Become a Sponsor CTA */}
        <div className="text-center mt-16">
          <div className="inline-block card-cyber p-8 max-w-2xl border-accent-orange/30">
            <h3 className="font-heading font-bold text-2xl text-white mb-4">
              Become a Sponsor
            </h3>
            <p className="text-gray-400 mb-6">
              Partner with Almago and connect with thousands of tech enthusiasts, 
              innovators, and future industry leaders.
            </p>
            <a href="/contact" className="btn-cyber inline-flex items-center gap-2 border-accent-orange text-accent-orange hover:bg-accent-orange/10">
              Contact Us
            </a>
          </div>
        </div>

        {/* Marquee */}
        <div className="mt-16 overflow-hidden">
          <div className="flex animate-marquee space-x-8">
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-24 h-16 bg-dark-800/50 rounded-lg flex items-center justify-center border border-gray-800"
              >
                <span className="font-heading font-bold text-gray-600">{sponsor.logo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
