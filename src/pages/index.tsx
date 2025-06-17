
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

// This file is now just a redirect to the new Home page
const Index = () => {
  useEffect(() => {
    document.title = 'Início | GV Software - Desenvolvimento de Software';
  }, []);

  return <Navigate to="/" replace />;
};

export default Index;
