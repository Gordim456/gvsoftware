
import { useState } from 'react';
import { Code } from 'lucide-react';

const OptimizedHeroImage = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <div className="w-full h-96 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-lg flex items-center justify-center relative overflow-hidden">
      {!imageError ? (
        <>
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 animate-pulse" />
          )}
          <img
            src="/hero-image.svg"
            alt="Desenvolvimento de Software - GV Software"
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="eager"
            decoding="async"
          />
        </>
      ) : (
        <Code className="w-24 h-24 text-indigo-400" />
      )}
    </div>
  );
};

export default OptimizedHeroImage;
