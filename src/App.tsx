
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Componente simples para teste
const SimpleHome = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="bg-slate-900 p-4">
        <h1 className="text-2xl font-bold text-indigo-400">GV Software</h1>
      </nav>
      <main className="p-8">
        <h2 className="text-4xl font-bold mb-4">Bem-vindo ao GV Software</h2>
        <p className="text-gray-300">Site funcionando corretamente!</p>
      </main>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SimpleHome />} />
        <Route path="*" element={<SimpleHome />} />
      </Routes>
    </Router>
  );
}

export default App;
