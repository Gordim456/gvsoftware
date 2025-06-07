
import * as React from "react"
import { cn } from "@/lib/utils"

console.log("Custom tooltip component loaded - NO external dependencies");

// Implementação de tooltip 100% customizada - ZERO dependências externas
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
            "absolute z-50 px-2 py-1 text-sm text-white bg-gray-900 rounded shadow-lg whitespace-nowrap",
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

// Componentes para compatibilidade - 100% independentes
const TooltipProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  console.log("Custom TooltipProvider rendering - completely independent");
  return <>{children}</>;
};

const TooltipTrigger: React.FC<{ children: React.ReactNode; asChild?: boolean }> = ({ children }) => {
  return <>{children}</>;
};

const TooltipContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent };
