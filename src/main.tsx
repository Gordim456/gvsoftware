
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log("🔥 MAIN: VERSÃO FINAL COMPLETAMENTE LIMPA - ZERO DEPENDÊNCIAS TOOLTIP");

// Error boundary para toda a aplicação
class GlobalErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('🔥 MAIN: Error boundary capturou erro:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center h-screen bg-slate-950 text-white">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Algo deu errado</h1>
            <button 
              onClick={() => window.location.reload()} 
              className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-700"
            >
              Recarregar Página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Inicializar aplicação com setup limpo
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  
  console.log("🔥 MAIN: Inicializando app React completamente limpo");
  
  root.render(
    <React.StrictMode>
      <GlobalErrorBoundary>
        <App />
      </GlobalErrorBoundary>
    </React.StrictMode>
  );
} else {
  console.error('🔥 MAIN: Elemento root não encontrado');
}
