import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import './App.css';
import './pages/css/adaptative/menuPhoneS.css'

import jrLogo from './pages/img/jr-logo-bnw.png'
import Bgimg1 from './pages/img/Burguers/Burguer1.png'
import Clbhs1 from './pages/img/Others/Clubhouse1.jpeg'
import mzrcdJr from './pages/img/Mazorcada/mazorcadaJr.jpeg'
import parrillada from './pages/img/parrilla/parrillada.jpeg'
import costillas from './pages/img/parrilla/costillasBbq.jpeg'
import lasagna from './pages/img/italia/lasagna.jpeg'
import panzerotti from './pages/img/italia/panzerotti.jpeg'
import nuggets from './pages/img/kids/nuggets.jpeg'

import Menu from './pages/menu'
import AboutUs from './pages/index'
import VisitUs from './pages/us'
import Social from './pages/social'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <ul id='nav-bar'>
        <li><Link to={"/index"}>Menu</Link></li>
        <li><Link to={"/AboutUs"}>Quienes somos</Link></li>
        <li><Link to={"/VisitUs"}>Conocenos</Link></li>
        <li><Link to={"/Social"}>Nuestras redes</Link></li>
      </ul>
      <img id='nav-logo' src={jrLogo} />
      <img class='bg-images' src={Bgimg1} />
      <img class='bg-images' src={Clbhs1} />
      <img class='bg-images' src={mzrcdJr} />
      <img class='bg-images' src={parrillada} />
      <img class='bg-images' src={lasagna} />
      <img class='bg-images' src={panzerotti} />
      <img class='bg-images' src={costillas} />
      <img class='bg-images' src={nuggets} />
        <div id='content'>
          <Routes>
            <Route path="/" element={<Navigate to="/menu" />} />
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
