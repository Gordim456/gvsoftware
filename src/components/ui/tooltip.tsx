
import * as React from "react"
import { cn } from "@/lib/utils"

console.log("🔥🔥🔥 TOOLTIP v9: COMPLETELY CUSTOM - ABSOLUTELY ZERO RADIX ANYWHERE");

// Interface para nosso tooltip customizado
interface CustomTooltipProps {
  children: React.ReactNode;
  content: string;
  side?: "top" | "bottom" | "left" | "right";
  className?: string;
}

// Tooltip 100% customizado - SEM NENHUMA referência ao Radix
const Tooltip: React.FC<CustomTooltipProps> = ({ 
  children, 
  content, 
  side = "top", 
  className 
}) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    console.log("✅✅✅ TOOLTIP v9: Custom tooltip mounted - ZERO RADIX DEPENDENCIES");
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

// Componentes de compatibilidade que NÃO fazem NADA com Radix
const TooltipProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  console.log("🔥🔥🔥 TOOLTIP PROVIDER v9: Custom provider - ABSOLUTELY NO RADIX");
  return <>{children}</>;
};

const TooltipTrigger: React.FC<{ children: React.ReactNode; asChild?: boolean }> = ({ children }) => {
  console.log("🔥🔥🔥 TOOLTIP TRIGGER v9: Custom trigger - ABSOLUTELY NO RADIX");
  return <>{children}</>;
};

const TooltipContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  console.log("🔥🔥🔥 TOOLTIP CONTENT v9: Custom content - ABSOLUTELY NO RADIX");
  return <>{children}</>;
};

console.log("🔥🔥🔥 TOOLTIP EXPORTS v9: Exporting CUSTOM components - ZERO RADIX UI");

export { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent };
