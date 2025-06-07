
import * as React from "react"
import { cn } from "@/lib/utils"

console.log("🔥 AVATAR ULTIMATE PURGE: 100% Custom Implementation - ZERO RADIX");

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, ...props }, ref) => {
    console.log("🔥 AVATAR ULTIMATE PURGE: Rendering custom avatar");
    
    return (
      <div
        ref={ref}
        className={cn(
          "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
          className
        )}
        {...props}
      />
    );
  }
);
Avatar.displayName = "Avatar";

interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const AvatarImage = React.forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ className, ...props }, ref) => {
    console.log("🔥 AVATAR IMAGE ULTIMATE PURGE: Rendering custom avatar image");
    
    return (
      <img
        ref={ref}
        className={cn("aspect-square h-full w-full", className)}
        {...props}
      />
    );
  }
);
AvatarImage.displayName = "AvatarImage";

interface AvatarFallbackProps extends React.HTMLAttributes<HTMLDivElement> {}

const AvatarFallback = React.forwardRef<HTMLDivElement, AvatarFallbackProps>(
  ({ className, ...props }, ref) => {
    console.log("🔥 AVATAR FALLBACK ULTIMATE PURGE: Rendering custom avatar fallback");
    
    return (
      <div
        ref={ref}
        className={cn(
          "flex h-full w-full items-center justify-center rounded-full bg-muted",
          className
        )}
        {...props}
      />
    );
  }
);
AvatarFallback.displayName = "AvatarFallback";

console.log("🔥 AVATAR EXPORTS ULTIMATE PURGE: Exporting 100% custom components with ZERO dependencies");

export { Avatar, AvatarImage, AvatarFallback }
