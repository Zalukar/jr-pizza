import React, { useState, useEffect, useCallback } from "react";
import "./Slider.css";

const Slider = ({ images, className, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false); // Estado para controlar la animación
  const [intervalId, setIntervalId] = useState(null); // Guardamos el ID del intervalo para limpiarlo

  // Función para cambiar a la siguiente imagen
  const nextSlide = useCallback(() => {
    setAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]); // Dependencia de images.length

  // Función para cambiar a la imagen anterior
  const prevSlide = () => {
    setAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Restablece el intervalo cada vez que el currentIndex cambia
  useEffect(() => {
    if (intervalId) {
      clearInterval(intervalId);
    }
  
    const newIntervalId = setInterval(nextSlide, interval);
    setIntervalId(newIntervalId);
  
    return () => clearInterval(newIntervalId); // Limpiar el intervalo cuando el componente se desmonte
  }, [currentIndex, interval, nextSlide]); // Se eliminó intervalId de las dependencias
  
  // Se ejecuta después de que se haya cambiado el índice
  useEffect(() => {
    if (animating) {
      const timeout = setTimeout(() => {
        setAnimating(false);
      }, 1000); // Duración de la animación
      return () => clearTimeout(timeout);
    }
  }, [animating]);

  return (
    <div className={`slider-container ${className}`}>
      <button className="slider-button" id="slider-button-prev" onClick={prevSlide}>
        ◀
      </button>
      <div
        className={`slider-content ${animating ? "animating" : ""}`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="slider-image"
          />
        ))}
      </div>
      <button className="slider-button" id="slider-button-next" onClick={nextSlide}>
        ▶
      </button>
    </div>
  );
};

export default Slider;
