import React from 'react';
import './index.css';
import doctor from '../../../../assets/images/femaledoctor.png' 
import BaseButton from '../../../ui/atoms/baseButton/BaseButton';
import circle from '../../../../assets/images/circle.png';

export default function HomeHero() {
  return (
    <div className='home-hero'>
        <div className="home-hero-text">
      <h3>Welcome to Nature’s Therapy!</h3>
      <h1>Protect Your Mental Health</h1>
      <p>Consultation and routine check on your health, make sure you and
       your family live healthy.</p>
       
       <BaseButton className='appointment-button'>Make Appointment</BaseButton>
       </div>
       <div className="home-hero-img">
       <img src={doctor} alt="femaledoctor" />
       </div>
       <div className="home-hero-circle">
          <img src={circle} alt="circle" />
       </div>
    </div>
  )
}
