import React from 'react';
import './nav.css';
import linkedin from './icons8-linkedin-100.png';
import git from './icons8-github-100.png';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom

function Nav() {
  return (
    <div className="nav-container">
      <a href="https://www.linkedin.com/in/v%C3%ADctor-barreto-486487255/" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="LinkedIn" />
      </a>
      <a href="https://github.com/vapretito" target="_blank" rel="noopener noreferrer">
        <img src={git} alt="GitHub" />
      </a>

      {/* Agrega nuevas pestañas para navegación interna */}
      <Link to="/proyectos">Proyectos</Link> {/* Link a la sección de proyectos */}
      <Link to="/cv">Curriculum Vitae</Link> {/* Link a la sección del CV */}
    </div>
  );
}

export default Nav;
