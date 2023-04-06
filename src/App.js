import React from 'react';
import Carousel from './Carousel';
import Nav from './components/Navbar'
import img1 from './images/bg-1.png'
import img2 from './images/bg-2.png'
import img3 from './images/bg-3.png'
import img4 from './images/bg-4.png'
import img5 from './images/bg-5.png'
const imagess = [
  {
    img: img1,
    heading: "Toddlers",
    colour:  "rgb(204, 204, 255)",
    light_colour: "rgb(230, 230, 255)"
  },
  {
    img: img2,
    heading: "Pre Pregnancy",
    colour:  "rgba(255, 142, 142, 0.45) 24.69%",
    light_colour: "rgba(255, 208, 216, 0.52) 100%)"
  },
  {
    img: img3,
    heading: "Pregnancy",
    colour:  "rgb(255, 224, 204)",
    light_colour: "rgb(255, 240, 230)"
  },
  {
    img: img3,
    heading: "Infancy",
    colour:  "rgb(214, 245, 214)",
    light_colour: "rgb(230, 255, 230)"
  }


];

const images = [
  img1,
  img2,
  img3,
  img4
]

const App = () => {
  return (
    <div>
      <Nav/> 
      {/* <h1>Carousel Example</h1> */}
      <Carousel images={images} />
    </div>
  );
};

export default App;
