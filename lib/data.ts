// Shared data for events and workshops

export type EventCategory = 'technical' | 'robotics' | 'gaming' | 'cultural' | 'design' | 'ai';

export interface Event {
  id: number;
  slug: string;
  title: string;
  category: EventCategory;
  description: string;
  longDescription: string;
  prize: string;
  team: string;
  date: string;
  time: string;
  image: string;
  featured: boolean;
  registrationFee: string;
  venue: string;
  rules: string[];
  rounds: { name: string; description: string }[];
  coordinators: { name: string; phone: string }[];
  requirements: string[];
}

export interface Workshop {
  id: number;
  slug: string;
  title: string;
  instructor: string;
  designation: string;
  instructorImage: string;
  instructorBio: string;
  duration: string;
  capacity: string;
  date: string;
  time: string;
  venue: string;
  icon: string;
  color: string;
  fee: string;
  description: string;
  longDescription: string;
  prerequisites: string[];
  topics: string[];
  takeaways: string[];
  materials: string[];
}

export const allEvents: Event[] = [
  {
    id: 1,
    slug: 'code-conquest',
    title: 'Code Conquest',
    category: 'technical',
    description: 'A 24-hour competitive programming challenge to test your algorithmic skills.',
    longDescription: `Code Conquest is the flagship competitive programming event at Almago 2026. This intense 24-hour coding marathon will push your algorithmic thinking to its limits. Participants will face a series of increasingly challenging problems spanning data structures, algorithms, dynamic programming, graph theory, and more.

Whether you're a seasoned competitive programmer or just starting out, Code Conquest offers different difficulty tiers to ensure everyone has a chance to compete and learn. Top performers will not only win exciting prizes but also get a chance to be noticed by our sponsor companies for internship opportunities.

The event features real-time leaderboards, interactive problem discussions, and expert commentary throughout the competition.`,
    prize: '₹50,000',
    team: '1-2 members',
    date: 'January 12, 2026',
    time: '10:00 AM - Next Day 10:00 AM',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
    featured: true,
    registrationFee: '₹200',
    venue: 'Computer Center, Block A',
    rules: [
      'Teams can have 1-2 members',
      'Standard competitive programming rules apply',
      'No external help or communication with other teams',
      'All standard libraries allowed',
      'Internet access restricted to contest platform only',
      'Plagiarism will result in immediate disqualification',
    ],
    rounds: [
      { name: 'Preliminary Round', description: 'Online round with 5 problems, 2 hours duration. Top 50 teams qualify.' },
      { name: 'Main Contest', description: '24-hour coding marathon with 15+ problems of varying difficulty.' },
    ],
    coordinators: [
      { name: 'Aditya Sharma', phone: '+91 98765 43210' },
      { name: 'Priya Nair', phone: '+91 98765 43211' },
    ],
    requirements: [
      'Laptop with any IDE/text editor',
      'Knowledge of at least one programming language (C++, Java, Python)',
      'College ID for verification',
    ],
  },
  {
    id: 2,
    slug: 'robowars',
    title: 'RoboWars',
    category: 'robotics',
    description: 'Build and battle your robots in this exciting combat robotics competition.',
    longDescription: `RoboWars is the most anticipated robotics event at Almago 2026. Teams from across the country bring their custom-built battle robots to compete in an arena combat format. This is where engineering meets creativity meets raw power!

Participants design and build robots weighing up to 15kg equipped with various weapons and defense mechanisms. The robots battle in a specially designed arena, attempting to disable or immobilize their opponents. Strategy, build quality, and driving skills all play crucial roles in determining the victor.

Our arena features safety measures including polycarbonate walls, emergency stops, and trained safety personnel. Multiple categories ensure fair competition based on robot weight classes.`,
    prize: '₹75,000',
    team: '3-5 members',
    date: 'January 13-14, 2026',
    time: '9:00 AM onwards',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
    featured: true,
    registrationFee: '₹500',
    venue: 'Arena Ground',
    rules: [
      'Robot weight must not exceed 15kg',
      'No flame-based or projectile weapons allowed',
      'Robots must have a clearly visible kill switch',
      'Battery voltage limited to 24V',
      'All robots must pass safety inspection',
      'Each match lasts 3 minutes',
    ],
    rounds: [
      { name: 'Technical Inspection', description: 'All robots undergo safety and specification checks' },
      { name: 'League Matches', description: 'Round-robin format in groups of 4' },
      { name: 'Knockout Rounds', description: 'Single elimination bracket for top 16 robots' },
      { name: 'Grand Finale', description: 'Best of 3 matches final' },
    ],
    coordinators: [
      { name: 'Vikram Reddy', phone: '+91 98765 43212' },
      { name: 'Sneha Menon', phone: '+91 98765 43213' },
    ],
    requirements: [
      'Pre-built combat robot meeting specifications',
      'Spare parts and tools for repairs',
      'Safety gear (goggles mandatory in pit area)',
      'Team uniform/identifier',
    ],
  },
  {
    id: 3,
    slug: 'valorant-championship',
    title: 'Valorant Championship',
    category: 'gaming',
    description: 'Compete in the ultimate esports showdown with teams from across the country.',
    longDescription: `The Almago Valorant Championship brings together the best tactical shooter players for an intense esports competition. Teams of 5 battle it out in Riot Games' premier FPS title for glory and a substantial prize pool.

The tournament follows official VCT rules with map pools and agent restrictions. Professional-grade equipment, dedicated servers, and expert shoutcasters ensure a premium competitive experience. Top teams will also receive merchandise and gaming peripherals from our sponsors.

Whether you're pushing for Radiant or just love competitive gaming, this tournament offers the perfect platform to showcase your skills.`,
    prize: '₹40,000',
    team: '5 members',
    date: 'January 12-13, 2026',
    time: '11:00 AM - 9:00 PM',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop',
    featured: false,
    registrationFee: '₹300',
    venue: 'E-Sports Arena, Block C',
    rules: [
      'Teams must have exactly 5 players + 1 substitute',
      'All players must have Valorant accounts above Level 20',
      'Standard VCT tournament rules apply',
      'No smurfing - accounts will be verified',
      'Matches are BO1 until semifinals (BO3)',
    ],
    rounds: [
      { name: 'Group Stage', description: 'Teams divided into groups of 4, top 2 advance' },
      { name: 'Quarterfinals', description: 'Best of 1 elimination matches' },
      { name: 'Semifinals', description: 'Best of 3 matches' },
      { name: 'Grand Finals', description: 'Best of 5 championship match' },
    ],
    coordinators: [
      { name: 'Arjun Gaming', phone: '+91 98765 43214' },
      { name: 'Kavya S', phone: '+91 98765 43215' },
    ],
    requirements: [
      'Own gaming peripherals (mouse, keyboard, headset)',
      'Valorant account with verification',
      'Team registration with all member details',
    ],
  },
  {
    id: 4,
    slug: 'ai-innovation-challenge',
    title: 'AI Innovation Challenge',
    category: 'ai',
    description: 'Build AI solutions to solve real-world problems in this 48-hour hackathon.',
    longDescription: `The AI Innovation Challenge is a 48-hour hackathon focused exclusively on artificial intelligence and machine learning solutions. This flagship event challenges participants to develop innovative AI applications that address real-world problems across domains like healthcare, education, sustainability, and accessibility.

Teams will have access to cloud computing credits, pre-trained models, and mentorship from AI researchers and industry professionals. The judging criteria include innovation, technical implementation, practical applicability, and presentation quality.

Winners get the opportunity to present their projects to venture capitalists and AI startups for potential incubation and funding opportunities.`,
    prize: '₹1,00,000',
    team: '2-4 members',
    date: 'January 12-14, 2026',
    time: 'Starts 6:00 PM Day 1, Ends 6:00 PM Day 3',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    featured: true,
    registrationFee: '₹400',
    venue: 'Innovation Lab, Block B',
    rules: [
      'Teams of 2-4 members',
      'All code must be written during the hackathon',
      'Use of pre-trained models is allowed',
      'Projects must include an AI/ML component',
      'Final submission includes code, demo, and presentation',
    ],
    rounds: [
      { name: 'Ideation Phase', description: '3 hours to finalize and pitch your idea to mentors' },
      { name: 'Development Phase', description: '40 hours of coding, building, and iterating' },
      { name: 'Demo Day', description: 'Present your project to judges and audience' },
    ],
    coordinators: [
      { name: 'Dr. Ananya Krishnan', phone: '+91 98765 43216' },
      { name: 'Rohit ML', phone: '+91 98765 43217' },
    ],
    requirements: [
      'Laptop with ML frameworks installed',
      'Basic knowledge of Python and ML concepts',
      'GitHub account for code submission',
    ],
  },
  {
    id: 5,
    slug: 'drone-racing',
    title: 'Drone Racing',
    category: 'robotics',
    description: 'Navigate your drone through challenging obstacle courses at high speed.',
    longDescription: `Experience the thrill of FPV drone racing at Almago 2026! Pilots will navigate their drones through a specially designed obstacle course featuring gates, flags, and challenging turns. This event tests both piloting skills and the technical capabilities of custom-built racing drones.

The course is designed to challenge even experienced pilots with varying elevation changes, tight corners, and precision gates. Multiple classes ensure fair competition whether you're flying a custom build or a ready-to-fly racing drone.

All races are broadcast live with FPV feeds, giving spectators an immersive view of the action. Safety nets and designated flying zones ensure a safe experience for everyone.`,
    prize: '₹30,000',
    team: '1-2 members',
    date: 'January 14, 2026',
    time: '10:00 AM - 5:00 PM',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop',
    featured: false,
    registrationFee: '₹250',
    venue: 'Open Ground, Near Auditorium',
    rules: [
      'Drones must weigh under 500g',
      'FPV goggles or monitors allowed',
      'Maximum 4S LiPo batteries',
      'All drones must pass safety inspection',
      'Pilots must have basic insurance coverage',
    ],
    rounds: [
      { name: 'Technical Check', description: 'Drone inspection and pilot registration' },
      { name: 'Practice Runs', description: 'Familiarization with the course' },
      { name: 'Time Trials', description: 'Individual best lap times' },
      { name: 'Head-to-Head Races', description: '4 drones race simultaneously' },
    ],
    coordinators: [
      { name: 'Karthik Drone', phone: '+91 98765 43218' },
      { name: 'Meera FPV', phone: '+91 98765 43219' },
    ],
    requirements: [
      'Racing drone (own or rented)',
      'FPV goggles/monitor',
      'Spare batteries and propellers',
      'Basic repair tools',
    ],
  },
  {
    id: 6,
    slug: 'ui-ux-designathon',
    title: 'UI/UX Designathon',
    category: 'design',
    description: 'Design intuitive and beautiful interfaces for the apps of tomorrow.',
    longDescription: `The UI/UX Designathon challenges participants to create user-centered designs that solve real problems. Over 8 hours, teams will research, ideate, wireframe, and prototype solutions for given design briefs.

This event is perfect for aspiring designers who want to showcase their skills in user research, information architecture, visual design, and prototyping. Industry professionals will mentor participants and provide feedback throughout the event.

Final submissions are judged on user empathy, design thinking process, visual aesthetics, and prototype functionality. Top designs may be selected for actual implementation by our sponsor companies.`,
    prize: '₹35,000',
    team: '1-3 members',
    date: 'January 13, 2026',
    time: '9:00 AM - 5:00 PM',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    featured: false,
    registrationFee: '₹200',
    venue: 'Design Studio, Block D',
    rules: [
      'Teams of 1-3 members',
      'Any design tool allowed (Figma, XD, Sketch, etc.)',
      'Must include at least 5 screens/pages',
      'Interactive prototype required',
      'Design brief provided at start of event',
    ],
    rounds: [
      { name: 'Brief Reveal', description: 'Design problem statement announced' },
      { name: 'Research & Ideation', description: '2 hours for user research and ideation' },
      { name: 'Design Sprint', description: '5 hours for wireframing and prototyping' },
      { name: 'Presentation', description: 'Present your design journey and solution' },
    ],
    coordinators: [
      { name: 'Sneha UX', phone: '+91 98765 43220' },
      { name: 'Arun Design', phone: '+91 98765 43221' },
    ],
    requirements: [
      'Laptop with design software installed',
      'Figma/XD account',
      'Notebook for sketching',
    ],
  },
  {
    id: 7,
    slug: 'battle-of-bands',
    title: 'Battle of Bands',
    category: 'cultural',
    description: 'Showcase your musical talent and compete for the ultimate rock glory.',
    longDescription: `Battle of Bands is the ultimate musical showdown at Almago 2026! Bands from colleges across India compete on the main stage, performing original compositions and covers across genres including rock, metal, indie, and fusion.

Each band gets 15 minutes to electrify the crowd and impress our panel of judges from the music industry. The event features professional sound equipment, stage lighting, and live mixing by experienced sound engineers.

Beyond the competition, this is a celebration of college music culture with jam sessions, networking opportunities, and chances to collaborate with fellow musicians.`,
    prize: '₹45,000',
    team: '4-8 members',
    date: 'January 14, 2026',
    time: '6:00 PM - 10:00 PM',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
    featured: true,
    registrationFee: '₹500',
    venue: 'Main Stage, Central Lawn',
    rules: [
      'Bands must have 4-8 members',
      'Performance duration: 12-15 minutes',
      'At least one original composition required',
      'Explicit content not allowed',
      'Bands must arrange their own instruments (PA system provided)',
    ],
    rounds: [
      { name: 'Audition Round', description: 'Submit video audition for selection' },
      { name: 'Preliminary Round', description: 'Live performance, top 6 bands advance' },
      { name: 'Grand Finale', description: 'Final showdown with guest judges' },
    ],
    coordinators: [
      { name: 'Rahul Music', phone: '+91 98765 43222' },
      { name: 'Divya Band', phone: '+91 98765 43223' },
    ],
    requirements: [
      'Own instruments (guitars, bass, drums, keys)',
      'Band registration with member details',
      'Audio samples/videos for audition',
    ],
  },
  {
    id: 8,
    slug: 'ctf-cybersecurity',
    title: 'CTF Cybersecurity',
    category: 'technical',
    description: 'Capture the flag competition testing your hacking and security skills.',
    longDescription: `The Capture The Flag (CTF) competition at Almago is a cybersecurity challenge where participants solve security-related puzzles to capture digital "flags". This event covers multiple domains including web security, cryptography, reverse engineering, forensics, and binary exploitation.

Designed for both beginners and experienced security enthusiasts, the challenges range from easy to expert level. Each solved challenge earns points, and teams compete on a real-time leaderboard.

Industry mentors from cybersecurity companies will be available to provide hints and guidance. Top performers may receive internship opportunities with our sponsor security firms.`,
    prize: '₹60,000',
    team: '2-4 members',
    date: 'January 13, 2026',
    time: '10:00 AM - 10:00 PM',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
    featured: false,
    registrationFee: '₹300',
    venue: 'Cyber Lab, Block A',
    rules: [
      'Teams of 2-4 members',
      'No attacking other teams or infrastructure',
      'No sharing flags or solutions',
      'All tools and techniques allowed (except destructive ones)',
      'Hints available for penalty points',
    ],
    rounds: [
      { name: 'Jeopardy Style', description: 'Solve challenges across multiple categories' },
      { name: 'Attack-Defense', description: 'Defend your server while attacking others' },
    ],
    coordinators: [
      { name: 'Ananya Sec', phone: '+91 98765 43224' },
      { name: 'Kiran CTF', phone: '+91 98765 43225' },
    ],
    requirements: [
      'Laptop with Kali Linux or security tools',
      'Basic knowledge of networking and web security',
      'CTFd account for registration',
    ],
  },
  {
    id: 9,
    slug: 'line-follower',
    title: 'Line Follower',
    category: 'robotics',
    description: 'Build an autonomous robot that can follow a line path with speed and accuracy.',
    longDescription: `The Line Follower event challenges teams to build autonomous robots that can navigate a complex line track. This classic robotics event tests skills in sensor integration, PID control, and mechanical design.

The track features straight sections, curves of varying radii, intersections, and broken lines. Robots must complete the course in the shortest time while staying on track. Multiple categories based on sensor types ensure fair competition.

This is an excellent learning opportunity for robotics beginners while offering enough complexity to challenge experienced builders.`,
    prize: '₹25,000',
    team: '2-3 members',
    date: 'January 12, 2026',
    time: '2:00 PM - 6:00 PM',
    image: 'https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?w=600&h=400&fit=crop',
    featured: false,
    registrationFee: '₹200',
    venue: 'Robotics Lab, Block B',
    rules: [
      'Robot must be fully autonomous',
      'Maximum dimensions: 20cm x 20cm x 15cm',
      'Any sensor type allowed',
      'Maximum weight: 1kg',
      'Robot must complete track without manual intervention',
    ],
    rounds: [
      { name: 'Technical Inspection', description: 'Verify robot specifications' },
      { name: 'Trial Runs', description: 'Practice runs on the track' },
      { name: 'Timed Runs', description: 'Best of 3 attempts counts' },
    ],
    coordinators: [
      { name: 'Vishal Robot', phone: '+91 98765 43226' },
      { name: 'Priya Auto', phone: '+91 98765 43227' },
    ],
    requirements: [
      'Pre-built line follower robot',
      'Spare sensors and batteries',
      'Basic tools for adjustments',
    ],
  },
  {
    id: 10,
    slug: 'fifa-tournament',
    title: 'FIFA Tournament',
    category: 'gaming',
    description: 'Show your virtual football skills in this FIFA tournament.',
    longDescription: `The FIFA Tournament brings virtual football excitement to Almago 2026! Individual players compete in EA Sports FC (FIFA) on PlayStation 5 for the championship title. This is the perfect event for football gaming enthusiasts to showcase their skills.

The tournament follows a knockout format with all matches played on neutral settings. Players can use any team from the game, and the competition features multiple stages leading to an exciting grand finale.

Professional gaming monitors and controllers ensure fair play, and matches are broadcasted live with commentary for spectators.`,
    prize: '₹20,000',
    team: '1 member',
    date: 'January 15, 2026',
    time: '10:00 AM - 6:00 PM',
    image: 'https://images.unsplash.com/photo-1493711662062-fa541f7f76cb?w=600&h=400&fit=crop',
    featured: false,
    registrationFee: '₹150',
    venue: 'Gaming Zone, Block C',
    rules: [
      'Individual competition only',
      'Match duration: 6 minutes each half',
      'No custom tactics sharing during matches',
      'Any club or national team allowed',
      'Legacy defending only',
    ],
    rounds: [
      { name: 'Group Stage', description: 'Groups of 4, top 2 advance' },
      { name: 'Round of 16', description: 'Single elimination begins' },
      { name: 'Quarterfinals to Finals', description: 'Best of 3 matches' },
    ],
    coordinators: [
      { name: 'Rohan FIFA', phone: '+91 98765 43228' },
      { name: 'Amit Game', phone: '+91 98765 43229' },
    ],
    requirements: [
      'Own controller preferred (PS5 controllers available)',
      'Knowledge of current FIFA/EA FC game',
    ],
  },
  {
    id: 11,
    slug: 'dance-fusion',
    title: 'Dance Fusion',
    category: 'cultural',
    description: 'Express yourself through dance in solo and group performances.',
    longDescription: `Dance Fusion celebrates the art of movement at Almago 2026! This event welcomes dancers of all styles - from classical Indian to contemporary, hip-hop to freestyle, and everything in between. Both solo performers and groups can participate.

The competition features multiple categories including Solo, Duet, and Group performances. Participants are judged on technique, creativity, expression, and stage presence by professional choreographers and dancers.

This is more than a competition - it's a celebration of dance culture with workshops, flash mobs, and collaborative performances throughout the festival.`,
    prize: '₹35,000',
    team: '1-8 members',
    date: 'January 15, 2026',
    time: '5:00 PM - 9:00 PM',
    image: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=600&h=400&fit=crop',
    featured: false,
    registrationFee: '₹200',
    venue: 'Main Stage, Central Lawn',
    rules: [
      'Performance duration: 3-5 minutes (solo), 5-8 minutes (group)',
      'Music must be submitted 24 hours before',
      'Props allowed but no fire or dangerous elements',
      'Costumes must be appropriate',
      'Any dance style welcome',
    ],
    rounds: [
      { name: 'Audition', description: 'Video submission for preliminary selection' },
      { name: 'Preliminary', description: 'Live performance, top acts advance' },
      { name: 'Grand Finale', description: 'Final performances with guest judges' },
    ],
    coordinators: [
      { name: 'Divya Dance', phone: '+91 98765 43230' },
      { name: 'Arun Choreo', phone: '+91 98765 43231' },
    ],
    requirements: [
      'Music track in MP3 format',
      'Own costumes and props',
      'Registration with performance details',
    ],
  },
  {
    id: 12,
    slug: 'web-development-sprint',
    title: 'Web Development Sprint',
    category: 'technical',
    description: 'Build a complete web application in 6 hours. Speed, creativity, and functionality matter.',
    longDescription: `The Web Development Sprint is an intense 6-hour challenge where participants build complete web applications from scratch. Given a theme at the start, teams must design, develop, and deploy a functional web application.

This event tests your full-stack skills including frontend design, backend logic, database management, and deployment. Any technology stack is allowed, encouraging participants to use their preferred tools and frameworks.

Judging criteria include functionality, code quality, UI/UX design, innovation, and presentation. The event simulates real-world hackathon pressure while keeping scope manageable.`,
    prize: '₹40,000',
    team: '1-3 members',
    date: 'January 12, 2026',
    time: '9:00 AM - 3:00 PM',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
    featured: false,
    registrationFee: '₹250',
    venue: 'Lab 102, Block A',
    rules: [
      'Teams of 1-3 members',
      'Any tech stack allowed',
      'Theme revealed at start of event',
      'Must be deployable/demonstrable',
      'No pre-built templates or copied code',
    ],
    rounds: [
      { name: 'Theme Reveal', description: 'Problem statement announced' },
      { name: 'Development Sprint', description: '6 hours of intense coding' },
      { name: 'Demo & Judging', description: 'Present your application to judges' },
    ],
    coordinators: [
      { name: 'Rahul Web', phone: '+91 98765 43232' },
      { name: 'Priya Dev', phone: '+91 98765 43233' },
    ],
    requirements: [
      'Laptop with development environment',
      'GitHub account',
      'Deployment platform account (Vercel, Netlify, etc.)',
    ],
  },
  {
    id: 13,
    slug: 'startup-pitch',
    title: 'Startup Pitch Competition',
    category: 'technical',
    description: 'Pitch your startup idea to investors and win funding opportunities.',
    longDescription: `The Startup Pitch Competition is your chance to present your entrepreneurial vision to real investors and industry experts. Whether you have a validated startup or just a promising idea, this platform gives you exposure to potential funding and mentorship.

Each team gets 5 minutes to pitch followed by 5 minutes of Q&A. Judges evaluate based on problem-solution fit, market potential, team capability, and presentation skills.

Winners receive not just prize money but connections to incubators, accelerators, and angel investors. Previous winners have gone on to raise funding and build successful startups.`,
    prize: '₹50,000 + Incubation',
    team: '1-4 members',
    date: 'January 14, 2026',
    time: '2:00 PM - 6:00 PM',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop',
    featured: true,
    registrationFee: '₹300',
    venue: 'Seminar Hall, Block A',
    rules: [
      'Teams of 1-4 members',
      'Pitch duration: 5 minutes max',
      'Q&A: 5 minutes',
      'Presentation deck required',
      'Working prototype/MVP preferred but not mandatory',
    ],
    rounds: [
      { name: 'Application Review', description: 'Submit business plan for shortlisting' },
      { name: 'Preliminary Pitches', description: 'Top 20 teams pitch to judges' },
      { name: 'Grand Finale', description: 'Top 5 pitch to investor panel' },
    ],
    coordinators: [
      { name: 'Vikram Startup', phone: '+91 98765 43234' },
      { name: 'Meera VC', phone: '+91 98765 43235' },
    ],
    requirements: [
      'Business plan/pitch deck',
      'Team information',
      'Demo/prototype (if available)',
    ],
  },
  {
    id: 14,
    slug: 'photography-contest',
    title: 'Shutterbug Photography Contest',
    category: 'cultural',
    description: 'Capture the moments of Almago through your lens.',
    longDescription: `Shutterbug is the official photography contest of Almago 2026. Photographers are challenged to capture the essence of the tech fest - the energy, innovation, emotions, and memorable moments throughout the 4-day event.

The contest features multiple categories including Event Coverage, Portraits, Creative/Abstract, and Mobile Photography. Both DSLR and smartphone photographers can participate in their respective categories.

A photo exhibition showcasing the best entries will be displayed on the final day, and winners will have their work featured in official Almago publications and social media.`,
    prize: '₹20,000',
    team: '1 member',
    date: 'January 12-15, 2026',
    time: 'Throughout the event',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&h=400&fit=crop',
    featured: false,
    registrationFee: '₹150',
    venue: 'Multiple Locations',
    rules: [
      'Individual participation only',
      'Minimum 10, maximum 20 submissions',
      'Basic editing allowed, no heavy manipulation',
      'Photos must be taken during Almago 2026',
      'Consent required for portrait submissions',
    ],
    rounds: [
      { name: 'Registration', description: 'Sign up and receive participant badge' },
      { name: 'Photo Submission', description: 'Submit entries before Day 4 noon' },
      { name: 'Judging & Exhibition', description: 'Winners announced at closing ceremony' },
    ],
    coordinators: [
      { name: 'Arun Photo', phone: '+91 98765 43236' },
      { name: 'Sneha Lens', phone: '+91 98765 43237' },
    ],
    requirements: [
      'Camera (DSLR/Mirrorless) or Smartphone',
      'Memory cards and batteries',
      'Photo release forms for subjects',
    ],
  },
  {
    id: 15,
    slug: 'quiz-championship',
    title: 'Tech Quiz Championship',
    category: 'technical',
    description: 'Test your knowledge across technology, science, and pop culture.',
    longDescription: `The Tech Quiz Championship is the ultimate test of knowledge at Almago 2026. Teams battle through multiple rounds covering technology, science, history of computing, current affairs, and pop culture with a tech twist.

The quiz features various formats including rapid fire, audio-visual rounds, buzzer rounds, and team challenges. Questions range from fundamentals to expert-level topics that will challenge even the most knowledgeable participants.

It's not just about what you know - speed, strategy, and teamwork play crucial roles in this high-energy competition.`,
    prize: '₹25,000',
    team: '2-3 members',
    date: 'January 13, 2026',
    time: '2:00 PM - 5:00 PM',
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=600&h=400&fit=crop',
    featured: false,
    registrationFee: '₹150',
    venue: 'Seminar Hall, Block A',
    rules: [
      'Teams of 2-3 members',
      'No electronic devices during quiz',
      'Quizmaster decisions are final',
      'Negative marking in some rounds',
    ],
    rounds: [
      { name: 'Prelims', description: 'Written round, top 8 teams qualify' },
      { name: 'Quarterfinals', description: 'Direct face-offs, 4 teams advance' },
      { name: 'Finals', description: 'Multi-format championship round' },
    ],
    coordinators: [
      { name: 'Quiz Master Raj', phone: '+91 98765 43238' },
      { name: 'Priya QC', phone: '+91 98765 43239' },
    ],
    requirements: [
      'Team registration',
      'Pen and notepad',
      'General and tech knowledge',
    ],
  },
  {
    id: 16,
    slug: 'bgmi-tournament',
    title: 'BGMI Tournament',
    category: 'gaming',
    description: 'Battle royale action in this intense BGMI mobile gaming tournament.',
    longDescription: `The BGMI Tournament brings intense battle royale action to Almago 2026! Squads of 4 players compete in multiple rounds of Battlegrounds Mobile India for survival and supremacy.

The tournament follows official esports format with point-based scoring across multiple matches. Strategy, teamwork, and individual skills all matter as teams fight to be the last squad standing.

Top teams will compete for the championship in a LAN finale with professional broadcasting and commentary. All matches are played on tournament-spec devices to ensure fair play.`,
    prize: '₹30,000',
    team: '4 members',
    date: 'January 14-15, 2026',
    time: '11:00 AM - 8:00 PM',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&h=400&fit=crop',
    featured: false,
    registrationFee: '₹200',
    venue: 'Gaming Arena, Block C',
    rules: [
      'Squad of 4 players required',
      'Own mobile devices mandatory',
      'No emulators allowed',
      'Game must be updated to latest version',
      'Point system: Kill points + placement points',
    ],
    rounds: [
      { name: 'Online Qualifiers', description: '4 matches, top 20 teams qualify' },
      { name: 'LAN Semifinals', description: '4 matches at venue' },
      { name: 'Grand Finale', description: '6 matches, points accumulated' },
    ],
    coordinators: [
      { name: 'Rohan BGMI', phone: '+91 98765 43240' },
      { name: 'Kavya Mobile', phone: '+91 98765 43241' },
    ],
    requirements: [
      'Mobile phone with BGMI installed',
      'Stable internet for online rounds',
      'Earphones/gaming earbuds',
      'Fully charged device or power bank',
    ],
  },
];

