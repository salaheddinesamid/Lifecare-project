import React, { useState } from "react";
import "../Styles/Dashboard.css";
import { useNavigate } from "react-router-dom";

import { Dash } from "../Components/Dash";
import { Header } from "../Components/Header";
import { Appointment } from "../Components/Appointment";
export function Dashboard(){
    const services = [
        {
            "id":1,
            "name":"Dashboard",
            "View": <Dash/>,
            "icon": {
                "className":"material-symbols-outlined",
                "value":"dashboard"
            }
        },
        {
            "id":2,
            "name":"Appointments",
            "View":<Appointment/>,
            "icon": {
                "className":"material-symbols-outlined",
                "value":"event_available"
            }
        },
        {
            "id":3,
            "name":"Patient",
            "icon": {
                "className":"material-symbols-outlined",
                "value":"personal_injury"
            }
        },
        {
            "id":4,
            "name":"Departments",
            "icon": {
                "className":"material-symbols-outlined",
                "value":"apartment"
            }
        },{
            "id":5,
            "name":"Analytics",
            "icon": {
                "className":"material-symbols-outlined",
                "value":"monitoring"
            }
        },
        {
            "id":6,
            "name":"Financial",
            "icon": {
                "className":"material-symbols-outlined",
                "value":"event_available"
            }
        },
        {
            "id":7,
            "name":"Help",
            "icon": {
                "className":"material-symbols-outlined",
                "value":"help"
            }
        },
        {
            "id":8,
            "name":"Settings",
            "icon": {
                "className":"material-symbols-outlined",
                "value":"settings"
            }
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
                token != "null"  ? 
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
                                   <button className="btn d-flex align-items-center" style={{color:"white",fontSize:"small"}} onMouseEnter={OnMouse} onMouseLeave={OnMouseLeave} onClick={()=>{
                                    setTargetView(service.id)
                                   }}><span className={service.icon.className}>{service.icon.value}</span> {service.name}</button>
                                </div>
                            </div>
                        ))
                    }
                    <div className="row d-flex align-items-end mt-4">
                      <div className="col-xl-10">
                        <button className="btn btn-danger"><span class="material-symbols-outlined" onClick={()=>{
                            localStorage.setItem('accessToken',null)
                            navigate('/')
                        }}>logout</span> Log out</button>
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
                                    service.id == targetView ? service.View : ""
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