import React, { useEffect, useState } from "react";
import axios from "axios";
import maleDoc from "./doctor_char_male.jpg";
import femaleDoc from "./doctor_char_female.jpg";
import './Doctor.css'; // Create and import a CSS file

export function Doctor() {
    const [doctors, setDoctors] = useState([]);
    const token = localStorage.getItem('accessToken');

    useEffect(() => {
        if (token) {
            axios.get('http://localhost:8080/doctor/', {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }).then((res) => {
                setDoctors(res.data);
            }).catch((error) => {
                console.error("Error fetching doctors:", error);
            });
        }
    }, [token]);

    return (
        <div className="doctor-container">
            <div className="doctor-header">
                <div className="doctor-title">
                    <h5>Doctor List</h5>
                </div>
                <div className="doctor-see-all">
                    <p>See all</p>
                </div>
            </div>
            <div className="doctor-list">
                {doctors.map((doctor) => (
                    <div className="doctor-item" key={doctor.id}>
                        <div className="doctor-image">
                            <img src={doctor.gender === "Male" ? maleDoc : femaleDoc} alt="" className="doctor-avatar" />
                        </div>
                        <div className="doctor-info">
                            <p>{doctor.fullName}</p>
                            <p className="doctor-specialization">{doctor.specialization}</p>
                        </div>
                        <div className="doctor-status">
                            <p className={doctor.status === "Available" ? "status-available" : "status-unavailable"}>
                                {doctor.status}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
