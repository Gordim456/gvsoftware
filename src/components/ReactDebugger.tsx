
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
      const testValue = React.useContext(TestContext);
      console.log('ReactDebugger: useContext funcionando, valor:', testValue);
    } catch (error) {
      console.error('ReactDebugger: Erro com useContext:', error);
    }
    
    setDebugState('React totalmente funcional');
  }, [debugState]);
  
  return null;
};

export default ReactDebugger;
