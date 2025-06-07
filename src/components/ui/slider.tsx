
import * as React from "react"
import { cn } from "@/lib/utils"

console.log("🔥 SLIDER: Loading CUSTOM slider - NO RADIX TOOLTIP DEPENDENCIES");

interface SliderProps {
  className?: string;
  min?: number;
  max?: number;
  step?: number;
  value?: number[];
  defaultValue?: number[];
  onValueChange?: (value: number[]) => void;
  disabled?: boolean;
}

const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  ({ className, min = 0, max = 100, step = 1, value, defaultValue, onValueChange, disabled, ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue || [50]);
    const currentValue = value || internalValue;

    React.useEffect(() => {
      console.log("🔥 SLIDER: Custom slider mounted - ZERO RADIX DEPENDENCIES");
    }, []);

    const handleChange = (newValue: number[]) => {
      if (!disabled) {
        setInternalValue(newValue);
        onValueChange?.(newValue);
      }
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled) return;
      
      const rect = e.currentTarget.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      const newValue = Math.round((percent * (max - min) + min) / step) * step;
      const clampedValue = Math.max(min, Math.min(max, newValue));
      
      handleChange([clampedValue]);
    };

    const percentage = ((currentValue[0] - min) / (max - min)) * 100;

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex w-full touch-none select-none items-center",
          className
        )}
        onMouseDown={handleMouseDown}
        {...props}
      >
        <div className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
          <div 
            className="absolute h-full bg-primary transition-all" 
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div 
          className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 absolute"
          style={{ left: `calc(${percentage}% - 10px)` }}
        />
      </div>
    );
  }
);

Slider.displayName = "Slider";

console.log("🔥 SLIDER: Exporting custom slider - COMPLETELY RADIX-FREE");

export { Slider };
