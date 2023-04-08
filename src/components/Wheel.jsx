import React, { useState } from 'react'
import './Wheel.css'
import side from '../images/side.png'
import Mid from '../images/centre-image.png'
import MyContext from '../Context/MyContext'

const Wheel = ({ele}) => {
    const [rotation, setRotation] = useState(0);




    

    const handleScroll = (event) => {
        // get the current rotation angle
        const currentRotation = rotation;
        // calculate the new rotation angle based on the scroll delta
        const delta = event.deltaY;
        const newRotation = currentRotation + (delta > 0 ? 30 : -30);
        // update the rotation state
        setRotation(newRotation);









    };

    const containerStyle = {
        transform: `rotate(${rotation}deg)`,
        transition: 'transform 1s', // adjust the transition duration as needed
        background: `${ele.colour}`
    };

    const lower_color = {
        background: `${ele.colour}`

    };

    return (
        <MyContext.Provider value={rotation}>

        <div className='baap'>
            <div className="wheel-container" style={containerStyle} onWheel={handleScroll} >
                <div className="a a1">
                    <img src={side} alt="" />
                </div>
                <div className="a a2">
                    <img src={side} alt="" />
                </div>
                <div className="a a3">
                    <img src={side} alt="" />
                </div>
                <div className="a a4">
                    <img src={side} alt="" />
                </div>
                <div className="a a5">
                    <img src={side} alt="" />
                </div>
                <div className="a a6">
                    <img src={side} alt="" />
                </div>
                <div className="a a7">
                    <img src={side} alt="" />
                </div>
                <div className="a a8">
                    <img src={side} alt="" />
                </div>
                <div className="a a9">
                    <img src={side} alt="" />
                </div>
                <div className="a a10">
                    <img src={side} alt="" />
                </div>
                <div className="a a11">
                    <img src={side} alt="" />
                </div>
                <div className="a a12">
                    <img src={side} alt="" />
                </div>
            </div>
            <div className="lower" onWheel={handleScroll} style={lower_color}></div>


        </div>
        </MyContext.Provider>
    )
}

export default Wheel









































































// import React, { useState } from 'react';
// import './Wheel.css';
// import side from '../images/side.png';

// const Wheel = () => {
//   const [rotation, setRotation] = useState(0);
//   const [visibleIndices, setVisibleIndices] = useState([0, 1, 2, 3, 4]);

//   const handleScroll = (event) => {
//     // get the current rotation angle
//     const currentRotation = rotation;
//     // calculate the new rotation angle based on the scroll delta
//     const delta = event.deltaY;
//     let newRotation = currentRotation + (delta > 0 ? 30 : -30);
//     // update the rotation state
//     setRotation(newRotation);

//     // update the visible indices
//     const newVisibleIndices = [...visibleIndices];
//     if (delta > 0) {
//       // scroll down
//       if (newRotation % 360 >= 300 && visibleIndices[4] < 11) {
//         newVisibleIndices.shift();
//         newVisibleIndices.push(visibleIndices[4] + 1);
//         setVisibleIndices(newVisibleIndices);
//       }
//     } else {
//       // scroll up
//       if (newRotation % 360 <= 60 && visibleIndices[0] > 0) {
//         newVisibleIndices.pop();
//         newVisibleIndices.unshift(visibleIndices[0] - 1);
//         setVisibleIndices(newVisibleIndices);
//       }
//     }
//   };

//   const containerStyle = {
//     transform: `rotate(${rotation}deg)`,
//     transition: 'transform 1s', // adjust the transition duration as needed
//   };

//   const wheelDivs = Array.from({ length: 12 }, (_, index) => {
//     const isVisible = visibleIndices.includes(index);
//     return (
//       <div className={`a a${index + 1}`} key={index} style={{ display: isVisible ? 'block' : 'none' }}>
//         <img src={side} alt="" />
//       </div>
//     );
//   });

//   return (
//     <div className="baap">
//       <div className="wheel-container" style={containerStyle} onWheel={handleScroll}>
//         {wheelDivs}
//       </div>
//     </div>
//   );
// };

// export default Wheel;
