import React, { useEffect, useState } from "react";

export function AppointmentDetails() {
    const [appointment, setAppointment] = useState(null);
    const [newAppointment, setNewAppointment] = useState({
        id: "",
        patient: "",
        address: "",
        date: "",
    });
    const [editingField, setEditingField] = useState("");

    useEffect(() => {
        const storedAppointment = localStorage.getItem("target_appointment");
        if (storedAppointment) {
            const parsedAppointment = JSON.parse(storedAppointment);
            setAppointment(parsedAppointment);
            setNewAppointment({
                id: parsedAppointment.idNumber || "",
                patient: parsedAppointment.patient || "",
                address: parsedAppointment.address || "",
                date: parsedAppointment.date || "",
            });
        }
    }, []);

    const handleEditClick = (field) => {
        setEditingField(field);
    };

    const handleSaveClick = () => {
        setAppointment((prev) => ({
            ...prev,
            [editingField]: newAppointment[editingField],
        }));
        setEditingField("");
    };

    const handleChange = (e) => {
        setNewAppointment({
            ...newAppointment,
            [editingField]: e.target.value,
        });
    };

    return (
        <div className="d-flex justify-content-center">
            <div className="col-xl-5 mt-3 mb-3">
                <div>
                    <h1>Appointment Details:</h1>
                </div>
                {appointment ? (
                    <div>
                        <div>
                            <p className="d-inline-block"><b>Patient:</b></p>
                            {editingField === "patient" ? (
                                <div className="d-inline-block">
                                    <input
                                        type="text"
                                        value={newAppointment.patient}
                                        onChange={handleChange}
                                    />
                                    <button 
                                        className="btn btn-primary"
                                        onClick={handleSaveClick}
                                    >
                                        Save
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <p className="d-inline-block">{newAppointment.patient}</p>
                                    <button 
                                        className="d-inline-block btn btn-light"
                                        onClick={() => handleEditClick("patient")}
                                    >
                                        Edit
                                    </button>
                                </>
                            )}
                        </div>
                        <div>
                            <p className="d-inline-block"><b>ID:</b></p>
                            {editingField === "id" ? (
                                <div className="d-inline-block">
                                    <input
                                        type="text"
                                        value={newAppointment.id}
                                        onChange={handleChange}
                                    />
                                    <button 
                                        className="btn btn-primary"
                                        onClick={handleSaveClick}
                                    >
                                        Save
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <p className="d-inline-block">{newAppointment.id}</p>
                                    <button 
                                        className="d-inline-block btn btn-light"
                                        onClick={() => handleEditClick("id")}
                                    >
                                        Edit
                                    </button>
                                </>
                            )}
                        </div>
                        <div>
                            <p className="d-inline-block"><b>Address:</b></p>
                            {editingField === "address" ? (
                                <div className="d-inline-block">
                                    <input
                                        type="text"
                                        value={newAppointment.address}
                                        onChange={handleChange}
                                    />
                                    <button 
                                        className="btn btn-primary"
                                        onClick={handleSaveClick}
                                    >
                                        Save
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <p className="d-inline-block">{newAppointment.address}</p>
                                    <button 
                                        className="d-inline-block btn btn-light"
                                        onClick={() => handleEditClick("address")}
                                    >
                                        Edit
                                    </button>
                                </>
                            )}
                        </div>
                        <div>
                            <p className="d-inline-block"><b>Date:</b></p>
                            {editingField === "date" ? (
                                <div className="d-inline-block">
                                    <input
                                        type="text"
                                        value={newAppointment.date}
                                        onChange={handleChange}
                                    />
                                    <button 
                                        className="btn btn-primary"
                                        onClick={handleSaveClick}
                                    >
                                        Save
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <p className="d-inline-block">{newAppointment.date}</p>
                                    <button 
                                        className="d-inline-block btn btn-light"
                                        onClick={() => handleEditClick("date")}
                                    >
                                        Edit
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                ) : (
                    <p>No appointment details available.</p>
                )}
                <div>
                    <button className="btn btn-danger">Go back to dashboard</button>
                </div>
            </div>
        </div>
    );
}
