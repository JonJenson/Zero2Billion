import React, { useState } from 'react';
import Navbar from '../Components/Navbar/navbar';
import SmallScreen from '../Components/SmallScreen/small-screen';
import Footer from '../Components/Footer/footer';
import Kickoff from '../Components/Kickoff/kickoff';
import OurCoaches from '../Components/OurCoaches/ourcoaches';

const AboutPage = () => {
  const [mobileMenu, setMobileMenu] = useState(false); 

  return (
    <>
      <Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} Session = "#about"/>
      <Kickoff />
      <OurCoaches />
      <Footer />
      <SmallScreen />
    </>
  );
};

export default AboutPage;
