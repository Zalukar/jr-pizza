import React from 'react';
import './css/social.css';
import InstagramEmbed from './Scripts/instagram-api'; 
import fbLogo from './img/facebookLogo.png'
import igLogo from './img/InstagramLogo.png'
import ScrollToTop from './Scripts/toTop';

const Social = () => {
  const postUrl = "https://www.instagram.com/p/DCPxRUAy4d4/?hl=es"; 

  return (
      <div id="social">
        <ScrollToTop />
        <div id='bg-content'>
        <div><h2>¡Ultimo reel publicado!</h2></div>
        <InstagramEmbed postUrl={postUrl} />
        </div>
        <div>
        <p><strong style={{ fontSize: '1.5em', fontWeight: 'bold' }}>Nuestras redes sociales:</strong></p>
        <img src={fbLogo}></img>
        <img src={igLogo}></img>
        </div>
    </div>
  );
};

export default Social;