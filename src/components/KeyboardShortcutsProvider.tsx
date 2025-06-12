
import { useEffect, useState } from 'react';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from '../pages/AdminDashboard';

const KeyboardShortcutsProvider = () => {
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // CTRL + SHIFT + A para abrir painel admin
      if (event.ctrlKey && event.shiftKey && event.key === 'A') {
        event.preventDefault();
        setShowAdminLogin(true);
      }

      // ESC para fechar painéis
      if (event.key === 'Escape') {
        setShowAdminLogin(false);
        setShowAdminPanel(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleAdminLogin = () => {
    setShowAdminLogin(false);
    setShowAdminPanel(true);
  };

  const handleAdminCancel = () => {
    setShowAdminLogin(false);
  };

  const handleAdminBack = () => {
    setShowAdminPanel(false);
  };

  if (showAdminLogin) {
    return (
      <div className="fixed inset-0 z-[9999]">
        <AdminLogin 
          onLogin={handleAdminLogin}
          onCancel={handleAdminCancel}
        />
      </div>
    );
  }
  
  if (showAdminPanel) {
    return (
      <div className="fixed inset-0 z-[9999] bg-white">
        <AdminDashboard onBack={handleAdminBack} />
      </div>
    );
  }

  return null;
};

export default KeyboardShortcutsProvider;
