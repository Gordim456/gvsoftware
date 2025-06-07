
import * as React from "react"
import { cn } from "@/lib/utils"

console.log("🔥 STANDALONE TOOLTIP: Loading 100% independent implementation - NO RADIX UI");

// Completely standalone tooltip implementation with no Radix dependencies
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
  
  console.log("🔥 STANDALONE TOOLTIP: Rendering standalone tooltip");

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

// Completely empty compatibility components - these should NEVER be used but exist to prevent import errors
const TooltipProvider: React.FC<{ children: React.ReactNode; delayDuration?: number }> = ({ children }) => {
  console.log("🔥 EMPTY TOOLTIP PROVIDER: This should never render - using fallback");
  return <>{children}</>;
};

const TooltipTrigger: React.FC<{ children: React.ReactNode; asChild?: boolean }> = ({ children }) => {
  console.log("🔥 EMPTY TOOLTIP TRIGGER: This should never render - using fallback");
  return <>{children}</>;
};

const TooltipContent: React.FC<{ 
  children?: React.ReactNode; 
  className?: string;
  side?: "top" | "bottom" | "left" | "right";
  sideOffset?: number;
}> = () => {
  console.log("🔥 EMPTY TOOLTIP CONTENT: This should never render - using fallback");
  return null;
};

export { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent };
export default Tooltip;
