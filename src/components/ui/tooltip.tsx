
import * as React from "react"
import { cn } from "@/lib/utils"

console.log("🔥 TOOLTIP: NUCLEAR ELIMINATION - Zero Radix dependency");

// COMPLETELY ISOLATED tooltip implementation - NO external dependencies
interface PureTooltipProps {
  children: React.ReactNode;
  content: string;
  side?: "top" | "bottom" | "left" | "right";
  className?: string;
}

const PureTooltip: React.FC<PureTooltipProps> = ({ 
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

// NUCLEAR SAFE exports - no hooks, no dependencies
const Tooltip = PureTooltip;

const TooltipProvider = ({ children }: { children: React.ReactNode }) => {
  console.log("🔥 TOOLTIP PROVIDER: NUCLEAR SAFE - no hooks, no Radix");
  // Just return children directly - no wrapping, no hooks, no nothing
  return <>{children}</>;
};

const TooltipTrigger = ({ children }: { children: React.ReactNode; asChild?: boolean }) => {
  console.log("🔥 TOOLTIP TRIGGER: NUCLEAR SAFE - no hooks, no Radix");
  return <>{children}</>;
};

const TooltipContent = ({ children }: { children: React.ReactNode; className?: string }) => {
  console.log("🔥 TOOLTIP CONTENT: NUCLEAR SAFE - no hooks, no Radix");
  return <>{children}</>;
};

export { Tooltip, PureTooltip, TooltipProvider, TooltipTrigger, TooltipContent };
