// AdminSettings.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/Settings.css';

const Settings = () => {
  const adminDetails = JSON.parse(localStorage.getItem("admin"));
  const [newAdminDto, setForm] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const [adminEmail,setAdminEmail] = useState("")
  const token = localStorage.getItem("accessToken")



  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...newAdminDto, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    axios.put(`http://localhost:8080/api/admin/settings/${adminEmail}`, newAdminDto)
      .then(response => {
        console.log('Settings saved', response.data);
        setMessage('Settings saved successfully');
        setTimeout(() => setMessage(''), 3000);
      })
      .catch(error => {
        console.error('Error saving settings', error);
        setMessage('Error saving settings');
        setTimeout(() => setMessage(''), 3000);
      });
  };

  return (
    <div className="admin-settings">
      <h1>Admin Settings</h1>
      {message && <div className="message">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={adminDetails.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={adminDetails.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={newAdminDto.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={newAdminDto.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
};

export default Settings;
