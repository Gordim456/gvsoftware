
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
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
        <Carousel className="w-full h-screen" opts={{ loop: true, duration: 20 }} autoPlay={true}>
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
        <Hero />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
