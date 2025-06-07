
import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

console.log("🔥 ACCORDION ULTIMATE PURGE: 100% Custom Implementation - ZERO RADIX");

interface AccordionContextType {
  openItems: string[];
  toggleItem: (value: string) => void;
  type: "single" | "multiple";
}

const AccordionContext = React.createContext<AccordionContextType | null>(null);

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple";
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  collapsible?: boolean;
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, type = "single", value, onValueChange, collapsible = false, children, ...props }, ref) => {
    console.log("🔥 ACCORDION ULTIMATE PURGE: Rendering custom accordion");
    
    const [openItems, setOpenItems] = React.useState<string[]>(() => {
      if (type === "multiple") {
        return Array.isArray(value) ? value : [];
      }
      return value ? [value] : [];
    });

    const toggleItem = React.useCallback((itemValue: string) => {
      setOpenItems(prev => {
        let newItems: string[];
        
        if (type === "multiple") {
          newItems = prev.includes(itemValue) 
            ? prev.filter(item => item !== itemValue)
            : [...prev, itemValue];
        } else {
          newItems = prev.includes(itemValue) && collapsible ? [] : [itemValue];
        }
        
        if (onValueChange) {
          onValueChange(type === "multiple" ? newItems : newItems[0] || "");
        }
        
        return newItems;
      });
    }, [type, collapsible, onValueChange]);

    const contextValue = React.useMemo(() => ({
      openItems,
      toggleItem,
      type
    }), [openItems, toggleItem, type]);

    return (
      <AccordionContext.Provider value={contextValue}>
        <div ref={ref} className={className} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);

Accordion.displayName = "Accordion";

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, value, children, ...props }, ref) => {
    console.log("🔥 ACCORDION ITEM ULTIMATE PURGE: Rendering custom accordion item");
    
    return (
      <div
        ref={ref}
        className={cn("border-b", className)}
        data-value={value}
        {...props}
      >
        {children}
      </div>
    );
  }
);

AccordionItem.displayName = "AccordionItem";

interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value?: string;
}

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ className, children, value, ...props }, ref) => {
    const context = React.useContext(AccordionContext);
    const itemElement = React.useRef<HTMLButtonElement>(null);
    
    React.useImperativeHandle(ref, () => itemElement.current!);
    
    const itemValue = value || itemElement.current?.closest('[data-value]')?.getAttribute('data-value') || '';
    const isOpen = context?.openItems.includes(itemValue) || false;

    const handleClick = () => {
      if (context && itemValue) {
        context.toggleItem(itemValue);
      }
    };

    console.log("🔥 ACCORDION TRIGGER ULTIMATE PURGE: Rendering custom trigger");

    return (
      <div className="flex">
        <button
          ref={itemElement}
          className={cn(
            "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
            className
          )}
          data-state={isOpen ? "open" : "closed"}
          onClick={handleClick}
          {...props}
        >
          {children}
          <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
        </button>
      </div>
    );
  }
);

AccordionTrigger.displayName = "AccordionTrigger";

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, children, ...props }, ref) => {
    const context = React.useContext(AccordionContext);
    const contentElement = React.useRef<HTMLDivElement>(null);
    
    React.useImperativeHandle(ref, () => contentElement.current!);
    
    const itemValue = contentElement.current?.closest('[data-value]')?.getAttribute('data-value') || '';
    const isOpen = context?.openItems.includes(itemValue) || false;

    console.log("🔥 ACCORDION CONTENT ULTIMATE PURGE: Rendering custom content");

    return (
      <div
        ref={contentElement}
        className={cn(
          "overflow-hidden text-sm transition-all",
          isOpen ? "animate-accordion-down" : "animate-accordion-up hidden",
          className
        )}
        data-state={isOpen ? "open" : "closed"}
        {...props}
      >
        <div className="pb-4 pt-0">{children}</div>
      </div>
    );
  }
);

AccordionContent.displayName = "AccordionContent";

console.log("🔥 ACCORDION EXPORTS ULTIMATE PURGE: Exporting 100% custom components with ZERO dependencies");

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
