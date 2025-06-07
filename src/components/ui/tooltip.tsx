
import * as React from "react"
import { cn } from "@/lib/utils"

console.log("🔥 TOOLTIP FINAL CLEAN: 100% Custom Implementation - NO RADIX AT ALL");

// Completely custom tooltip implementation
interface TooltipProps {
  children: React.ReactNode;
  content: string;
  side?: "top" | "bottom" | "left" | "right";
  className?: string;
  delayDuration?: number;
}

const Tooltip: React.FC<TooltipProps> = ({ 
  children, 
  content, 
  side = "top", 
  className,
  delayDuration = 300
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout>();

  console.log("🔥 TOOLTIP FINAL CLEAN: Rendering 100% custom tooltip");

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

// Empty placeholder components that do NOTHING
const TooltipProvider: React.FC<{ children: React.ReactNode; delayDuration?: number }> = ({ children }) => {
  console.log("🔥 TOOLTIP PROVIDER FINAL CLEAN: Empty provider");
  return <>{children}</>;
};

const TooltipTrigger: React.FC<{ children: React.ReactNode; asChild?: boolean }> = ({ children }) => {
  console.log("🔥 TOOLTIP TRIGGER FINAL CLEAN: Empty trigger");
  return <>{children}</>;
};

const TooltipContent: React.FC<{ children: React.ReactNode; side?: string; className?: string }> = ({ children }) => {
  console.log("🔥 TOOLTIP CONTENT FINAL CLEAN: Empty content");
  return <>{children}</>;
};

console.log("🔥 TOOLTIP EXPORTS FINAL CLEAN: Exporting 100% custom components");

export { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent };
