
import * as React from "react"
import { cn } from "@/lib/utils"

console.log("🔥 SCROLL-AREA: Custom implementation without Radix");

const ScrollArea = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    orientation?: "vertical" | "horizontal"
  }
>(({ className, children, orientation = "vertical", ...props }, ref) => {
  console.log("🔥 SCROLL-AREA: Rendering custom scroll area");
  
  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      <div 
        className={cn(
          "h-full w-full rounded-[inherit]",
          orientation === "vertical" ? "overflow-y-auto" : "overflow-x-auto"
        )}
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "hsl(var(--border)) transparent"
        }}
      >
        {children}
      </div>
    </div>
  );
});
ScrollArea.displayName = "ScrollArea";

const ScrollBar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    orientation?: "vertical" | "horizontal"
  }
>(({ className, orientation = "vertical", ...props }, ref) => {
  console.log("🔥 SCROLL-BAR: Rendering custom scroll bar");
  
  // This is a placeholder component since we're using native scrollbars
  return null;
});
ScrollBar.displayName = "ScrollBar";

export { ScrollArea, ScrollBar };
