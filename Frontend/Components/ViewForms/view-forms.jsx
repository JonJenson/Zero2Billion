import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SupaBaseApi } from '../../../Backend/api';
import './view-forms.css';
import formsData from '../../../Data/forms-data'; // Import forms data
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ViewForms = ({ id }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Find form details based on id
  const form = formsData.find((f) => f.id === id);

  useEffect(() => {
    const fetchData = async () => {
      if (!form) {
        setError('Form not found');
        setLoading(false);
        return;
      }

      const title = form.data.title;

      try {
        const res = await SupaBaseApi.selectApi(title); // Call selectApi with the title
        if (res) {
          setFormData(res);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, form]);



  if (!form) {
    return <div className="centered-text">Form not found</div>;
  }

  if (loading) {
    return <div className="centered-text">Loading...</div>;
  }

  if (error) {
    return <div className="centered-text">Error: {error}</div>;
  }

  if (formData.length === 0) {
    return <div className="centered-text">No data found for '{form.data.title}'</div>;
  }

  return (
    <>
      <ToastContainer />
      <div className="centered-text" >Data for '{form.data.title}' - {formData.length} submissions</div>
      <div className="view-forms-container">
        <table className="form-data-table">
          <thead>
            <tr>
              {Object.keys(formData[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {formData.map((data, index) => (
              <tr key={index}>
                {Object.values(data).map((value, idx) => (
                  <td key={idx}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewForms;
