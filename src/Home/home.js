
import React from 'react';
import './home.css';
import yo from '../Home/victor-animado-3d-port.png';

function Home() {
  return (
    <div className="home-container">
      <img src={yo} alt="logo" />
      <div className="home-content">
        {/* Contenido a la derecha de la imagen */}
        {/* Puedes añadir aquí tus elementos HTML/React */}
        <h1>Victor Barreto</h1>
        <p>Soy un Desarollador Full-Stack con experiencia en servicio al cliente y ventas. Mi pasión por la tecnología me llevó a adquirir habilidades en HTML, CSS, React, JavaScript, NodeJS, Express y Sequelize. Busco combinar mis habilidades en servicio al cliente con la programación para contribuir al éxito de una empresa tecnológica. Interesado en aprender nuevas tecnologías y comprometido con mi crecimiento en este campo. </p>
      </div>
    </div>
  );
}

export default Home;
