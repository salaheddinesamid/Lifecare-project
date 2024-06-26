import React from "react";
import { Card } from "./Card";
import { PatientManagement } from "./PatientManagement";
import { Patient } from "./Patient";
import { Doctor } from "./Doctors";
import VaccinesIcon from '@mui/icons-material/Vaccines';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AirlineSeatIndividualSuiteIcon from '@mui/icons-material/AirlineSeatIndividualSuite';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

export function Dash() {
  const cards = [
    {
      id: 1,
      title: "Total Patient",
      backgroundColor: "#7CC6FE",
      icon: <AirlineSeatIndividualSuiteIcon />,
      url_request_data: "total_patient"
    },
    {
      id: 2,
      title: "Total Appointment",
      backgroundColor: "#C884A6",
      icon: <DateRangeIcon />,
      url_request_data: "total_appointment"
    },
    {
      id: 3,
      title: "Total Surgery",
      backgroundColor: "#D81E5B",
      icon: <VaccinesIcon />,
      url_request_data: "total_surgery"
    },
    {
      id: 4,
      title: "Total Revenue",
      backgroundColor: "#FCD0A1",
      icon: <MonetizationOnIcon />,
      url_request_data: "total_revenue"
    }
  ];

  return (
    <div className="container-fluid mt-3">
      <div className="row mt-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
        {cards.map((card) => (
          <Card 
            key={card.id} 
            title={card.title} 
            backgroundColor={card.backgroundColor} 
            icon={card.icon} 
            url={card.url_request_data} 
          />
        ))}
      </div>
      <div className="row mt-4" style={{ justifyContent: "space-between" }}>
        <div className="col-xl-7 me-1">
          <PatientManagement />
        </div>
        <div className="col-xl-4">
          <Patient />
          <Doctor />
        </div>
      </div>
    </div>
  );
}
