import './css/menu.css'
import './css/adaptative/menuPhoneS.css'
import './css/adaptative/menuLowFullscreenRes.css'

import Slider from'./Scripts/slider.jsx'

import React from "react";
import {useEffect} from 'react';
import { Link, Element } from 'react-scroll';

import entryMenu from "./img/MenuPhotos/entrys.png"

import patacon from "./img/entrys/patacon.jpeg"
import medallonesChorizo from "./img/entrys/medallonesChorizo.jpeg"
import anillosCebolla from "./img/entrys/anillosCebolla.jpeg"

import pizzaMenu from "./img/MenuPhotos/pizza/pizza.png"
import pizza1 from "./img/pizza/pizza1.jpeg"
import pizza2 from "./img/pizza/pizza2.jpeg"

import lasagnaMenu from "./img/MenuPhotos/lasagna.png"
import lasagna from './img/italia/lasagna.jpeg'

import panzerottiMenu from "./img/MenuPhotos/panzerottis.png"
import panzerotti from './img/italia/panzerottiA.jpeg'

import burguerMenu from "./img/MenuPhotos/jburguersA.png"
import Bgimg from './img/Burguers/Burguer1.png'

import Burguer1 from './img/Burguers/Burguer1.png'
import hamburguesa1 from './img/Burguers/hamburguesa1.jpeg'
import hamburguesa2 from './img/Burguers/hamburguesa2.jpeg'
import hamburguesa3 from './img/Burguers/hamburguesa3.jpeg'
import hamburguesa4 from './img/Burguers/hamburguesa4.jpeg'
import hamburguesa5 from './img/Burguers/hamburguesa5.jpeg'
import hamburguesa6 from './img/Burguers/hamburguesa6.jpeg'
import hamburguesa7 from './img/Burguers/hamburguesa7.jpeg'
import hamburguesa8 from './img/Burguers/hamburguesa8.jpeg'
import hamburguesa9 from './img/Burguers/hamburguesa9.jpeg'

import othersMenu from "./img/MenuPhotos/others.png"

import parrillada from './img/parrilla/parrillada.jpeg'
import churrasco from './img/parrilla/churrasco.jpeg'
import costillasBbq from './img/parrilla/costillasBbq.jpeg'
import pechugaGratinada from './img/parrilla/pechugaGratinada.jpeg'
import ClubHouse1 from './img/parrilla/Clubhouse1.jpeg'
import choripan from './img/parrilla/choripan.jpeg'
import perro1 from './img/parrilla/perro1.jpeg'
import patacon1 from './img/parrilla/patacon1.jpeg'
import mazorcada1 from './img/parrilla/mazorcada1.jpeg'
import mazorcada2 from './img/parrilla/mazorcada2.jpeg'
import mazorcada4 from './img/parrilla/mazorcada4.jpeg'
import chorizoConArepa from './img/parrilla/chorizoConArepa.jpeg'
import arepaRellena from './img/parrilla/arepaRellena.jpeg'
import mazorcada3 from './img/parrilla/mazorcada3.jpeg'

import kidsMenu from "./img/MenuPhotos/kids-menu.png"
import salchiKids from "./img/kids/salchikids.jpeg"
import nuggets from "./img/kids/nuggets.jpeg"

import drinksMenu from "./img/MenuPhotos/drinks.png"
import drinks from './img/Others/drinks.jpeg'

const slidersData = {
    entradas: [patacon, medallonesChorizo, anillosCebolla],
    pizza: [pizza1, pizza2],
    burguers: [Burguer1, hamburguesa1, hamburguesa2, hamburguesa3, hamburguesa4, hamburguesa5, hamburguesa6, hamburguesa7, hamburguesa8, hamburguesa9,],
    parrilla: [parrillada, churrasco, costillasBbq, pechugaGratinada, ClubHouse1, choripan, perro1, patacon1, mazorcada1, mazorcada2, mazorcada4, chorizoConArepa, arepaRellena, mazorcada3],
    kids: [ salchiKids, nuggets                                                                                              ],
  };

