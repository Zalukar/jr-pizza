import React, { useEffect } from "react";

const ScrollToTop = () => {
    useEffect(() => {
        // Mover al inicio
        window.scrollTo({
          top: 0,
          behavior: "auto", // Sin animación
        });
    
        // Bloquear el scroll
        const originalOverflow = document.body.style.overflow; // Guardar el estado original
        document.body.style.overflow = "hidden";
    
        // Restaurar el scroll al desmontar
        return () => {
          document.body.style.overflow = originalOverflow;
        };
      }, []); // Solo una vez al montar
    
      return null; // No renderiza nada
    };
    
export default ScrollToTop;
