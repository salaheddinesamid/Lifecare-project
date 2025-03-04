import React, { useContext, useEffect, useState } from "react";
import RoomContext from "../context/RoomContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function RoomAllocation() {
    const navigate = useNavigate();
    const { currentRoom } = useContext(RoomContext);
    const [assignedPatient,setAssignedPatient] = useState(null)
    const [showSuccess,setShowSuccess] = useState(false)
    const [newPatient, setNewPatient] = useState({
        firstName: "",
        lastName: "",
        nationalId: "",
        address: "",
        phone: "",
        email: ""
    });

    const [allocationDto, setAllocationDto] = useState({
        patientDto : newPatient,
        roomId : currentRoom.id
    })

    const handleChange = (e) => {
        setNewPatient({ ...newPatient, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setAssignedPatient(newPatient);
        try{

            let res = await axios.post('http://localhost:8080/api/allocation/new',allocationDto)
            .then((res)=>{
                console.log(res.data)
            })
        }catch(err){
            throw err;
        }
        navigate("/admin/dashboard")
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h1 className="text-center my-4">🏥 Room Allocation</h1>
                </div>
            </div>

            <div className="row mt-4">
                
                <div className="col-md-6">
                    <div className="card shadow-lg border-0 rounded-3">
                        <div className="card-body">
                            <h3 className="card-title text-primary">Room Details</h3>
                            <hr />
                            <p><strong>Room Number:</strong> {currentRoom.roomNumber}</p>
                            <p>
                                <strong>Status:</strong>
                                <span className={`badge ms-2 
                                    ${currentRoom.status === "available" ? "bg-success" : 
                                    currentRoom.status === "unavailable" ? "bg-danger" : 
                                    "bg-secondary"}`}>
                                    {currentRoom.status}
                                </span>
                            </p>
                            <p><strong>Capacity:</strong> {currentRoom.capacity} persons</p>
                            <p><strong>Price per Day:</strong> ${currentRoom.pricePerDay}</p>
                            <p><strong>Available From:</strong> {new Date(currentRoom.availableFrom).toLocaleDateString()}</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card shadow-lg border-0 rounded-3">
                        <div className="card-body">
                            <h3 className="card-title text-primary">Patient Details</h3>
                            <hr />
                            {assignedPatient ? (
                                <>
                                    <p><strong>Name:</strong> {assignedPatient.firstName} {assignedPatient.lastName}</p>
                                    <p><strong>National ID:</strong> {assignedPatient.nationalId}</p>
                                    <p><strong>Address:</strong> {assignedPatient.address}</p>
                                    <p><strong>Phone:</strong> {assignedPatient.phone}</p>
                                    <p><strong>Email:</strong> {assignedPatient.email}</p>
                                </>
                            ) : (
                                <>
                                    <p className="text-muted">No patient assigned. Allocate the room to a new patient.</p>
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-2">
                                            <label className="form-label">First Name</label>
                                            <input type="text" className="form-control" name="firstName" onChange={handleChange} required />
                                        </div>
                                        <div className="mb-2">
                                            <label className="form-label">Last Name</label>
                                            <input type="text" className="form-control" name="lastName" onChange={handleChange} required />
                                        </div>
                                        <div className="mb-2">
                                            <label className="form-label">National ID</label>
                                            <input type="text" className="form-control" name="nationalId" onChange={handleChange} required />
                                        </div>
                                        <div className="mb-2">
                                            <label className="form-label">Address</label>
                                            <input type="text" className="form-control" name="address" onChange={handleChange} required />
                                        </div>
                                        <div className="mb-2">
                                            <label className="form-label">Phone</label>
                                            <input type="text" className="form-control" name="phone" onChange={handleChange} required />
                                        </div>
                                        <div className="mb-2">
                                            <label className="form-label">Email</label>
                                            <input type="email" className="form-control" name="email" onChange={handleChange} required />
                                        </div>
                                        <div className="row">
                                           <button type="submit" className="btn btn-primary mt-2">Allocate Room</button>
                                           <button className="btn btn-danger mt-2">Cancel</button>
                                        </div>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
