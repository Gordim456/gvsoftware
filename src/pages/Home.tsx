
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import QuickFAQ from '@/components/QuickFAQ';
import CallToAction from '@/components/CallToAction';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Início | GV Software - Desenvolvimento de Software';
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
