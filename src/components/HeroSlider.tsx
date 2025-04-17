
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from 'embla-carousel-react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";

const sliderItems = [
  {
    image: "/project-1.jpg",
    title: "Desenvolvimento Web",
    description: "Criamos aplicações web modernas e responsivas com as melhores tecnologias do mercado, focando em desempenho e experiência do usuário.",
    gradient: "from-indigo-600/70 to-purple-800/70",
    cta: "Saiba mais",
    tag: "Web Development"
  },
  {
    image: "/project-2.jpg",
    title: "Aplicações Mobile",
    description: "Desenvolvemos aplicativos nativos para iOS e Android que surpreendem usuários e transformam a maneira como interagem com sua marca.",
    gradient: "from-blue-600/70 to-indigo-800/70",
    cta: "Conheça nossos apps",
    tag: "Mobile Apps"
  },
  {
    image: "/project-3.jpg",
    title: "Design UI/UX",
    description: "Projetamos interfaces intuitivas e experiências digitais que encantam os usuários e fortalecem o relacionamento com sua marca.",
    gradient: "from-purple-600/70 to-pink-800/70",
    cta: "Ver portfólio",
    tag: "UI/UX Design"
  },
  {
    image: "/project-4.jpg",
    title: "Sistemas Empresariais",
    description: "Criamos software personalizado para otimizar processos, aumentar a produtividade e impulsionar o crescimento do seu negócio.",
    gradient: "from-pink-600/70 to-rose-800/70",
    cta: "Fale com um consultor",
    tag: "Enterprise Solutions"
  }
];

export const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  
  // Fixed: Replaced 'speed' with 'duration' which is the correct property
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
    <div className="w-full h-[600px] relative overflow-hidden rounded-2xl shadow-2xl shadow-indigo-500/20">
      {/* Background animated gradient */}
      <motion.div 
        className="absolute -top-20 -left-20 w-full h-full bg-gradient-to-br from-indigo-600/50 to-purple-800/50 rounded-[30px] blur-3xl z-0"
        animate={{ 
          opacity: [0.5, 0.7, 0.5],
          scale: [1, 1.1, 1],
          rotate: [0, 3, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="w-full h-full rounded-2xl relative z-10">
        <div className="overflow-hidden h-full rounded-2xl" ref={emblaRef}>
          <div className="flex h-full">
            {sliderItems.map((item, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 h-full relative">
                <AnimatePresence>
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} backdrop-blur-sm z-10 rounded-2xl`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: transitioning ? 0 : 0.8 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/20 z-20 rounded-2xl" />
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[600px] object-cover rounded-2xl"
                  initial={{ scale: 1 }}
                  animate={{ 
                    scale: 1.1,
                    filter: transitioning ? "blur(4px)" : "blur(0px)" 
                  }}
                  transition={{ 
                    scale: { duration: 25, repeat: Infinity, repeatType: "reverse" },
                    filter: { duration: 0.5 }
                  }}
                />
                
                {/* Tag */}
                <motion.div
                  className="absolute top-8 left-8 z-30"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: transitioning ? 0 : 1, 
                    x: transitioning ? -20 : 0 
                  }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <span className="bg-white/10 backdrop-blur-md text-white text-xs font-semibold px-4 py-2 rounded-full inline-flex items-center">
                    <Star className="w-3 h-3 mr-1 text-yellow-400" />
                    {item.tag}
                  </span>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-14 left-10 right-10 z-30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: transitioning ? 0 : 1, 
                    y: transitioning ? 20 : 0 
                  }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <motion.span
                    className="inline-block px-4 py-1.5 bg-indigo-500/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    {`${index + 1}/${sliderItems.length}`}
                  </motion.span>
                  <motion.h3 
                    className="text-4xl md:text-5xl font-bold text-white mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p 
                    className="text-xl text-gray-200 mb-8 max-w-md"
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
                      <Button className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white px-8 py-6 rounded-xl flex items-center gap-3 group font-medium shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300">
                        {item.cta}
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Custom navigation dots with enhanced styling */}
        <div className="absolute bottom-6 right-10 flex space-x-3 z-40">
          {sliderItems.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-white w-8 shadow-md shadow-white/20' 
                  : 'bg-white/40 w-3 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Radial gradient overlay for depth */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-900/20 via-transparent to-purple-900/20 z-10 pointer-events-none"></div>
      </div>
    </div>
  );
};
