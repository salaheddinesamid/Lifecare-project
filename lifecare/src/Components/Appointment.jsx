import React, { useState, useEffect } from "react";
import axios from "axios";
import cities from "./cities_and_regions_combined.json";
import diseasesFile from "./diagnosis.json";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../Styles/Appointment.css";
import { Navigate, useNavigate } from "react-router-dom";
import BasicTimePicker from "./TimePicker";
import BasicDatePicker from "./Datepicker";

export function Appointment() {
  //const [listOfDoctors, setListOfDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [view, setView] = useState(0);
  const token = localStorage.getItem('accessToken');


  useEffect(() => {
    axios.get("http://localhost:8080/api/appointment/get_all", {
      headers: { "Authorization": `Bearer ${token}` }
    })
      .then(res => setAppointments(res.data))
      .catch(error => console.error(error));
  }, [token]);


  const components = [
    {
      id: 0,
      name: "Appointment Management",
      view: <AppointmentManagement appointments={appointments}/>,
    },
    {
      id: 1,
      name: "Request Appointment",
      view: <AddAppointment setView={setView} token={token} />,
    },
  ];

  return (
    <div className="appointment-container">
      <div className="tabs mb-4 ">
        {components.map((component) => (
          <button key={component.id} className="btn ms-3 me-3" style={{
            backgroundColor:"#22d3ee",
            color:"black"
          }} onClick={() => setView(component.id)}>
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
  const [location,setLocation] = useState('')
  const [patientDto, setPatientDto] = useState({
    firstName : "",
    lastName : "",
    nationalId : "",
    address : "",
    email : "",
    phone : ""
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const [termsChecked, setTermsChecked] = useState(false);
  const [showSuccess,setShowSuccess] = useState(false)


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
      patientDto,
      disease,
      location,
      selectedDate : formattedDate,
      totalPrice
    };

    axios.post('http://localhost:8080/api/appointment/new', appointmentObject, {
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
      }
    })
    .then(response => {
      console.log("Appointment request sent successfully:", response.data);
      setView(0); 
    })
    .catch(error => {
      console.error("Error sending appointment request:", error);
    });

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);

  };

  const checkForm = () => {
    return (
      patientDto.firstName.trim() !== '' &&
      patientDto.nationalId.trim() !== '' &&
      patientDto.address.trim() !== '' &&
      disease.trim() !== '' &&
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
      {showSuccess && (
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 128, 0, 0.8)', 
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    zIndex: 1000,
                }}>
                    Requested Successfully!
                </div>
            )}
      <h2>Personal Information</h2>
      <div className="form-group">
        <input type="text" placeholder="First Name" className="form-control" value={patientDto.firstName} onChange={(e) => setPatientDto({...patientDto, firstName : e.target.value})} />
        <input type="text" placeholder="Last Name" className="form-control" value={patientDto.lastName} onChange={(e) => setPatientDto({...patientDto, lastName : e.target.value})} />
      </div>
      <div className="form-group">
        <input type="text" placeholder="National ID" className="form-control" value={patientDto.nationalId} onChange={(e) => setPatientDto({...patientDto, nationalId : e.target.value})} />
        <input type="text" placeholder="Address" className="form-control" value={patientDto.address} onChange={(e) => setPatientDto({...patientDto, address : e.target.value})} />
      </div>
      <div className="form-group">
        <input type="text" placeholder="example@domain.com" className="form-control" value={patientDto.email} onChange={(e) => setPatientDto({...patientDto, email : e.target.value})} />
        <input type="text" placeholder="Phone number" className="form-control" value={patientDto.phone} onChange={(e) => setPatientDto({...patientDto, phone : e.target.value})} />
      </div>
      <h2>Appointment Details</h2>
      <div className="form-group">
        <select className="form-select" onChange={handleDiseaseChange}>
          <option value="">Select Disease</option>
          {diseasesFile.map((disease) => (
            <option key={disease.id} value={disease.name}>{disease.name}</option>
          ))}
        </select>
        <select name="city" id="city-select" className="form-select" onChange={(e)=>setLocation(e.target.value)}>
          {cities.map((city) => (
            <option key={city.id} value={city.id}>{city.name}</option>
          ))}
        </select>

      </div>
      <div className="row">
        <div className="form-group">
        <BasicDatePicker/>
        <BasicTimePicker/>
        </div>
      </div>
      <div className="form-group">
        <h4>Total Price: {totalPrice} £</h4>
      </div>
      <div className="form-group">
        <button className="btn btn-primary" onClick={submitRequest}>Confirm</button>
        <button className="btn btn-danger" onClick={() => setView(0)}>Cancel</button>
      </div>
    </div>
  );
}

function AppointmentManagement({appointments}) {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("ALL");
      const filteredAppointments = appointments.filter(appointment => {
          if (filter === "ALL") return true;
          return appointment.status === filter;
      });
  function naviagteAppointment(appointment){
    localStorage.setItem("target_appointment",JSON.stringify(appointment))
    navigate("/appointment/details")
  }

  const NoDataAvailableException = () =>{
    return(
      <div className="row">
        <h2 className="text-danger">No data available</h2>
      </div>
    )
  }
  return (
    <div className="appointment-management">
      <div className="mb-3">
                <button className="btn btn-primary me-2" onClick={() => setFilter("ALL")}>All</button>
                <button className="btn btn-warning me-2" onClick={() => setFilter("IN REVIEW")}>IN REVIEW</button>
                <button className="btn btn-success me-2" onClick={() => setFilter("COMPLETED")}>COMPLETED</button>
                <button className="btn btn-danger" onClick={() => setFilter("CANCELED")}>CANCELED</button>
            </div>
      <div className="appointment-table-container">
        {
          appointments && appointments.length !== 0? 
          <table className="appointment-table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>National ID</th>
              <th>Dieseas</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredAppointments.map((appointment) => (
              <tr key={appointment.id} onClick={()=>naviagteAppointment(appointment)} style={{cursor : "pointer"}}>
                <td>{appointment.patient.firstName +" "+ appointment.patient.lastName}</td>
                <td>{appointment.patient.nationalId}</td>
                <td>{appointment.disease}</td>
                <td>{appointment.date}</td>
                <td>
                                        <span className={`badge 
                                            ${appointment.status === "COMPLETED" ? "bg-success" : 
                                            appointment.status === "IN REVIEW" ? "bg-warning" : 
                                            "bg-secondary"}`}>
                                            {appointment.status}
                                        </span>
                                    </td>
              </tr>
            ))}
          </tbody>
        </table> 
        : <NoDataAvailableException/>
        }
      </div>
    </div>
  );
}

export default Appointment;
