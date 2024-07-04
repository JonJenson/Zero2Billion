import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import formsData from '../../../Data/forms-data'; // Assuming forms-data contains the form details
import './admin.css';

const Admin = () => {
  const navigate = useNavigate();
  const [selectedTitle, setSelectedTitle] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleTitleChange = (e) => {
    setSelectedTitle(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const handleFetchData = () => {
    // Validate password here (e.g., minimum length, specific characters, etc.)
    if (password !== 'Praka@1985') {
      setPasswordError('Incorrect password . Retry again');
      return;
    }

    if (selectedTitle) {
      const selectedForm = formsData.find(form => form.data.title === selectedTitle);
      if (selectedForm) {
        navigate(`/view/${selectedForm.id}`);
      } else {
        alert('Form not found');
      }
    } else {
      alert('Please select a form title');
    }
  };

  return (
    <div className="admin-container">
      <h2 className="title">Admin Panel</h2>
      <div className="form-section">
        <label htmlFor="formTitle">Select Form Title:</label>
        <select id="formTitle" value={selectedTitle} onChange={handleTitleChange}>
          <option value="">Select...</option>
          {formsData.map((form) => (
            <option key={form.id} value={form.data.title}>
              {form.data.title}
            </option>
          ))}
        </select>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter admin password"
          required
        />
        {passwordError && <div className="error">{passwordError}</div>}
        <div className="submit-button">
          <button onClick={handleFetchData}>Fetch Data</button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
