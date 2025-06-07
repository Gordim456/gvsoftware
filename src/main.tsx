
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log("🚀 MAIN: Clean start - no tooltip dependencies");

// Initialize application
const rootElement = document.getElementById("root");
if (rootElement) {
  try {
    const root = createRoot(rootElement);
    
    console.log("🚀 MAIN: Rendering App");
    
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    
    console.log("🚀 MAIN: App rendered successfully");
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
