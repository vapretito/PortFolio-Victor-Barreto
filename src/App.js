import React from 'react';
import './App.css';
import Nav from "../src/Nav/nav";
import Home from './Home/home';
import Content from './Content/content';
import CurriculumVitae from './CV/curriculumVitae';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Asegúrate de importar Routes y Route

function App() {
  return (
    <Router> {/* Encierra el contenido dentro de Router para habilitar el enrutamiento */}
      <div className="App">
        <Nav /> {/* Barra de navegación */}
        
        <Routes> {/* Usamos Routes en lugar de Switch */}
          <Route exact path="/" element={<Home />} /> {/* Página de inicio */}
          <Route path="/proyectos" element={<Content />} /> {/* Sección de proyectos */}
          <Route path="/cv" element={<CurriculumVitae />} /> {/* Sección de CV */}
          
          {/* Puedes agregar más rutas según sea necesario */}
          {/* Para manejar rutas no encontradas (404), puedes agregar una ruta sin path con el componente adecuado */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;