
import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const sliderItems = [
  {
    image: "/lovable-uploads/61ef491d-1126-436c-be67-fd525f729623.png",
    title: "Sistema de Gestão de Bebidas",
    description: "Sistema completo para controle de estoque e vendas de bebidas.",
    cta: "Conheça o sistema"
  },
  {
    image: "/lovable-uploads/325a1643-74a7-40ea-9d10-617fbb277bf1.png",
    title: "Desenvolvimento Web",
    description: "Criamos aplicações web modernas e responsivas.",
    cta: "Saiba mais"
  },
  {
    image: "/lovable-uploads/7b28e4c1-03d5-4727-af13-88426ecce861.png", 
    title: "Aplicações Mobile",
    description: "Desenvolvemos aplicativos nativos para iOS e Android.",
    cta: "Conheça nossos apps"
  },
  {
    image: "/lovable-uploads/ec120818-eaa6-4fb5-8187-e1914b9d670a.png",
    title: "Design UI/UX", 
    description: "Projetamos interfaces intuitivas e experiências digitais.",
    cta: "Ver portfólio"
  }
];

export const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const intervalRef = React.useRef<NodeJS.Timeout>();

  React.useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderItems.length);
    }, 6000);
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % sliderItems.length);
      }, 6000);
    }
  };

  return (
    <div className="w-full h-[500px] relative overflow-hidden rounded-xl bg-slate-900">
      <div className="w-full h-full rounded-xl relative">
        {sliderItems.map((item, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-700 ${
            currentIndex === index ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 rounded-xl" />
            <div className="w-full h-full flex items-center justify-center p-8">
              <img
                src={item.image}
                alt={item.title}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
            
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <h3 className="text-2xl font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-lg text-gray-200 mb-4 max-w-md">
                {item.description}
              </p>
              <Link to="/portfolio">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                  {item.cta}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        ))}
        
        <div className="absolute bottom-2 right-6 flex space-x-2 z-30">
          {sliderItems.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-white w-6' 
                  : 'bg-white/50 w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
