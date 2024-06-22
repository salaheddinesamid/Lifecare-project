import React, { useState } from "react";
import "../Styles/Dashboard.css";
import { useNavigate } from "react-router-dom";

import { Dash } from "../Components/Dash";
import { Header } from "../Components/Header";
import { Appointment } from "../Components/Appointment";
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessibleIcon from '@mui/icons-material/Accessible';
import ApartmentIcon from '@mui/icons-material/Apartment';
import TimelineIcon from '@mui/icons-material/Timeline';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HelpIcon from '@mui/icons-material/Help';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import LogoutIcon from '@mui/icons-material/Logout';
export function Dashboard(){
    const services = [
        {
            "id":1,
            "name":"Dashboard",
            "View": <Dash/>,
            "icon": <DashboardIcon/>
        },
        {
            "id":2,
            "name":"Appointments",
            "View":<Appointment/>,
            "icon": <CalendarMonthIcon/>
        },
        {
            "id":3,
            "name":"Patient",
            "icon": <AccessibleIcon/>
        },
        {
            "id":4,
            "name":"Departments",
            "icon": <ApartmentIcon/>
        },{
            "id":5,
            "name":"Analytics",
            "icon": <TimelineIcon/>
        },
        {
            "id":6,
            "name":"Financial",
            "icon": <AttachMoneyIcon/>
        },
        {
            "id":7,
            "name":"Help",
            "icon": <HelpIcon/>
        },
        {
            "id":8,
            "name":"Settings",
            "icon": <DisplaySettingsIcon/>
        }
    ]
    let [token,setToken] = localStorage.getItem('accessToken')
    let [targetView,setTargetView] = useState(1);
    const navigate = useNavigate();
    function OnMouse(e){
        e.target.style.backgroundColor = "#00FFFF"
    }
    function OnMouseLeave(e){
        e.target.style.backgroundColor = ""
    }
    const Error = ()=>{
        return(
            <div className="row">
                <h3 className="text-center text-danger">ERROR</h3>
            </div>
        )
    }
    return(
        <div className="row">
        {
                localStorage.getItem("accessToken") !== "null"  ? 
             <div className="row" style={{color:"white"}}>
                <div className="col-xl-2">
                   <div className="row">
                     <div className="row mt-3">
                         <div className="row">
                            <div className="col-xl-10 text-center">
                               <h3 className="text-center">
                                 Life <span style={{color:"#00FFFF",fontWeight:"bold"}}>Care </span>
                                </h3>
                            </div>
                        </div>
                              <div className="row justify-content-end">
                                 <div className="col-xl-10 ">

                                  {
                        services.map((service)=>(
                            <div className="row mt-4">
                                <div className="col-xl-12">
                                    <button key={service.id} className="btn d-flex align-items-center" style={{color:"white",fontSize:"small"}} onMouseEnter={OnMouse} onMouseLeave={OnMouseLeave} onClick={()=>{
                                    setTargetView(service.id)
                                   }}>{service.icon} {service.name}</button>
                                </div>
                            </div>
                        ))
                    }
                    <div className="row d-flex align-items-end mt-4">
                      <div className="col-xl-10">
                        <button className="btn btn-danger" onClick={()=>{
                            localStorage.setItem('accessToken',"null")
                            navigate('/')
                        }}><LogoutIcon/>Log out</button>
                      </div>
                    </div>
                </div>
            </div>
        </div>
                </div>
             </div>
                <div className="col-xl-10">
                    <div className="row">
                        <Header/>
                    </div>
                    <div className="row mt-3">
                    {
                        services.map((service)=>(
                            <div className="col-xl-12">
                                {
                                    service.id === targetView ? service.View : ""
                                }
                            </div>
                        ))
                    }
                    </div>
                </div>
        </div> : <Error/>
        } 
    </div>
        
    )
}