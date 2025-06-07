
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  console.log("🔥 THEME PROVIDER: Clean implementation - NO radix dependencies");
  
  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  )
}
