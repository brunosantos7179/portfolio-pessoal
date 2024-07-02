import React from 'react';

const Educacao = () => {
  return (
    <section id="educacao">
      <h2>Educação</h2>
      <div className="educacao-container">
        <div className="educacao-item">
          <h3>UNIDESC - CENTRO UNIVERSITÁRIO DE DESENVOLVIMENTO DO CENTRO OESTE</h3>
          <p>Análise e Desenvolvimento de Sistemas - 2024</p>
        </div>

        <div className="image">
          <img src={`${process.env.PUBLIC_URL}/images/unidesc-image.jpg`} alt='Imagem da Universidade'/>
        </div>
      </div>
      
    </section>
  );
};

export default Educacao;