export const allWorkshops: Workshop[] = [
  {
    id: 1,
    slug: 'machine-learning-fundamentals',
    title: 'Machine Learning Fundamentals',
    instructor: 'Dr. Priya Sharma',
    designation: 'AI Research Lead, TechCorp',
    instructorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
    instructorBio: 'Dr. Priya Sharma is an AI researcher with 10+ years of experience in machine learning and deep learning. She has published extensively in top ML conferences and led AI initiatives at Fortune 500 companies.',
    duration: '4 hours',
    capacity: '50 seats',
    date: 'January 12, 2026',
    time: '10:00 AM - 2:00 PM',
    venue: 'Lab 101, Block A',
    icon: 'Brain',
    color: 'from-purple-500 to-pink-500',
    fee: '₹500',
    description: 'Learn the basics of ML algorithms, data preprocessing, and model training with hands-on projects.',
    longDescription: `This comprehensive workshop introduces you to the fascinating world of Machine Learning. Starting from the fundamentals, we'll cover essential concepts including supervised and unsupervised learning, feature engineering, model selection, and evaluation metrics.

Through hands-on exercises, you'll implement ML algorithms from scratch and using popular libraries like scikit-learn. By the end of this workshop, you'll have built your own ML models and understand how to apply them to real-world problems.

The workshop includes live coding sessions, interactive Q&A, and a mini-project that you'll complete during the session.`,
    prerequisites: ['Basic Python programming', 'Understanding of basic statistics', 'Laptop with Python 3.8+ installed'],
    topics: ['Introduction to ML & AI landscape', 'Data Preprocessing & Feature Engineering', 'Supervised Learning: Regression & Classification', 'Model Training & Hyperparameter Tuning', 'Evaluation Metrics & Model Selection', 'Hands-on Project: Build a Predictor'],
    takeaways: ['Understanding of core ML concepts', 'Hands-on experience with scikit-learn', 'Your own trained ML model', 'Certificate of completion', 'Access to resources and code'],
    materials: ['Workshop slides', 'Jupyter notebooks', 'Dataset files', 'Reference cheat sheets'],
  },
  {
    id: 2,
    slug: 'iot-embedded-systems',
    title: 'IoT & Embedded Systems',
    instructor: 'Prof. Rajesh Kumar',
    designation: 'Professor, Electronics Department',
    instructorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    instructorBio: 'Prof. Rajesh Kumar has been teaching embedded systems for 15 years and has guided numerous student projects in IoT and robotics. He is a consultant for several industrial automation companies.',
    duration: '6 hours',
    capacity: '40 seats',
    date: 'January 12, 2026',
    time: '9:00 AM - 3:00 PM',
    venue: 'Electronics Lab, Block B',
    icon: 'Cpu',
    color: 'from-cyan-500 to-blue-500',
    fee: '₹600',
    description: 'Build smart devices using Arduino and Raspberry Pi. Create your own IoT project from scratch.',
    longDescription: `Dive into the world of Internet of Things with this hands-on workshop. You'll learn to interface various sensors and actuators with Arduino and Raspberry Pi, send data to the cloud, and build a complete IoT solution.

The workshop covers both hardware (circuit design, sensor selection) and software (firmware programming, cloud integration) aspects of IoT development. You'll work with real components and build a functioning IoT device that you can take home!

This is a component-inclusive workshop - all Arduino kits and sensors will be provided during the session. Participants get to keep their basic sensor kit!`,
    prerequisites: ['Basic electronics knowledge', 'C programming fundamentals', 'Laptop with Arduino IDE installed'],
    topics: ['IoT Architecture & Protocols', 'Arduino Programming Basics', 'Sensor Integration (Temperature, Motion, Light)', 'Actuator Control (LEDs, Motors, Relays)', 'Raspberry Pi Setup & Configuration', 'Cloud Connectivity with MQTT', 'Building a Complete IoT Project'],
    takeaways: ['Working IoT prototype', 'Basic sensor kit to take home', 'Understanding of IoT architecture', 'Cloud dashboard for your project', 'Certificate of completion'],
    materials: ['Arduino Uno kit', 'Sensor modules', 'Breadboard and jumper wires', 'Workshop manual', 'Cloud platform credits'],
  },
  {
    id: 3,
    slug: 'fullstack-web-development',
    title: 'Full Stack Web Development',
    instructor: 'Arun Menon',
    designation: 'Senior Developer, InnovateLabs',
    instructorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
    instructorBio: 'Arun Menon is a full-stack developer with expertise in React, Node.js, and cloud technologies. He has built products used by millions and mentors aspiring developers in his free time.',
    duration: '8 hours',
    capacity: '60 seats',
    date: 'January 13, 2026',
    time: '9:00 AM - 5:00 PM',
    venue: 'Lab 102, Block A',
    icon: 'Code',
    color: 'from-green-500 to-emerald-500',
    fee: '₹800',
    description: 'Master React, Node.js, and MongoDB. Build and deploy a complete web application.',
    longDescription: `This intensive full-day workshop takes you through the entire web development stack. You'll build a complete web application from scratch using React for the frontend, Node.js/Express for the backend, and MongoDB for the database.

Starting with project setup and architecture decisions, we'll progressively build features including user authentication, CRUD operations, API design, and responsive UI. By the end, you'll deploy your application to the cloud!

The workshop emphasizes modern development practices including Git workflows, environment management, and basic CI/CD concepts.`,
    prerequisites: ['HTML/CSS fundamentals', 'JavaScript basics (ES6+)', 'Node.js installed', 'MongoDB account (free tier)'],
    topics: ['React Fundamentals & Hooks', 'Component Architecture & State Management', 'Node.js & Express API Development', 'MongoDB & Mongoose ODM', 'RESTful API Design', 'Authentication with JWT', 'Deployment to Vercel/Railway'],
    takeaways: ['Complete full-stack application', 'GitHub repository with your code', 'Deployed live application', 'Understanding of MERN stack', 'Certificate of completion'],
    materials: ['Starter code repository', 'API documentation', 'Design assets', 'Deployment guides'],
  },
  {
    id: 4,
    slug: 'ui-ux-design-masterclass',
    title: 'UI/UX Design Masterclass',
    instructor: 'Sneha Patel',
    designation: 'Design Director, DesignHub',
    instructorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
    instructorBio: 'Sneha Patel is an award-winning designer who has led design teams at startups and MNCs. She specializes in creating user-centered designs that balance aesthetics with functionality.',
    duration: '5 hours',
    capacity: '45 seats',
    date: 'January 13, 2026',
    time: '10:00 AM - 3:00 PM',
    venue: 'Design Studio, Block D',
    icon: 'Palette',
    color: 'from-orange-500 to-red-500',
    fee: '₹450',
    description: 'Learn design thinking, wireframing, and prototyping using Figma.',
    longDescription: `This masterclass introduces you to the world of UI/UX design through a practical, project-based approach. You'll learn the complete design process from user research to high-fidelity prototypes.

Using Figma as our primary tool, we'll cover wireframing techniques, visual design principles, component libraries, and interactive prototyping. You'll work on a real design brief and create a portfolio-worthy project.

The workshop also covers design thinking methodology and how to conduct user research to inform your design decisions.`,
    prerequisites: ['Figma account (free)', 'Basic computer skills', 'Interest in design'],
    topics: ['Design Thinking Framework', 'User Research Methods', 'Information Architecture', 'Wireframing Techniques', 'Visual Design Principles', 'Figma Mastery', 'Interactive Prototyping', 'Design Handoff'],
    takeaways: ['Complete app design project', 'Figma component library', 'Understanding of UX process', 'Portfolio piece', 'Certificate of completion'],
    materials: ['Figma starter file', 'Icon library', 'Design resources', 'UX checklist'],
  },
  {
    id: 5,
    slug: 'drone-building-programming',
    title: 'Drone Building & Programming',
    instructor: 'Vikram Singh',
    designation: 'Founder, DroneWorks',
    instructorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
    instructorBio: 'Vikram Singh is a drone enthusiast and entrepreneur who has built over 100 custom drones. His company DroneWorks specializes in industrial drone solutions and pilot training.',
    duration: '7 hours',
    capacity: '30 seats',
    date: 'January 14, 2026',
    time: '9:00 AM - 4:00 PM',
    venue: 'Robotics Lab & Open Ground',
    icon: 'Rocket',
    color: 'from-yellow-500 to-orange-500',
    fee: '₹1200',
    description: 'Build your own drone from scratch and learn to program autonomous flight. Take home your drone!',
    longDescription: `This is the ultimate hands-on workshop for drone enthusiasts! You'll build a fully functional quadcopter from components and learn to program it for autonomous flight patterns.

The workshop covers drone physics, component selection, assembly techniques, flight controller programming, and basic autonomous navigation. You'll test fly your creation in our designated flying zone.

The best part? You take home the drone you build! All components are included in the workshop fee.`,
    prerequisites: ['Basic electronics knowledge', 'Interest in drones/aviation', 'Laptop for programming'],
    topics: ['Drone Aerodynamics', 'Component Selection & Assembly', 'Flight Controller Setup', 'ESC & Motor Configuration', 'Radio Transmitter Binding', 'Basic Flight Training', 'Autonomous Flight Programming'],
    takeaways: ['Your own built drone', 'Flight controller knowledge', 'Programming skills', 'Flying experience', 'Certificate of completion'],
    materials: ['Complete drone kit', 'Tools and supplies', 'Transmitter', 'Battery and charger', 'Carrying case'],
  },
  {
    id: 6,
    slug: 'cybersecurity-essentials',
    title: 'Cybersecurity Essentials',
    instructor: 'Ananya Reddy',
    designation: 'Security Consultant, CyberShield',
    instructorImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop',
    instructorBio: 'Ananya Reddy is a certified ethical hacker (CEH) and security consultant who has helped numerous organizations strengthen their security posture. She regularly speaks at security conferences.',
    duration: '5 hours',
    capacity: '50 seats',
    date: 'January 14, 2026',
    time: '10:00 AM - 3:00 PM',
    venue: 'Cyber Lab, Block A',
    icon: 'Shield',
    color: 'from-red-500 to-pink-500',
    fee: '₹550',
    description: 'Explore ethical hacking, penetration testing, and network security fundamentals.',
    longDescription: `This workshop introduces you to the exciting field of cybersecurity through hands-on hacking exercises in a controlled environment. Learn how attackers think and how to defend against common threats.

We'll cover web application vulnerabilities, network security, password cracking, and basic penetration testing techniques. You'll use industry-standard tools like Burp Suite, Wireshark, and Nmap.

All activities are conducted in a safe, isolated lab environment designed for learning.`,
    prerequisites: ['Basic networking concepts', 'Linux command line basics (helpful)', 'Laptop with VM capability'],
    topics: ['Security Fundamentals & CIA Triad', 'Web Application Vulnerabilities (OWASP Top 10)', 'Network Scanning & Enumeration', 'Password Attacks & Defense', 'Social Engineering Awareness', 'Basic Penetration Testing', 'Security Best Practices'],
    takeaways: ['Hands-on security experience', 'Understanding of common vulnerabilities', 'Security testing methodology', 'Tool proficiency', 'Certificate of completion'],
    materials: ['Pre-configured VM image', 'Lab manual', 'Tool guides', 'Resource links'],
  },
  {
    id: 7,
    slug: 'mobile-app-development',
    title: 'Mobile App Development with Flutter',
    instructor: 'Rahul Nair',
    designation: 'Mobile Lead, AppFactory',
    instructorImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop',
    instructorBio: 'Rahul Nair has developed over 20 mobile applications that have been downloaded millions of times. He specializes in cross-platform development and has been working with Flutter since its beta release.',
    duration: '6 hours',
    capacity: '50 seats',
    date: 'January 15, 2026',
    time: '9:00 AM - 3:00 PM',
    venue: 'Lab 103, Block A',
    icon: 'Smartphone',
    color: 'from-blue-500 to-indigo-500',
    fee: '₹600',
    description: 'Build beautiful cross-platform mobile apps using Flutter and Dart.',
    longDescription: `Learn to build stunning mobile applications that run on both iOS and Android using Flutter, Google's UI toolkit. This workshop takes you from Flutter basics to building a complete app.

You'll learn Dart programming, Flutter widgets, state management, API integration, and app architecture. By the end, you'll have a fully functional app running on your device!

Flutter's hot reload feature makes development fast and fun - see your changes instantly as you code.`,
    prerequisites: ['Basic programming knowledge', 'Flutter SDK installed', 'Android Studio or VS Code', 'Mobile device for testing'],
    topics: ['Dart Programming Basics', 'Flutter Widget System', 'Layouts & Responsive Design', 'State Management', 'HTTP & API Integration', 'Navigation & Routing', 'Building & Publishing'],
    takeaways: ['Complete Flutter application', 'App on your phone', 'Flutter development skills', 'Code repository', 'Certificate of completion'],
    materials: ['Starter project', 'Widget reference', 'API documentation', 'Design assets'],
  },
  {
    id: 8,
    slug: 'blockchain-fundamentals',
    title: 'Blockchain & Web3 Fundamentals',
    instructor: 'Karthik Menon',
    designation: 'Web3 Developer, ChainLabs',
    instructorImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop',
    instructorBio: 'Karthik Menon is a blockchain developer who has worked on multiple DeFi and NFT projects. He is passionate about decentralized technologies and their potential to transform industries.',
    duration: '5 hours',
    capacity: '45 seats',
    date: 'January 15, 2026',
    time: '10:00 AM - 3:00 PM',
    venue: 'Lab 104, Block A',
    icon: 'Link',
    color: 'from-indigo-500 to-purple-500',
    fee: '₹500',
    description: 'Understand blockchain technology and build your first smart contract.',
    longDescription: `Demystify blockchain technology in this comprehensive workshop. You'll understand how blockchains work, why they matter, and how to build on them.

We'll cover blockchain fundamentals, consensus mechanisms, smart contracts, and decentralized applications. You'll write and deploy your own smart contract on a test network using Solidity.

Whether you're interested in DeFi, NFTs, or enterprise blockchain, this workshop provides the foundation you need.`,
    prerequisites: ['Basic programming knowledge', 'MetaMask wallet installed', 'Understanding of web development (helpful)'],
    topics: ['Blockchain Fundamentals', 'Cryptography Basics', 'Consensus Mechanisms', 'Ethereum & Smart Contracts', 'Solidity Programming', 'Web3.js Integration', 'DApp Architecture'],
    takeaways: ['Deployed smart contract', 'Understanding of blockchain', 'Solidity basics', 'Web3 development intro', 'Certificate of completion'],
    materials: ['Solidity starter code', 'Test network ETH', 'Development guides', 'Resource links'],
  },
];
