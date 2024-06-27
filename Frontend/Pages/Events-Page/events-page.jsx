import { useState } from 'react';
import Navbar from '../../Components/Navbar/navbar';
import SmallScreen from '../../Components/SmallScreen/small-screen';
import Footer from '../../Components/Footer/footer';
import Events from '../../Components/Events/events';

const EventsPage = () => {
  const [mobileMenu, setMobileMenu] = useState(false); 

  return (
    <>
      <Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} Session = "#events"/>
      <Events />
      <Footer />
      <SmallScreen />
    </>
  );
};

export default EventsPage;
