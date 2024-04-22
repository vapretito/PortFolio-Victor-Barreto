import React, { useState } from 'react';
import './home.css';
import yo from '../Home/victor-animado-3d-port.png';

function Home() {
  const [language, setLanguage] = useState('es');

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

 

  return (
    <div className="home-container">
      <img src={yo} alt="Logo" /> 
      <div className="home-content">
        <div className="text-box">
          <h1>{language === 'es' ? 'Victor Barreto' : 'Victor Barreto'}</h1>
          <p>
            {language === 'es'
              ? "Soy un Desarrollador Full-Stack con experiencia en servicio al cliente y ventas. Mi pasión por la tecnología me llevó a adquirir habilidades en HTML, CSS, React, JavaScript, NodeJS, Express y Sequelize. Busco combinar mis habilidades en servicio al cliente con la programación para contribuir al éxito de una empresa tecnológica."
              : "I'm a Full-Stack Developer with experience in customer service and sales. My passion for technology led me to acquire skills in HTML, CSS, React, JavaScript, NodeJS, Express, and Sequelize. I seek to combine my customer service skills with programming to contribute to the success of a tech company."}
          </p>
          <button className="translate-button" onClick={toggleLanguage}>
            {language === 'es' ? 'Traducir a Inglés' : 'Translate to Spanish'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;