
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log('main.tsx: Iniciando aplicação');
console.log('main.tsx: React version:', React.version);
console.log('main.tsx: Verificando elemento root');

const container = document.getElementById("root");
if (!container) {
  console.error('main.tsx: Elemento root não encontrado!');
  throw new Error('Failed to find the root element');
}

console.log('main.tsx: Elemento root encontrado, criando React root');

const root = createRoot(container);

console.log('main.tsx: Renderizando aplicação');

// Verificar se há múltiplas instâncias do React
console.log('main.tsx: Verificando instâncias do React...');
console.log('main.tsx: React.version atual:', React.version);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

console.log('main.tsx: Aplicação renderizada com sucesso');
