
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log("🚀 MAIN: CLEAN START - No external tooltip dependencies");

// Initialize application
const rootElement = document.getElementById("root");
if (rootElement) {
  try {
    const root = createRoot(rootElement);
    
    console.log("🚀 MAIN: Rendering clean App component");
    
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    
    console.log("🚀 MAIN: App rendered successfully");
  } catch (error) {
    console.error('🚀 MAIN: Error during render:', error);
  }
} else {
  console.error('🚀 MAIN: Root element not found');
}
