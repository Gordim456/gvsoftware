
import React, { useEffect, useState } from 'react';
import SocialIcons from '@/components/SocialIcons';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import useEmblaCarousel from 'embla-carousel-react';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.title = 'Início | GV Software - Desenvolvimento de Software';
    setIsLoaded(true);
  }, []);

  // Otimizado para melhor performance
  const [emblaRef] = useEmblaCarousel({ 
    loop: true, 
    skipSnaps: false,
  });

  // Array de slides memoizado
  const slides = React.useMemo(() => [
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

  return (
    <div className={`min-h-screen ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="fixed inset-0 z-0">
        <div className="w-full h-screen">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex h-screen">
              {slides.map((slide, index) => (
                <div key={index} className="flex-[0_0_100%] h-screen min-w-0">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-indigo-900/70 z-10" />
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full h-full object-cover"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </div>
                </div>
              ))}
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
