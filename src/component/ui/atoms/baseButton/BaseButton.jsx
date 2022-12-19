import React from 'react';
import './index.css';

function BaseButton ({className='', children}) {
  return (
    <div>
      <button className={`base-button ${className}`}>{children}</button>
    </div>
  )
}

export default BaseButton;
