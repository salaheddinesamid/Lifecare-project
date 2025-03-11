import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const RoomContext = createContext(null);

export const RoomProvider = ({ children }) => {
    const [currentRoom, setCurrentRoom] = useState(null);

    const [rooms,setRooms] = useState([]);

    const fetchRooms = async()=>{
        let response = await axios.get('http://localhost:8080/api/room/get_all')
        .then((res)=>{
            setRooms(res.data)
        })
        .catch((exception)=>{
            console.log(exception)
        })
    }

    useEffect(()=>{
        fetchRooms();
    },[])

    const setRoom = (room) => {
        setCurrentRoom(room);
    };

    return (
        <RoomContext.Provider value={{ currentRoom, setRoom, rooms }}>
            {children} 
        </RoomContext.Provider>
    );
};

export default RoomContext;
