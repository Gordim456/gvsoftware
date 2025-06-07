
import * as React from "react"
import { cn } from "@/lib/utils"

console.log("🔥 TOOLTIP: Loading COMPLETELY CUSTOM tooltip implementation - ZERO RADIX DEPENDENCIES");

// Simple custom tooltip interface
interface TooltipProps {
  children: React.ReactNode;
  content: string;
  side?: "top" | "bottom" | "left" | "right";
  className?: string;
}

// Main tooltip component - 100% custom
const Tooltip: React.FC<TooltipProps> = ({ 
  children, 
  content, 
  side = "top", 
  className 
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    console.log("✅ TOOLTIP: Custom tooltip mounted successfully - NO RADIX ANYWHERE");
    setIsMounted(true);
  }, []);

  const positionClasses = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2", 
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2"
  };

  if (!isMounted) {
    return <>{children}</>;
  }

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => {
        console.log("🔥 TOOLTIP: Showing custom tooltip");
        setIsVisible(true);
      }}
      onMouseLeave={() => {
        console.log("🔥 TOOLTIP: Hiding custom tooltip");
        setIsVisible(false);
      }}
    >
      {children}
      {isVisible && (
        <div
          className={cn(
            "absolute z-50 px-2 py-1 text-sm text-white bg-gray-900 rounded shadow-lg whitespace-nowrap pointer-events-none",
            positionClasses[side],
            className
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
};

// Compatibility components that do nothing but pass through children
const TooltipProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  React.useEffect(() => {
    console.log("🔥 TOOLTIP PROVIDER: Custom provider initialized - COMPLETELY RADIX-FREE");
  }, []);
  
  return <>{children}</>;
};

const TooltipTrigger: React.FC<{ children: React.ReactNode; asChild?: boolean }> = ({ children }) => {
  React.useEffect(() => {
    console.log("🔥 TOOLTIP TRIGGER: Custom trigger initialized - COMPLETELY RADIX-FREE");
  }, []);
  
  return <>{children}</>;
};

const TooltipContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  React.useEffect(() => {
    console.log("🔥 TOOLTIP CONTENT: Custom content initialized - COMPLETELY RADIX-FREE");
  }, []);
  
  return <>{children}</>;
};

// Error boundary for tooltip components
class TooltipErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('🔥 TOOLTIP ERROR BOUNDARY: Caught tooltip error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.children;
    }

    return this.props.children;
  }
}

console.log("🔥 TOOLTIP EXPORTS: Exporting 100% custom tooltip components - ABSOLUTELY NO RADIX");

export { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent, TooltipErrorBoundary };
