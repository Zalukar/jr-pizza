import React from 'react';
import './css/social.css';
import InstagramEmbed from './Scripts/instagram-api';
import ScrollToTop from './Scripts/toTop';

const Social = () => {
  const postUrl = "https://www.instagram.com/p/DCPxRUAy4d4/?hl=es"; 

  return (
      <div id="social">
        <ScrollToTop />
        <div id='ig'>
        <div id='bg-content'>
        <div id='socialTxt'><h2>¡Ultimo reel publicado!</h2></div>
        <InstagramEmbed postUrl={postUrl} />
        </div>
      </div>
    </div>
  );
};

export default Social;