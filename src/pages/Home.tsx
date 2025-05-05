
import { useEffect, useState, lazy, Suspense, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SocialIcons from '@/components/SocialIcons';
import { memo } from 'react';

// Lazy-load components that aren't immediately visible
const Hero = lazy(() => import('../components/Hero'));
const Services = lazy(() => import('../components/Services'));
const Testimonials = lazy(() => import('../components/Testimonials'));

// Memoize components to prevent unnecessary re-renders
const MemoizedFooter = memo(Footer);
const MemoizedNavbar = memo(Navbar);
const MemoizedSocialIcons = memo(SocialIcons);

// Simple loading component
const SectionLoading = () => (
  <div className="w-full py-20 flex justify-center">
    <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Background Slides component - optimized with useMemo and requestAnimationFrame
const BackgroundSlides = memo(() => {
  const slides = useMemo(() => [
    {
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      alt: 'Desenvolvimento Web'
    },
    {
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
      alt: 'Aplicações Mobile'
    },
    {
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      alt: 'Design UI/UX'
    },
    {
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
      alt: 'Soluções Empresariais'
    }
  ], []);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = 0;
    const interval = 5000; // 5 seconds
    
    const animate = (timestamp: number) => {
      if (!lastTime) lastTime = timestamp;
      const elapsed = timestamp - lastTime;
      
      if (elapsed > interval) {
        setCurrentSlide(prev => (prev + 1) % slides.length);
        lastTime = timestamp;
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [slides.length]);

  return (
    <div className="fixed inset-0 z-0">
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={index !== currentSlide}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-indigo-900/70 z-10" />
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
          />
        </div>
      ))}
    </div>
  );
});

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.title = 'Início | GV Software - Desenvolvimento de Software';
    
    // Use requestIdleCallback for non-critical operations when browser is idle
    const idleId = "requestIdleCallback" in window ? 
      window.requestIdleCallback(() => setIsLoaded(true)) : 
      setTimeout(() => setIsLoaded(true), 10);
    
    return () => {
      if ("requestIdleCallback" in window) {
        window.cancelIdleCallback(idleId as any);
      } else {
        clearTimeout(idleId);
      }
    };
  }, []);

  // Apply fade-in effect using CSS transitions
  const contentClasses = `min-h-screen transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`;

  return (
    <div className={contentClasses}>
      <BackgroundSlides />
      
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
