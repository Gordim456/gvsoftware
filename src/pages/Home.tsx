
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { Instagram, Coffee } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const Home = () => {
  useEffect(() => {
    document.title = 'Início | GV Software - Desenvolvimento de Software';
  }, []);

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
        <Carousel className="w-full h-screen" opts={{ loop: true, duration: 20 }}>
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index} className="w-full h-screen">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-black/60 z-10"></div>
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="relative z-10">
        <Navbar />
        
        <motion.div 
          className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50"
          animate={{
            y: [-10, 0, -10],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
             className="bg-gv-primary p-3 rounded-full hover:scale-110 transition-transform">
            <Instagram className="w-6 h-6 text-white" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"
             className="bg-gv-primary p-3 rounded-full hover:scale-110 transition-transform">
            <Coffee className="w-6 h-6 text-white" />
          </a>
        </motion.div>

        <Hero />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
