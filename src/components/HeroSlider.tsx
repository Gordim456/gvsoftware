
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from 'embla-carousel-react';

const sliderItems = [
  {
    image: "/project-1.jpg",
    title: "Desenvolvimento Web",
    description: "Criamos aplicações web modernas e responsivas",
    gradient: "from-indigo-500/60 to-purple-600/60"
  },
  {
    image: "/project-2.jpg",
    title: "Aplicações Mobile",
    description: "Soluções nativas para iOS e Android",
    gradient: "from-blue-500/60 to-indigo-600/60"
  },
  {
    image: "/project-3.jpg",
    title: "Design UI/UX",
    description: "Experiências digitais intuitivas e atraentes",
    gradient: "from-purple-500/60 to-pink-600/60"
  },
  {
    image: "/project-4.jpg",
    title: "Sistemas Empresariais",
    description: "Software personalizado para seu negócio",
    gradient: "from-pink-500/60 to-rose-600/60"
  }
];

export const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  
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
      }, 5000);
      
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

  return (
    <div className="w-full h-[500px] relative overflow-hidden rounded-2xl">
      <motion.div 
        className="absolute -top-10 -left-10 w-full h-full bg-gradient-to-br from-indigo-500/30 to-purple-600/30 rounded-2xl blur-2xl z-0"
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
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-60 backdrop-blur-sm z-10`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: transitioning ? 0 : 0.6 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20" />
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[500px] object-cover"
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
                  className="absolute bottom-8 left-8 z-30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: transitioning ? 0 : 1, 
                    y: transitioning ? 20 : 0 
                  }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <motion.h3 
                    className="text-4xl font-bold text-white mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p 
                    className="text-xl text-gray-200 mb-4 max-w-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    {item.description}
                  </motion.p>
                  <motion.div 
                    className="h-1.5 w-32 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "8rem" }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
