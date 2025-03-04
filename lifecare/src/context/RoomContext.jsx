import React, { createContext, useState } from "react";

const RoomContext = createContext(null);

export const RoomProvider = ({ children }) => {
    const [currentRoom, setCurrentRoom] = useState(null);

    const setRoom = (room) => {
        setCurrentRoom(room);
    };

    return (
        <RoomContext.Provider value={{ currentRoom, setRoom }}>
            {children} 
        </RoomContext.Provider>
    );
};

export default RoomContext;
