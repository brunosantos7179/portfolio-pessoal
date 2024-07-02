import React from 'react';

const Experiencia = () => {
  return (
    <section id="experiencia">
      <h2>Experiência</h2>
      
      <div className="experiencia-container">
        <div className="experiencia-item">
          <h3>Analista de Redes e de Comunicação de Dados</h3>
          <p>Totus Telecom - 2023</p>
          <ul>
            <li>Coordenação da rota das equipes de campo;</li>
            <li>Analise e prevenção de instabilidades ou quedas de Links.</li>
          </ul>
        </div>
        
        <div className=".image image">
          <img src={`${process.env.PUBLIC_URL}/images/OLT.jpg`} alt='Imagem da Universidade'/>
        </div>
      </div>
      
    </section>
  );
};

export default Experiencia;
