
import * as React from "react"
import { cn } from "@/lib/utils"

console.log("🔥 COLLAPSIBLE FINAL ELIMINATION: 100% Custom Implementation - ABSOLUTE ZERO RADIX");

interface CollapsibleProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
  disabled?: boolean;
}

const Collapsible: React.FC<CollapsibleProps> = ({ 
  children, 
  open: controlledOpen, 
  onOpenChange,
  defaultOpen = false,
  disabled = false
}) => {
  console.log("🔥 COLLAPSIBLE FINAL ELIMINATION: Rendering 100% custom collapsible");
  
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
  
  const toggleOpen = (newOpen: boolean) => {
    if (disabled) return;
    
    if (controlledOpen === undefined) {
      setInternalOpen(newOpen);
    }
    onOpenChange?.(newOpen);
  };

  return (
    <div data-state={isOpen ? "open" : "closed"} className="collapsible">
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            isOpen,
            toggleOpen,
            disabled
          });
        }
        return child;
      })}
    </div>
  );
};

interface CollapsibleTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen?: boolean;
  toggleOpen?: (open: boolean) => void;
  asChild?: boolean;
}

const CollapsibleTrigger = React.forwardRef<HTMLButtonElement, CollapsibleTriggerProps>(
  ({ className, isOpen, toggleOpen, disabled, onClick, ...props }, ref) => {
    console.log("🔥 COLLAPSIBLE TRIGGER FINAL ELIMINATION: Rendering custom trigger");
    
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!disabled) {
        toggleOpen?.(!isOpen);
      }
      onClick?.(event);
    };

    return (
      <button
        ref={ref}
        data-state={isOpen ? "open" : "closed"}
        className={cn("cursor-pointer", className)}
        onClick={handleClick}
        disabled={disabled}
        {...props}
      />
    );
  }
);
CollapsibleTrigger.displayName = "CollapsibleTrigger";

interface CollapsibleContentProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
  forceMount?: boolean;
}

const CollapsibleContent = React.forwardRef<HTMLDivElement, CollapsibleContentProps>(
  ({ className, isOpen, forceMount, children, ...props }, ref) => {
    console.log("🔥 COLLAPSIBLE CONTENT FINAL ELIMINATION: Rendering custom content");
    
    if (!isOpen && !forceMount) {
      return null;
    }

    return (
      <div
        ref={ref}
        data-state={isOpen ? "open" : "closed"}
        className={cn(
          "overflow-hidden transition-all duration-200 ease-in-out",
          !isOpen && "hidden",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
CollapsibleContent.displayName = "CollapsibleContent";

console.log("🔥 COLLAPSIBLE EXPORTS FINAL ELIMINATION: Exporting 100% custom components with ABSOLUTE ZERO dependencies");

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
