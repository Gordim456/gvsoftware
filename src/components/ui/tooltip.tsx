
import * as React from "react"
import { cn } from "@/lib/utils"

console.log("🔥 TOOLTIP: Completely custom implementation");

// Custom tooltip implementation that doesn't conflict with Radix
interface SimpleTooltipProps {
  children: React.ReactNode;
  content: string;
  side?: "top" | "bottom" | "left" | "right";
  className?: string;
}

const SimpleTooltip: React.FC<SimpleTooltipProps> = ({ 
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

// Alternative export names to avoid conflicts
const Tooltip = SimpleTooltip;

// Dummy components that just render children to prevent import errors
const TooltipProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  console.log("🔥 TOOLTIP PROVIDER: Custom passthrough");
  return <div>{children}</div>;
};

const TooltipTrigger: React.FC<{ children: React.ReactNode; asChild?: boolean }> = ({ children }) => {
  console.log("🔥 TOOLTIP TRIGGER: Custom passthrough");
  return <div>{children}</div>;
};

const TooltipContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ children }) => {
  console.log("🔥 TOOLTIP CONTENT: Custom passthrough");
  return <div>{children}</div>;
};

export { Tooltip, SimpleTooltip, TooltipProvider, TooltipTrigger, TooltipContent };
