import React from 'react'
import './Nav.css'
import logo from '../images/logo-zevo.png'
const Navbar = () => {

  // const styled = {
  //   color:'pink',
  //   background: 'blue'
  // }
  return (
    <>
      <div className="container">
        <div className="nav-container">
          <img src={logo} alt="no" className='image-cnt' />
          <span className="lists">

            <div id='home'>Home</div>
            <div>About us</div>
            <div>Contact us</div>
            <div>Blog</div>
            <div>Faq</div>
            <button>Login</button>
          </span>
        </div>
      </div>
    </>
  )
}

export default Navbar