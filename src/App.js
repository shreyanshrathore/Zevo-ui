import React from 'react';
import Carousel from './Carousel';
import Nav from './components/Navbar'
import img1 from './images/bg-1.png'
import img2 from './images/bg-2.png'
import img3 from './images/bg-3.png'
import img4 from './images/bg-4.png'
import Blur from './components/Blur'


























const imagess = [
  {
    img: img1,
    heading: "Toddlers",
    colour:  "rgb(204, 204, 255)",
    light_colour: "rgb(230, 230, 255)",
    dark: "rgb(128, 128, 255)"
  },
  {
    img: img2,
    heading: "Pre Pregnancy",
    colour:  "#ffd4d5",
    light_colour: "radial-gradient(50% 50% at 50% 50%, rgba(255, 142, 142, 0.45) 24.69%, rgba(255, 208, 216, 0.52) 100%)",
    dark: "rgb(255, 72, 160)"

  },
  {
    img: img3,
    heading: "Pregnancy",
    colour:  "rgb(255, 224, 204)",
    light_colour: "rgb(255, 240, 230)",
    dark: "rgb(255, 179, 128)"

  },
  {
    img: img4,
    heading: "Infancy",
    colour:  "rgb(214, 245, 214)",
    light_colour: "rgb(230, 255, 230)",
    dark: "rgb(123,207,151)"

  }


];



const App = () => {
  return (
    <div>
      <Nav/> 
      <Carousel images={imagess} />
      <Blur prop = {imagess}/>
      {/* <Wheel/> */}
      {/* <Test/> */}
    </div>
  );
};

export default App;
