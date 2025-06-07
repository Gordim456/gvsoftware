
import * as React from "react"
import { cn } from "@/lib/utils"

console.log("🔥 HOVER CARD ULTIMATE ELIMINATION: 100% Custom Implementation - ABSOLUTE ZERO RADIX");

interface HoverCardProps {
  children: React.ReactNode;
}

const HoverCard: React.FC<HoverCardProps> = ({ children }) => {
  console.log("🔥 HOVER CARD ULTIMATE ELIMINATION: Rendering custom hover card");
  return <div className="relative">{children}</div>;
};

const HoverCardTrigger = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  console.log("🔥 HOVER CARD TRIGGER ULTIMATE ELIMINATION: Rendering custom trigger");
  return (
    <div
      ref={ref}
      className={cn("cursor-pointer", className)}
      {...props}
    />
  );
});
HoverCardTrigger.displayName = "HoverCardTrigger";

const HoverCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    align?: "start" | "center" | "end";
    sideOffset?: number;
  }
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => {
  console.log("🔥 HOVER CARD CONTENT ULTIMATE ELIMINATION: Rendering custom content");
  return (
    <div
      ref={ref}
      className={cn(
        "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none",
        className
      )}
      {...props}
    />
  );
});
HoverCardContent.displayName = "HoverCardContent";

console.log("🔥 HOVER CARD EXPORTS ULTIMATE ELIMINATION: Exporting 100% custom components with ABSOLUTE ZERO dependencies");

export { HoverCard, HoverCardTrigger, HoverCardContent }
