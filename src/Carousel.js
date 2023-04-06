import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleWheel = (event) => {
    event.preventDefault();
    
    // Set a speed threshold and a maximum speed to limit the sensitivity of image changes
    const speedThreshold = 100;
    const maxSpeed = 2000;
  
    // Calculate the scroll speed
    const delta = Math.abs(event.deltaY);
    const speed = Math.min(delta, maxSpeed);
  
    // Calculate the number of images to move based on the scroll speed
    const imagesToMove = Math.floor(speed / speedThreshold);
  
    // Calculate the new image index based on scroll direction and number of images to move
    const newIndex =
      event.deltaY < 0
        ? currentImage === 0
          ? images.length - 1
          : currentImage - imagesToMove
        : currentImage === images.length - 1
        ? 0
        : currentImage + imagesToMove;
  
    // Set the new image index and wrap around if necessary
    setCurrentImage(newIndex >= images.length ? newIndex - images.length : newIndex < 0 ? images.length + newIndex : newIndex);
  };
  

  const carouselStyle = {
    background: `url(${images[currentImage]})`,
    transition: 'transform 0.5s ease-in-out',
  };
  return (
    <div className="carousel-container">
      <div className="carousel-scroll" onWheel={handleWheel}>
        <img src={images[currentImage]} alt="" className="carousel-image" />
      </div>
    </div>
  );
};

export default Carousel;
