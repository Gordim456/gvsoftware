
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';

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
  
  // Simplified carousel with longer duration
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    duration: 30 // Slower transitions for better performance
  });
  
  // Auto-slide with longer interval and better cleanup
  useEffect(() => {
    if (emblaApi) {
      const interval = setInterval(() => {
        emblaApi.scrollNext();
        setCurrentIndex((prev) => (prev + 1) % sliderItems.length);
      }, 8000); // 8 seconds between slides
      
      return () => clearInterval(interval);
    }
  }, [emblaApi, sliderItems.length]);

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
    if (emblaApi) {
      emblaApi.scrollTo(index);
      setCurrentIndex(index);
    }
  };

  return (
    <div className="w-full h-[600px] relative overflow-hidden rounded-2xl shadow-2xl shadow-indigo-500/20">
      {/* Simplified background gradient */}
      <div className="absolute -top-20 -left-20 w-full h-full bg-gradient-to-br from-indigo-600/50 to-purple-800/50 rounded-[30px] blur-3xl z-0 opacity-60" />
      
      <div className="w-full h-full rounded-2xl relative z-10">
        <div className="overflow-hidden h-full rounded-2xl" ref={emblaRef}>
          <div className="flex h-full">
            {sliderItems.map((item, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 h-full relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} backdrop-blur-sm z-10 rounded-2xl opacity-80`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/20 z-20 rounded-2xl" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[600px] object-cover rounded-2xl"
                  loading="lazy" 
                />
                
                {/* Tag */}
                <div className="absolute top-8 left-8 z-30">
                  <span className="bg-white/10 backdrop-blur-md text-white text-xs font-semibold px-4 py-2 rounded-full inline-flex items-center">
                    <Star className="w-3 h-3 mr-1 text-yellow-400" />
                    {item.tag}
                  </span>
                </div>
                
                <div className="absolute bottom-14 left-10 right-10 z-30">
                  <span className="inline-block px-4 py-1.5 bg-indigo-500/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full mb-4">
                    {`${index + 1}/${sliderItems.length}`}
                  </span>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-xl text-gray-200 mb-8 max-w-md">
                    {item.description}
                  </p>
                  <div>
                    <Link to="/services">
                      <Button className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white px-8 py-6 rounded-xl flex items-center gap-3 group font-medium shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300">
                        {item.cta}
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Custom navigation dots with simplified styling */}
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
      </div>
    </div>
  );
};
