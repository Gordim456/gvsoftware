
import * as React from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

console.log("🔥 CHECKBOX FINAL ELIMINATION: 100% Custom Implementation - ABSOLUTE ZERO RADIX");

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, checked, onCheckedChange, onChange, ...props }, ref) => {
    console.log("🔥 CHECKBOX FINAL ELIMINATION: Rendering 100% custom checkbox");
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const isChecked = event.target.checked;
      onCheckedChange?.(isChecked);
      onChange?.(event);
    };

    return (
      <div className="relative inline-flex items-center">
        <input
          type="checkbox"
          ref={ref}
          className="sr-only"
          checked={checked}
          onChange={handleChange}
          {...props}
        />
        <div
          className={cn(
            "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer transition-colors",
            checked ? "bg-primary text-primary-foreground" : "bg-background",
            className
          )}
          onClick={() => onCheckedChange?.(!checked)}
        >
          {checked && (
            <div className="flex items-center justify-center text-current">
              <Check className="h-4 w-4" />
            </div>
          )}
        </div>
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";

console.log("🔥 CHECKBOX EXPORTS FINAL ELIMINATION: Exporting 100% custom component with ABSOLUTE ZERO dependencies");

export { Checkbox }
