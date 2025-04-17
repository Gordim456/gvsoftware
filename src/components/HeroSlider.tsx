import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from 'embla-carousel-react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const sliderItems = [
  {
    image: "/project-1.jpg",
    title: "Desenvolvimento Web",
    description: "Criamos aplicações web modernas e responsivas com as melhores tecnologias do mercado, focando em desempenho e experiência do usuário.",
    gradient: "from-indigo-600/70 to-purple-800/70",
    cta: "Saiba mais"
  },
  {
    image: "/project-2.jpg",
    title: "Aplicações Mobile",
    description: "Desenvolvemos aplicativos nativos para iOS e Android que surpreendem usuários e transformam a maneira como interagem com sua marca.",
    gradient: "from-blue-600/70 to-indigo-800/70",
    cta: "Conheça nossos apps"
  },
  {
    image: "/project-3.jpg",
    title: "Design UI/UX",
    description: "Projetamos interfaces intuitivas e experiências digitais que encantam os usuários e fortalecem o relacionamento com sua marca.",
    gradient: "from-purple-600/70 to-pink-800/70",
    cta: "Ver portfólio"
  },
  {
    image: "/project-4.jpg",
    title: "Sistemas Empresariais",
    description: "Criamos software personalizado para otimizar processos, aumentar a produtividade e impulsionar o crescimento do seu negócio.",
    gradient: "from-pink-600/70 to-rose-800/70",
    cta: "Fale com um consultor"
  }
];

export const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  
  // Fix: Replaced 'speed' with 'duration' which is the correct property
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    duration: 15 // This is the correct property for controlling animation speed in Embla
  });
  
  // Auto-slide functionality
  useEffect(() => {
    if (emblaApi) {
      const interval = setInterval(() => {
        setTransitioning(true);
        
        setTimeout(() => {
          emblaApi.scrollNext();
          setCurrentIndex((prev) => (prev + 1) % sliderItems.length);
          setTransitioning(false);
        }, 500);
      }, 7000); // Increased to 7 seconds for better user experience
      
      return () => clearInterval(interval);
    }
  }, [emblaApi]);

  // Sync current index with embla carousel
  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap());
    };
    
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const handleDotClick = (index: number) => {
    if (emblaApi && !transitioning) {
      setTransitioning(true);
      setTimeout(() => {
        emblaApi.scrollTo(index);
        setCurrentIndex(index);
        setTransitioning(false);
      }, 300);
    }
  };

  return (
    <div className="w-full h-[550px] relative overflow-hidden rounded-2xl">
      <motion.div 
        className="absolute -top-10 -left-10 w-full h-full bg-gradient-to-br from-indigo-600/40 to-purple-800/40 rounded-2xl blur-2xl z-0"
        animate={{ 
          opacity: [0.6, 0.8, 0.6],
          scale: [1, 1.05, 1],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="w-full h-full rounded-2xl relative z-10">
        <div className="overflow-hidden h-full" ref={emblaRef}>
          <div className="flex h-full">
            {sliderItems.map((item, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 h-full relative">
                <AnimatePresence>
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} backdrop-blur-sm z-10`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: transitioning ? 0 : 0.7 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20 z-20" />
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[550px] object-cover"
                  initial={{ scale: 1 }}
                  animate={{ 
                    scale: 1.1,
                    filter: transitioning ? "blur(4px)" : "blur(0px)" 
                  }}
                  transition={{ 
                    scale: { duration: 20, repeat: Infinity, repeatType: "reverse" },
                    filter: { duration: 0.5 }
                  }}
                />
                <motion.div 
                  className="absolute bottom-10 left-10 right-10 z-30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: transitioning ? 0 : 1, 
                    y: transitioning ? 20 : 0 
                  }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <motion.span
                    className="inline-block px-3 py-1 bg-indigo-500/80 text-white text-xs font-semibold rounded-full mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    {`${index + 1}/${sliderItems.length}`}
                  </motion.span>
                  <motion.h3 
                    className="text-4xl font-bold text-white mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p 
                    className="text-xl text-gray-200 mb-6 max-w-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    {item.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    <Link to="/services">
                      <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-lg flex items-center gap-2 group font-medium">
                        {item.cta}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Custom navigation dots */}
        <div className="absolute bottom-4 right-8 flex space-x-2 z-40">
          {sliderItems.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-white w-6' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
