
import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log('main.tsx: React version:', React.version);
console.log('main.tsx: Starting application render');

const container = document.getElementById("root");
if (!container) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(container);

try {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
  console.log('main.tsx: Application rendered successfully');
} catch (error) {
  console.error('main.tsx: Error rendering application:', error);
  throw error;
}
