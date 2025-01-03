import './css/menu.css'
import './css/adaptative/menuPhoneS.css'

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
            // Detectar el ancho del dispositivo
            const screenWidth = window.innerWidth;
    
            // Aplicar estilos condicionales según la resolución
            if (screenWidth >= 1024) { // Pantallas grandes
                photo.style.transform = "scale(1.23)";
                photo.style.marginLeft = "2vw";
                photo.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.5)';
            } else if (screenWidth >= 768) { // Tablet
                photo.style.transform = "scale(1.2)";
                photo.style.marginLeft = "3vw";
                photo.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.4)';
            } else if (screenWidth >= 425)  { // Móviles
                photo.style.transform = "scale(1.1)";
                photo.style.marginLeft = "1vw";
                photo.style.boxShadow = '0 0 5px rgba(255, 255, 255, 0.3)';
            }
    
            photo.style.transition = "all 0.5s ease";
            photo.style.position = "sticky";
            photo.style.zIndex = "1";
    
            // Cambiar estilo del logo
            const LogoJr = document.querySelector("#nav-logo");
            if (LogoJr) {
                LogoJr.style.opacity = '0';
                LogoJr.style.transition = "all 0.5s ease";
            }
        };
    
        const handleMouseOut = (photo) => {
            // Restaurar estilo de la foto
            photo.style.transform = "scale(1)";
            photo.style.marginLeft = "0vw";
            photo.style.position = "relative";
            photo.style.zIndex = "0";
            photo.style.boxShadow = '35px 0px 20px 10px rgb(0 0 0 / 35%)';
            photo.style.transition = "all 0.8s ease";
    
            // Restaurar estilo del logo
            const LogoJr = document.querySelector("#nav-logo");
            if (LogoJr) {
                LogoJr.style.opacity = '1';
                LogoJr.style.transition = "all 0.5s ease";
            }
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
}

export default Menu;