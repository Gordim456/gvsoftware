
import * as React from "react"
import { cn } from "@/lib/utils"

console.log("🔥 TOOLTIP: Final custom implementation - completely standalone");

// Block any attempts to import Radix UI tooltip
if (typeof window !== 'undefined') {
  // Override any module resolution attempts
  const originalImport = (window as any).__vitePreload;
  if (originalImport) {
    (window as any).__vitePreload = (deps: any, cb: any) => {
      const filteredDeps = deps.filter((dep: string) => 
        !dep.includes('@radix-ui/react-tooltip') && 
        !dep.includes('radix-tooltip')
      );
      return originalImport(filteredDeps, cb);
    };
  }
}

// Completely standalone tooltip implementation
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

// These components are pure passthroughs for API compatibility
const TooltipProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  console.log("🔥 TOOLTIP PROVIDER: Using custom passthrough - no external dependencies");
  return <>{children}</>;
};

const TooltipTrigger: React.FC<{ children: React.ReactNode; asChild?: boolean }> = ({ children }) => {
  return <>{children}</>;
};

const TooltipContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ children }) => {
  return <>{children}</>;
};

export { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent };
export default Tooltip;
