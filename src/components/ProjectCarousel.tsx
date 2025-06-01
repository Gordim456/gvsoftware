
import { useState, useCallback } from 'react';
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
}: ProjectCarouselProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  return (
    <div className="bg-gv-darker p-6 rounded-lg border border-gray-800 hover:border-indigo-500 transition-colors duration-300">
      <div className="relative mb-4 overflow-hidden rounded-lg h-40">
        <div className="relative h-full w-full">
          <img 
            src={images[currentImageIndex]} 
            alt={`${title} - image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {images.length > 1 && (
          <>
            <div className="absolute bottom-2 right-2 z-20 flex gap-1">
              <Button 
                variant="outline" 
                size="icon" 
                className="h-6 w-6 rounded-full bg-black/60 border-gray-600"
                onClick={prevImage}
              >
                <ChevronLeft className="h-3 w-3" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="h-6 w-6 rounded-full bg-black/60 border-gray-600"
                onClick={nextImage}
              >
                <ChevronRight className="h-3 w-3" />
              </Button>
            </div>
            
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20 flex gap-1">
              {images.map((_, index) => (
                <div 
                  key={index} 
                  className={`h-1 rounded-full transition-all ${
                    currentImageIndex === index 
                      ? "bg-white w-2" 
                      : "bg-white/50 w-1"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      
      <div className="space-y-2">
        <span className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded-full">
          {category}
        </span>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gv-gray text-sm">{description}</p>
        
        <div className="flex flex-wrap gap-1 mt-3">
          {technologies.slice(0, 4).map((tech, index) => (
            <span key={index} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
              +{technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
