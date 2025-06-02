
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
  link
}: ProjectCarouselProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  return (
    <div className="space-y-4">
      <div className="relative mb-6 overflow-hidden rounded-xl h-48 bg-slate-800/50">
        <div className="relative h-full w-full">
          <img 
            src={images[currentImageIndex]} 
            alt={`${title} - image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
          
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {images.length > 1 && (
          <>
            <div className="absolute bottom-3 right-3 z-20 flex gap-2">
              <Button 
                variant="outline" 
                size="icon" 
                className="h-8 w-8 rounded-full bg-black/70 border-gray-600/50 hover:bg-black/90 backdrop-blur-sm"
                onClick={prevImage}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="h-8 w-8 rounded-full bg-black/70 border-gray-600/50 hover:bg-black/90 backdrop-blur-sm"
                onClick={nextImage}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-20 flex gap-1">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentImageIndex === index 
                      ? "bg-white w-6" 
                      : "bg-white/50 w-2 hover:bg-white/75"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full font-medium border border-indigo-500/30">
            {category}
          </span>
        </div>
        
        <h3 className="text-lg font-bold text-white group-hover:text-indigo-200 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.slice(0, 4).map((tech, index) => (
            <span 
              key={index} 
              className="text-xs bg-slate-800/70 text-gray-300 px-2 py-1 rounded-md border border-slate-700/50 hover:border-indigo-500/30 transition-colors"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="text-xs bg-slate-800/70 text-gray-300 px-2 py-1 rounded-md border border-slate-700/50">
              +{technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
