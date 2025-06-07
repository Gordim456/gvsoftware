
import * as React from "react"
import { cn } from "@/lib/utils"

// Completely custom tooltip implementation - no external dependencies
interface TooltipContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const TooltipContext = React.createContext<TooltipContextType | null>(null);

const TooltipProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="gv-tooltip-provider">{children}</div>;
};

const Tooltip: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  
  const value = React.useMemo(() => ({
    open,
    setOpen
  }), [open]);

  return (
    <TooltipContext.Provider value={value}>
      <div className="relative inline-block">
        {children}
      </div>
    </TooltipContext.Provider>
  );
};

const TooltipTrigger = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { 
    children: React.ReactNode;
    asChild?: boolean;
  }
>(({ children, className, asChild = false, ...props }, ref) => {
  const context = React.useContext(TooltipContext);
  
  const handleMouseEnter = () => {
    context?.setOpen(true);
  };
  
  const handleMouseLeave = () => {
    context?.setOpen(false);
  };

  return (
    <div 
      ref={ref} 
      className={cn("cursor-pointer", className)} 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </div>
  );
});
TooltipTrigger.displayName = "TooltipTrigger";

const TooltipContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { 
    sideOffset?: number;
    children: React.ReactNode;
  }
>(({ className, children, sideOffset = 4, ...props }, ref) => {
  const context = React.useContext(TooltipContext);
  
  if (!context?.open) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={cn(
        "absolute z-50 overflow-hidden rounded-md bg-gray-900 px-3 py-1.5 text-sm text-white shadow-md",
        "bottom-full left-1/2 transform -translate-x-1/2 transition-all duration-200",
        className
      )}
      style={{ marginBottom: sideOffset }}
      {...props}
    >
      {children}
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-gray-900"></div>
    </div>
  );
});
TooltipContent.displayName = "TooltipContent";

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
