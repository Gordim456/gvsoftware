
import * as React from "react"
import { cn } from "@/lib/utils"

console.log("🔥 TOOLTIP: COMPLETELY ISOLATED - No external dependencies whatsoever");

// Simple tooltip component - completely standalone
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

// Completely static wrapper components that do NOTHING - just pass through children
const TooltipProvider = ({ children }: { children: React.ReactNode }) => {
  console.log("🔥 CUSTOM TOOLTIP PROVIDER: Static passthrough - no hooks, no state");
  return children as React.ReactElement;
};

const TooltipTrigger = ({ children }: { children: React.ReactNode; asChild?: boolean }) => {
  console.log("🔥 CUSTOM TOOLTIP TRIGGER: Static passthrough");
  return children as React.ReactElement;
};

const TooltipContent = ({ children }: { children: React.ReactNode; className?: string }) => {
  console.log("🔥 CUSTOM TOOLTIP CONTENT: Static passthrough");
  return children as React.ReactElement;
};

// Export our custom components
export { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent };
