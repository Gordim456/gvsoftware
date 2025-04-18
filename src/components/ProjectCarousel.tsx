
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
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

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-slide functionality
  useEffect(() => {
    // Start auto-sliding
    intervalRef.current = window.setInterval(nextImage, 4000);
    
    // Cleanup on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [images.length]);

  // Pause auto-slide on hover
  const pauseAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Resume auto-slide when not hovering
  const resumeAutoSlide = () => {
    if (!intervalRef.current) {
      intervalRef.current = window.setInterval(nextImage, 4000);
    }
  };

  return (
    <motion.div 
      className="bg-gv-darker p-6 rounded-lg border border-gray-800 overflow-hidden group hover:border-indigo-500 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      layout
      onMouseEnter={pauseAutoSlide}
      onMouseLeave={resumeAutoSlide}
    >
      <div className="relative mb-6 overflow-hidden rounded-lg h-48 group-hover:shadow-lg group-hover:shadow-indigo-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-600/0 group-hover:from-indigo-500/30 group-hover:to-purple-600/30 transition-all duration-300 z-10"></div>
        
        {/* Image carousel */}
        <div className="relative h-full w-full">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="absolute top-0 left-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: currentImageIndex === index ? 1 : 0,
                scale: currentImageIndex === index ? 1 : 1.1
              }}
              transition={{ duration: 0.7 }}
            >
              <img 
                src={image} 
                alt={`${title} - image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Navigation controls */}
        <div className="absolute bottom-2 right-2 z-20 flex gap-2">
          <Button 
            variant="outline" 
            size="icon" 
            className="h-7 w-7 rounded-full bg-black/50 border-gray-600 hover:bg-black/70 hover:border-gray-400"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
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
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Progress indicators */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20 flex gap-1">
          {images.map((_, index) => (
            <div 
              key={index} 
              className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                currentImageIndex === index 
                  ? "bg-white w-3" 
                  : "bg-white/50"
              }`}
            />
          ))}
        </div>
        
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4 transition-opacity duration-300">
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            Ver projeto <ExternalLink className="w-4 h-4" />
          </a>
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
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, index) => (
            <span key={index} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCarousel;
