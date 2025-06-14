
import React from 'react';

export const checkReactInstance = () => {
  console.log('ReactChecker: Verificando instância do React...');
  
  try {
    console.log('ReactChecker: React.version:', React.version);
    
    // Verificar se React está funcionando
    const isReactWorking = React && typeof React.createElement === 'function';
    console.log('ReactChecker: React funcionando?', isReactWorking);
    
    // Verificar hooks disponíveis
    console.log('ReactChecker: useState disponível?', typeof React.useState);
    console.log('ReactChecker: useEffect disponível?', typeof React.useEffect);
    console.log('ReactChecker: useContext disponível?', typeof React.useContext);
    console.log('ReactChecker: useMemo disponível?', typeof React.useMemo);
    console.log('ReactChecker: useCallback disponível?', typeof React.useCallback);
    console.log('ReactChecker: createContext disponível?', typeof React.createContext);
    
    return isReactWorking;
  } catch (error) {
    console.error('ReactChecker: Erro ao verificar React:', error);
    return false;
  }
};

export default checkReactInstance;
