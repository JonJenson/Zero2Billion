import React, { useState } from 'react';
import Navbar from '../Components/Navbar/navbar';
import Gallery from '../Components/Gallery/gallery';
import SmallScreen from '../Components/SmallScreen/small-screen';
import Footer from '../Components/Footer/footer';

const GalleryPage = () => {
  const [mobileMenu, setMobileMenu] = useState(false); 

  return (
    <>
      <Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} Session = "#gallery"/> 
      <Gallery />
      <Footer />
      <SmallScreen />
    </>
  );
};

export default GalleryPage;
