import React, { createContext, useState } from "react";

const AppointmentContext = createContext(null);

export const AppointmentProvider = ({children})=>{

    const [appointmentDetails,setAppointmentDetails] = useState(null);

    const updateAppointment = (data)=>{
        setAppointmentDetails(data);
    }

    return(
        <AppointmentContext.Provider value={{appointmentDetails,updateAppointment}}>
            {children}
        </AppointmentContext.Provider>
    )
};

export default AppointmentContext;