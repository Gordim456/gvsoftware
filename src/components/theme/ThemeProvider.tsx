
import React, { createContext, useContext, useEffect, useState } from "react"

console.log("🔥 THEME PROVIDER FINAL: CARREGANDO TOTALMENTE LIMPO");

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
  storageKey = "gv-software-theme",
  attribute = "class",
  enableSystem = true,
  ...props
}: ThemeProviderProps) {
  console.log("🔥 THEME PROVIDER FINAL: Inicializando provider customizado");
  
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      return (localStorage.getItem(storageKey) as Theme) || defaultTheme;
    } catch {
      return defaultTheme;
    }
  });

  useEffect(() => {
    try {
      const root = window.document.documentElement;
      root.classList.remove("light", "dark");

      if (theme === "system" && enableSystem) {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        root.classList.add(systemTheme);
        return;
      }

      root.classList.add(theme);
    } catch (error) {
      console.error("🔥 THEME PROVIDER FINAL: Erro ao aplicar tema:", error);
    }
  }, [theme, enableSystem]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      try {
        localStorage.setItem(storageKey, theme);
        setTheme(theme);
      } catch (error) {
        console.error("🔥 THEME PROVIDER FINAL: Erro ao salvar tema:", error);
        setTheme(theme);
      }
    },
  };

  console.log("🔥 THEME PROVIDER FINAL: Renderizando provider limpo");

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    console.error("🔥 THEME PROVIDER FINAL: useTheme usado fora do ThemeProvider");
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
