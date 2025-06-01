
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
    <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
    <rect x="2" y="6" width="14" height="12" rx="2"></rect>
  </svg>
);

export default TikTokIcon;
