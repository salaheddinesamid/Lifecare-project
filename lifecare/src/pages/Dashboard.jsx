import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Dash } from "../Components/Dash";
import { Header } from "../Components/Header";
import StaffManagement from "../Components/StaffManagement";
import { Appointment } from "../Components/Appointment";
import { PatientManagement } from "../Components/PatientManagement";
import { Nurse } from "../Components/Nurse"; // Assuming Nurse component exists
import { History } from "../Components/History"; // Import the History component
import LogoutIcon from '@mui/icons-material/Logout';
import Analytics from "../Components/Analytics";
import { Help } from "../Components/Help";
import Settings from "../Components/Settings";
import moment from 'moment';
import "../Styles/Dashboard.css"; // Ensure this CSS file is correctly imported

export function Dashboard() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [targetView, setTargetView] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Set theme based on time
  useEffect(() => {
    const hour = moment().hour();
    setTheme(hour >= 6 && hour < 18 ? 'light' : 'dark');
  }, []);

  const services = [
    { id: 1, name: "Dashboard", View: <Dash /> },
    { id: 2, name: "Appointments", View: <Appointment /> },
    { id: 3, name: "Patients", View: <PatientManagement /> },
    { id: 4, name: "Staff Management", View: <StaffManagement /> },
    { id : 5, name: "Medical Records"},
    { id : 6, name: "Billing & Invoices"},
    { id : 6, name: "Rooms & Beds"},
    { id: 7, name: "Analytics", View: <Analytics /> },
    { id: 8, name: "Nurse", View: <Nurse /> }, // Add Nurse component
    { id: 9, name: "History", View: <History /> }, // Add History component
    { id: 10, name: "Help", View: <Help /> },
    { id: 11, name: "Settings", View: <Settings /> }
  ];

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = theme === 'light' ? "#E0FFFF" : "#444";
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = "";
  };

  const handleLogout = () => {
    localStorage.setItem('accessToken', "null");
    navigate('/');
  };

  const Error = () => (
    <div className="row">
      <h3 className="text-center text-danger">ERROR</h3>
    </div>
  );

  const token = localStorage.getItem('accessToken');
  if (token !== "null") return <Error />;

  return (
    <div className="dashboard-container" style={{ display: 'flex', backgroundColor: '#f5f7fa' }}>
      <div className="sidebar" style={{
        width: '250px',
        backgroundColor: 'white',
        color: 'black',
        fontWeight:"bold",
        padding: '20px',
        boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
      }}>
        <div className="sidebar-content">
          <div className="text-center">
             <h3 style={{ color: "black", fontWeight: "bold" }}>Life <span style={{ color: "#22d3ee" }}>Care</span></h3>
          </div>
          <div>
            {services.map((service) => (
              <div key={service.id}>
                <button
                  className="service-btn"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => setTargetView(service.id)}
                  style={{
                    width: '100%',
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: 'black',
                    padding: '10px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: '16px',
                    transition: 'background-color 0.3s',
                  }}
                >
                  {service.name}
                </button>
              </div>
            ))}
            <div className="text-center" style={{ marginTop: '20px' }}>
              <button className="logout-btn" onClick={handleLogout} style={{
                backgroundColor: '#ff4757',
                color: '#ffffff',
                border: 'none',
                padding: '10px 15px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                transition: 'background-color 0.3s',
              }}>
                <LogoutIcon style={{ marginRight: '8px' }} /> Log out
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content" style={{ flex: 1, padding: '20px' }}>
        <Header />
        <div className="content-container" style={{ marginTop: '20px' }}>
          {services.map((service) => (
            <div key={service.id} style={{ display: service.id === targetView ? 'block' : 'none' }}>
              {service.View}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
