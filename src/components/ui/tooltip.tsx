
import React from "react";

console.log('🔧 STANDALONE TOOLTIP: Loading completely independent tooltip - NO RADIX DEPENDENCIES');

interface StandaloneTooltipProps {
  children: React.ReactNode;
  content: string;
  side?: "top" | "bottom" | "left" | "right";
  className?: string;
}

const StandaloneTooltip: React.FC<StandaloneTooltipProps> = ({ 
  children, 
  content, 
  side = "top", 
  className = "" 
}) => {
  console.log('🔧 STANDALONE TOOLTIP: Rendering completely independent tooltip');
  
  const positionClasses = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2'
  };

  return (
    <div className="relative inline-block group">
      {children}
      <div
        className={`absolute z-50 px-3 py-1.5 text-sm text-white bg-gray-900 rounded-md shadow-lg whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${positionClasses[side]} ${className}`}
        role="tooltip"
      >
        {content}
      </div>
    </div>
  );
};

// Simple wrapper components that do nothing but pass through children
const SimpleTooltipProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  console.log('🔧 STANDALONE TOOLTIP: Simple provider - just passes through children');
  return <>{children}</>;
};

const SimpleTooltipTrigger: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

const SimpleTooltipContent: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

console.log('✅ STANDALONE TOOLTIP: Completely independent tooltip defined');

// Export with different names to avoid conflicts
export { 
  StandaloneTooltip as Tooltip, 
  SimpleTooltipProvider as TooltipProvider, 
  SimpleTooltipTrigger as TooltipTrigger, 
  SimpleTooltipContent as TooltipContent 
};

export default StandaloneTooltip;
