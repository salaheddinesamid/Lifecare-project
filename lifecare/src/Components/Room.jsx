import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import AirlineSeatIndividualSuiteIcon from '@mui/icons-material/AirlineSeatIndividualSuite';
import { useNavigate } from "react-router-dom";
import RoomContext from "../context/RoomContext";

export function RoomManagement() {
    const navigate = useNavigate();
    const [rooms, setRooms] = useState([]);
    const [filter, setFilter] = useState("");

    const {currentRoom, setRoom } = useContext(RoomContext); 


    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/room/get_all");
                setRooms(response.data);
            } catch (err) {
                console.error("Error fetching rooms:", err);
            }
        };

        fetchRooms();
    }, []);

    const filteredRooms = rooms.filter(room => 
        room.status.toLowerCase().includes(filter.toLowerCase())
    );

    const handleAllocationNavigation = (roomDetails) => {
        console.log(roomDetails)
        setRoom(roomDetails);
        navigate("/room/allocation");
    };

    return (
        <div className="container">
            <h2 className="my-3">Room Management</h2>
            
            <input
                type="text"
                placeholder="Filter by status..."
                className="form-control mb-3"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />

            <div className="row">
                {filteredRooms.length > 0 ? (
                    filteredRooms.map((room) => (
                        <div key={room.id} className="col-md-4">
                            <div className="card p-3 mb-3 shadow-sm">
                                <h5>Room {room.roomNumber}</h5>
                                <p><strong>Status:</strong> 
                                    <span className={`badge 
                                        ${room.status === "available" ? "bg-success" : 
                                        room.status === "unavailable" ? "bg-danger" : 
                                        "bg-secondary"}`}>
                                        {room.status}
                                    </span>
                                </p>
                                <p><strong>Capacity:</strong> {room.capacity} persons</p>
                                <p><strong>Price per Day:</strong> ${room.pricePerDay}</p>
                                <p><strong>Available From:</strong> {new Date(room.availableFrom).toLocaleDateString()}</p>
                                {room.status === "available" && (
                                    <button className="btn btn-primary" onClick={() => handleAllocationNavigation(room)}>
                                        Allocate <AirlineSeatIndividualSuiteIcon/>
                                    </button>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No rooms found.</p>
                )}
            </div>
        </div>
    );
}
