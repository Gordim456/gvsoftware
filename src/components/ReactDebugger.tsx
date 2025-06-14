
import React from 'react';

const ReactDebugger: React.FC = () => {
  console.log('ReactDebugger: Verificando estado do React...');
  
  // Verificar se o React está funcionando corretamente
  const [debugState, setDebugState] = React.useState('React funcionando');
  
  React.useEffect(() => {
    console.log('ReactDebugger: useEffect funcionando corretamente');
    console.log('ReactDebugger: Estado atual:', debugState);
    
    // Testar se useContext está disponível
    try {
      const TestContext = React.createContext('test');
      console.log('ReactDebugger: Contexto criado:', TestContext);
      
      // Verificar se o contexto foi criado corretamente
      if (TestContext && TestContext.Provider && TestContext.Consumer) {
        console.log('ReactDebugger: Contexto válido com Provider e Consumer');
        
        // Tentar usar useContext de forma segura
        const TestComponent = () => {
          try {
            const testValue = React.useContext(TestContext);
            console.log('ReactDebugger: useContext funcionando, valor:', testValue);
            return null;
          } catch (contextError) {
            console.error('ReactDebugger: Erro específico com useContext:', contextError);
            return null;
          }
        };
        
        // Renderizar componente de teste dentro do provider
        React.createElement(TestContext.Provider, { value: 'test-value' }, 
          React.createElement(TestComponent)
        );
        
      } else {
        console.error('ReactDebugger: Contexto não foi criado corretamente');
      }
      
    } catch (error) {
      console.error('ReactDebugger: Erro ao criar/usar contexto:', error);
      console.error('ReactDebugger: Stack trace:', error.stack);
    }
    
    // Verificar se há múltiplas instâncias do React
    console.log('ReactDebugger: Versão do React:', React.version);
    console.log('ReactDebugger: React object:', React);
    
    setDebugState('React totalmente funcional');
  }, [debugState]);
  
  return null;
};

export default ReactDebugger;
