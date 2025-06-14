
// Utilitário para verificar se o React está funcionando corretamente
export const checkReactHealth = () => {
  console.log('ReactChecker: Verificando saúde do React...');
  
  try {
    // Verificar se React está disponível
    if (typeof React === 'undefined') {
      console.error('ReactChecker: React não está definido!');
      return false;
    }
    
    // Verificar versão do React
    console.log('ReactChecker: React version:', React.version);
    
    // Verificar se hooks estão disponíveis
    const hooks = {
      useState: typeof React.useState,
      useEffect: typeof React.useEffect,
      useContext: typeof React.useContext,
      useRef: typeof React.useRef,
      useMemo: typeof React.useMemo,
      useCallback: typeof React.useCallback
    };
    
    console.log('ReactChecker: Hooks disponíveis:', hooks);
    
    // Verificar se algum hook está undefined
    const undefinedHooks = Object.entries(hooks).filter(([, type]) => type === 'undefined');
    if (undefinedHooks.length > 0) {
      console.error('ReactChecker: Hooks não definidos:', undefinedHooks);
      return false;
    }
    
    console.log('ReactChecker: React está funcionando corretamente!');
    return true;
    
  } catch (error) {
    console.error('ReactChecker: Erro ao verificar React:', error);
    return false;
  }
};
