import React from 'react'
import BaseButton from '../../../ui/atoms/baseButton/BaseButton';
import './index.css';
import appointment from '../../../../assets/svg/appointment.svg';
import box from '../../../../assets/svg/mdi_medical-bag.svg';
import drugs from '../../../../assets/svg/drugs.svg';
import Cards from '../../../ui/cards/Cards';



function HomeServices() {
  return (
    <div className='services'>
      <div className="services-text">
        <h2>What are our Services here?</h2>
        <p>Our Services here is voluntary where doctors from all over the world have voluteered
        to help educate you about your mental health. Get free consultation.</p>
        <BaseButton>Sign up</BaseButton>
      </div>
       <div className="firstcards">
          <Cards icon={appointment} text='Make an appointment and have an online
consultation with a doctor of your choice'/>
           <Cards icon={box} text='Special handling of patients who have to undergo
special treatment is easy and guaranteed'/>
            <Cards icon={drugs} text='Prescription drugs are available from doctors
that can be taken directly in collaboration
with nearest hospitals.'/>
       </div>
       
    </div>
   
  )
}

export default HomeServices