function Menu() {
    
    useEffect(() => {
        const handleMouseOver = (photo) => {
            // Detectar el ancho del dispositivo
            const screenWidth = window.innerWidth;
    
            // Aplicar estilos condicionales según la resolución
            if (screenWidth >= 1024) { // Pantallas grandes
                photo.style.transform = "scale(1.23)";
                photo.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.5)';
            } else if (screenWidth >= 768) { // Tablet
                photo.style.transform = "scale(1.2)";
                photo.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.4)';
            } else if (screenWidth >= 425)  { // Móviles
                photo.style.transform = "scale(1.1)";
                photo.style.boxShadow = '0 0 5px rgba(255, 255, 255, 0.3)';
            }
    
            photo.style.transition = "all 0.5s ease";
            photo.style.position = "relative";
            photo.style.zIndex = "1";
        };
    
        const handleMouseOut = (photo) => {
            // Restaurar estilo de la foto
            photo.style.transform = "scale(1)";
            photo.style.position = "relative";
            photo.style.zIndex = "1";
            photo.style.boxShadow = '35px 0px 20px 10px rgb(0 0 0 / 35%)';
            photo.style.transition = "all 0.8s ease";
        };
    
        // Seleccionar todas las fotos
        const menuPhotos = document.querySelectorAll(".menuFoodPhoto");
    
        if (menuPhotos.length) {
            menuPhotos.forEach((photo) => {
                photo.addEventListener("mouseover", () => handleMouseOver(photo));
                photo.addEventListener("mouseout", () => handleMouseOut(photo));
            });
        }
    
        // Limpieza
        return () => {
            menuPhotos.forEach((photo) => {
                photo.removeEventListener("mouseover", () => handleMouseOver(photo));
                photo.removeEventListener("mouseout", () => handleMouseOut(photo));
            });
        };
    }, []);    
    

    return (
        <div id="menu">
        <ul id='sub-nav-barL' className='sub-nav-bar'>
            <li><Link to="entradas" smooth={true} duration={500} offset={-350} >Entradas</Link></li>
            <li><Link to="pizza" smooth={true} duration={500} offset={-250} >Pizza</Link></li>
            <li><Link to="pastas" smooth={true} duration={500} offset={-250} >Pastas</Link></li>
            <li><Link to="burguers" smooth={true} duration={500} offset={-250}>Jburguers</Link></li>
            <li><Link to="others" smooth={true} duration={500} offset={-250}>Parrilla & Otros</Link></li>
            <li><Link to="drinks" smooth={true} duration={500} offset={-250}>Bebidas</Link></li>
        </ul>
        <div id='MenuImages'>
                <div id='entrys' className='menuImg'>
                    <Element name='entradas'>
                        <div>
                            <img src={entryMenu} alt="Menu de entradas" id='entryMenuPhoto' className="menuFoodPhoto" />
                        </div>
                    </Element>
                    <Slider className="slider-entradas" images={slidersData["entradas"]} />
                </div>

                <div id="pizza" className='menuImg'>
                    <Element name='pizza'>
                        <div>
                            <img src={pizzaMenu} alt="Menu de pizzas" id='pizzaMenuPhoto' className="menuFoodPhoto" />
                        </div>
                    </Element>
                    <Slider className="slider-pizza" images={slidersData["pizza"]} />
                </div>

                <div id='lasagna' className='menuImg'>
                    <Element name='pastas'>
                        <div>
                            <img src={lasagnaMenu} alt="Menu de Lasagña" className="menuFoodPhotoStatic" id='lasagnaMenuPhoto' />
                        </div>
                    </Element>
                    <img src={lasagna} id='lasagnaFoodPhoto' alt='foto de lasaña'className='foodPhoto' />
                </div>

                <div id='panzerotti' className='menuImg'>
                    <Element>
                        <img src={panzerottiMenu} alt="Precios Panzerottis" id='panzerottiMenuPhoto' className="menuFoodPhotoStatic" />
                    </Element>
                    <img src={panzerotti} id='panzerottiFoodPhoto' alt='foto de panzerotti' className='foodPhoto' />
                </div>

                <div id='burguers' className='menuImg'>
                    <Element name='burguers'>
                        <img src={burguerMenu} alt="menu de hamburguesas" id='burguersMenuPhoto' className="menuFoodPhoto" />
                    </Element>
                    <Slider className="slider-burguers" alt='foto de menu de hamburguesas' images={slidersData["burguers"]} />
                </div>

                <div id='others' className='menuImg'>
                    <Element name='others'>
                        <img src={othersMenu} alt="" id='Foto menu Otros' className="menuFoodPhoto" />
                    </Element>
                    <Slider className="slider-parrilla" images={slidersData["parrilla"]} />
                </div>

                <div id='kidsMenu' className='menuImg'>
                    <Element>
                        <img src={kidsMenu} alt="Foto menu Infantil" id='kidsMenuPhoto' className="menuFoodPhotoStatic" />
                    </Element>
                    <Slider className="slider-kids" images={slidersData["kids"]} />
                </div>

                <div id='drinks' className='menuImg'>
                    <Element name='drinks'>
                        <img src={drinksMenu} alt="Foto menu de bebidas" id='drinksMenuPhoto' className="menuFoodPhotoStatic" />
                    </Element>
                    <img src={drinks} id='drinksFoodPhoto' className='foodPhoto' />
                </div>
            </div>
        </div>
      );
}

export default Menu;