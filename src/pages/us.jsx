import './css/us.css'
import React from "react";
import ScrollToTop from './Scripts/toTop';

function Us() {
    return (
        <div id="Us">
          <ScrollToTop />
          <div id='bg-map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1115.7485863867937!2d-74.10079793491434!3d4.756829973603438!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f8467f940ae29%3A0x2d3c381cab6a1e70!2sPizza%20J.R.%20Almendros!5e0!3m2!1ses!2sco!4v1731967315950!5m2!1ses!2sco" 
            width="76vw" margin="5%" height="440vh" allowfullscreen="" title='Maps' loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
            <div id='mapTxt'><p><strong>Visita nuestra sede en:<br/> Suba - Almendros<br/><br/></strong> Te invitamos a probar
            nuestra experiencia JR en persona!</p></div>
          </div>
          <div>
          </div>
        </div>
      );
}

export default Us;