import React, { useContext, useEffect, useState } from "react";
import RoomContext from "../context/RoomContext";
import axios from "axios";


export function Allocation(){

    /*
    const [filteredRooms,setFilteredRooms] = rooms.filter(room=>{
        return room.status == "available";
    })
    */

    const [allocations,setAllocations] = useState([]);

    /*
    const fetchRooms = async() =>{

        let response = await axios.get('http:')
    }
    */
    const fetchAllocations = async()=>{

        let response = await axios.get("http://localhost:8080/api/allocation/get_all")
        .then((res)=>{
            setAllocations(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }

    const allocate = ()=>{

    }

    useEffect(()=>{
        fetchAllocations();
    },[])


    return(
        <div className="row">
            <div className="row">
                <h2>Recent Allocations</h2>
                <table className="appointment-table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>National ID</th>
              <th>Date</th>
              <th>Room Number</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {allocations.map((allocation) => (
              <tr key={allocation.allocationId} style={{cursor : "pointer"}}>
                <td>{allocation.patientDto.firstName +" "+ allocation.patientDto.lastName}</td>
                <td>{allocation.patientDto.nationalId}</td>
                <td>{allocation.date}</td>
                <td>{allocation.status}</td>
              </tr>
            ))}
          </tbody>
        </table> 
            </div>
            <div className="row">
                <h2>Available Rooms</h2>
            </div>
        </div>
    )
}