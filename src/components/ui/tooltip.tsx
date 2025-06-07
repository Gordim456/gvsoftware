
import * as React from "react"
import { cn } from "@/lib/utils"

console.log("🔥 TOOLTIP NUCLEAR OPTION: 100% Standalone Implementation - ZERO external deps");

// Completely standalone tooltip implementation - NO external dependencies
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

  console.log("🔥 TOOLTIP NUCLEAR OPTION: Rendering standalone tooltip");

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

// Dummy components that do nothing - NO hooks, NO state, NO external deps
const TooltipProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  console.log("🔥 TOOLTIP NUCLEAR OPTION: TooltipProvider passthrough");
  return <>{children}</>;
};

const TooltipTrigger: React.FC<{ children: React.ReactNode; asChild?: boolean }> = ({ children }) => {
  console.log("🔥 TOOLTIP NUCLEAR OPTION: TooltipTrigger passthrough");
  return <>{children}</>;
};

const TooltipContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ children }) => {
  console.log("🔥 TOOLTIP NUCLEAR OPTION: TooltipContent passthrough");
  return <>{children}</>;
};

console.log("🔥 TOOLTIP NUCLEAR OPTION: Exporting standalone components - ABSOLUTELY NO RADIX");

export { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent };
export default Tooltip;
