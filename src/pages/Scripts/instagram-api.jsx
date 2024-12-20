import React, { useEffect } from 'react';

const InstagramEmbed = ({ postUrl, DarkMode = true }) => {
  useEffect(() => {
    // Cargar el script de Instagram para renderizar el embed
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    script.onload = () => {
      // Inicializar el contenido embebido una vez que el script esté cargado
      window.instgrm.Embeds.process();
    };
    document.body.appendChild(script);

    // Limpiar el script cuando el componente se desmonte
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <blockquote className="instagram-media" 
      data-instgrm-permalink={postUrl} 
      data-instgrm-version="13">
      <div style={{ padding: '16px' }}>
        <a href={postUrl} target="_blank" 
           style={{ color: '#FFF', fontFamily: 'Arial, sans-serif', fontSize: '14px', fontWeight: '400', lineHeight: '17px' }}>
          Ver publicación
        </a>
      </div>
    </blockquote>
  );
};

export default InstagramEmbed;