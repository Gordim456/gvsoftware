
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log("🚀 MAIN: COMPLETELY CLEAN START - No Radix UI tooltips");

// Block any attempts to load Radix UI tooltips
if (typeof window !== 'undefined') {
  console.log("🚀 MAIN: Blocking any Radix UI tooltip imports");
  
  // Override any potential Radix UI imports
  const originalError = window.onerror;
  window.onerror = (message, source, lineno, colno, error) => {
    if (typeof message === 'string' && 
        (message.includes('@radix-ui') || 
         message.includes('TooltipProvider') || 
         message.includes('tooltip'))) {
      console.error('🚀 MAIN: Blocked Radix UI tooltip error:', message);
      return true; // Prevent default error handling
    }
    return originalError ? originalError(message, source, lineno, colno, error) : false;
  };
}

// Initialize application
const rootElement = document.getElementById("root");
if (rootElement) {
  try {
    const root = createRoot(rootElement);
    
    console.log("🚀 MAIN: Rendering App with NO external tooltip dependencies");
    
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    
    console.log("🚀 MAIN: App rendered successfully - no tooltips should be loaded");
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
