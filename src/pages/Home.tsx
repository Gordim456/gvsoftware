
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import SocialIcons from '../components/SocialIcons';

const Home = () => {
  React.useEffect(() => {
    document.title = 'Início | GV Software - Soluções Digitais Modernas';
  }, []);

  return (
    <div className="min-h-screen bg-gv-dark">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <Footer />
      <SocialIcons />
    </div>
  );
};

export default Home;
