
import React from "react";

console.log('🔧 TOOLTIP: Loading completely standalone tooltip - ZERO external dependencies');

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
  console.log('🔧 TOOLTIP: Rendering standalone tooltip component');
  
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

// Completely standalone wrapper components
const TooltipProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  console.log('🔧 TOOLTIP: Standalone provider - no state, no external deps');
  return <>{children}</>;
};

const TooltipTrigger: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

const TooltipContent: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

console.log('✅ TOOLTIP: Completely standalone tooltip defined - ZERO EXTERNAL DEPENDENCIES');

export { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent };
export default Tooltip;
