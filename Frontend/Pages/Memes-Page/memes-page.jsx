import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/navbar';
import SmallScreen from '../../Components/SmallScreen/small-screen';

import Memes from '../../Components/Memes/memes';

const MemesPage = () => {
  const [mobileMenu, setMobileMenu] = useState(false); 

  return (
    <>
      <Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} Session = "#memes"/> 
      <Memes />
      <SmallScreen />
    </>
  );
};

export default MemesPage;
