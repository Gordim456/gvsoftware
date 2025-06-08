
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import ErrorBoundary from './components/ErrorBoundary';

console.log("🔥 MAIN DESKTOP FIX: App iniciando 100% LIMPO para desktop");

const rootElement = document.getElementById("root");
if (rootElement) {
  console.log("🔥 MAIN DESKTOP FIX: Iniciando React app limpo para desktop");
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
} else {
  console.error('🔥 MAIN DESKTOP FIX: ERRO - Root não encontrado');
}
