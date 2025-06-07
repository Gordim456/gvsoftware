
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

console.log("🔥 THEME PROVIDER: NOVA IMPLEMENTAÇÃO LIMPA - ZERO DEPENDÊNCIAS RADIX");

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  console.log("🔥 THEME PROVIDER: Renderizando com props:", props);
  
  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  )
}
