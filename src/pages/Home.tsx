
import { useEffect, useState, lazy, Suspense, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SocialIcons from '@/components/SocialIcons';
import { memo } from 'react';

// Lazy-load components
const Hero = lazy(() => import('../components/Hero'));
const Services = lazy(() => import('../components/Services'));
const Testimonials = lazy(() => import('../components/Testimonials'));

// Memoize components
const MemoizedFooter = memo(Footer);
const MemoizedNavbar = memo(Navbar);
const MemoizedSocialIcons = memo(SocialIcons);

// Optimized loading component
const SectionLoading = () => (
  <div className="w-full py-8 flex justify-center">
    <div className="w-6 h-6 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Simplified background with static gradient
const StaticBackground = memo(() => (
  <div className="fixed inset-0 z-0">
    <div className="absolute inset-0 bg-gradient-to-br from-gv-darker via-indigo-950 to-purple-950" />
    <div className="absolute inset-0 opacity-30" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    }} />
  </div>
));

const Home = () => {
  useEffect(() => {
    document.title = 'Início | GV Software - Desenvolvimento de Software';
    
    // Preload critical resources
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
    link.as = 'style';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen">
      <StaticBackground />
      
      <div className="relative z-10">
        <MemoizedSocialIcons />
        <MemoizedNavbar />
        
        <Suspense fallback={<SectionLoading />}>
          <Hero />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <Services />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <Testimonials />
        </Suspense>
        
        <MemoizedFooter />
      </div>
    </div>
  );
};

export default Home;
