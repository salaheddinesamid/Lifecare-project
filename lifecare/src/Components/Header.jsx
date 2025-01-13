import React, { useEffect, useState } from "react";
import "../Styles/Header.css";
import logo from "../doctor.png";
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import NotificationsIcon from '@mui/icons-material/Notifications';
//import ContrastIcon from '@mui/icons-material/Contrast';
import ChatIcon from '@mui/icons-material/Chat';
import axios from "axios";

export function Header({ toggleMode }) {
  const token = localStorage.getItem('accessToken');
  const [adminName,setAdminName] = useState("");
  useEffect(()=>{
    axios.get("http://localhost:8080/admin/getadmin", {
      headers: { "Authorization": `Bearer ${token}` }
    })
    .then(res=>setAdminName(res.data.firstName))
    .catch(error=>console.log(error))
  })
  return (
    <div className="header-container">
      <div className="header-left">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <h5>{adminName}</h5>
      </div>
      <div className="header-right">
        <button className="icon-btn"><MarkEmailUnreadIcon /></button>
        <button className="icon-btn"><NotificationsIcon /></button>
        <button className="icon-btn"><ChatIcon/></button>
      </div>
    </div>
  );
}
