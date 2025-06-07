
import * as React from "react"
import { cn } from "@/lib/utils"

console.log("🔥 ASPECT RATIO ULTIMATE PURGE: 100% Custom Implementation - ZERO RADIX");

interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  ratio?: number;
}

const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ className, ratio = 1, children, style, ...props }, ref) => {
    console.log("🔥 ASPECT RATIO ULTIMATE PURGE: Rendering custom aspect ratio");
    
    return (
      <div
        ref={ref}
        className={cn("relative w-full", className)}
        style={{
          paddingBottom: `${100 / ratio}%`,
          ...style,
        }}
        {...props}
      >
        <div className="absolute inset-0">
          {children}
        </div>
      </div>
    );
  }
);

AspectRatio.displayName = "AspectRatio";

console.log("🔥 ASPECT RATIO EXPORTS ULTIMATE PURGE: Exporting 100% custom component with ZERO dependencies");

export { AspectRatio }
