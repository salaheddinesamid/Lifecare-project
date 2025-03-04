import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/PatientManagement.css";
import TuneIcon from "@mui/icons-material/Tune";
import { Table, TableHead, TableBody, TableCell, TableRow, TableContainer, Paper, TextField, Button, Typography } from "@mui/material";

export function PatientManagement() {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/api/patient/get_all")
      .then(response => {
        setPatients(response.data);
      })
      .catch(error => {
        console.error("Error fetching patients!", error);
      });
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPatients = patients.filter(patient => {
    return (
      (patient.fullName && patient.fullName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (patient.patientId && patient.patientId.toString().includes(searchTerm))
    );
  });

  return (
    <div className="patient-management-container">
      <Typography variant="h4" className="title">
        Patient Management
      </Typography>
      
      <div className="search-filter">
        <TextField
          className="search-input"
          label="Search by Name or ID"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
          fullWidth
        />
        <Button className="filter-btn">
          <TuneIcon />
        </Button>
      </div>

      <TableContainer component={Paper} className="patient-table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>ID</b></TableCell>
              <TableCell><b>Full Name</b></TableCell>
              <TableCell><b>National ID</b></TableCell>
              <TableCell><b>Address</b></TableCell>
              <TableCell><b>Email</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredPatients.length > 0 ? (
              filteredPatients.map((patient) => (
                <TableRow key={patient.patientId}>
                  <TableCell>{patient.patientId || "N/A"}</TableCell>
                  <TableCell>{patient.fullName || "N/A"}</TableCell>
                  <TableCell>{patient.nationalId || "N/A"}</TableCell>
                  <TableCell>{patient.address || "N/A"}</TableCell>
                  <TableCell>{patient.email || "N/A"}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} style={{ textAlign: "center" }}>
                  No Patients Found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
