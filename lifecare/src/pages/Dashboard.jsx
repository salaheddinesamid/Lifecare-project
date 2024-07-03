import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Dash } from "../Components/Dash";
import { Header } from "../Components/Header";
import StaffManagement from "../Components/StaffManagement";
import { Appointment } from "../Components/Appointment";
import { PatientManagement } from "../Components/PatientManagement";
import { Doctors } from "../Components/Doctors";
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
    { id: 5, name: "Analytics", View: <Analytics /> },
    { id: 6, name: "Nurse", View: <Nurse /> }, // Add Nurse component
    { id: 7, name: "History", View: <History /> }, // Add History component
    { id: 8, name: "Help", View: <Help /> },
    { id: 9, name: "Settings", View: <Settings /> }
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
  if (token === "null") return <Error />;

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="sidebar-content">
          <div className="text-center">
            <h3>Life <span className="brand-highlight">Care</span></h3>
          </div>
          <div>
            {services.map((service) => (
              <div key={service.id}>
                <button
                  className="service-btn"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => setTargetView(service.id)}
                >
                  {service.name}
                </button>
              </div>
            ))}
            <div className="text-center">
              <button className="logout-btn" onClick={handleLogout}>
                <LogoutIcon /> Log out
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content">
        <Header />
        <div className="content-container">
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
