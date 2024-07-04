import React, { useState } from 'react';
import SmallScreen from '../Components/SmallScreen/small-screen';
import Admin from '../Components/Admin/admin';


const AdminPage = () => {
  const [mobileMenu, setMobileMenu] = useState(false); 

  return (
    <>
     <Admin />
      <SmallScreen />
    </>
  );
};

export default AdminPage;
