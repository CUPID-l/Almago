import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Events from '@/components/Events';
import Workshops from '@/components/Workshops';
import Schedule from '@/components/Schedule';
import Gallery from '@/components/Gallery';
import Team from '@/components/Team';
import Sponsors from '@/components/Sponsors';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Workshops />
      <Schedule />
      <Gallery />
      <Team />
      <Sponsors />
      <Contact />
      <Footer />
    </main>
  );
}
