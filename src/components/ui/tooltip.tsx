
import * as React from "react"
import { cn } from "@/lib/utils"

console.log("🔥 TOOLTIP FINAL REBUILD: 100% Standalone - NO external dependencies");

// Simple standalone tooltip with zero external dependencies
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

// Empty stub components for compatibility - NO HOOKS, NO RADIX
const TooltipProvider = ({ children }: { children: React.ReactNode }) => {
  console.log("🔥 TOOLTIP PROVIDER FINAL: Simple div wrapper - no hooks, no state");
  return <>{children}</>;
};

const TooltipTrigger = ({ children }: { children: React.ReactNode; asChild?: boolean }) => {
  console.log("🔥 TOOLTIP TRIGGER FINAL: Simple passthrough - no hooks");
  return <>{children}</>;
};

const TooltipContent = () => {
  console.log("🔥 TOOLTIP CONTENT FINAL: Returning null - no rendering");
  return null;
};

export { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent };
export default Tooltip;
