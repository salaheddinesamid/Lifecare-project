import React, { useState, useEffect } from "react";
import "../Styles/Dashboard.css";
import { useNavigate } from "react-router-dom";
import { Dash } from "../Components/Dash";
import { Header } from "../Components/Header";
import StaffManagement from "../Components/StaffManagement";
import { Appointment } from "../Components/Appointment";
import LogoutIcon from '@mui/icons-material/Logout';
import Analytics from "../Components/Analytics";
import {Help} from "../Components/Help";
import {Patient} from "../Components/Patient";

export function Dashboard({ toggleMode }) {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const services = [
    { id: 1, name: "Dashboard", View: <Dash /> },
    { id: 2, name: "Appointments", View: <Appointment /> },
    { id: 3, name: "Patient", View:<Patient/> },
    { id: 4, name: "Staff Management", View:<StaffManagement/> },
    { id: 5, name: "Analytics", View:<Analytics/> },
    { id: 6, name: "Financial" },
    { id: 7, name: "Help",View:<Help/> },
    { id: 8, name: "Settings" }
  ];

  const [targetView, setTargetView] = useState(1);
  const navigate = useNavigate();

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

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const Error = () => (
    <div className="row">
      <h3 className="text-center text-danger">ERROR</h3>
    </div>
  );

  const token = localStorage.getItem('accessToken');

  if (token === "null") return <Error />;

  return (
    <div className="container-fluid dashboard-container">
      <div className="row">
        <div className="col-md-3 sidebar">
          <div className="row mt-3">
            <div className="col text-center">
              <h3>
                Life <span className="brand-highlight">Care</span>
              </h3>
              <button onClick={toggleTheme} className="btn btn-secondary theme-toggle-btn">
                Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
              </button>
            </div>
            <div className="col-12">
              {services.map((service) => (
                <div className="row mt-3" key={service.id}>
                  <div className="col-12">
                    <button
                      className="btn btn-block service-btn"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => setTargetView(service.id)}
                    >
                      {service.name}
                    </button>
                  </div>
                </div>
              ))}
              <div className="row mt-4">
                <div className="col-12 text-center">
                  <button className="btn btn-danger logout-btn" onClick={handleLogout}>
                    <LogoutIcon /> Log out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9 main-content">
          <Header toggleMode={toggleMode} />
          <div className="content-container">
            {services.map((service) => (
              <div key={service.id} style={{ display: service.id === targetView ? 'block' : 'none' }}>
                {service.View}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
