
import * as React from "react"
import { cn } from "@/lib/utils"

// Simple tooltip implementation without Radix UI dependencies
const TooltipProvider = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const Tooltip = ({ children }: { children: React.ReactNode }) => {
  return <div className="relative inline-block">{children}</div>;
};

const TooltipTrigger = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { 
    children: React.ReactNode;
    asChild?: boolean;
  }
>(({ children, className, asChild = false, ...props }, ref) => {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ref,
      className: cn(className, children.props.className),
      ...props,
    });
  }
  
  return (
    <div ref={ref} className={cn("cursor-pointer", className)} {...props}>
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
  return (
    <div
      ref={ref}
      className={cn(
        "absolute z-50 overflow-hidden rounded-md bg-gray-900 px-3 py-1.5 text-sm text-white shadow-md",
        "opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200",
        "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
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
