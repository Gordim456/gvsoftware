import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const KeyboardShortcutsProvider = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ctrl/Cmd + K para busca (placeholder)
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        // Implementar busca no futuro
      }

      // Alt + H para Home
      if (event.altKey && event.key === 'h') {
        event.preventDefault();
        navigate('/');
      }

      // Alt + A para About
      if (event.altKey && event.key === 'a') {
        event.preventDefault();
        navigate('/about');
      }

      // Alt + S para Services
      if (event.altKey && event.key === 's') {
        event.preventDefault();
        navigate('/services');
      }

      // Alt + C para Contact
      if (event.altKey && event.key === 'c') {
        event.preventDefault();
        navigate('/contact');
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate]);

  return null;
};

export default KeyboardShortcutsProvider;
