import React, { useState } from 'react';
import './test.css'
import side from '../images/side.png'
import centre from '../images/centre-image.png'
const CircleDivs = () => {
  const [startIndex, setStartIndex] = useState(0);
  // const divs = [
  //   { id: 1, text: 'b1' },
  //   { id: 2, text: 'b2' },
  //   { id: 3, text: 'b3' },
  //   { id: 4, text: 'b4' },
  //   { id: 5, text: 'b5' },
  //   { id: 6, text: 'b6' },
  //   { id: 7, text: 'b7' },
  //   { id: 8, text: 'b8' },
  //   { id: 9, text: 'b9' },
  //   { id: 10, text: 'b10' },
  //   { id: 11, text: 'b11' },
  //   { id: 12, text: 'b12' },
  // ];
  let divs = [
  { id: 1, imag: side },
  { id: 2, imag: side},
  { id: 3, imag: side},
  { id: 4, imag: side},
  { id: 5, imag: side},
  { id: 6, imag: side},
  { id: 7, imag: side},
  { id: 8, imag: side},
  { id: 9, imag: side},
  { id: 10, imag: side },
  { id: 11, imag: side },
  { id: 12, imag: side },
  ];

  
  const handleScroll = (e) => {
    if (e.deltaY < 0) {
      // scroll up
      setStartIndex((prevIndex) => (prevIndex - 1 + divs.length) % divs.length);
    } else if (e.deltaY > 0) {
      // scroll down
      setStartIndex((prevIndex) => (prevIndex + 1) % divs.length);
    }
  };
  
  const visibleDivs = [];
  for (let i = startIndex; i < startIndex + 5; i++) {
    const divIndex = i % divs.length; // wrap around the array
    if(i === 3){
      divs[divIndex].imag = centre
    }
    visibleDivs.push(
      <div key={divs[divIndex].id} className="circle-div">
        <img src={divs[divIndex].imag} alt="" />
      </div>
    );
  }


  return (
    <div className="circle-container" onWheel={handleScroll}>
      {visibleDivs}
    </div>
  );
};

export default CircleDivs;
