
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

console.log("🔥 LABEL: Custom implementation without Radix - CLEAN VERSION");

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement> & VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => {
  console.log("🔥 LABEL: Rendering custom label - NO RADIX");
  
  return (
    <label
      ref={ref}
      className={cn(labelVariants(), className)}
      {...props}
    />
  )
});
Label.displayName = "Label";

export { Label };
