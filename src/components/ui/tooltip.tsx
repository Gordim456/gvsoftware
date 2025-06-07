
import * as React from "react"
import { cn } from "@/lib/utils"

console.log("🔥 TOOLTIP STANDALONE: Implementação 100% independente - SEM Radix UI");

// Implementação standalone completa do tooltip
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
      {isVisible && content && (
        <div
          className={cn(
            "absolute z-50 px-3 py-1.5 text-sm text-white bg-gray-900 rounded-md shadow-lg whitespace-nowrap pointer-events-none",
            positionClasses[side],
            className
          )}
          role="tooltip"
        >
          {content}
        </div>
      )}
    </div>
  );
};

// Componentes de compatibilidade - NUNCA usados, apenas para não quebrar imports
const TooltipProvider: React.FC<{ children: React.ReactNode; delayDuration?: number }> = ({ children }) => {
  console.log("🔥 TOOLTIP PROVIDER: Componente vazio - não deveria ser usado");
  return <React.Fragment>{children}</React.Fragment>;
};

const TooltipTrigger: React.FC<{ children: React.ReactNode; asChild?: boolean }> = ({ children }) => {
  console.log("🔥 TOOLTIP TRIGGER: Componente vazio - não deveria ser usado");
  return <React.Fragment>{children}</React.Fragment>;
};

const TooltipContent: React.FC<{ 
  children?: React.ReactNode; 
  className?: string;
  side?: "top" | "bottom" | "left" | "right";
  sideOffset?: number;
}> = ({ children }) => {
  console.log("🔥 TOOLTIP CONTENT: Componente vazio - não deveria ser usado");
  return <React.Fragment>{children}</React.Fragment>;
};

export { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent };
export default Tooltip;
