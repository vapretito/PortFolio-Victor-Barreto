import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import linkedin from '../Nav/icono link.png';
import git from '../Nav/icono git.png';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Victor Barreto</h1>
      <h2>Desarrollador Full Stack</h2>

      {/* Botones como texto subrayado */}
      <div className="home-links">
        <Link to="/" className="home-link">Inicio</Link>
        <Link to="/sobre-mi" className="home-link">Sobre mí</Link>
        <Link to="/cv" className="home-link">CV</Link>
        <Link to="/proyectos" className="home-link">Proyectos</Link>
        <Link to="/contacto" className="home-link">Contacto</Link>
      </div>

      {/* Div para iconos de redes sociales */}
      <div className="home-socials">
        <a href="https://www.linkedin.com/in/v%C3%ADctor-barreto-486487255/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" className="social-icon" />
        </a>
        <a href="https://github.com/vapretito" target="_blank" rel="noopener noreferrer">
          <img src={git} alt="GitHub" className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default Home;

