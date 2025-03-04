// src/components/Patient.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Patient.css';

export function Patient() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({
    fullName: '',
    nationalId: '',
    age: '',
    address: '',
    country: '',
    email: ''
  });

  useEffect(() => {
    axios.get('http://localhost:8080/api/patient/get_all')
      .then(response => {
        setPatients(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the patients!", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient({ ...patient, [name]: value });
  };

  return (
    <div className="patient-container">
      <ul className="patient-list">
        {patients.map(patient => (
          <li key={patient.id}>{patient.fullName}</li>
        ))}
      </ul>
      <form className="patient-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          value={patient.firstName}
          onChange={handleChange}
          placeholder="Full Name"
          required
        />
        <input
          type="text"
          name="nationalId"
          value={patient.nationalId}
          onChange={handleChange}
          placeholder="National ID"
          required
        />
        <input
          type="number"
          name="age"
          value={patient.age}
          onChange={handleChange}
          placeholder="Age"
          required
        />
        <input
          type="text"
          name="address"
          value={patient.address}
          onChange={handleChange}
          placeholder="Address"
          required
        />
        <input
          type="text"
          name="country"
          value={patient.country}
          onChange={handleChange}
          placeholder="Country"
          required
        />
        <input
          type="email"
          name="email"
          value={patient.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <button type="submit">Add Patient</button>
      </form>
    </div>
  );
}

export default Patient;
