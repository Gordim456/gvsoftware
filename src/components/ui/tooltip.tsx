
import * as React from "react"
import { cn } from "@/lib/utils"

console.log("🚀 TOOLTIP v11: ULTRA CLEAN - ABSOLUTELY NO RADIX ANYWHERE");

// Completely custom tooltip interface
interface TooltipProps {
  children: React.ReactNode;
  content: string;
  side?: "top" | "bottom" | "left" | "right";
  className?: string;
  delayDuration?: number;
}

// 100% custom tooltip implementation - ZERO external dependencies
const Tooltip: React.FC<TooltipProps> = ({ 
  children, 
  content, 
  side = "top", 
  className,
  delayDuration = 300
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout>();

  console.log("🚀 TOOLTIP v11: Custom tooltip rendering - COMPLETELY RADIX-FREE");

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delayDuration);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const positionClasses = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2", 
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2"
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isVisible && content && (
        <div
          className={cn(
            "absolute z-50 px-3 py-1.5 text-sm text-white bg-gray-900 rounded-md shadow-lg whitespace-nowrap pointer-events-none border border-gray-700",
            positionClasses[side],
            className
          )}
          role="tooltip"
        >
          {content}
          <div 
            className={cn(
              "absolute w-2 h-2 bg-gray-900 border border-gray-700 transform rotate-45",
              side === "top" && "top-full left-1/2 -translate-x-1/2 -translate-y-1/2 border-t-0 border-l-0",
              side === "bottom" && "bottom-full left-1/2 -translate-x-1/2 translate-y-1/2 border-b-0 border-r-0",
              side === "left" && "left-full top-1/2 -translate-x-1/2 -translate-y-1/2 border-l-0 border-b-0",
              side === "right" && "right-full top-1/2 translate-x-1/2 -translate-y-1/2 border-r-0 border-t-0"
            )}
          />
        </div>
      )}
    </div>
  );
};

// Dummy components for compatibility - do absolutely nothing
const TooltipProvider: React.FC<{ children: React.ReactNode; delayDuration?: number }> = ({ children }) => {
  console.log("🚀 TOOLTIP PROVIDER v11: Dummy provider - NO RADIX ANYWHERE");
  return <>{children}</>;
};

const TooltipTrigger: React.FC<{ children: React.ReactNode; asChild?: boolean }> = ({ children }) => {
  console.log("🚀 TOOLTIP TRIGGER v11: Dummy trigger - NO RADIX ANYWHERE");
  return <>{children}</>;
};

const TooltipContent: React.FC<{ children: React.ReactNode; side?: string; className?: string }> = ({ children }) => {
  console.log("🚀 TOOLTIP CONTENT v11: Dummy content - NO RADIX ANYWHERE");
  return <>{children}</>;
};

console.log("🚀 TOOLTIP EXPORTS v11: Exporting COMPLETELY CUSTOM components - ZERO RADIX UI DEPENDENCIES");

export { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent };
