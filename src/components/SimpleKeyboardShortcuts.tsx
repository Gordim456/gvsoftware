
import { useEffect } from 'react';

const SimpleKeyboardShortcuts: React.FC = () => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // CTRL + SHIFT + A para abrir painel admin
      if (event.ctrlKey && event.shiftKey && event.key === 'A') {
        event.preventDefault();
        console.log('Admin shortcut detected');
        // For now, just log - we'll add functionality later
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null;
};

export default SimpleKeyboardShortcuts;
