import React from 'react';
import MainNavbar from '../components/MainNavbar';
import MainFooter from '../components/MainFooter';
import FullwidthCarousel from '../components/FullwidthCarousel';




function HomePage() {
  return (
    <div>
     <MainNavbar />
      <h1>Home Page</h1>
     <FullwidthCarousel />
      <MainFooter />
    </div>
  );
}

export default HomePage;
