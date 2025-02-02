import React from 'react';
import './css/social.css';
import InstagramEmbed from './Scripts/instagram-api';
import ScrollToTop from './Scripts/toTop';

const Social = () => {
  const postUrl = "https://www.instagram.com/reel/DE3HYgmy-pz/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="; 

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