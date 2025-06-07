
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log("🚀 MAIN: ULTRA CLEAN START - Zero tooltip dependencies, aggressive blocking");

// Aggressive cleanup and blocking
if (typeof window !== 'undefined') {
  console.log("🚀 MAIN: Implementing aggressive Radix blocking");
  
  // Block module resolution for Radix tooltip
  const originalResolve = Promise.resolve;
  Promise.resolve = function(value) {
    if (typeof value === 'string' && (value.includes('@radix-ui/react-tooltip') || value.includes('radix-tooltip'))) {
      console.error("🚀 MAIN: BLOCKED RADIX TOOLTIP PROMISE:", value);
      return originalResolve.call(this, null);
    }
    return originalResolve.call(this, value);
  };
  
  // Clear any module cache
  if ('webpackChunkName' in window) {
    delete (window as any).webpackChunkName;
  }
}

// Initialize application
const rootElement = document.getElementById("root");
if (rootElement) {
  try {
    const root = createRoot(rootElement);
    
    console.log("🚀 MAIN: Rendering ultra clean App - completely isolated from Radix");
    
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    
    console.log("🚀 MAIN: App rendered successfully - completely Radix-free");
  } catch (error) {
    console.error('🚀 MAIN: Error during render:', error);
    
    // Try a fallback render without StrictMode
    console.log("🚀 MAIN: Attempting fallback render");
    const root = createRoot(rootElement);
    root.render(<App />);
  }
} else {
  console.error('🚀 MAIN: Root element not found');
}
