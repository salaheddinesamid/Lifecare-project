import React from "react";
import "../Styles/Header.css";
import logo from "../doctor.png";
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ContrastIcon from '@mui/icons-material/Contrast';

export function Header({ toggleMode }) {
  return (
    <div className="header-container">
      <div className="header-left">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <h5>Salaheddine</h5>
      </div>
      <div className="header-right">
        <button className="icon-btn"><MarkEmailUnreadIcon /></button>
        <button className="icon-btn"><NotificationsIcon /></button>
        <button className="icon-btn" onClick={toggleMode}><ContrastIcon /></button>
      </div>
    </div>
  );
}
