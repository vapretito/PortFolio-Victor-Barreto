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
      <img src={yo} alt="logo" />
      <div className="home-content">
        {/* Contenido a la derecha de la imagen */}
        {/* Puedes añadir aquí tus elementos HTML/React */}
        <h1>{language === 'es' ? 'Victor Barreto' : 'Victor Barreto'}</h1>
        <p>
          {language === 'es' ? (
            "Soy un Desarollador Full-Stack con experiencia en servicio al cliente y ventas. Mi pasión por la tecnología me llevó a adquirir habilidades en HTML, CSS, React, JavaScript, NodeJS, Express y Sequelize. Busco combinar mis habilidades en servicio al cliente con la programación para contribuir al éxito de una empresa tecnológica. Interesado en aprender nuevas tecnologías y comprometido con mi crecimiento en este campo."
          ) : (
            "I'm a Full-Stack Developer with experience in customer service and sales. My passion for technology led me to acquire skills in HTML, CSS, React, JavaScript, NodeJS, Express, and Sequelize. I seek to combine my customer service skills with programming to contribute to the success of a tech company. Interested in learning new technologies and committed to my growth in this field."
          )}
        </p>
        <button className="translate-button" onClick={toggleLanguage}>
  {language === 'es' ? 'Traducir a Inglés' : 'Translate to Spanish'}
</button>

      </div>
    </div>
  );
}

export default Home;
