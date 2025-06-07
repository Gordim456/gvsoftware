
import * as React from "react"
import { type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { toggleVariants } from "@/components/ui/toggle"

console.log("🔥 TOGGLE GROUP ULTIMATE PURGE: 100% Custom Implementation - ZERO RADIX");

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: "default",
  variant: "default",
})

interface ToggleGroupProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof toggleVariants> {
  type?: "single" | "multiple";
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  disabled?: boolean;
}

const ToggleGroup = React.forwardRef<HTMLDivElement, ToggleGroupProps>(
  ({ className, variant, size, children, type = "single", value, onValueChange, disabled, ...props }, ref) => {
    console.log("🔥 TOGGLE GROUP ULTIMATE PURGE: Rendering 100% custom toggle group");
    
    const [internalValue, setInternalValue] = React.useState<string | string[]>(
      type === "multiple" ? (Array.isArray(value) ? value : []) : (value || "")
    );

    const currentValue = value !== undefined ? value : internalValue;

    const handleValueChange = React.useCallback((itemValue: string) => {
      if (disabled) return;

      let newValue: string | string[];
      
      if (type === "multiple") {
        const currentArray = Array.isArray(currentValue) ? currentValue : [];
        newValue = currentArray.includes(itemValue) 
          ? currentArray.filter(v => v !== itemValue)
          : [...currentArray, itemValue];
      } else {
        newValue = currentValue === itemValue ? "" : itemValue;
      }

      if (value === undefined) {
        setInternalValue(newValue);
      }
      
      onValueChange?.(newValue);
    }, [currentValue, disabled, onValueChange, type, value]);

    return (
      <div
        ref={ref}
        className={cn("flex items-center justify-center gap-1", className)}
        role={type === "single" ? "radiogroup" : "group"}
        {...props}
      >
        <ToggleGroupContext.Provider value={{ variant, size }}>
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                ...child.props,
                onValueChange: handleValueChange,
                isPressed: type === "multiple" 
                  ? Array.isArray(currentValue) && currentValue.includes(child.props.value)
                  : currentValue === child.props.value,
                disabled: disabled || child.props.disabled,
              });
            }
            return child;
          })}
        </ToggleGroupContext.Provider>
      </div>
    );
  }
);

ToggleGroup.displayName = "ToggleGroup";

interface ToggleGroupItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof toggleVariants> {
  value: string;
  onValueChange?: (value: string) => void;
  isPressed?: boolean;
}

const ToggleGroupItem = React.forwardRef<HTMLButtonElement, ToggleGroupItemProps>(
  ({ className, children, variant, size, value, onValueChange, isPressed, disabled, ...props }, ref) => {
    const context = React.useContext(ToggleGroupContext);

    console.log("🔥 TOGGLE GROUP ITEM ULTIMATE PURGE: Rendering 100% custom toggle item");

    const handleClick = () => {
      if (!disabled) {
        onValueChange?.(value);
      }
    };

    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          toggleVariants({
            variant: context.variant || variant,
            size: context.size || size,
          }),
          isPressed && "bg-accent text-accent-foreground",
          className
        )}
        aria-pressed={isPressed}
        disabled={disabled}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    );
  }
);

ToggleGroupItem.displayName = "ToggleGroupItem";

console.log("🔥 TOGGLE GROUP EXPORTS ULTIMATE PURGE: Exporting 100% custom components with ZERO dependencies");

export { ToggleGroup, ToggleGroupItem };
