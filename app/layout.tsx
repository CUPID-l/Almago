import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Almago 2026 | Leading a Leap Forward',
  description: 'Experience the future of technology at Almago 2026 - Amrita Vishwa Vidyapeetham Bangalore\'s premier tech fest. A 4-day extravaganza of innovation, workshops, hackathons, and cultural events. January 12-15, 2026.',
  keywords: 'almago, tech fest, amrita bangalore, hackathon, workshops, innovation, technology, events, january 2026',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="animated-bg min-h-screen">
        {children}
      </body>
    </html>
  )
}
