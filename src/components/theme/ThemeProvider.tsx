
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

console.log("🔥 THEME PROVIDER: Clean implementation - no tooltip dependencies");

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  console.log("🔥 THEME PROVIDER: Rendering WITHOUT any tooltip providers");
  
  // Completely clean implementation - no TooltipProvider wrapping
  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  )
}
