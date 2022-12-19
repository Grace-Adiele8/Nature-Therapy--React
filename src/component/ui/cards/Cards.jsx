import React from 'react'
import './index.css';


function Cards({icon, text}) {
  return (
    <div className='cards'>
       <div className="services_image">
        <img src={icon} alt="appointment" />
        <p>{text}</p>
       </div>
       
    </div>
  )
}

export default Cards
