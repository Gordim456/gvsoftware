
import * as React from "react"
import { cn } from "@/lib/utils"

console.log("🔥 TOOLTIP COMPONENT: 100% CUSTOM IMPLEMENTATION - ZERO RADIX DEPENDENCIES");

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
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
    console.log("✅ TOOLTIP: Mounted successfully with custom implementation");
  }, []);

  const positionClasses = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2"
  };

  if (!isMounted) {
    return <>{children}</>;
  }

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => {
        console.log("🔥 TOOLTIP: Mouse enter - showing tooltip");
        setIsVisible(true);
      }}
      onMouseLeave={() => {
        console.log("🔥 TOOLTIP: Mouse leave - hiding tooltip");
        setIsVisible(false);
      }}
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

// COMPATIBILITY COMPONENTS - 100% CUSTOM WITH NO DEPENDENCIES
const TooltipProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  React.useEffect(() => {
    console.log("🔥 TOOLTIP PROVIDER: Custom provider mounted - NO RADIX");
  }, []);
  
  return <div className="tooltip-provider-wrapper">{children}</div>;
};

const TooltipTrigger: React.FC<{ children: React.ReactNode; asChild?: boolean }> = ({ children }) => {
  React.useEffect(() => {
    console.log("🔥 TOOLTIP TRIGGER: Custom trigger mounted - NO RADIX");
  }, []);
  
  return <span className="tooltip-trigger-wrapper">{children}</span>;
};

const TooltipContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  React.useEffect(() => {
    console.log("🔥 TOOLTIP CONTENT: Custom content mounted - NO RADIX");
  }, []);
  
  return <div className="tooltip-content-wrapper">{children}</div>;
};

export { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent };
