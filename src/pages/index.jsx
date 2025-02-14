import React from "react";
import { useEffect } from "react";

import './css/index.css'
import jrLogoCol from './img/jr-logo-color.png'
import jrTeamPhoto from './img/JrTeam.png'


function useScrollRestriction() {
useEffect(() => {
const scrollLimit = window.innerHeight * 0.93; // scroll limit

  const handleScroll = () => {
 if (window.scrollY > scrollLimit) {
     window.scrollTo({
top: scrollLimit,
  behavior: "auto",
  });
  }
  };

   window.addEventListener("scroll", handleScroll);

  return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
}

function Index() { 
  useScrollRestriction();
    return (
        <div id="index">
          <ul id='sub-nav-barL'>
            <li>Por que JR?</li>
            <li>Familia JR</li>
          </ul>
          <div id="jrText">
              <h1 class="PorQueJRheader">Por que JR?</h1>
              <p class="PorQueJR">
                JR hace alucion al nombre de Jose Rojas<br/>
                fundador de la sede principal pizza JR.<br/>
                José Rojas viene de un pueblo <br/>
                llamado "Arbelaez cundinamarca".<br/>
                En un mundo donde trabajó<br/>
                en diferentes áreas.<br/>
                El inicio de "pizza Jr" fue gracias a un puesto en la calle<br/>
                donde cada vez fue avanzando y creciendo con el tiempo.<br/><br/>
                Fundador de la sede almendros, esta fue la segunda sede <br/>
                que nació gracias al proyecto de Jose Rojas<br/>
                Su familia fue principal motivación para salir adelante <br/>
                con el otro punto de pizza JR<br/>
                El impacto de la pandemia influyó bastante<br/>
                aún así fue una lucha constante<br/>
                El proceso de levantar la pizzeria en pandemia <br/>
                “fue complejo pero no dejaremos atras el aprendizaje”.<br/>
              </p>
            </div>
            <img id="IndexColorLogo" class="PorQueJR" alt="Foto a color del logo" src={jrLogoCol} />
              <div class="JrTeamdiv">
            
              <img class="JrTeam" src={jrTeamPhoto} alt="foto del equipo Jr"/>
            
              <h1 class="JrTeamheader">Familia JR</h1>
              <br/>
              <p class="JrTeamText">
                "Fue un año y medio de sacrificio y esfuerzo 
                el cual solo se que sigue siendo un aprendizaje constante"<br/><br/>

                Deseamos seguir construyendo este proyecto <br/>
                brindando un servicio de calidad a nuestros clientes<br/><br/>

                Juan trabajó varios años en pizza Jr y esto le dio la<br/>
                oportunidad de aprender el movimiento de la pizzeria<br/>
              </p>
              
          </div>
        </div>
      );
}

export default Index;