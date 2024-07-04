import React, { useState } from 'react';
import Navbar from '../Components/Navbar/navbar';
import SmallScreen from '../Components/SmallScreen/small-screen';
import Footer from '../Components/Footer/footer';
import Sain from '../Components/Sain/sain';
import Assistance from '../Components/Assistance/assitance';

const InvestmentPage = () => {
  const [mobileMenu, setMobileMenu] = useState(false); 

  return (
    <>
      <Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} Session = "#for-investment"/>
      <Sain />
      <Assistance />
      <Footer />
      <SmallScreen />
    </>
  );
};

export default InvestmentPage;
