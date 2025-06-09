
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

console.log('🚀 MAIN: Starting GV Software application...');

try {
  const rootElement = document.getElementById('root');
  
  if (!rootElement) {
    console.error('❌ MAIN: Root element not found!');
    throw new Error('Root element not found');
  }

  console.log('✅ MAIN: Root element found, creating React root...');
  
  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>,
  );
  
  console.log('✅ MAIN: GV Software app rendered successfully');
} catch (error) {
  console.error('❌ MAIN: Fatal error during app initialization:', error);
  
  // Fallback em caso de erro crítico
  document.body.innerHTML = `
    <div style="
      display: flex; 
      flex-direction: column; 
      justify-content: center; 
      align-items: center; 
      height: 100vh; 
      background: #0F172A; 
      color: white; 
      font-family: system-ui;
      padding: 20px;
      text-align: center;
    ">
      <h1 style="color: #6366f1; margin-bottom: 20px;">GV Software</h1>
      <p>Carregando aplicação...</p>
      <p style="margin-top: 20px; font-size: 14px; color: #94a3b8;">
        Se esta mensagem persistir, recarregue a página.
      </p>
    </div>
  `;
}
