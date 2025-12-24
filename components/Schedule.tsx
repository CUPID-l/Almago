'use client';

import { useState } from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const scheduleData = [
  {
    day: 'Day 1',
    date: 'January 12, 2026',
    dayName: 'Sunday',
    theme: 'Kickoff & Innovation',
    events: [
      { time: '08:00 AM', title: 'Registration & Check-in', venue: 'Main Entrance', type: 'ceremony' },
      { time: '09:30 AM', title: 'Grand Opening Ceremony', venue: 'Main Auditorium', type: 'ceremony' },
      { time: '10:30 AM', title: 'Keynote: Future of AI', venue: 'Hall A', type: 'talk' },
      { time: '11:30 AM', title: 'AI Innovation Challenge Kickoff', venue: 'Innovation Lab', type: 'event' },
      { time: '12:00 PM', title: 'Web Development Sprint', venue: 'Lab 102', type: 'event' },
      { time: '02:00 PM', title: 'Workshop: ML Fundamentals', venue: 'Lab 101', type: 'workshop' },
      { time: '02:00 PM', title: 'Workshop: IoT & Embedded', venue: 'Electronics Lab', type: 'workshop' },
      { time: '02:00 PM', title: 'Line Follower Competition', venue: 'Robotics Lab', type: 'event' },
      { time: '04:00 PM', title: 'Code Conquest Begins (24hr)', venue: 'Computer Center', type: 'event' },
      { time: '06:00 PM', title: 'Valorant Championship - Day 1', venue: 'E-Sports Arena', type: 'event' },
      { time: '08:00 PM', title: 'Opening Night Cultural Show', venue: 'Main Stage', type: 'cultural' },
    ],
  },
  {
    day: 'Day 2',
    date: 'January 13, 2026',
    dayName: 'Monday',
    theme: 'Tech & Creativity',
    events: [
      { time: '09:00 AM', title: 'Workshop: Full Stack Development', venue: 'Lab 102', type: 'workshop' },
      { time: '09:00 AM', title: 'RoboWars - Technical Inspection', venue: 'Arena Ground', type: 'event' },
      { time: '10:00 AM', title: 'Workshop: UI/UX Masterclass', venue: 'Design Studio', type: 'workshop' },
      { time: '10:00 AM', title: 'Code Conquest Ends', venue: 'Computer Center', type: 'event' },
      { time: '10:00 AM', title: 'CTF Cybersecurity Competition', venue: 'Cyber Lab', type: 'event' },
      { time: '11:00 AM', title: 'Tech Talk: Web3 & Blockchain', venue: 'Hall B', type: 'talk' },
      { time: '12:00 PM', title: 'UI/UX Designathon', venue: 'Design Studio', type: 'event' },
      { time: '02:00 PM', title: 'Tech Quiz Championship', venue: 'Seminar Hall', type: 'event' },
      { time: '02:00 PM', title: 'RoboWars League Matches', venue: 'Arena Ground', type: 'event' },
      { time: '04:00 PM', title: 'Valorant Championship - Day 2', venue: 'E-Sports Arena', type: 'event' },
      { time: '07:00 PM', title: 'Comedy Night', venue: 'Main Stage', type: 'cultural' },
    ],
  },
  {
    day: 'Day 3',
    date: 'January 14, 2026',
    dayName: 'Tuesday',
    theme: 'Robotics & Showdowns',
    events: [
      { time: '09:00 AM', title: 'Workshop: Drone Building', venue: 'Robotics Lab', type: 'workshop' },
      { time: '10:00 AM', title: 'Drone Racing Competition', venue: 'Open Ground', type: 'event' },
      { time: '10:00 AM', title: 'Workshop: Cybersecurity', venue: 'Cyber Lab', type: 'workshop' },
      { time: '11:00 AM', title: 'RoboWars Knockout Rounds', venue: 'Arena Ground', type: 'event' },
      { time: '12:00 PM', title: 'AI Challenge - Demo Day', venue: 'Innovation Lab', type: 'event' },
      { time: '02:00 PM', title: 'Startup Pitch Competition', venue: 'Seminar Hall', type: 'event' },
      { time: '03:00 PM', title: 'RoboWars Grand Finale', venue: 'Arena Ground', type: 'event' },
      { time: '04:00 PM', title: 'BGMI Tournament - Day 1', venue: 'Gaming Arena', type: 'event' },
      { time: '06:00 PM', title: 'Battle of Bands', venue: 'Main Stage', type: 'cultural' },
      { time: '09:00 PM', title: 'DJ Night', venue: 'Central Lawn', type: 'cultural' },
    ],
  },
  {
    day: 'Day 4',
    date: 'January 15, 2026',
    dayName: 'Wednesday',
    theme: 'Grand Finale',
    events: [
      { time: '09:00 AM', title: 'Workshop: Flutter Development', venue: 'Lab 103', type: 'workshop' },
      { time: '10:00 AM', title: 'Workshop: Blockchain Fundamentals', venue: 'Lab 104', type: 'workshop' },
      { time: '10:00 AM', title: 'FIFA Tournament', venue: 'Gaming Zone', type: 'event' },
      { time: '11:00 AM', title: 'BGMI Tournament Finals', venue: 'Gaming Arena', type: 'event' },
      { time: '12:00 PM', title: 'Tech Fair & Project Exhibition', venue: 'Exhibition Hall', type: 'event' },
      { time: '02:00 PM', title: 'Panel: Industry Leaders', venue: 'Hall A', type: 'talk' },
      { time: '03:00 PM', title: 'Photography Contest Results', venue: 'Gallery', type: 'event' },
      { time: '05:00 PM', title: 'Dance Fusion Competition', venue: 'Main Stage', type: 'cultural' },
      { time: '07:00 PM', title: 'Grand Award Ceremony', venue: 'Main Auditorium', type: 'ceremony' },
      { time: '09:00 PM', title: 'Closing Concert & Celebration', venue: 'Main Stage', type: 'cultural' },
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
  const [activeDay, setActiveDay] = useState(0);

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
            <span className="text-xs font-mono text-accent-cyan tracking-wider">JANUARY 12-15, 2026</span>
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="gradient-text">Schedule</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Four days packed with innovation, learning, and excitement. Plan your Almago journey.
          </p>
        </div>

        {/* Day Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {scheduleData.map((day, index) => (
            <button
              key={day.day}
              onClick={() => setActiveDay(index)}
              className={`px-6 py-4 rounded-xl transition-all duration-300 ${
                activeDay === index
                  ? 'bg-gradient-to-r from-accent-cyan to-accent-purple text-dark-900'
                  : 'bg-dark-800 border border-gray-700 text-gray-400 hover:border-accent-cyan'
              }`}
            >
              <div className="font-heading font-bold text-lg">{day.day}</div>
              <div className="text-sm opacity-80">{day.dayName}</div>
            </button>
          ))}
        </div>

        {/* Active Day Details */}
        <div className="mb-8 text-center">
          <h3 className="font-heading font-bold text-2xl text-white mb-2">
            {scheduleData[activeDay].date}
          </h3>
          <p className="text-accent-cyan">Theme: {scheduleData[activeDay].theme}</p>
        </div>

        {/* Schedule Grid - Desktop */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8">
          {scheduleData.map((day, dayIndex) => (
            <div 
              key={day.day} 
              className={`card-cyber p-6 transition-all duration-300 ${
                activeDay === dayIndex ? 'border-accent-cyan/50 scale-105' : 'opacity-70 hover:opacity-100'
              }`}
              onClick={() => setActiveDay(dayIndex)}
            >
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
                {day.events.slice(0, 6).map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className="relative pl-6 pb-4 border-l-2 border-gray-800 last:border-l-transparent last:pb-0 group"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-dark-900 border-2 border-gray-600 group-hover:border-accent-cyan transition-colors"></div>
                    
                    {/* Event Card */}
                    <div className="bg-dark-700/50 rounded-lg p-3 hover:bg-dark-700 transition-colors">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <span className={`px-2 py-0.5 rounded text-xs font-medium border ${typeColors[event.type]}`}>
                          {event.type.toUpperCase()}
                        </span>
                        <span className="text-xs font-mono text-gray-500">
                          {event.time}
                        </span>
                      </div>
                      <h4 className="font-medium text-white text-sm mb-1 group-hover:text-accent-cyan transition-colors line-clamp-1">
                        {event.title}
                      </h4>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <MapPin size={10} />
                        {event.venue}
                      </p>
                    </div>
                  </div>
                ))}
                {day.events.length > 6 && (
                  <p className="text-center text-sm text-accent-cyan">
                    +{day.events.length - 6} more events
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Schedule Grid - Mobile (Single Day View) */}
        <div className="lg:hidden">
          <div className="card-cyber p-6">
            <div className="space-y-4">
              {scheduleData[activeDay].events.map((event, eventIndex) => (
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
        </div>

        {/* Legend */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {Object.entries(typeColors).map(([type, color]) => (
            <div key={type} className="flex items-center gap-2">
              <span className={`px-2 py-0.5 rounded text-xs font-medium border ${color}`}>
                {type.toUpperCase()}
              </span>
            </div>
          ))}
        </div>

        {/* Download Button */}
        <div className="text-center mt-12">
          <button className="btn-cyber inline-flex items-center gap-2">
            <Calendar size={16} />
            Download Full Schedule (PDF)
          </button>
        </div>
      </div>
    </section>
  );
}
