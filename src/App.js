import React from 'react';
import './App.css';
import Educacao from './components/Educacao';
import Experiencia from './components/Experiencia';
import Projetos from './components/Projetos';
import Contato from './components/Contato';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Opa! Eu sou Bruno Rafael</h1>
        <h1>Web Developer</h1>
      </header>
      <main>
        <Educacao />
        <Experiencia />
        <Projetos />
        <Contato />
      </main>
    </div>
  );
}

export default App;
