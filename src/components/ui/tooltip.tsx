
import * as React from "react"
import { cn } from "@/lib/utils"

// Simplified tooltip components that don't rely on Radix UI context
const TooltipProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

const Tooltip = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

const TooltipTrigger = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & { children: React.ReactNode }
>(({ children, ...props }, ref) => {
  return <span ref={ref as any} {...props}>{children}</span>;
});
TooltipTrigger.displayName = "TooltipTrigger";

const TooltipContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { 
    sideOffset?: number;
    children: React.ReactNode;
  }
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
TooltipContent.displayName = "TooltipContent";

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
