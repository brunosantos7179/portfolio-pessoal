import React from 'react';

const Projetos = () => {
  return (
    <section id="projetos">
      <h2>Projetos</h2>
      
      <div className="projeto-item">
        <h3>The Last of Us - WebSite</h3>
        <p>O projeto The Last of Us - WebSite foi criado durante meu aprendizado sobre front-end durante um evento online de programação web.</p>
        <p>Tecnologias utilizadas: HTML, CSS, e JS</p>
        <a href="https://brunosantos7179.github.io/szpc-projeto-the-last-of-us/" className='button-1' target='blank'>Veja o projeto!</a>
      </div>
      
      <div className="projeto-item">
        <h3>Calculadora em C#</h3>
        <p>O projeto Calculadora em C# foi desenvolvido durante meus estudos de programação orientada a objetos em C# em prol de colocar em pratica meus conhecimentos estudados em sala de aula na universidade.</p>
        <p>Tecnologia utilizada: C#</p>
        <a href="https://github.com/brunosantos7179/Calculator/tree/main" className='button-1' target='blank'>Veja o projeto!</a>
      </div>
    </section>
  );
};

export default Projetos;
