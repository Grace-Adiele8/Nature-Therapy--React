import React from 'react';
import BaseButton from '../../atoms/baseButton/BaseButton';
import './index.css';

function Footer() {
  return (
      <div className="footer">
        <h4>REAL PEOPLE REAL STORIES.</h4>
        <p>Thanks to Nature’s Therapy, I am in control of my life and mental health! I can remember 
            how much I struggle in the past.</p>
        <h5>PAULA JAMES</h5>
        <BaseButton className='review-button'>Send Your Reviews</BaseButton>
      </div>
  )
}

export default Footer
