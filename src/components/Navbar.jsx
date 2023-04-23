import React from 'react'
import './Nav.css'
import logo from '../images/logo-zevo.png'
import Logo from '../images/mainImage.png'
import Login from '../pages/Login'
import { useNavigate, Link } from "react-router-dom";
const Navbar = () => {

  // const styled = {
  //   color:'pink',
  //   background: 'blue'
  const navigate = useNavigate();

  // }
  return (
    <>
      <div className="nav-main-container">
        <div className="nav-container">
          <img src={Logo} alt="no" className='image-cnt' />
          <span className="lists">

            <div id='home'>Home</div>
            <div>About us</div>
            <div>Contact us</div>
            <div>Blog</div>
            <div>Faq</div>
            <button> <Link to = "/login">Login</Link></button>
          </span>
        </div>
      </div>
    </>
  )
}

export default Navbar