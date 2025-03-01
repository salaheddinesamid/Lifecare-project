import React, { useState, useEffect } from "react";
import axios from "axios";
import '../Styles/PatientManagement.css';
import TuneIcon from '@mui/icons-material/Tune';

export function PatientManagement() {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get('http://localhost:8080/api/patient/get_all')
      .then(response => {
        setPatients(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the patients!", error);
      });
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPatients = patients.filter(patient => {
    if (searchTerm && patient.fullName && patient.id) {
      return (
        patient.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.id.toString().includes(searchTerm)
      );
    }
    return true; // Return true to include all patients if searchTerm or patient.fullName/id is null/undefined
  });

  return (
    <div className="patient-management-container">
      <div className="search-filter">
        <input
          className="form-control search-input"
          placeholder="Search patients name, id"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="btn advanced-filter">
          <TuneIcon />
        </button>
      </div>
      <div className="patient-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>National ID</th>
              <th>Age</th>
              <th>Address</th>
              <th>Country</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.id}</td>
                <td>{patient.fullName}</td>
                <td>{patient.nationalId}</td>
                <td>{patient.age}</td>
                <td>{patient.address}</td>
                <td>{patient.country}</td>
                <td>{patient.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
