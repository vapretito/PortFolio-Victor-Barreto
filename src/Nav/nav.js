// En tu componente Nav.js
import React from 'react';
import './nav.css';
import linkedin from './icons8-linkedin-100.png';
import Git from './icons8-github-100.png';
// import Idk from './icons8-signo-de-interrogación-100.png';

function Nav() {
  return (
    <div className="nav-container">
      <a href="https://www.linkedin.com/in/v%C3%ADctor-barreto-486487255/" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="linkedin" />
      </a>
      <a href="https://github.com/vapretito" target="_blank" rel="noopener noreferrer">
        <img src={Git} alt="Git" />
      </a>
      {/* <img src={Idk} alt="Idk" /> */}
    </div>
  );
}

export default Nav;

