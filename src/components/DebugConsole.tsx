
import React, { useState, useEffect } from 'react';
import { X, AlertTriangle, Bug, Minimize2, Maximize2 } from 'lucide-react';

interface ErrorLog {
  id: string;
  timestamp: Date;
  message: string;
  stack?: string;
  type: 'error' | 'warning' | 'info';
  filename?: string;
  lineno?: number;
  colno?: number;
}

const DebugConsole: React.FC = () => {
  const [errors, setErrors] = useState<ErrorLog[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    // Captura erros de JavaScript
    const handleError = (event: ErrorEvent) => {
      const errorLog: ErrorLog = {
        id: Date.now().toString(),
        timestamp: new Date(),
        message: event.message,
        stack: event.error?.stack,
        type: 'error',
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
      };
      
      setErrors(prev => [errorLog, ...prev].slice(0, 50)); // Manter apenas os 50 mais recentes
      setIsOpen(true);
    };

    // Captura erros de Promise rejeitadas
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const errorLog: ErrorLog = {
        id: Date.now().toString(),
        timestamp: new Date(),
        message: `Unhandled Promise Rejection: ${event.reason}`,
        type: 'error',
      };
      
      setErrors(prev => [errorLog, ...prev].slice(0, 50));
      setIsOpen(true);
    };

    // Intercepta console.error
    const originalConsoleError = console.error;
    console.error = (...args) => {
      const errorLog: ErrorLog = {
        id: Date.now().toString(),
        timestamp: new Date(),
        message: args.join(' '),
        type: 'error',
      };
      
      setErrors(prev => [errorLog, ...prev].slice(0, 50));
      originalConsoleError.apply(console, args);
    };

    // Intercepta console.warn
    const originalConsoleWarn = console.warn;
    console.warn = (...args) => {
      const errorLog: ErrorLog = {
        id: Date.now().toString(),
        timestamp: new Date(),
        message: args.join(' '),
        type: 'warning',
      };
      
      setErrors(prev => [errorLog, ...prev].slice(0, 50));
      originalConsoleWarn.apply(console, args);
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      console.error = originalConsoleError;
      console.warn = originalConsoleWarn;
    };
  }, []);

  const clearErrors = () => {
    setErrors([]);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('pt-BR', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const getErrorIcon = (type: string) => {
    switch (type) {
      case 'error':
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      default:
        return <Bug className="w-4 h-4 text-blue-500" />;
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-[9999] bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-colors"
        title="Abrir Console de Depuração"
      >
        <Bug className="w-5 h-5" />
        {errors.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
            {errors.length}
          </span>
        )}
      </button>
    );
  }

  return (
    <div className={`fixed bottom-4 right-4 z-[9999] bg-gray-900 border border-gray-700 rounded-lg shadow-2xl transition-all ${
      isMinimized ? 'w-80 h-12' : 'w-96 h-96'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-gray-700 bg-gray-800 rounded-t-lg">
        <div className="flex items-center gap-2">
          <Bug className="w-4 h-4 text-red-500" />
          <span className="text-white font-semibold text-sm">Debug Console</span>
          <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">
            {errors.length}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-gray-400 hover:text-white p-1 rounded"
            title={isMinimized ? 'Maximizar' : 'Minimizar'}
          >
            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={clearErrors}
            className="text-gray-400 hover:text-white p-1 rounded text-xs"
            title="Limpar erros"
          >
            Limpar
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white p-1 rounded"
            title="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      {!isMinimized && (
        <div className="p-3 h-80 overflow-y-auto">
          {errors.length === 0 ? (
            <div className="text-green-400 text-sm text-center py-8">
              ✅ Nenhum erro detectado!
            </div>
          ) : (
            <div className="space-y-2">
              {errors.map((error) => (
                <div
                  key={error.id}
                  className={`p-2 rounded border-l-4 text-xs ${
                    error.type === 'error'
                      ? 'bg-red-900/20 border-red-500 text-red-200'
                      : error.type === 'warning'
                      ? 'bg-yellow-900/20 border-yellow-500 text-yellow-200'
                      : 'bg-blue-900/20 border-blue-500 text-blue-200'
                  }`}
                >
                  <div className="flex items-start gap-2 mb-1">
                    {getErrorIcon(error.type)}
                    <span className="text-gray-400 text-xs">
                      {formatTime(error.timestamp)}
                    </span>
                  </div>
                  <div className="font-mono text-xs mb-1 break-words">
                    {error.message}
                  </div>
                  {error.filename && (
                    <div className="text-gray-500 text-xs">
                      {error.filename}:{error.lineno}:{error.colno}
                    </div>
                  )}
                  {error.stack && (
                    <details className="mt-1">
                      <summary className="text-gray-400 cursor-pointer text-xs">
                        Stack trace
                      </summary>
                      <pre className="text-xs mt-1 text-gray-300 whitespace-pre-wrap break-words">
                        {error.stack}
                      </pre>
                    </details>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DebugConsole;
