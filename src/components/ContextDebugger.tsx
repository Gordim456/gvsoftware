
import React from 'react';

// Criar um contexto de teste para debugging
const TestContext = React.createContext<string | null>(null);

const ContextTestComponent: React.FC = () => {
  console.log('ContextTestComponent: Iniciando teste de contexto');
  
  try {
    const contextValue = React.useContext(TestContext);
    console.log('ContextTestComponent: Valor do contexto:', contextValue);
    
    if (contextValue === null) {
      console.warn('ContextTestComponent: Contexto retornou null - componente pode não estar dentro do Provider');
    } else {
      console.log('ContextTestComponent: Contexto funcionando corretamente');
    }
    
    return null;
  } catch (error) {
    console.error('ContextTestComponent: Erro ao acessar contexto:', error);
    return null;
  }
};

const ContextDebugger: React.FC = () => {
  console.log('ContextDebugger: Inicializando debugger de contexto');
  
  return (
    <TestContext.Provider value="test-context-value">
      <ContextTestComponent />
    </TestContext.Provider>
  );
};

export default ContextDebugger;
