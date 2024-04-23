import React from 'react';
import './nav.css';
import linkedin from './icono link.png';
import git from './icono git.png';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom

function Nav() {
  return (
    <div className="nav-container">
      <h1 className="nav-title">
        <Link to="/" className="nav-link">Victor Barreto</Link> {/* Enlace al home */}
      </h1>
      <div className="nav-links">
        <Link to="/sobre-mi" className="nav-link">Sobre mí</Link>
        <Link to="/cv" className="nav-link">CV</Link>
        <Link to="/proyectos" className="nav-link">Proyectos</Link>
        <Link to="/contacto" className="nav-link">Contacto</Link>
      </div>
      <div className="nav-icons">
        <a href="https://www.linkedin.com/in/v%C3%ADctor-barreto-486487255/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" className="nav-icon" />
        </a>
        <a href="https://github.com/vapretito" target="_blank" rel="noopener noreferrer">
          <img src={git} alt="GitHub" className="nav-icon" />
        </a>
      </div>
    </div>
  );
}

export default Nav;
