
import { useState, useEffect, useRef, useCallback } from 'react';
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
  const intervalRef = useRef<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  // Optimized image navigation functions
  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Highly optimized auto-slide with significant performance improvements
  useEffect(() => {
    // Use a much longer interval (12s) to drastically reduce CPU usage
    intervalRef.current = window.setInterval(nextImage, 12000);
    
    const carousel = carouselRef.current;
    
    // Optimized event listeners
    const pauseSlider = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    
    const resumeSlider = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = window.setInterval(nextImage, 12000);
    };
    
    if (carousel) {
      carousel.addEventListener('mouseenter', pauseSlider);
      carousel.addEventListener('mouseleave', resumeSlider);
    }
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      
      if (carousel) {
        carousel.removeEventListener('mouseenter', pauseSlider);
        carousel.removeEventListener('mouseleave', resumeSlider);
      }
    };
  }, [nextImage]);

  // Preload images for smoother transitions
  useEffect(() => {
    images.forEach((src, i) => {
      const img = new Image();
      img.src = src;
      imagesRef.current[i] = img;
    });
  }, [images]);

  return (
    <div 
      className="bg-gv-darker p-6 rounded-lg border border-gray-800 overflow-hidden hover:border-indigo-500 transition-colors duration-300"
      ref={carouselRef}
    >
      <div className="relative mb-6 overflow-hidden rounded-lg h-48">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-600/0 hover:from-indigo-500/30 hover:to-purple-600/30 transition-colors duration-300 z-10"></div>
        
        {/* Optimized image carousel with reduced DOM updates */}
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
                decoding="async"
              />
            </div>
          ))}
        </div>

        {/* Navigation controls with optimized event handling */}
        <div className="absolute bottom-2 right-2 z-20 flex gap-2">
          <Button 
            variant="outline" 
            size="icon" 
            className="h-7 w-7 rounded-full bg-black/50 border-gray-600 hover:bg-black/70 hover:border-gray-400"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className="h-7 w-7 rounded-full bg-black/50 border-gray-600 hover:bg-black/70 hover:border-gray-400"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Next image"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Simplified progress indicators */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20 flex gap-1">
          {images.length <= 5 && images.map((_, index) => (
            <div 
              key={index} 
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentImageIndex === index 
                  ? "bg-white w-3" 
                  : "bg-white/50 w-1.5"
              }`}
            />
          ))}
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm bg-indigo-500 bg-opacity-20 text-indigo-300 px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-semibold group-hover:text-indigo-300 transition-colors">{title}</h3>
        <p className="text-gv-gray">{description}</p>
        
        {/* Technologies with optimized rendering */}
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
