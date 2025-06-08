
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import ErrorBoundary from './components/ErrorBoundary';

console.log("🔥 MAIN NOVO: App iniciando 100% LIMPO - ZERO Radix UI");

const rootElement = document.getElementById("root");
if (rootElement) {
  console.log("🔥 MAIN NOVO: Iniciando React app completamente limpo");
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
} else {
  console.error('🔥 MAIN NOVO: ERRO - Root não encontrado');
}
