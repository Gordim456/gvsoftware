
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import SocialIcons from '../components/SocialIcons';

const Home = () => {
  useEffect(() => {
    document.title = 'Início | GV Software - Soluções Digitais Modernas';
  }, []);

  return (
    <div className="min-h-screen">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950" />
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <Testimonials />
        <Footer />
        <SocialIcons />
      </div>
    </div>
  );
};

export default Home;
