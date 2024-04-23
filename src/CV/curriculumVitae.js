import React from 'react';
import './curriculumVitae.css';

const CurriculumVitae = () => {
  return (
    <div className="cv-container">
      <h1>Victor Barreto</h1>
      <div className="cv-content">
        {
          // Información de contacto
          <>
            <h3>{'{'}Contacto{'}'}</h3>
            <ul>
              <li>Email: titomanbarreto@gmail.com</li>
              <li>Teléfono: +54 3517919468</li>
              <li>Ubicación: Córdoba, Córdoba, Argentina, 5000</li>
            </ul>
          </>
        }

        {
          // Experiencia Laboral
          <>
            <h3>{'{'}Experiencia Laboral{'}'}</h3>
            <ul>
              <li>2018-2022: Uso Brackets - Cajero / Community Manager</li>
              <li>2020-2022: Mx Brackets - Community Manager</li>
              <li>2023: CanchasYa (PostgreSQL, CSS, SQL, HTML, Node.js, React.js, JavaScript)</li>
              <li>2023: Drivers (PostgreSQL, HTML, React.js, JavaScript)</li>
              <li>2023: VideoGames (HTML, React.js, JavaScript)</li>
            </ul>
          </>
        }

        {
          // Herramientas y Tecnologías
          <>
            <h3>{'{'}Herramientas y Tecnologías{'}'}</h3>
            <ul>
              <li>GitHub, PostgreSQL, Express.js, Redux.js, Sequelize.js, Visual Studio, JavaScript, Photoshop, CSS, HTML, SQL</li>
            </ul>
          </>
        }

        {
          // Certificado de Inglés
          <>
            <h3>{'{'}Certificado de Inglés{'}'}</h3>
            <ul>
              <li>EF SET English Certificate 46/100 (B1 Intermediate)</li>
            </ul>
          </>
        }
      </div>
    </div>
  );
};

export default CurriculumVitae;
