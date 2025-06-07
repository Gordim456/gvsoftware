
import * as React from "react"
import { cn } from "@/lib/utils"

console.log("Tooltip component - 100% custom implementation, zero external dependencies");

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
  className 
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
      {isVisible && (
        <div
          className={cn(
            "absolute z-50 px-2 py-1 text-sm text-white bg-gray-900 rounded shadow-lg whitespace-nowrap pointer-events-none",
            positionClasses[side],
            className
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
};

// Componentes de compatibilidade sem usar hooks problemáticos
const TooltipProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  console.log("TooltipProvider - simple wrapper, no hooks, no dependencies");
  return <React.Fragment>{children}</React.Fragment>;
};

const TooltipTrigger: React.FC<{ children: React.ReactNode; asChild?: boolean }> = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

const TooltipContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent };
