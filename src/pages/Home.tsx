
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const Home = () => {
  useEffect(() => {
    document.title = 'Início | GV Software - Desenvolvimento de Software';
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 20 });
  
  // Auto-slide functionality
  useEffect(() => {
    if (emblaApi) {
      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000); // Change slides every 5 seconds
      
      return () => clearInterval(interval);
    }
  }, [emblaApi]);

  const slides = [
    {
      image: '/project-1.jpg',
      title: 'Desenvolvimento Web'
    },
    {
      image: '/project-2.jpg',
      title: 'Aplicações Mobile'
    },
    {
      image: '/project-3.jpg',
      title: 'Design UI/UX'
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="fixed inset-0 z-0">
        <div className="w-full h-screen">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex h-screen">
              {slides.map((slide, index) => (
                <div key={index} className="flex-[0_0_100%] h-screen min-w-0">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-black/60 z-10"></div>
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
