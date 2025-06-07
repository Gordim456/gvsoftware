
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log("🚀 MAIN: Starting application");

// Initialize application
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  
  console.log("🚀 MAIN: Rendering application");
  
  try {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    
    console.log("🚀 MAIN: Application rendered successfully");
  } catch (error) {
    console.error('🚀 MAIN: Render error:', error);
    
    // Fallback render without StrictMode if there's an error
    root.render(<App />);
  }
} else {
  console.error('🚀 MAIN: Root element not found');
}
