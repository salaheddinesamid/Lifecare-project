import React, { useEffect, useState } from "react";
import "../Styles/Header.css";
import logo from "../images/doctor.png";
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';

export function Header() {
  const token = localStorage.getItem("accessToken");
  const storedAdmin = localStorage.getItem("admin");
  const adminDetails = storedAdmin ? JSON.parse(storedAdmin) : null;

  useEffect(() => {
    console.log(adminDetails);
  }, []);

  return (
    <div className="header-container">
      <div className="header-left">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <h5>Hello, {adminDetails ? adminDetails.firstName : "Guest"}</h5>
      </div>
      <div className="header-right">
        <button className="icon-btn"><MarkEmailUnreadIcon /></button>
        <button className="icon-btn"><NotificationsIcon /></button>
        <button className="icon-btn"><ChatIcon /></button>
      </div>
    </div>
  );
}
