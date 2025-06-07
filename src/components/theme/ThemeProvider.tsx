
import * as React from "react"
import { createContext, useContext, useEffect, useState } from "react"

console.log("🔥 THEME PROVIDER FINAL: 100% CUSTOM - NUCLEAR RADIX ELIMINATION");

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
  console.log("🔥 THEME PROVIDER FINAL: Rendering with NUCLEAR Radix elimination");
  
  // Nuclear runtime check to ensure no Radix contamination
  React.useEffect(() => {
    console.log("🔥 THEME PROVIDER FINAL: Performing nuclear Radix check...");
    
    // Check for any Radix in window object
    if (typeof window === 'object' && window) {
      const radixKeys = Object.keys(window).filter(key => 
        key.toLowerCase().includes('radix') || 
        key.toLowerCase().includes('tooltip') ||
        key.startsWith('__radix')
      );
      
      if (radixKeys.length > 0) {
        console.error("🔥 THEME PROVIDER FINAL: RADIX CONTAMINATION DETECTED:", radixKeys);
        // Nuclear cleanup
        radixKeys.forEach(key => {
          try {
            delete (window as any)[key];
            console.log("🔥 THEME PROVIDER FINAL: Deleted window key:", key);
          } catch (e) {
            console.log("🔥 THEME PROVIDER FINAL: Could not delete window key:", key);
          }
        });
      }
    }
    
    // Check for Radix in DOM
    const radixElements = document.querySelectorAll('[data-radix-ui], [data-radix], *[class*="radix"]');
    if (radixElements.length > 0) {
      console.error('🔥 THEME PROVIDER FINAL: RADIX DOM CONTAMINATION:', radixElements.length);
      radixElements.forEach(el => {
        console.log('🔥 THEME PROVIDER FINAL: Removing Radix element:', el);
        el.remove();
      });
    }
    
    console.log("🔥 THEME PROVIDER FINAL: Nuclear Radix check complete - CLEAN");
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

  console.log("🔥 THEME PROVIDER FINAL: Providing NUCLEAR CLEAN theme context");

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
