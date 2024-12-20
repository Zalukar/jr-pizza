import './css/menu.css'

import React from "react";
import {useEffect} from 'react';
import { Link, Element } from 'react-scroll';

import entryMenu from "./img/MenuPhotos/entrys.png"
import patacon from "./img/entrys/patacon.jpeg"

import pizzaMenu from "./img/MenuPhotos/pizza/pizza.png"
import pizzaA from "./img/italia/pizzaA.jpeg"

import lasagnaMenu from "./img/MenuPhotos/lasagna.png"
import lasagna from './img/italia/lasagna.jpeg'

import panzerottiMenu from "./img/MenuPhotos/panzerottis.png"
import panzerotti from './img/italia/panzerottiA.jpeg'

import burguerMenu from "./img/MenuPhotos/jburguersA.png"
import Bgimg from './img/Burguers/Burguer1.png'

import othersMenu from "./img/MenuPhotos/others.png"
import parrillada from './img/parrilla/parrillada.jpeg'

import kidsMenu from "./img/MenuPhotos/kids-menu.png"
import salchiKids from "./img/kids/salchikids.jpeg"

import drinksMenu from "./img/MenuPhotos/drinks.png"
import drinks from './img/Others/drinks.jpeg'



function Menu() {
    
    useEffect(() => {
        const handleMouseOver = (photo) => {
            // Aplicar estilo de la foto
            photo.style.transform = "scale(1.4)";
            photo.style.transition = "all 0.5s ease";
            photo.style.marginLeft = "6vw";
            photo.style.position = "sticky";
            photo.style.zIndex = "0";
            photo.style.transition = "transform 0.5s ease";
            photo.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.5)'; // Sombra de 15px con un color blanco semi-transparente
    
            // Cambiar estilo del logo cuando el mouse está encima de la foto
            const LogoJr = document.querySelector("#nav-logo");
            if (LogoJr) {
                LogoJr.style.opacity = '0';
                LogoJr.style.transition = "all 0.5s ease";

            }
            // Cambiar estilo del logo cuando el mouse está encima de la foto
            const foodPhoto = document.querySelector(".foodPhoto");
            if (foodPhoto) {
                photo.style.transition = "all 0.5s ease";

            }
        };
    
        const handleMouseOut = (photo) => {
            // Restaurar estilo de la foto
            photo.style.transform = "scale(1)";
            photo.style.marginLeft = "0vw";
            photo.style.position = "relative";
            photo.style.zIndex = "0";
            photo.style.top = '0vh'; // Restaurar la posición original
            photo.style.transition = "transform 0.8s ease";
            photo.style.boxShadow = '35px 0px 20px 10px rgb(0 0 0 / 35%)'; // Sombra de color negro semi-transparente
    
            // Restaurar estilo del logo cuando el mouse sale de la foto
            const LogoJr = document.querySelector("#nav-logo");
            if (LogoJr) {
                LogoJr.style.opacity = '1';
                LogoJr.style.transition = "all 0.5s ease";
            }

            const foodPhoto = document.querySelector(".foodPhoto");
            if (foodPhoto) {
                photo.style.transition = "all 0.5s ease";

            }
        };
    
        // Seleccionar todas las fotos
        const menuPhotos = document.querySelectorAll(".menuFoodPhoto");
    
        // Verificar que los elementos existan antes de agregar los event listeners
        if (menuPhotos.length) {
            menuPhotos.forEach((photo) => {
                // Agregar los eventos para cada foto
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
        <ul id='sub-nav-barL'>
            <li><Link to="entradas" smooth={true} duration={500} offset={-350} >Entradas</Link></li>
            <li><Link to="pizza" smooth={true} duration={500} offset={-250} >Pizza</Link></li>
            <li><Link to="pastas" smooth={true} duration={500} offset={-250} >Pastas</Link></li>
        </ul>
        <ul id='sub-nav-barR'>
            <li><Link to="burguers" smooth={true} duration={500} offset={-250}>Jburguers</Link></li>
            <li><Link to="others" smooth={true} duration={500} offset={-250}>Parrilla & Otros</Link></li>
            <li><Link to="drinks" smooth={true} duration={500} offset={-250}>Bebidas</Link></li>
        </ul>
        <div id='MenuImages'>

            <div id='entrys' class='menuImg'>
            <Element name='entradas'>
                <div>
                    <img src={entryMenu} alt="" id='entryMenuPhoto' class="menuFoodPhoto"/>
                </div>
            </Element>
                <img src={patacon} id='entryFoodPhoto' className='foodPhoto'></img>
            </div>


            <div id="pizza" class='menuImg'>
            <Element name='pizza'>
            <div>
                <img src={pizzaMenu} alt="" id='pizzaMenuPhoto' class="menuFoodPhoto"  />
            </div>
            </Element>
                <img src={pizzaA} alt="" id='pizzaFoodPhoto' className='foodPhoto'/>
            </div>

            <div id='lasagna' class='menuImg'>
            <Element name='pastas'>
                <div>
                <img src={lasagnaMenu} alt="" class="menuFoodPhoto" id='lasagnaMenuPhoto'/>
                </div>
            </Element>
                <img src={lasagna} id='lasagnaFoodPhoto' className='foodPhoto'></img>
            </div>


            <div id='panzerotti' class='menuImg'>
                <Element>
                <img src={panzerottiMenu} alt="" id='panzerottiMenuPhoto' class="menuFoodPhoto"/>
                </Element>
                <img src={panzerotti} id='panzerottiFoodPhoto' className='foodPhoto'></img>
            </div>

            <div id='burguers' class='menuImg'>
                <Element name='burguers'>
                <img src={burguerMenu} alt="" id='burguersMenuPhoto' class="menuFoodPhoto"/>
                </Element>
                <img src={Bgimg} id='burguerFoodPhoto' className='foodPhoto'></img>
            </div>
            

            <div id='others' class='menuImg'>
                <Element name='others'>
                <img src={othersMenu} alt="" id='othersMenuPhoto' class="menuFoodPhoto"/>
                </Element>
                <img src={parrillada} id='othersFoodPhoto' className='foodPhoto'></img>
            </div>


            <div id='kidsMenu' class='menuImg'>
                <Element>
                <img src={kidsMenu} alt="" id='kidsMenuPhoto' class="menuFoodPhotoStatic"/>   
                </Element>
                <img src={salchiKids} id='kidsFoodPhoto' className='foodPhoto'></img>
            </div>
            


            <div id='kidsMenu' class='menuImg'>
                <Element>
                <img src={kidsMenu} alt="" id='kidsMenuPhoto' class="menuFoodPhotoStatic"/>   {/* TENGO QUE ARREGLAR ESTO, ESTE BUG NO DEJA QUE SE BLUREEN TODAS LAS FOTOS DEL MENU */}
                </Element>
                <img src={salchiKids} id='kidsFoodPhoto' className='foodPhoto'></img>
            </div>




            <div id='drinks' class='menuImg'>
            <Element name='drinks'>
                <img src={drinksMenu} alt="" id='drinksMenuPhoto' class="menuFoodPhotoStatic"/>
                <p class='zoomPromp'></p> 
            </Element>
                <img src={drinks} id='drinksFoodPhoto' className='foodPhoto'></img>
            </div>

            
            
        </div>
        </div>
      );
}

export default Menu;