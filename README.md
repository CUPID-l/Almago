# Almago 2026 - Leading a Leap Forward

Official website for Almago 2026 - Amrita Vishwa Vidyapeetham, Bangalore's premier tech fest. Built with Next.js 14, TypeScript, and Tailwind CSS. Features a cyberpunk-inspired design with glowing effects, animations, and a fully responsive layout.

![Almago Preview](https://via.placeholder.com/1200x600/0a0a0f/00f5ff?text=Almago+2026)

## ✨ Features

- 🎨 **Modern Cyberpunk Design** - Futuristic UI with neon colors, glowing effects, and cyber grid patterns
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- ⚡ **Fast Performance** - Built with Next.js 14 App Router for optimal performance
- 🎭 **Rich Animations** - Smooth animations using Tailwind CSS and Framer Motion
- 🌙 **Dark Theme** - Beautiful dark mode design throughout
- 🏫 **Amrita Bangalore** - Customized for Amrita Vishwa Vidyapeetham, Bangalore

## 📄 Pages Included

1. **Home Page** - Hero section, About, Events preview, Workshops, Schedule, Gallery, Team, Sponsors, Contact
2. **Events Page** - Full events listing with category filters and search
3. **Workshops Page** - Detailed workshop listings with registration
4. **Schedule Page** - 3-day event timeline
5. **Gallery Page** - Image gallery with lightbox
6. **Team Page** - Team members showcase
7. **Contact Page** - Contact form and FAQ
8. **Register Page** - Multi-step registration form

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
   ```bash
   cd almago
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Colors

Edit the color palette in `tailwind.config.js`:

```js
colors: {
  accent: {
    cyan: '#00f5ff',    // Primary accent
    purple: '#a855f7',  // Secondary accent
    pink: '#ec4899',    // Tertiary accent
    orange: '#f97316',  // Highlight color
  },
}
```

### Fonts

The template uses three fonts:
- **Orbitron** - For headings (futuristic feel)
- **Inter** - For body text (clean and readable)
- **JetBrains Mono** - For code/technical elements

### Images

Replace placeholder images in the components with your own. The template uses Unsplash images for demonstration.

## 📁 Project Structure

```
almago/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   ├── events/          # Events page
│   ├── workshops/       # Workshops page
│   ├── schedule/        # Schedule page
│   ├── gallery/         # Gallery page
│   ├── team/            # Team page
│   ├── contact/         # Contact page
│   └── register/        # Registration page
├── components/
│   ├── Navbar.tsx       # Navigation bar
│   ├── Footer.tsx       # Footer
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Events.tsx       # Events section
│   ├── Workshops.tsx    # Workshops section
│   ├── Schedule.tsx     # Schedule section
│   ├── Gallery.tsx      # Gallery section
│   ├── Team.tsx         # Team section
│   ├── Sponsors.tsx     # Sponsors section
│   └── Contact.tsx      # Contact section
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🎯 Key Sections

### Events
- 50+ events across 7 categories
- Technical, Robotics, Gaming, Cultural, Design, AI/ML
- Prize pools, team sizes, and registration fees

### Workshops
- 6 hands-on workshops
- Expert instructors
- Prerequisites and learning outcomes

### Registration
- Multi-step registration form
- Event and workshop selection
- Payment integration ready

## 🔧 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion + CSS Animations

## 📝 Customization Guide

### Adding New Events

Edit the `events` array in `app/events/page.tsx`:

```typescript
{
  id: 13,
  title: 'Your Event Name',
  category: 'technical',
  description: 'Event description...',
  prize: '₹50,000',
  team: '2-4 members',
  date: 'March 15, 2026',
  image: 'https://your-image-url.jpg',
  featured: true,
  registrationFee: '₹200',
  venue: 'Hall A',
}
```

### Adding Team Members

Edit the `teamCategories` array in `components/Team.tsx`.

### Modifying Schedule

Edit the `scheduleData` array in `components/Schedule.tsx`.

## 📄 License

This website is the property of Almago - Amrita Vishwa Vidyapeetham, Bangalore.

## 🤝 Support

For questions or customization help, contact almago@blr.amrita.edu

---

Built with ❤️ for Amrita Vishwa Vidyapeetham, Bangalore | Leading a Leap Forward
