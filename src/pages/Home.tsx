
import React from 'react';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import QuickFAQ from '@/components/QuickFAQ';
import CallToAction from '@/components/CallToAction';

console.log('Home.tsx: Component loaded');

const Home: React.FC = () => {
  console.log('Home.tsx: Home component rendering');
  
  React.useEffect(() => {
    document.title = 'Início | GV Software - Desenvolvimento de Software';
    console.log('Home.tsx: Document title set');
  }, []);

  return (
    <>
      <Hero />
      <AboutSection />
      <Services />
      <Portfolio />
      <Testimonials />
      <QuickFAQ />
      <CallToAction />
      <Contact />
    </>
  );
};

export default Home;
