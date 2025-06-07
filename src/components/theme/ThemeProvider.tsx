
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  console.log("🔥 THEME PROVIDER: Pure next-themes implementation - NO radix dependencies");
  
  // Ensure clean React context
  React.useEffect(() => {
    console.log("🔥 THEME PROVIDER: React context established cleanly");
  }, []);
  
  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  )
}
