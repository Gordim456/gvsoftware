
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

console.log("🔥 THEME PROVIDER: Loading - COMPLETELY CLEAN OF ANY RADIX TOOLTIP REFERENCES");

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  React.useEffect(() => {
    console.log("🔥 THEME PROVIDER: Mounted successfully - ABSOLUTELY NO RADIX TOOLTIP ANYWHERE");
  }, []);

  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  )
}
