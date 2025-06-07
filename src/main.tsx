
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log("🚀 MAIN: Starting application - NO TOOLTIP DEPENDENCIES");

// Ensure React is properly initialized
console.log("🚀 MAIN: React available:", !!React);
console.log("🚀 MAIN: React.useState available:", !!React.useState);

// Initialize application
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  
  console.log("🚀 MAIN: Rendering application with clean React setup");
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
  console.log("🚀 MAIN: Application rendered successfully - no external tooltip providers");
} else {
  console.error('🚀 MAIN: Root element not found');
}
