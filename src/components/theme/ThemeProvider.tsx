
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  React.useEffect(() => {
    console.log("🔥 THEME PROVIDER: Mounted - COMPLETELY CLEAN OF RADIX TOOLTIP");
  }, []);

  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  )
}
