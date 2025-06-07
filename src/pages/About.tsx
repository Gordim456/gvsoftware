
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SocialIcons from '../components/SocialIcons';
import AboutHero from '../components/about/AboutHero';
import AboutStats from '../components/about/AboutStats';
import AboutMissionVision from '../components/about/AboutMissionVision';
import AboutFeatureGrid from '../components/about/AboutFeatureGrid';

const About: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.title = 'Sobre | GV Software - Nossa História e Missão';
    setIsLoaded(true);
    
    const existingMeta = document.querySelector('meta[name="description"]');
    if (!existingMeta) {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Conheça a GV Software - Empresa especializada em desenvolvimento de software com mais de 5 anos de experiência criando soluções digitais inovadoras.';
      document.head.appendChild(meta);
    }
  }, []);

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen bg-slate-950">
        <div className="w-8 h-8 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white">
      <Navbar />
      <AboutHero />
      <AboutStats />
      <AboutMissionVision />
      <AboutFeatureGrid />
      <SocialIcons />
      <Footer />
    </div>
  );
};

export default About;
