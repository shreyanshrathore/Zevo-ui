import React from 'react'
import './blur.css'
const blur = ({prop}) => {
  return (
    <div>
        <div className="blur_container">
            <img src={prop.img} alt="" />
        </div>
    </div>
  )
}

export default blur