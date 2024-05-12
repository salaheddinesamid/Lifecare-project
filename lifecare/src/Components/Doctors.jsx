import React, { useEffect, useState } from "react";
import axios from "axios";
export function Doctor(){
    let [doctors,setDoctors] = useState([]);
    let token = localStorage.getItem('accessToken')
    useEffect(()=>{
        axios.get('http://localhost:8080/doctor/',{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        }).then((res)=>{
            setDoctors(res.data)
        })
    },[])
    return(
        <div className="row mt-3 pt-3 pb-4" style={{
            backgroundColor:"#3A3F40",
            borderRadius:12,
            
        }}>
            <div className="row">
                <div className="col-xl-9">
                    <h5>
                        Doctor List
                    </h5>
                </div>
                <div className="col-xl-3">
                    <p style={{
                        fontWeight:"bold",
                        color:"#00FFFF"
                    }}>See all</p>
                </div>
            </div>
            <div className="row mt-3">
                {
                    doctors.map((doctor)=>(
                        <div className="row">
                            <div className="col-xl-9">
                                <div className="row">
                                    <p>{doctor.fullName}</p>
                                </div>
                                <div className="row">
                                    <p style={{
                                        fontSize:"10px"
                                    }}>{doctor.specialization}</p>
                                </div>
                            </div>
                            <div className="col-xl-3 d-block">
                                <p style={{
                                    color: doctor.status == "Available" ? "#43CC3A" : "#CC3A45"
                                }}>{doctor.status}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}