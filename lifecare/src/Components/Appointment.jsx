import React, { useEffect, useState } from "react";
import axios from "axios";


export function Appointment(){
    const [appointments,setAppointments] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8080/appointments/").then(res=>setAppointments(res.data));
    },[])
    return(
        <div className="row" style={{
            backgroundColor:"#3A3F40",
            height:700,
            borderRadius:15,
            padding:"15px 15px"
        }}>
            <div className="col-xl-12">
                <div className="row mt-2 mb-2">
                    <div className="col-xl-11">
                        <h5>Appointments</h5>
                    </div>
                    <div className="col-xl-1">
                        <p style={{
                            color:"#00FFFF",
                            fontWeight:"bold"
                        }}>See All</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-10">
                        <input type="text" className="form-control" placeholder="Search here" style={{
                            backgroundColor:"transparent"
                        }}/>
                    </div>
                    <div className="col-xl-2">
                        <button className="btn" style={{
                            backgroundColor:"#18A558"
                        }}>Add Apoointment</button>
                    </div>
                </div>
                <div className="row mt-4">
                    
                        <div className="row mt-4 mb-3">
                            <div className="col-xl-3" style={{
                                borderRight:"0.3px solid white",
                                height:'20px'
                            }}>
                                <p style={{
                                    fontWeight:'bold'
                                }}>Name</p>
                            </div>
                            <div className="col" style={{
                                borderRight:"0.3px solid white",
                                height:'20px'
                            }}>
                                <p style={{
                                    fontWeight:'bold'
                                }}>Age</p>                            </div>
                            <div className="col" style={{
                                borderRight:"0.3px solid white",
                                height:'20px'
                            }}>
                                <p style={{
                                    fontWeight:'bold'
                                }}>Fee</p>
                            </div>
                            <div className="col" style={{
                                borderRight:"0.3px solid white",
                                height:'20px'
                            }}>
                                <p style={{
                                    fontWeight:'bold'
                                }}>Date</p>
                            </div>
                            <div className="col" style={{
                                borderRight:"0.3px solid white",
                                height:'20px'
                            }}>
                                <p style={{
                                    fontWeight:'bold'
                                }}>Time</p>
                            </div>
                            <div className="col" style={{
                                borderRight:"0.3px solid white",
                                height:'20px'
                            }}>
                                <p style={{
                                    fontWeight:'bold'
                                }}>Doctor Name</p>
                            </div>
                        </div>
                        <div className="row">
                            {
                                appointments.map((appointment)=>(
                                    <div className="row mt-4" style={{
                                        height:"40px",
                                        
                                    }}>
                                        <div className="col-xl-3">
                                            <p>{appointment.patient}</p>
                                        </div>
                                        <div className="col">
                                            <p>{appointment.age}</p>
                                        </div>
                                        <div className="col">
                                            <p>{appointment.fees} $</p>
                                        </div>
                                        <div className="col">
                                            <p>{appointment.date}</p>
                                        </div>
                                        <div className="col">

                                        </div>
                                        <div className="col">

                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
    )
}