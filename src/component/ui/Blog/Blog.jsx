import React from 'react'
import './index.css';

function Blog({image,heading,text,link,icon}) {
  return (
    <div className='blog'>
        <div className="blogs_image">
            <img src={image} alt="/" />
            <h6>{heading}</h6>
            <p>{text}</p>
            <div className="text_icon">
              <div className="read">
            <a href="/">{link}</a>
            <img src={icon} alt="/" />
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default Blog
