import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ViewForms from '../Components/ViewForms/view-forms'; // Adjust the import path as per your project structure
import SmallScreen from '../Components/SmallScreen/small-screen';

const ViewFormPage = () => {
  const { id } = useParams(); // Extract the id parameter from the URL
  const [mobileMenu, setMobileMenu] = useState(false); 

  return (
    <>
      <ViewForms id={parseInt(id, 10)} /> {/* Pass the id to the ViewForms component */}
      <SmallScreen />
    </>
  );
};

export default ViewFormPage;
