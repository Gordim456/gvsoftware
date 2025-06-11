import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const Index = () => {
  useEffect(() => {
    document.title = 'Início | GV Software - Desenvolvimento de Software';
  }, []);

  return <Navigate to="/" replace />;
};

export default Index;