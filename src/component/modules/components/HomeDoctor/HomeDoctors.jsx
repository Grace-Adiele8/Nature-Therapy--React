import React from 'react'
import './index.css';
import allen from '../../../../assets/images/allen.png';

function HomeDoctors() {
  return (
    <div className="doctors_services">
        <div className="doctors_services_text">
          <h4>OUR DOCTOR</h4>
          <h2>The best services from
special doctors</h2>
          <p>Doctors from all over the world are ready to serve you and help
you treat health problems.</p>
</div>
          <div className="doctors_services_image">
            <img src={allen} alt="/" />
          </div>
          
        
       </div>
  )
}

export default HomeDoctors
