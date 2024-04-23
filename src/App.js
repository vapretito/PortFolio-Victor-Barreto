import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'; // Asegúrate de importar 'useLocation'
import Nav from './Nav/nav';
import Home from './Home/home';
import Content from './Content/content';
import CurriculumVitae from './CV/curriculumVitae';
import Me from './Me/me';
import Contacto from './Contacto/contacto';

function WithNav() {
  const { pathname } = useLocation(); // Ahora debería estar bien definido
  const isHome = pathname === "/";

  return (
    <>
      {!isHome && <Nav />} {/* Muestra la barra de navegación solo si no estamos en la página de inicio */}
      <Routes>
        <Route exact path="/" element={<Home />} /> {/* Página de inicio */}
        <Route path="/sobre-mi" element={<Me />} /> {/* Sección sobre mí */}
        <Route path="/proyectos" element={<Content />} /> {/* Sección de proyectos */}
        <Route path="/cv" element={<CurriculumVitae />} /> {/* Sección de CV */}
        {/* Puedes agregar más rutas según sea necesario */}
        <Route path="/contacto" element={<Contacto />} /> {/* Sección de CV */}

      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <WithNav /> {/* Componente que controla cuándo mostrar la barra de navegación */}
      </div>
    </Router>
  );
}

export default App;
