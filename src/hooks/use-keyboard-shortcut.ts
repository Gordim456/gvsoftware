
import { useEffect } from 'react';

export const useKeyboardShortcut = () => {
  // Este hook foi movido para KeyboardShortcutsProvider para evitar
  // handlers duplicados. Mantido apenas para compatibilidade.
  
  useEffect(() => {
    console.log("Hook use-keyboard-shortcut foi mantido apenas para compatibilidade");
  }, []);
};

export default useKeyboardShortcut;
