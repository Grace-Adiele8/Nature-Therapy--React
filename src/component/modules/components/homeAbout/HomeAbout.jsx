import React from 'react'
import Doctor from '../../../../assets/images/doctor.png';
import BaseButton from '../../../ui/atoms/baseButton/BaseButton';
import play from '../../../../assets/svg/play.svg';
import './index.css';

function HomeAbout() {
  return (
    <div className='about'>
        <div className="about-img">
      <img src={Doctor} alt="femaledoctor" />
      </div>
      <div className="about-text">
        <h2>ABOUT US</h2>
        <h1>Health Consultation For
        a good life.</h1>
        <p>Nature’s Therapy is an online health consulting service with thousands
        of doctors ready to educate you about your mental fitness for free!
        We are just an appointment away, don’t forget we care!</p>
        <div className="about-button">
        <BaseButton>Read More</BaseButton> 
        <img src={play} alt="/" />
        </div>
      </div>
    </div>
  )
}

export default HomeAbout
