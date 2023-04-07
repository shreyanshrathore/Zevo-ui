import React, { useState } from "react";
import "./styles.css";

const Circle = () => {
  const [scrollAmount, setScrollAmount] = useState(0);

  const handleScroll = (e) => {
    setScrollAmount((prev) => prev + e.deltaY);
  };

  const bigCircleRadius = 300;
  const smallCircleRadius = 50;
  const angle = 30;

  return (
    <div className="container" onWheel={handleScroll}>
      {Array.from({ length: 12 }).map((_, index) => {
        const angleRad = (angle * index + scrollAmount) * (Math.PI / 180);
        const x = (bigCircleRadius - smallCircleRadius) * Math.cos(angleRad);
        const y = (bigCircleRadius - smallCircleRadius) * Math.sin(angleRad);
        return (
          <div
            key={index}
            className="small-circle"
            style={{
              transform: `translate(${x}px, ${y}px)`
            }}
          />
        );
      })}
    </div>
  );
};

export default Circle;
