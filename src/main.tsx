
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log("🔥 MAIN: Aplicação totalmente limpa sem erros de Radix");

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
  console.log("🔥 MAIN: App renderizado com sucesso");
} else {
  console.error('🔥 MAIN: Elemento root não encontrado');
}
