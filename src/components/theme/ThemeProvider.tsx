
import * as React from "react"
import { createContext, useContext, useEffect, useState } from "react"

console.log("🔥 THEME PROVIDER: ZERO RADIX - COMPLETELY PURGED IMPLEMENTATION");

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
  attribute?: string
  enableSystem?: boolean
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  attribute = "class",
  enableSystem = true,
  ...props
}: ThemeProviderProps) {
  console.log("🔥 THEME PROVIDER: Rendering COMPLETELY PURGED theme provider");
  
  // Add runtime check to ensure no Radix contamination
  React.useEffect(() => {
    console.log("🔥 THEME PROVIDER: Checking for Radix contamination...");
    
    if (window && typeof window === 'object') {
      const radixKeys = Object.keys(window).filter(key => 
        key.toLowerCase().includes('radix') || 
        key.toLowerCase().includes('tooltip')
      );
      
      if (radixKeys.length > 0) {
        console.error("🔥 THEME PROVIDER: RADIX CONTAMINATION DETECTED:", radixKeys);
        // Force reload if contamination detected
        setTimeout(() => {
          window.location.reload();
        }, 100);
        return;
      }
    }
    
    console.log("🔥 THEME PROVIDER: Clean - no Radix contamination found");
  }, []);
  
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  )

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove("light", "dark")

    if (theme === "system" && enableSystem) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme, enableSystem])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  console.log("🔥 THEME PROVIDER: Providing PURGED theme context");

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
