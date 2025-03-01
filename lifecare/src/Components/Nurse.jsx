// src/Components/Nurse.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import '../Styles/Nurse.css'; // Create and import a CSS file for styling

export function Nurse() {
    const [nurses, setNurses] = useState([]);
    const token = localStorage.getItem('accessToken');

    useEffect(() => {
        if (token) {
            axios.get('http://localhost:8080/staff-management/get_all_nurses', {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }).then((res) => {
                setNurses(res.data);
            }).catch((error) => {
                console.error("Error fetching nurses:", error);
            });
        }
    }, [token]);

    return (
        <div className="nurse-container">
            <div className="nurse-header">
                <div className="nurse-title">
                    <h5>Nurse List</h5>
                </div>
                <div className="nurse-see-all">
                    <p>See all</p>
                </div>
            </div>
            <div className="nurse-list">
                {nurses.map((nurse) => (
                    <div className="nurse-item" key={nurse.id}>
                        <div className="nurse-image">
                            
                        </div>
                        <div className="nurse-info">
                            <p>{nurse.fullName}</p>
                            <p className="nurse-specialization">{nurse.specialization}</p>
                        </div>
                        <div className="nurse-status">
                            <p className={nurse.status === "Available" ? "status-available" : "status-unavailable"}>
                                {nurse.status}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
