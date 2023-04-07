import React, { useEffect, useRef, useState } from 'react';
import './Wheel.css';

const Wheel = () => {
  const wheelRef = useRef(null);
  const [scrollSpeed, setScrollSpeed] = useState(0);

  useEffect(() => {
    const wheel = wheelRef.current;

    // Handle the scroll event
    const handleScroll = (event) => {
      event.preventDefault();

      // Set a speed threshold and a maximum speed to limit the sensitivity of the wheel rotation
      const speedThreshold = 50;
      const maxSpeed = 1000;

      // Calculate the scroll speed
      const delta = Math.abs(event.deltaY);
      const speed = Math.min(delta, maxSpeed);

      // Calculate the rotation angle based on the scroll speed
      const rotationAngle = (speed / speedThreshold) * 90;

      // Determine the direction of rotation
      const rotationDirection = event.deltaY < 0 ? -1 : 1;

      // Update the scroll speed state
      setScrollSpeed(speed);

      // Rotate the wheel based on the scroll speed and direction
      wheel.style.transform = `rotate(${rotationDirection * rotationAngle}deg)`;
    };

    // Add the scroll event listener
    wheel.addEventListener('wheel', handleScroll);

    // Clean up the event listener
    return () => {
      wheel.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div className="wheel-container">
      <div ref={wheelRef} className="wheel">
        <div className="component component-1">
          <h2>Component 1</h2>
        </div>
        <div className="component component-2">
          <h2>Component 2</h2>
        </div>
        <div className="component component-3">
          <h2>Component 3</h2>
        </div>
        <div className="component component-4">
          <h2>Component 4</h2>
        </div>
      </div>
      <div className="scroll-speed">
        <p>Scroll Speed: {scrollSpeed}</p>
      </div>
    </div>
  );
};

export default Wheel;
