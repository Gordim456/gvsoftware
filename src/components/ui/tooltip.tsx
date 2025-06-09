
import React from "react";

console.log('🔧 TOOLTIP: Loading custom tooltip component...');

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
  const [isVisible, setIsVisible] = React.useState(false);
  
  const positionClasses = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2", 
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2"
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && content && (
        <div
          className={`absolute z-50 px-3 py-1.5 text-sm text-white bg-gray-900 rounded-md shadow-lg whitespace-nowrap pointer-events-none ${positionClasses[side]} ${className}`}
          role="tooltip"
        >
          {content}
        </div>
      )}
    </div>
  );
};

// Componentes compatíveis simples (sem dependências externas)
const TooltipProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  console.log('🔧 TOOLTIP: TooltipProvider rendering...');
  return <>{children}</>;
};

const TooltipTrigger: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

const TooltipContent: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

console.log('✅ TOOLTIP: Custom tooltip components defined successfully');

export { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent };
export default Tooltip;
