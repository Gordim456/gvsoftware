
import * as React from "react"
import { cn } from "@/lib/utils"

console.log("🔥 TOOLTIP: Loading 100% PURE custom implementation - ZERO RADIX ANYWHERE");

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
    console.log("✅ TOOLTIP: Pure custom tooltip mounted - ABSOLUTELY NO RADIX");
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
        console.log("🔥 TOOLTIP: Showing pure custom tooltip");
        setIsVisible(true);
      }}
      onMouseLeave={() => {
        console.log("🔥 TOOLTIP: Hiding pure custom tooltip");
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

// PURE COMPATIBILITY COMPONENTS - 100% CUSTOM, ZERO RADIX
const TooltipProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  React.useEffect(() => {
    console.log("🔥 TOOLTIP PROVIDER: Pure custom provider - ZERO RADIX ANYWHERE");
  }, []);
  
  return <>{children}</>;
};

const TooltipTrigger: React.FC<{ children: React.ReactNode; asChild?: boolean }> = ({ children }) => {
  React.useEffect(() => {
    console.log("🔥 TOOLTIP TRIGGER: Pure custom trigger - ZERO RADIX ANYWHERE");
  }, []);
  
  return <>{children}</>;
};

const TooltipContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  React.useEffect(() => {
    console.log("🔥 TOOLTIP CONTENT: Pure custom content - ZERO RADIX ANYWHERE");
  }, []);
  
  return <>{children}</>;
};

console.log("🔥 TOOLTIP EXPORTS: Exporting 100% pure custom components - ABSOLUTELY NO RADIX");

export { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent };
