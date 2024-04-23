import React from 'react';
import './contacto.css';
import linkedin from '../Nav/icono link.png';
import git from '../Nav/icono git.png';
import correo from '../Nav/icono correo.png'; // Icono para el correo electrónico

function Contacto() {
  return (
    <div className="contacto-outer"> {/* Para centrar en la pantalla */}
      <div className="contacto-container">
        <h1>Contacto</h1>

        {/* Botones para redes sociales */}
        <div className="contacto-redes">
          <a href="https://www.linkedin.com/in/v%C3%ADctor-barreto-486487255/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className="contacto-icono" />
          </a>
          <a href="https://github.com/vapretito" target="_blank" rel="noopener noreferrer">
            <img src={git} alt="GitHub" className="contacto-icono" />
          </a>
        </div>

        {/* Información de correo electrónico */}
        <div className="contacto-email">
          <img src={correo} alt="Correo" className="correo-icono" />
          <p className="correo-texto">titomanbarreto@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
