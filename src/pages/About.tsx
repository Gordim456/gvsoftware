
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutHero from '../components/about/AboutHero';
import AboutMission from '../components/about/AboutMission';
import AboutTeam from '../components/about/AboutTeam';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = 'Sobre | GV Software';
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div className="min-h-screen bg-gv-dark">
      <Navbar />
      
      <section className="relative py-20 pt-28 overflow-hidden">
        <AboutHero />
        <AboutMission />
        <AboutTeam />
      </section>

      <Footer />
    </motion.div>
  );
};

export default About;
