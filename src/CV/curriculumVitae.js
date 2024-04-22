import React from 'react';
import './curriculumVitae.css';

const CurriculumVitae = () => {
  return (
    <div className="cv-container">
      <h1>Victor Barreto</h1>

      {/* Contenedor de columnas */}
      <div className="cv-columns">
        {/* Primera columna */}
        <div className="cv-column">
          <div className="cv-section">
            <h3>Contacto</h3>
            <ul>
            <p>Email: titomanbarreto@gmail.com</p>
            <p>Teléfono: +54 3517919468</p>
            <p>Ubicación: Córdoba, Córdoba, Argentina, 5000</p>
            </ul>
          </div>
          <div className="cv-section">
            <h3>Experiencia Laboral</h3>
            <ul>
              <li>2018-2022: Uso Brackets - Cajero / Community Manager</li>
              <li>2020-2022: Mx Brackets - Community Manager</li>
              <li>2023: CanchasYa (PostgreSQL, CSS, SQL, HTML, Node.js, React.js, JavaScript)</li>
              <li>2023: Drivers (PostgreSQL, HTML, React.js, JavaScript)</li>
              <li>2023: VideoGames (HTML, React.js, JavaScript)</li>
            </ul>
          </div>

               
        </div>

        {/* Segunda columna */}
        <div className="cv-column">
          

          <div className="cv-section">
            <h3>Herramientas y Tecnologías</h3>
            <ul>
            <p>
              Github, PostgreSQL, Express.js, Redux.js, Sequelize.js, Visual Studio, JavaScript, Photoshop, CSS, HTML, SQL
            </p>
            </ul>
          </div>

          <div className="cv-section">
            <h3>Certificado de Inglés</h3>
            <ul>
            <p>EF SET English Certificate 46/100 (B1 Intermediate)</p> 
            </ul>
            </div>      
        </div>
      </div>
    </div>
  );
};

export default CurriculumVitae;
