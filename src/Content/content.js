import React from 'react';
import './content.css';
import Proyectos from '../Proyectos/proyectos';

function Content() {
  return (
    <div className="cards-container">
      <h1> Proyectos </h1>
      <Proyectos />
    
      {/* Agrega más componentes Proyectos según sea necesario */}
    </div>
  );
}

export default Content;
 