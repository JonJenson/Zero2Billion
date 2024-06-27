import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../Components/Navbar/navbar';
import Footer from '../../Components/Footer/footer';
import FormComponent from '../../Components/Form/form-component';
import SmallScreen from '../../Components/SmallScreen/small-screen';

const FormPage = () => {
  const [mobileMenu, setMobileMenu] = useState(false); 
  const { id } = useParams(); // Extract the id parameter from the URL
  return (
      <>
      <Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} Session = "#form"/> 
      <FormComponent formId={parseInt(id, 10)} /> {/* Pass the id to the FormComponent */}
      <Footer />
      <SmallScreen />
      </>
  );
};

export default FormPage;
