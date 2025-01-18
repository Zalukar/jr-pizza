import { BrowserRouter, Link, Routes, Route, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import './App.css';
import './pages/css/adaptative/menuPhoneS.css';
import './pages/css/adaptative/menuLowFullscreenRes.css';

import whaLogo from './pages/img/whatsapplogo.png';
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
  useEffect(() => {
    // Verificar si los elementos existen antes de agregarles el evento
    const menuIcon = document.getElementById('menu-icon');
    const navItems = document.querySelectorAll('#nav-bar li');
    const navbar = document.getElementById('nav-bar');
    const logo = document.getElementById('nav-logo');

    // Asegurarse de que los elementos existan antes de intentar manipularlos
    if (menuIcon && navItems.length > 0 && navbar && logo) {
      menuIcon.addEventListener('click', () => {
        // Alternar visibilidad del menú
        navItems.forEach(item => {
          item.classList.toggle('hidden'); // Alternar la clase 'hidden' en los items
        });
    
        logo.classList.toggle('hidden'); // Alternar la clase 'hidden' en el logo
    
        // Cambiar el estilo de la nav-bar según la visibilidad
        // Verificar si todos los items están ocultos (esto se puede hacer verificando el primer item)
        const allHidden = Array.from(navItems).every(item => item.classList.contains('hidden'));
        
        if (allHidden) {
          navbar.style.top = '3%'; // Restablecer la posición si todos los items están ocultos
        } else {
          navbar.classList.add('open');
          navbar.style.top = '16%'; // Mover la navbar si algún item está visible
        }
      });
    }
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Controla el estado del menú

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);  // Alternar el estado del menú
  };

  return (
    <BrowserRouter>
      <div id='hovercontainer'>
        <a href='https://wa.me/573133440478'>
          <div id='whatsapp'>
          <p>Pide a nuestro whatsapp!!</p>
          <img src={whaLogo}></img>
        </div>
        </a>
      </div>
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
          <img className="bg-images" id='lastBgImg' src={nuggets} alt="Nuggets" />
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
