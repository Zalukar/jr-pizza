import { BrowserRouter, Link, Routes, Route, Navigate } from 'react-router-dom';
import React, { useState } from 'react';

import './App.css';
import './pages/css/adaptative/menuPhoneS.css';
import './pages/css/adaptative/menuLowFullscreenRes.css';

import jrLogo from './pages/img/jr-logo-bnw.png';
import Bgimg1 from './pages/img/Burguers/Burguer1.png';
import Clbhs1 from './pages/img/Others/Clubhouse1.jpeg';
import mzrcdJr from './pages/img/Mazorcada/mazorcadaJr.jpeg';
import parrillada from './pages/img/parrilla/parrillada.jpeg';
import costillas from './pages/img/parrilla/costillasBbq.jpeg';
import lasagna from './pages/img/italia/lasagna.jpeg';
import panzerotti from './pages/img/italia/panzerotti.jpeg';
import nuggets from './pages/img/kids/nuggets.jpeg';

import Menu from './pages/menu';
import AboutUs from './pages/index';
import VisitUs from './pages/us';
import Social from './pages/social';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Controla el estado del menú

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);  // Alternar el estado del menú
  };

  return (
    <BrowserRouter>
      <div className="App">
        <div id="menus">
          <ul id="nav-bar">
            <li className={isMenuOpen ? '' : 'hidden'}><Link to={"/index"}>Menu</Link></li>
            <li className={isMenuOpen ? '' : 'hidden'}><Link to={"/AboutUs"}>Quienes somos</Link></li>
            <li className={isMenuOpen ? '' : 'hidden'}><Link to={"/VisitUs"}>Conocenos</Link></li>
            <li className={isMenuOpen ? '' : 'hidden'}><Link to={"/Social"}>Nuestras redes</Link></li>
          </ul>
          <div id="menu-icon" onClick={toggleMenu}>☰</div>
        </div>
        <div id="bg">
          <img 
            id="nav-logo" 
            src={jrLogo} 
            className={isMenuOpen ? 'hidden' : ''}  // Aplica la clase hidden al logo solo cuando el menú está abierto
            alt="Logo" 
          />
          <img className="bg-images" src={Bgimg1} alt="Burguer 1" />
          <img className="bg-images" src={Clbhs1} alt="Clubhouse 1" />
          <img className="bg-images" src={mzrcdJr} alt="Mazorcada" />
          <img className="bg-images" src={parrillada} alt="Parrillada" />
          <img className="bg-images" src={lasagna} alt="Lasagna" />
          <img className="bg-images" src={panzerotti} alt="Panzerotti" />
          <img className="bg-images" src={costillas} alt="Costillas" />
          <img className="bg-images" src={nuggets} alt="Nuggets" />
        </div>
        <div id="content">
          <Routes>
            {/* Ruta raíz que redirige automáticamente a /Index */}
            <Route path="/" element={<Navigate to="/Index" />} />
            {/* Rutas con sus componentes correspondientes */}
            <Route path="/Index" element={<Menu />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/VisitUs" element={<VisitUs />} />
            <Route path="/Social" element={<Social />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
