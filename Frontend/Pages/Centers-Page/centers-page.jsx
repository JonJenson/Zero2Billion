import  { useState } from 'react';
import Navbar from '../../Components/Navbar/navbar';
import SmallScreen from '../../Components/SmallScreen/small-screen';
import Footer from '../../Components/Footer/footer';
import Centers from '../../Components/Centers/centers';

const CentersPage = () => {
  const [mobileMenu, setMobileMenu] = useState(false); 

  return (
    <>
      <Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} Session = "#centers"/>
      <Centers />
      <Footer />
      <SmallScreen />
    </>
  );
};

export default CentersPage;
