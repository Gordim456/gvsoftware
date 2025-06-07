
import * as React from "react"
import { cn } from "@/lib/utils"

console.log("🔥 TOOLTIP: Loading 100% CUSTOM tooltip - ZERO RADIX UI ANYWHERE");

// Simple custom tooltip interface
interface TooltipProps {
  children: React.ReactNode;
  content: string;
  side?: "top" | "bottom" | "left" | "right";
  className?: string;
}

// Main tooltip component - completely custom
const Tooltip: React.FC<TooltipProps> = ({ 
  children, 
  content, 
  side = "top", 
  className 
}) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    console.log("✅ TOOLTIP: Custom tooltip mounted - COMPLETELY RADIX-FREE");
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
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
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

// Compatibility components for existing code
const TooltipProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  console.log("🔥 TOOLTIP PROVIDER: Custom provider - NO RADIX DEPENDENCIES");
  return <>{children}</>;
};

const TooltipTrigger: React.FC<{ children: React.ReactNode; asChild?: boolean }> = ({ children }) => {
  console.log("🔥 TOOLTIP TRIGGER: Custom trigger - NO RADIX DEPENDENCIES");
  return <>{children}</>;
};

const TooltipContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  console.log("🔥 TOOLTIP CONTENT: Custom content - NO RADIX DEPENDENCIES");
  return <>{children}</>;
};

console.log("🔥 TOOLTIP EXPORTS: Exporting CUSTOM components - ZERO RADIX UI");

export { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent };
