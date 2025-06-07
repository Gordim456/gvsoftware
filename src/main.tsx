
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log("🔥 MAIN: Aplicação totalmente limpa sem erros de Radix");
console.log("🔥 MAIN: React version:", React.version);
console.log("🔥 MAIN: React object:", React);

// Verificar se React está disponível globalmente
if (typeof React === 'undefined' || React === null) {
  console.error("🔥 MAIN: ERRO - React não está disponível!");
} else {
  console.log("🔥 MAIN: React está disponível e funcionando");
}

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
  console.log("🔥 MAIN: App renderizado com sucesso");
} else {
  console.error('🔥 MAIN: Elemento root não encontrado');
}
