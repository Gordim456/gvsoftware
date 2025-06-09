
import React, { createContext, useContext, useEffect, useState } from "react"

console.log('🔧 CLEAN THEME: Carregando provider COMPLETAMENTE LIMPO');

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
  theme: "system",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function CleanThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "gv-software-theme",
  ...props
}: ThemeProviderProps) {
  console.log('🔧 CLEAN THEME: Inicializando provider limpo com tema:', defaultTheme);
  
  // Garantir que o tema inicial nunca seja null/undefined
  const getInitialTheme = (): Theme => {
    try {
      const savedTheme = localStorage.getItem(storageKey) as Theme;
      if (savedTheme && ['dark', 'light', 'system'].includes(savedTheme)) {
        return savedTheme;
      }
    } catch (error) {
      console.warn('Erro ao acessar localStorage:', error);
    }
    return defaultTheme || "dark";
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    console.log('🔧 CLEAN THEME: Aplicando tema:', theme);
    const root = window.document.documentElement

    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"

      root.classList.add(systemTheme)
      console.log('🔧 CLEAN THEME: Tema do sistema aplicado:', systemTheme);
      return
    }

    root.classList.add(theme)
    console.log('🔧 CLEAN THEME: Tema manual aplicado:', theme);
  }, [theme])

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      console.log('🔧 CLEAN THEME: Alterando tema para:', newTheme);
      try {
        localStorage.setItem(storageKey, newTheme)
      } catch (error) {
        console.warn('Erro ao salvar tema no localStorage:', error);
      }
      setTheme(newTheme)
    },
  }

  console.log('🔧 CLEAN THEME: Provider configurado com sucesso');

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) {
    console.error('🔥 CLEAN THEME: useTheme deve ser usado dentro de CleanThemeProvider');
    throw new Error("useTheme must be used within a CleanThemeProvider")
  }

  return context
}

console.log('✅ CLEAN THEME: Provider LIMPO definido - SEM RADIX UI');
