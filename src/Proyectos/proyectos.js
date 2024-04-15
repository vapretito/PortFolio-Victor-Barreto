import React, { useState } from 'react';
import './proyectos.css';
import projectsData from '../infoProyectos/dataProyectos';
import GitImage from "../Nav/icons8-github-100.png";
import WebImage from "../Nav/icons8-web-100.png";

function Proyectos() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="proyectos-container">
      <div className="cards-container">
        {projectsData.map((project, index) => (
          <div
            className="card"
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <h2>{project.Name}</h2>
            <img src={project.imagen} alt={project.Name} />
            <p>Fecha Realizado: {project.fechaRealizado}</p>

            {hovered === index && (
              <div className="additional-info">
                <a href={project.LinkGit} target="_blank" rel="noopener noreferrer">
                  <img src={GitImage} alt="Git" />
                </a>
                <a href={project.LinkWeb} target="_blank" rel="noopener noreferrer">
                  <img src={WebImage} alt="Web" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Proyectos;
