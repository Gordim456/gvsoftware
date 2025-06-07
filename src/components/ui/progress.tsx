
import * as React from "react"
import { cn } from "@/lib/utils"

console.log("🔥 PROGRESS FINAL ELIMINATION: 100% Custom Implementation - ABSOLUTE ZERO RADIX");

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value = 0, max = 100, ...props }, ref) => {
    console.log("🔥 PROGRESS FINAL ELIMINATION: Rendering 100% custom progress");
    
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
    
    return (
      <div
        ref={ref}
        className={cn(
          "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
          className
        )}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={value}
        {...props}
      >
        <div
          className="h-full w-full flex-1 bg-primary transition-all duration-300 ease-in-out"
          style={{ transform: `translateX(-${100 - percentage}%)` }}
        />
      </div>
    );
  }
);
Progress.displayName = "Progress";

console.log("🔥 PROGRESS EXPORTS FINAL ELIMINATION: Exporting 100% custom component with ABSOLUTE ZERO dependencies");

export { Progress };
