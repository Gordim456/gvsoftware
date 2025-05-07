
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCarouselProps {
  images: string[];
  title: string;
  category: string;
  description: string;
  technologies: string[];
  link: string;
}

const ProjectCarousel = ({
  images,
  title,
  category,
  description,
  technologies,
  link
}: ProjectCarouselProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Funções de navegação otimizadas
  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Implementando auto-slide com intervalo grande para melhorar a performance
  useEffect(() => {
    // Usando 15s para reduzir drasticamente o uso de CPU
    const interval = setTimeout(nextImage, 15000);
    
    return () => clearTimeout(interval);
  }, [currentImageIndex, nextImage]);

  return (
    <div className="bg-gv-darker p-6 rounded-lg border border-gray-800 overflow-hidden hover:border-indigo-500 transition-colors duration-300">
      <div className="relative mb-6 overflow-hidden rounded-lg h-48">
        {/* Simplificando a sobreposição de gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-600/10 hover:from-indigo-500/20 hover:to-purple-600/20 transition-colors duration-300 z-10"></div>
        
        {/* Carrossel de imagens otimizado */}
        <div className="relative h-full w-full">
          {images.map((image, index) => (
            <div
              key={index}
              aria-hidden={currentImageIndex !== index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                currentImageIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <img 
                src={image} 
                alt={`${title} - image ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Controles de navegação */}
        <div className="absolute bottom-2 right-2 z-20 flex gap-2">
          <Button 
            variant="outline" 
            size="icon" 
            className="h-7 w-7 rounded-full bg-black/50 border-gray-600 hover:bg-black/70 hover:border-gray-400"
            onClick={prevImage}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className="h-7 w-7 rounded-full bg-black/50 border-gray-600 hover:bg-black/70 hover:border-gray-400"
            onClick={nextImage}
            aria-label="Next image"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Indicadores de progresso simplificados */}
        {images.length <= 5 && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20 flex gap-1">
            {images.map((_, index) => (
              <div 
                key={index} 
                className={`h-1.5 rounded-full ${
                  currentImageIndex === index 
                    ? "bg-white w-3" 
                    : "bg-white/50 w-1.5"
                }`}
              />
            ))}
          </div>
        )}
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm bg-indigo-500 bg-opacity-20 text-indigo-300 px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-semibold group-hover:text-indigo-300 transition-colors">{title}</h3>
        <p className="text-gv-gray">{description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, index) => (
            <span key={index} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
