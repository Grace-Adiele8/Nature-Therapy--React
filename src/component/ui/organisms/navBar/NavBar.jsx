import React from 'react';
import './index.css';
import logo from '../../../../assets/images/logo.png';
import dropdown from '../../../../assets/svg/dropdown.svg';
import './index.css';
import BaseButton from '../../atoms/baseButton/BaseButton';

export default function NavBar() {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
            <img src={logo} alt="Logo" />
            <h2>Nature’s Therapy</h2>
            </div>
            <ul className="nav-links">
                <a href="/"><li>Home</li></a>
                <a href="/"><li>Service</li></a>
                <a href="/"><li>About Us</li></a>
                <a href="/"><li>Free sign up</li></a>

            </ul>
            <ul className='nav-link'>
                <a href="/"><li>Resources <img src={dropdown} alt="dropdown" /></li></a>
                <BaseButton>Login</BaseButton>
            </ul>
        
      </div>
    </div>
  )
}
