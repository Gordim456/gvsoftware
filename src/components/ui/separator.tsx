
import * as React from "react"
import { cn } from "@/lib/utils"

console.log("🔥 SEPARATOR FINAL ELIMINATION: 100% Custom Implementation - ABSOLUTE ZERO RADIX");

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
}

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => {
    console.log("🔥 SEPARATOR FINAL ELIMINATION: Rendering 100% custom separator");
    
    return (
      <div
        ref={ref}
        role={decorative ? "none" : "separator"}
        aria-orientation={orientation}
        className={cn(
          "shrink-0 bg-border",
          orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
          className
        )}
        {...props}
      />
    );
  }
);
Separator.displayName = "Separator";

console.log("🔥 SEPARATOR EXPORTS FINAL ELIMINATION: Exporting 100% custom component with ABSOLUTE ZERO dependencies");

export { Separator };
