// Patient.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Patient.css';

export function Patient(){
  const [patients, setPatients] = useState([]);
  const [form, setForm] = useState({ fullname: '', nationalid: '', age: '', address: '', country: '', email: '', status: 'active' });
  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch patients data from the server
    axios.get('/api/patients')
      .then(response => setPatients(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      // Update patient
      axios.put(`/api/patients/${editId}`, form)
        .then(response => {
          setPatients(patients.map(item => (item.id === editId ? response.data : item)));
          setEditId(null);
          setForm({ fullname: '', nationalid: '', age: '', address: '', country: '', email: '', status: 'active' });
          setMessage('Patient updated successfully');
          setTimeout(() => setMessage(''), 3000);
        })
        .catch(error => console.error(error));
    } else {
      // Add new patient
      axios.post('http://localhost:8080/patient-management/new_patient', form)
        .then(response => {
          setPatients([...patients, response.data]);
          setForm({ fullname: '', nationalid: '', age: '', address: '', country: '', email: '', status: 'active' });
          setMessage('Patient added successfully');
          setTimeout(() => setMessage(''), 3000);
        })
        .catch(error => console.error(error));
    }
  };

  const handleEdit = (id) => {
    const patient = patients.find(item => item.id === id);
    setForm({ fullname: patient.fullname, nationalid: patient.nationalid, age: patient.age, address: patient.address, country: patient.country, email: patient.email, status: patient.status });
    setEditId(id);
  };

  const handleDelete = (id) => {
    axios.delete(`/api/patients/${id}`)
      .then(() => {
        setPatients(patients.filter(item => item.id !== id));
        setMessage('Patient deleted successfully');
        setTimeout(() => setMessage(''), 3000);
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="patient-management">
      <h1>Patient Management</h1>
      {message && <div className="message">{message}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullname"
          value={form.fullname}
          onChange={handleChange}
          placeholder="Full Name"
          required
        />
        <input
          type="text"
          name="nationalid"
          value={form.nationalid}
          onChange={handleChange}
          placeholder="National ID"
          required
        />
        <input
          type="number"
          name="age"
          value={form.age}
          onChange={handleChange}
          placeholder="Age"
          required
        />
        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Address"
          required
        />
        <input
          type="text"
          name="country"
          value={form.country}
          onChange={handleChange}
          placeholder="Country"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <select name="status" value={form.status} onChange={handleChange}>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <button type="submit">{editId ? 'Update' : 'Add'}</button>
      </form>
      <ul>
        {patients.map(item => (
          <li key={item.id}>
            {item.fullname} - {item.nationalid} - {item.age} - {item.address} - {item.country} - {item.email} ({item.status})
            <div>
              <button className="edit-button" onClick={() => handleEdit(item.id)}>Edit</button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Patient;
