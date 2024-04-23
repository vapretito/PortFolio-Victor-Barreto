import React, { useState } from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav-container">
      <div className="nav-header">
        <h1 className="nav-title">
          <Link to="/" className="nav-link">Victor Barreto</Link>
        </h1>

        <button className="hamburger-menu" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/sobre-mi" className="nav-link">Sobre mí</Link>
        <Link to="/cv" className="nav-link">CV</Link>
        <Link to="/proyectos" className="nav-link">Proyectos</Link>
        <Link to="/contacto" className="nav-link">Contacto</Link>
      </div>

      {/* Añade los puntos para el efecto de lluvia */}
      <div className="rain-point rain-point-1"></div>
      <div className="rain-point rain-point-2"></div>
      <div className="rain-point rain-point-3"></div>
      <div className="rain-point rain-point-4"></div>
      <div className="rain-point rain-point-5"></div>
      <div className="rain-point rain-point-6"></div>
    </div>
  );
}

export default Nav;
