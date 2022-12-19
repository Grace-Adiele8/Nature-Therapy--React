import React from 'react';
import Footer from '../organisms/footer/Footer';
import NavBar from '../organisms/navBar/NavBar';

export default function DefaultLayout({children}) {
  return (
    <div className='default-layout'>
    <NavBar/>
    {children}
    <Footer/>  
    </div>
  )
}
