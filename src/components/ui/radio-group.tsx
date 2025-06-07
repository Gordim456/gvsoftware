
import * as React from "react"
import { Circle } from "lucide-react"
import { cn } from "@/lib/utils"

console.log("🔥 RADIO GROUP FINAL ELIMINATION: 100% Custom Implementation - ABSOLUTE ZERO RADIX");

interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  onValueChange?: (value: string) => void;
  name?: string;
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className, value, onValueChange, name, children, ...props }, ref) => {
    console.log("🔥 RADIO GROUP FINAL ELIMINATION: Rendering 100% custom radio group");
    
    return (
      <div
        ref={ref}
        className={cn("grid gap-2", className)}
        role="radiogroup"
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<any>, {
              name,
              checked: child.props.value === value,
              onCheckedChange: () => onValueChange?.(child.props.value),
            });
          }
          return child;
        })}
      </div>
    );
  }
);
RadioGroup.displayName = "RadioGroup";

interface RadioGroupItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  checked?: boolean;
  onCheckedChange?: () => void;
}

const RadioGroupItem = React.forwardRef<HTMLInputElement, RadioGroupItemProps>(
  ({ className, value, checked, onCheckedChange, ...props }, ref) => {
    console.log("🔥 RADIO GROUP ITEM FINAL ELIMINATION: Rendering 100% custom radio item");
    
    return (
      <label className="relative flex items-center cursor-pointer">
        <input
          type="radio"
          ref={ref}
          className="sr-only"
          value={value}
          checked={checked}
          onChange={onCheckedChange}
          {...props}
        />
        <div
          className={cn(
            "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
        >
          {checked && (
            <div className="flex items-center justify-center">
              <Circle className="h-2.5 w-2.5 fill-current text-current" />
            </div>
          )}
        </div>
      </label>
    );
  }
);
RadioGroupItem.displayName = "RadioGroupItem";

console.log("🔥 RADIO GROUP EXPORTS FINAL ELIMINATION: Exporting 100% custom components with ABSOLUTE ZERO dependencies");

export { RadioGroup, RadioGroupItem };
