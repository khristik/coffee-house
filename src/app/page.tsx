// 'use client';
import Hero from './components/Hero';
import About from './components/About';
import OurOfferings from './components/OurOfferings';
import Menu from './components/Menu';
import SeasonSpecials from './components/SeasonSpecials';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <OurOfferings />
      <Menu />
      <SeasonSpecials />
    </main>
  );
}
