import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
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
      title: 'Desenvolvimento Web',
      description: 'Soluções modernas e responsivas para sua presença online'
    },
    {
      image: '/project-2.jpg',
      title: 'Aplicações Mobile',
      description: 'Apps nativos para iOS e Android com experiências incríveis'
    },
    {
      image: '/project-3.jpg',
      title: 'Design UI/UX',
      description: 'Interfaces intuitivas e experiências memoráveis'
    },
    {
      image: '/project-6.jpg',
      title: 'Soluções Empresariais',
      description: 'Software personalizado para transformar seu negócio'
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
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-black/80 to-indigo-900/50 z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    />
                    <motion.img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1 }}
                      animate={{ scale: 1.1 }}
                      transition={{ 
                        duration: 20, 
                        repeat: Infinity, 
                        repeatType: "reverse" 
                      }}
                    />
                    <motion.div 
                      className="absolute bottom-[35%] md:bottom-[40%] left-8 md:left-24 z-20 max-w-lg"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1, delay: 0.3 }}
                    >
                      <span className="bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {index + 1}/{slides.length}
                      </span>
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 text-white">{slide.title}</h2>
                      <p className="text-lg md:text-xl text-gray-200 mt-4">
                        {slide.description}
                      </p>
                    </motion.div>
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
