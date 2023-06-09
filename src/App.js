import React from 'react';
import { useContext, useEffect, useState } from 'react';
import Carousel from './Carousel';
import Nav from './components/Navbar'
import img1 from './images/project1.png'
import img2 from './images/project2.png'
import img3 from './images/project3.png'
import img4 from './images/project4.png'
import Blur from './components/Blur'
import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dataprovider from './context/DataProvider';
import Header from './header';
import Result from './Result';
import Code from './code';
import AllProjects from './pages/AllProjects';
import { useLocation } from 'react-router-dom';
import Projestss from './pages/Projectpage'
import './App.css'
import Projects from './pages/Allprojects/Card' 
// import Contact from './pages/Contact'

// import Codepen from './pages/codepen/App' 


const imagess = [
  {
    img: img1,
    key: "one",
    heading: "Start Project",
    colour: "rgb(204, 204, 255)",
    light_colour: "rgb(230, 230, 255)",
    dark: "rgb(128, 128, 255)",
    head1: "Start Here"
  },
  {
    img: img2,
    key: "two",
    heading: "Update ",
    colour: "#ffd4d5",
    light_colour: "radial-gradient(50% 50% at 50% 50%, rgba(255, 142, 142, 0.45) 24.69%, rgba(255, 208, 216, 0.52) 100%)",
    dark: "rgb(255, 72, 160)",
    head1: "Start Here"


  },
  {
    img: img3,
    key: "three",
    heading: "All Projects",
    colour: "rgb(204, 204, 255)",
    light_colour: "rgb(230, 230, 255)",
    dark: "rgb(128, 128, 255)",
    head1: "Start Here"


  },
  {
    img: img4,
    key: "four",
    heading: "Deploy",
    colour: "rgb(214, 245, 214)",
    light_colour: "rgb(230, 255, 230)",
    dark: "rgb(123,207,151)",
    head1: "Start Here"


  }


];



const App = () => {
  const [docRef, setDocRef] = useState(null);


  return (
    <Routes>
      <Route path="/"
        element={<div className='gand'>
          <Nav />
          <Carousel images={imagess} />
          <Blur prop={imagess} />
          {/* <Projects/> */}
        </div>}><Route />

      </Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="register" element={<Register />}></Route>
      <Route path="codepen"
        element={
          <>
            <Dataprovider>

              {/* <div className="App"> */}
              <Nav />
              <Code />
              <Result />
              {/* </div> */}
            </Dataprovider>
          </>
        }
      >


      </Route>
      <Route path="allprojects" element={
        <div>
          <Nav />
          <AllProjects />
        </div>
      }></Route>
      <Route path="contact" component={() => {
        window.location.href = 'https://redirecter-ue15.vercel.app/';
        return null;
      }} />
      <Route path='code' element = {
        <>
        <Dataprovider>

        <Nav/>
        <Projestss/>
        <Result/>
        </Dataprovider>
        </>
      }></Route>

    </Routes>

  );
};

export default App;
