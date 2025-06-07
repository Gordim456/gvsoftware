
import * as React from "react"
import { cn } from "@/lib/utils"

console.log("🚀 TOOLTIP v10: COMPLETELY CUSTOM TOOLTIP - ZERO RADIX DEPENDENCIES");

// Interface para nosso tooltip 100% customizado
interface TooltipProps {
  children: React.ReactNode;
  content: string;
  side?: "top" | "bottom" | "left" | "right";
  className?: string;
}

// Tooltip completamente customizado - SEM QUALQUER referência ao Radix
const Tooltip: React.FC<TooltipProps> = ({ 
  children, 
  content, 
  side = "top", 
  className 
}) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    console.log("✅ TOOLTIP v10: Custom tooltip mounted successfully - NO RADIX ANYWHERE");
  }, []);

  const positionClasses = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2", 
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2"
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
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

// Componentes que NÃO fazem NADA - apenas para compatibilidade
const TooltipProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  console.log("✅ TOOLTIP PROVIDER v10: Custom provider - ABSOLUTELY NO RADIX");
  return <>{children}</>;
};

const TooltipTrigger: React.FC<{ children: React.ReactNode; asChild?: boolean }> = ({ children }) => {
  console.log("✅ TOOLTIP TRIGGER v10: Custom trigger - ABSOLUTELY NO RADIX");
  return <>{children}</>;
};

const TooltipContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  console.log("✅ TOOLTIP CONTENT v10: Custom content - ABSOLUTELY NO RADIX");
  return <>{children}</>;
};

console.log("🚀 TOOLTIP EXPORTS v10: Exporting COMPLETELY CUSTOM components - ZERO RADIX UI");

export { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent };
