
import React, { createContext, useContext, useEffect, useState } from "react"

console.log('🔧 CLEAN THEME: Loading provider COMPLETELY CLEAN');

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "dark", // Changed from "system" to "dark" as default
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function CleanThemeProvider({
  children,
  defaultTheme = "dark", // Ensure we always have a valid theme
  storageKey = "gv-software-theme",
  ...props
}: ThemeProviderProps) {
  console.log('🔧 CLEAN THEME: Initializing clean provider with theme:', defaultTheme);
  
  // Ensure the initial theme is never null/undefined
  const getInitialTheme = (): Theme => {
    try {
      const savedTheme = localStorage.getItem(storageKey) as Theme;
      if (savedTheme && ['dark', 'light', 'system'].includes(savedTheme)) {
        return savedTheme;
      }
    } catch (error) {
      console.warn('Error accessing localStorage:', error);
    }
    return defaultTheme || "dark";
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    console.log('🔧 CLEAN THEME: Applying theme:', theme);
    const root = window.document.documentElement

    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"

      root.classList.add(systemTheme)
      console.log('🔧 CLEAN THEME: System theme applied:', systemTheme);
      return
    }

    root.classList.add(theme)
    console.log('🔧 CLEAN THEME: Manual theme applied:', theme);
  }, [theme])

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      console.log('🔧 CLEAN THEME: Changing theme to:', newTheme);
      try {
        localStorage.setItem(storageKey, newTheme)
      } catch (error) {
        console.warn('Error saving theme to localStorage:', error);
      }
      setTheme(newTheme)
    },
  }

  console.log('🔧 CLEAN THEME: Provider configured successfully');

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) {
    console.error('🔥 CLEAN THEME: useTheme must be used within CleanThemeProvider');
    throw new Error("useTheme must be used within a CleanThemeProvider")
  }

  return context
}

console.log('✅ CLEAN THEME: Clean provider defined - NO RADIX UI');
