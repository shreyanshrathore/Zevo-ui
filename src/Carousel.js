import React, { useContext, useEffect, useState } from 'react';
import './Carousel.css';
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';
import AOS from 'aos'
import 'aos/dist/aos.css'
import mid_pic from './images/centre-image.png'
import side from './images/side.png'
import { handleScroll } from './components/Wheel'
import MyContext from './Context/MyContext';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import medicall from './images/case.png'
import amazon from './images/amazon.png'
import register from './images/register.png'
import chef from './images/chef.png'
import main from './images/centre-image.png'

const Carousel = ({ images }) => {
  useEffect(() => {
    AOS.init();
  }, [])
  const [currentImage, setCurrentImage] = useState(0);
  const [cnt, setCnt] = useState(10);

  const handleWheel = (event) => {
    // event.preventDefault();

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

  const handlePrevImage = () => {
    const newIndex = currentImage === 0 ? images.length - 1 : currentImage - 1;
    setCurrentImage(newIndex);
  };

  const handleNextImage = () => {
    const newIndex = currentImage === images.length - 1 ? 0 : currentImage + 1;
    setCurrentImage(newIndex);
  };


  const styled = {
    background: `${images[currentImage].colour}`
  };

  const dark = {
    background: `${images[currentImage].dark}`
  }

  const shadow = {
    background: `${images[currentImage].light_colour}`
  }
  const light = {
    background: `rgb(246, 252, 255)`
  }
  const styles = {
    background: `blue`
  }









  // wheel




  const [rotation, setRotation] = useState(0);






  const handleScroll = (event) => {
    // get the current rotation angle
    const currentRotation = rotation;
    const cnter = cnt;
    // calculate the new rotation angle based on the scroll delta
    const delta = event.deltaY;
    const newRotation = currentRotation + (delta > 0 ? 30 : -30);
    const newcnter = cnter + (delta > 0 ? 1 : -1);
    // update the rotation state
    setRotation(newRotation);
    setCnt(newcnter);









  };

  const containerStyle = {
    transform: `rotate(${rotation}deg)`,
    transition: 'transform 1s', // adjust the transition duration as needed
    background: `${images[currentImage].colour}`
  };

  const lower_color = {
    background: `${images[currentImage].colour}`

  };

  const handleBoth = (event) => {
    handleScroll(event);
    handleWheel(event);
  }

  const Iconstyle = {
    color: `#ffd1e7`,
    background: `white`,
    padding: `5px`
  }

  const main_styling= {
    background: `${images[currentImage].dark}`
  }








  return (
    <>
      <div className="head_cnt">
        <h1 className="headings">{images[currentImage].heading}</h1>
      </div>
      <div className="buttons">
        <button>Download App</button>
        <div className="video_play" style={{ backgroundColor: `${images[currentImage].light_colour}` }}>
          <PlayCircleFilledRoundedIcon style={{ color: `${images[currentImage].dark}` }} />
          <span>Play intro</span>
        </div>
      </div>
      <div className="carousel_container">
        <div className="main_div" style={main_styling}>
          <img src={main} alt="" />
          <div>{images[currentImage].heading}</div>
        </div>
        <div className='shadow-circle' style={shadow}>


          <div onWheel={handleWheel}>






            <div className='baap'>
              <div className="wheel-container" style={containerStyle} onClick={handleScroll} onScroll={handleScroll} onWheel={handleScroll} >
                <div className="a a1" onClick={handleScroll}>
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
          </div>
        </div>
      </div>

      <div className="blur">
        <div className="blur1">

        </div>
        <img src={images[currentImage].img} alt="" onWheel={handleBoth} />
        <div className='blur_text'>
          Build a Great Understanding <br /> About Your Body and Yourself
          <div className="icons">
            <img src={medicall} alt="" className='med' />
            <img src={register} alt="" />
            <img src={chef} alt="" />
            <img src={amazon} alt="" />
          </div>
          <br />
          <div className="text2">
            We are always here to back you at evry stage, starting from pre pregnancy <br /> We are always here to back you at evry stage
          </div>
        </div>
      </div>

    </>
  );
};

export default Carousel;