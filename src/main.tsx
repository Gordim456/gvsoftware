
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log("🚀 MAIN: FINAL CLEAN START - Absolutely no Radix dependencies");

// Debug React availability
console.log("🚀 MAIN: React available:", !!React);
console.log("🚀 MAIN: React.useState available:", !!React.useState);
console.log("🚀 MAIN: React.Fragment available:", !!React.Fragment);

// Initialize application with error handling
const rootElement = document.getElementById("root");
if (rootElement) {
  try {
    const root = createRoot(rootElement);
    
    console.log("🚀 MAIN: About to render App component");
    
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    
    console.log("🚀 MAIN: App rendered successfully - no Radix UI contamination");
  } catch (error) {
    console.error('🚀 MAIN: Error during render:', error);
  }
} else {
  console.error('🚀 MAIN: Root element not found');
}
