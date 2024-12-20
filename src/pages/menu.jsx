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

import jrLogoCol from './img/jr-logo-color.png'


function Menu() {
    
    useEffect(() => {
        const handleMouseOver = (photo, prompt) => {
            // Aplicar estilo de la foto
            photo.style.filter = "blur(1.8px) grayscale(50%)";
            photo.style.transform = "scale(1.04)";
            photo.style.transition = "transform 0.3s ease";
            
            // Mostrar solo el prompt correspondiente
            prompt.style.opacity = "1";
            
            // Ocultar otros prompts
            zoomPrompts.forEach((otherPrompt) => {
                if (otherPrompt !== prompt) {
                    otherPrompt.style.opacity = "1";  // Ocultar otros prompts
                }
            });
        };
    
        const handleMouseOut = (photo, prompt) => {
            // Restaurar estilo de la foto
            photo.style.filter = "blur(0) grayscale(0)";
            photo.style.transform = "scale(1)";
            photo.style.transition = "transform 0.3s ease";
            
            // Ocultar el prompt correspondiente
            prompt.style.opacity = "0";
            zoomPrompts.forEach((otherPrompt) => {
                if (otherPrompt !== prompt) {
                    otherPrompt.style.opacity = "0";  // Ocultar otros prompts
                }
            });
        };
    
        // Seleccionar todas las fotos y prompts
        const menuPhotos = document.querySelectorAll(".menuFoodPhoto");
        const zoomPrompts = document.querySelectorAll(".zoomPromp");
    
        // Verificar que los elementos existan antes de agregar los event listeners
        if (menuPhotos.length && zoomPrompts.length) {
            menuPhotos.forEach((photo, index) => {
                const prompt = zoomPrompts[index];  // Obtener el prompt correspondiente
    
                // Agregar los eventos para cada foto y su correspondiente mensaje
                photo.addEventListener("mouseover", () => handleMouseOver(photo, prompt));
                photo.addEventListener("mouseout", () => handleMouseOut(photo, prompt));
            });
        }
    
        // Limpieza
        return () => {
            menuPhotos.forEach((photo, index) => {
                const prompt = zoomPrompts[index];  // Obtener el prompt correspondiente
                photo.removeEventListener("mouseover", () => handleMouseOver(photo, prompt));
                photo.removeEventListener("mouseout", () => handleMouseOut(photo, prompt));
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
                <div class="menuFoodPhoto">
                    <img src={entryMenu} alt="" id='entryMenuPhoto' class="menuFoodPhoto"/>
                       <p className='zoomPromp'>¡¡¡click para zoom!!!</p>
                </div>
            </Element>
                <img src={patacon} id='entryFoodPhoto'></img>
            </div>


            <div id="pizza" class='menuImg'>
            <Element name='pizza'>
            <div class="menuFoodPhoto">
                <img src={pizzaMenu} alt="" id='pizzaMenuPhoto' class="menuFoodPhoto"  />
                <p className='zoomPromp'>¡¡¡click para zoom!!!</p>
            </div>
            </Element>
                <img src={pizzaA} alt="" id='pizzaFoodPhoto' />
            </div>

            <div id='lasagna' class='menuImg'>
            <Element name='pastas'>
                <div class="menuFoodPhoto">
                <img src={lasagnaMenu} alt="" class="menuFoodPhoto" id='lasagnaMenuPhoto'/>
                <p class='zoomPromp'>¡¡¡click para zoom!!!</p>
                </div>
            </Element>
                <img src={lasagna} id='lasagnaFoodPhoto'></img>
            </div>


            <div id='panzerotti' class='menuImg'>
                <Element>
                <img src={panzerottiMenu} alt="" id='panzerottiMenuPhoto' class="menuFoodPhoto"/>
                <p class='zoomPromp'>¡¡¡click para zoom!!!</p>
                </Element>
                <img src={panzerotti} id='panzerottiFoodPhoto'></img>
            </div>

            <div id='burguers' class='menuImg'>
                <Element name='burguers'>
                <img src={burguerMenu} alt="" id='burguersMenuPhoto' class="menuFoodPhoto"/>
                <p class='zoomPromp'>¡¡¡click para zoom!!!</p>
                </Element>
                <img src={Bgimg} id='burguerFoodPhoto'></img>
            </div>
            

            <div id='others' class='menuImg'>
                <Element name='others'>
                <img src={othersMenu} alt="" id='othersMenuPhoto' class="menuFoodPhoto"/>
                <p class='zoomPromp'>¡¡¡click para zoom!!!</p>
                </Element>
                <img src={parrillada} id='othersFoodPhoto'></img>
            </div>


            <div id='kidsMenu' class='menuImg'>
                <Element>
                <img src={kidsMenu} alt="" id='kidsMenuPhoto' class="menuFoodPhotoStatic"/>   
                <p class='zoomPromp'></p>
                </Element>
                <img src={salchiKids} id='kidsFoodPhoto'></img>
            </div>
            


            <div id='kidsMenu' class='menuImg'>
                <Element>
                <img src={kidsMenu} alt="" id='kidsMenuPhoto' class="menuFoodPhotoStatic"/>   {/* TENGO QUE ARREGLAR ESTO, ESTE BUG NO DEJA QUE SE BLUREEN TODAS LAS FOTOS DEL MENU */}
                <p class='zoomPromp'></p>
                </Element>
                <img src={salchiKids} id='kidsFoodPhoto'></img>
            </div>




            <div id='drinks' class='menuImg'>
            <Element name='drinks'>
                <img src={drinksMenu} alt="" id='drinksMenuPhoto' class="menuFoodPhotoStatic"/>
                <p class='zoomPromp'></p> 
            </Element>
                <img src={drinks} id='drinksFoodPhoto'></img>
            </div>

            
            
        </div>
        </div>
      );
}

export default Menu;