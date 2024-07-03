import React, { useState, useEffect } from "react";
import axios from "axios";
import cities from "./cities_and_regions_combined.json";
import diseasesFile from "./diagnosis.json";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Appointment.css";

export function Appointment() {
  const [listOfDoctors, setListOfDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [view, setView] = useState(0);
  const token = localStorage.getItem('accessToken');
  
  useEffect(() => {
    axios.get('http://localhost:8080/doctor', {
      headers: { "Authorization": `Bearer ${token}` }
    })
      .then(res => setListOfDoctors(res.data))
      .catch(error => console.error(error));
  }, [token]);

  useEffect(() => {
    axios.get("http://localhost:8080/appointments/", {
      headers: { "Authorization": `Bearer ${token}` }
    })
      .then(res => setAppointments(res.data))
      .catch(error => console.error(error));
  }, [token]);

  const components = [
    {
      id: 0,
      name: "Appointment Management",
      view: <AppointmentManagement appointments={appointments} />,
    },
    {
      id: 1,
      name: "Request Appointment",
      view: <AddAppointment setView={setView} token={token} />,
    },
  ];

  return (
    <div className="appointment-container">
      <div className="tabs">
        {components.map((component) => (
          <button key={component.id} className={`tab-button ${view === component.id ? 'active' : ''}`} onClick={() => setView(component.id)}>
            {component.name}
          </button>
        ))}
      </div>
      <div className="appointment-content">
        {components.map((component) => view === component.id ? component.view : null)}
      </div>
    </div>
  );
}

function AddAppointment({ setView, token }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [disease, setDisease] = useState('');
  const [patient, setPatient] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [termsChecked, setTermsChecked] = useState(false);

  useEffect(() => {
    const getCurrentDate = () => {
      const currentDate = new Date();
      return currentDate;
    };
    setSelectedDate(getCurrentDate());
  }, []);

  useEffect(() => {
    if (selectedDate) {
      const formattedDate = formatDate(selectedDate);
      // Now you can use formattedDate in your appointmentObject
    }
  }, [selectedDate]);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const submitRequest = () => {
    const formattedDate = formatDate(selectedDate);

    const appointmentObject = {
      patient,
      idNumber,
      address,
      date: formattedDate,
      totalPrice,
      dateOfBirth,
      postalCode,
      disease
    };

    axios.post('http://localhost:8080/appointments/new', appointmentObject, {
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
      }
    })
    .then(response => {
      console.log("Appointment request sent successfully:", response.data);
      setView(0); // Switch view back to Appointment Management after successful submission
    })
    .catch(error => {
      console.error("Error sending appointment request:", error);
      // Handle error state or feedback to user
    });
  };

  const checkForm = () => {
    return (
      patient.trim() !== '' &&
      idNumber.trim() !== '' &&
      address.trim() !== '' &&
      postalCode.trim() !== '' &&
      disease.trim() !== '' &&
      //dateOfBirth.trim() !== '' &&
      termsChecked
    );
  };

  const handleDiseaseChange = (e) => {
    const selectedDisease = e.target.value;
    setDisease(selectedDisease);
    const selectedDiseaseObject = diseasesFile.find(d => d.name === selectedDisease);
    setTotalPrice(selectedDiseaseObject ? selectedDiseaseObject.price : 0);
  };

  return (
    <div className="add-appointment-container">
      <div className="form-group">
        <input type="text" placeholder="Full Name" className="form-control" value={patient} onChange={(e) => setPatient(e.target.value)} />
        <input type="text" placeholder="ID Number" className="form-control" value={idNumber} onChange={(e) => setIdNumber(e.target.value)} />
      </div>
      <div className="form-group">
        <DatePicker
          selected={selectedDate}
          onChange={date => setSelectedDate(date)}
          dateFormat="dd/MM/yyyy"
          placeholderText="Select Date"
          className="form-control"
        />
        <select name="city" id="city-select" className="form-select">
          {cities.map((city) => (
            <option key={city.id} value={city.id}>{city.name}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <input type="text" placeholder="Address" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} />
        <input type="text" placeholder="Postal Code" className="form-control" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
      </div>
      <div className="form-group">
        <select className="form-select" onChange={handleDiseaseChange}>
          <option value="">Select Disease</option>
          {diseasesFile.map((disease) => (
            <option key={disease.id} value={disease.name}>{disease.name}</option>
          ))}
        </select>
        <h4>Total Price: {totalPrice} £</h4>
      </div>
      <div className="terms">
        <input type="checkbox" checked={termsChecked} onChange={() => setTermsChecked(!termsChecked)} />
        <p>By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.</p>
      </div>
      <div className="form-group">
        <button className="btn btn-primary" onClick={submitRequest} disabled={!checkForm()}>Confirm</button>
        <button className="btn btn-danger" onClick={() => setView(0)}>Cancel</button>
      </div>
    </div>
  );
}

function AppointmentManagement({ appointments }) {
  return (
    <div className="appointment-management">
      <div className="appointment-table-container">
        <table className="appointment-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>ID Number</th>
              <th>Address</th>
              <th>Date</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.patient}</td>
                <td>{appointment.idNumber}</td>
                <td>{appointment.address}</td>
                <td>{appointment.date}</td>
                <td>{appointment.totalPrice} £</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Appointment;
