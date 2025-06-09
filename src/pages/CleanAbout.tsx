
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SocialIcons from '../components/SocialIcons';
import AboutHero from '../components/about/AboutHero';
import AboutStats from '../components/about/AboutStats';
import AboutMissionVision from '../components/about/AboutMissionVision';
import AboutFeatureGrid from '../components/about/AboutFeatureGrid';

console.log('🚀 CLEAN ABOUT: Loading completely clean about page - NO RADIX UI ANYWHERE');

const CleanAbout: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log('🚀 CLEAN ABOUT: Setting up page metadata');
    document.title = 'Sobre | GV Software - Nossa História e Missão';
    setIsLoaded(true);
    
    const existingMeta = document.querySelector('meta[name="description"]');
    if (!existingMeta) {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Conheça a GV Software - Empresa especializada em desenvolvimento de software com experiência criando soluções digitais inovadoras.';
      document.head.appendChild(meta);
    }
  }, []);

  if (!isLoaded) {
    console.log('🚀 CLEAN ABOUT: Showing loading state');
    return (
      <div className="flex items-center justify-center h-screen bg-slate-950">
        <div className="w-8 h-8 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  console.log('🚀 CLEAN ABOUT: Rendering clean about page');

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

console.log('✅ CLEAN ABOUT: Clean about page defined successfully - ZERO RADIX DEPENDENCIES');
export default CleanAbout;
