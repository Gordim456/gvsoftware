
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import ErrorBoundary from './components/ErrorBoundary';

console.log("🔥 MAIN CLEAN: App iniciando 100% LIMPO - SEM providers externos");

const rootElement = document.getElementById("root");
if (rootElement) {
  console.log("🔥 MAIN CLEAN: Iniciando React app 100% limpo");
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
} else {
  console.error('🔥 MAIN CLEAN: ERRO - Root não encontrado');
}
