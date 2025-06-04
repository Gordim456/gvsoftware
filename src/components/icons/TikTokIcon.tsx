
import React from 'react';

interface TikTokIconProps {
  className?: string;
  strokeWidth?: number;
}

const TikTokIcon = ({ className = "w-6 h-6", strokeWidth = 2.2 }: TikTokIconProps) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth={strokeWidth} 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
  </svg>
);

export default TikTokIcon;
