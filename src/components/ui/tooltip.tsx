
import React from "react";

console.log('🔧 TOOLTIP: Loading completely clean tooltip - NO RADIX DEPENDENCIES');

interface TooltipProps {
  children: React.ReactNode;
  content: string;
  side?: "top" | "bottom" | "left" | "right";
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ 
  children, 
  content, 
  side = "top", 
  className = "" 
}) => {
  console.log('🔧 TOOLTIP: Rendering simple tooltip');
  
  return (
    <div className="relative inline-block group">
      {children}
      <div
        className={`absolute z-50 px-3 py-1.5 text-sm text-white bg-gray-900 rounded-md shadow-lg whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
          side === 'top' ? 'bottom-full left-1/2 transform -translate-x-1/2 mb-2' :
          side === 'bottom' ? 'top-full left-1/2 transform -translate-x-1/2 mt-2' :
          side === 'left' ? 'right-full top-1/2 transform -translate-y-1/2 mr-2' :
          'left-full top-1/2 transform -translate-y-1/2 ml-2'
        } ${className}`}
        role="tooltip"
      >
        {content}
      </div>
    </div>
  );
};

// Simple wrapper components without any state or complex logic
const TooltipProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  console.log('🔧 TOOLTIP: Simple provider rendering');
  return <>{children}</>;
};

const TooltipTrigger: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

const TooltipContent: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

console.log('✅ TOOLTIP: Clean components defined - ZERO RADIX DEPENDENCIES');

export { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent };
export default Tooltip;
