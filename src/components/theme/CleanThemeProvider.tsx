
import React, { createContext, useContext, useEffect, useState } from "react"

console.log('🔧 CLEAN THEME: Loading completely standalone theme provider');

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
  theme: "dark",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function CleanThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "gv-software-theme",
  ...props
}: ThemeProviderProps) {
  console.log('🔧 CLEAN THEME: Initializing standalone provider with theme:', defaultTheme);
  
  const getInitialTheme = (): Theme => {
    try {
      const savedTheme = localStorage.getItem(storageKey) as Theme;
      if (savedTheme && ['dark', 'light', 'system'].includes(savedTheme)) {
        console.log('🔧 CLEAN THEME: Retrieved saved theme:', savedTheme);
        return savedTheme;
      }
    } catch (error) {
      console.warn('🔧 CLEAN THEME: Error accessing localStorage:', error);
    }
    console.log('🔧 CLEAN THEME: Using default theme:', defaultTheme);
    return defaultTheme;
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    console.log('🔧 CLEAN THEME: Applying theme to document:', theme);
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
        console.log('🔧 CLEAN THEME: Theme saved to localStorage');
      } catch (error) {
        console.warn('🔧 CLEAN THEME: Error saving theme to localStorage:', error);
      }
      setTheme(newTheme)
    },
  }

  console.log('🔧 CLEAN THEME: Provider rendering with theme:', theme);

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

  console.log('🔧 CLEAN THEME: useTheme hook called, current theme:', context.theme);
  return context
}

console.log('✅ CLEAN THEME: Completely standalone theme provider defined');
