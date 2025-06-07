
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

console.log("🔥 THEME PROVIDER: Loading CLEAN theme provider - NO RADIX TOOLTIP ANYWHERE");

// Error boundary for theme provider
class ThemeErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('🔥 THEME ERROR BOUNDARY: Caught theme error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div className="min-h-screen bg-slate-900 text-white">Theme Error</div>;
    }

    return this.props.children;
  }
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  React.useEffect(() => {
    console.log("🔥 THEME PROVIDER: Mounted successfully - COMPLETELY RADIX-FREE");
  }, []);

  return (
    <ThemeErrorBoundary>
      <NextThemesProvider {...props}>
        {children}
      </NextThemesProvider>
    </ThemeErrorBoundary>
  )
}
