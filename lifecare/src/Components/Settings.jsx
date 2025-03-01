// AdminSettings.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/Settings.css';

const Settings = () => {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const [adminEmail,setAdminEmail] = useState("")
  const token = localStorage.getItem("accessToken")

  useEffect(()=>{
    axios.get("http://localhost:8080/admin/getadmin", {
        headers: { "Authorization": `Bearer ${token}` }
      }).then(res=>setAdminEmail(res.data.email))
      .then(localStorage.setItem("adminEmail",adminEmail))
  },[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save settings
    // Here you would typically send a request to your server to save the settings
    axios.put(`http://localhost:8080/admin/settings/${adminEmail}`, form)
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
            value={form.firstName}
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
            value={form.lastName}
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
            value={form.email}
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
            value={form.password}
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
