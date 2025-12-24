'use client';

import { Calendar, MapPin, Clock } from 'lucide-react';

const scheduleData = [
  {
    day: 'Day 1',
    date: 'March 15, 2026',
    events: [
      { time: '09:00 AM', title: 'Opening Ceremony', venue: 'Main Auditorium', type: 'ceremony' },
      { time: '10:30 AM', title: 'Keynote: Future of AI', venue: 'Hall A', type: 'talk' },
      { time: '11:30 AM', title: 'Hackathon Kickoff', venue: 'Innovation Lab', type: 'event' },
      { time: '02:00 PM', title: 'Workshop: ML Fundamentals', venue: 'Lab 101', type: 'workshop' },
      { time: '03:30 PM', title: 'Coding Competition - Round 1', venue: 'Computer Center', type: 'event' },
      { time: '05:00 PM', title: 'Robotics Showcase', venue: 'Exhibition Hall', type: 'event' },
      { time: '07:00 PM', title: 'Gaming Tournament', venue: 'E-Sports Arena', type: 'event' },
    ],
  },
  {
    day: 'Day 2',
    date: 'March 16, 2026',
    events: [
      { time: '09:00 AM', title: 'Workshop: Web Development', venue: 'Lab 102', type: 'workshop' },
      { time: '10:00 AM', title: 'RoboWars Prelims', venue: 'Arena Ground', type: 'event' },
      { time: '11:30 AM', title: 'Tech Talk: Blockchain', venue: 'Hall B', type: 'talk' },
      { time: '02:00 PM', title: 'UI/UX Designathon', venue: 'Design Studio', type: 'event' },
      { time: '03:30 PM', title: 'Drone Racing', venue: 'Open Ground', type: 'event' },
      { time: '05:00 PM', title: 'CTF Competition', venue: 'Cyber Lab', type: 'event' },
      { time: '07:30 PM', title: 'Cultural Night: Battle of Bands', venue: 'Main Stage', type: 'cultural' },
    ],
  },
  {
    day: 'Day 3',
    date: 'March 17, 2026',
    events: [
      { time: '09:00 AM', title: 'Hackathon Final Submissions', venue: 'Innovation Lab', type: 'event' },
      { time: '10:30 AM', title: 'RoboWars Finals', venue: 'Arena Ground', type: 'event' },
      { time: '12:00 PM', title: 'Project Presentations', venue: 'Hall A', type: 'event' },
      { time: '02:30 PM', title: 'Tech Fair Exhibition', venue: 'Exhibition Hall', type: 'event' },
      { time: '04:00 PM', title: 'Panel Discussion', venue: 'Hall B', type: 'talk' },
      { time: '06:00 PM', title: 'Award Ceremony', venue: 'Main Auditorium', type: 'ceremony' },
      { time: '08:00 PM', title: 'Closing Concert', venue: 'Main Stage', type: 'cultural' },
    ],
  },
];

const typeColors: Record<string, string> = {
  ceremony: 'bg-accent-orange/20 border-accent-orange text-accent-orange',
  event: 'bg-accent-cyan/20 border-accent-cyan text-accent-cyan',
  workshop: 'bg-accent-purple/20 border-accent-purple text-accent-purple',
  talk: 'bg-green-500/20 border-green-500 text-green-500',
  cultural: 'bg-accent-pink/20 border-accent-pink text-accent-pink',
};

export default function Schedule() {
  return (
    <section id="schedule" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900">
        <div className="absolute inset-0 cyber-grid opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-800/50 border border-accent-cyan/30 mb-6">
            <Calendar size={14} className="text-accent-cyan" />
            <span className="text-xs font-mono text-accent-cyan tracking-wider">EVENT TIMELINE</span>
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="gradient-text">Schedule</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Three days packed with innovation, learning, and excitement. Plan your Almago journey.
          </p>
        </div>

        {/* Schedule Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {scheduleData.map((day, dayIndex) => (
            <div key={day.day} className="card-cyber p-6">
              {/* Day Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-800">
                <div>
                  <h3 className="font-heading font-bold text-2xl gradient-text">{day.day}</h3>
                  <p className="text-gray-400 text-sm flex items-center gap-2 mt-1">
                    <Calendar size={14} />
                    {day.date}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 flex items-center justify-center">
                  <span className="font-heading font-bold text-xl text-accent-cyan">{dayIndex + 1}</span>
                </div>
              </div>

              {/* Events List */}
              <div className="space-y-4">
                {day.events.map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className="relative pl-6 pb-4 border-l-2 border-gray-800 last:border-l-transparent last:pb-0 group"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-dark-900 border-2 border-gray-600 group-hover:border-accent-cyan transition-colors"></div>
                    
                    {/* Event Card */}
                    <div className="bg-dark-700/50 rounded-lg p-4 hover:bg-dark-700 transition-colors">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <span className={`px-2 py-0.5 rounded text-xs font-medium border ${typeColors[event.type]}`}>
                          {event.type.toUpperCase()}
                        </span>
                        <span className="text-xs font-mono text-gray-500 flex items-center gap-1">
                          <Clock size={12} />
                          {event.time}
                        </span>
                      </div>
                      <h4 className="font-medium text-white mb-1 group-hover:text-accent-cyan transition-colors">
                        {event.title}
                      </h4>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <MapPin size={12} />
                        {event.venue}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Download Button */}
        <div className="text-center mt-12">
          <button className="btn-cyber inline-flex items-center gap-2">
            <Calendar size={16} />
            Download Full Schedule
          </button>
        </div>
      </div>
    </section>
  );
}
