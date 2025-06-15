
import { useEffect, useState } from 'react';

interface AnimatedCounterProps {
  value: number;
  isVisible: boolean;
  animated?: boolean;
  duration?: number;
}

const AnimatedCounter = ({ 
  value, 
  isVisible, 
  animated = true, 
  duration = 2000 
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible || !animated) {
      setCount(value);
      return;
    }

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function para animação suave
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.round(easeOutQuart * value);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [value, isVisible, animated, duration]);

  return <span>{count}</span>;
};

export default AnimatedCounter;
