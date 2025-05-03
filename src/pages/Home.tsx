
import React, { useEffect, useState, useCallback } from 'react';
import SocialIcons from '@/components/SocialIcons';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import useEmblaCarousel from 'embla-carousel-react';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Optimized loading with reduced animation overhead
  useEffect(() => {
    document.title = 'Início | GV Software - Desenvolvimento de Software';
    // Immediate loading for better perceived performance
    setIsLoaded(true);
  }, []);

  // Highly optimized carousel with minimal animations
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    duration: 60, // Even slower transitions for better performance
    skipSnaps: true, // Skip position calculations between slides
  });
  
  // Auto-slide with longer interval and optimized animation
  useEffect(() => {
    if (emblaApi) {
      const interval = setInterval(() => {
        requestAnimationFrame(() => {
          emblaApi.scrollNext();
        });
      }, 20000); // 20 seconds for much better performance
      
      return () => clearInterval(interval);
    }
  }, [emblaApi]);

  // Memoized slides data with optimized image loading
  const slides = React.useMemo(() => [
    {
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      title: 'Desenvolvimento Web',
      description: 'Soluções modernas e responsivas para sua presença online'
    },
    {
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
      title: 'Aplicações Mobile',
      description: 'Apps nativos para iOS e Android com experiências incríveis'
    },
    {
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      title: 'Design UI/UX',
      description: 'Interfaces intuitivas e experiências memoráveis'
    },
    {
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
      title: 'Soluções Empresariais',
      description: 'Software personalizado para transformar seu negócio'
    }
  ], []);

  // Highly optimized slide rendering with reduced DOM operations
  const renderSlides = useCallback(() => {
    return slides.map((slide, index) => (
      <div key={index} className="flex-[0_0_100%] h-screen min-w-0">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-indigo-900/70 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={index === 0 ? "high" : "low"}
            style={{ willChange: 'auto' }} // Let browser optimize
          />
        </div>
      </div>
    ));
  }, [slides]);

  return (
    <div className={`min-h-screen ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="fixed inset-0 z-0">
        <div className="w-full h-screen">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex h-screen">
              {renderSlides()}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <SocialIcons />
        <Navbar />
        <Hero />
        <Services />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
