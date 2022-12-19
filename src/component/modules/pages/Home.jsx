import React from 'react';
import DefaultLayout from '../../ui/layout/DefaultLayout';

import HomeAbout from '../components/homeAbout/HomeAbout';
import HomeHero from '../components/homeHero/HomeHero';
import HomeServices from '../components/HomeServices/HomeServices';
import HomeDoctors from '../components/HomeDoctor/HomeDoctors';
import HomeBlogs from '../components/HomeBlogs/HomeBlogs';

export default function Home() {
  return (
    <DefaultLayout>
     <HomeHero/>
     <HomeAbout/>
     <HomeServices/>
     <HomeDoctors/>
     <HomeBlogs/>
    </DefaultLayout>
  )
}
