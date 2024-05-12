import React from "react";
import { Card } from "./Card";
import { PatientManagement } from "./PatientManagement";
import { Patient } from "./Patient";
import { Doctor } from "./Doctors";

export function Dash(){
    const cards = [
        {
            "id":1,
            "title":"Total Patient",
            "backgroundColor":"#7CC6FE",
            "spanName":"personal_injury",
            "data":260
        },
        {
            "id":2,
            "title":"Total Appointment",
            "backgroundColor":"#C884A6",
            "spanName":"calendar_month",
            "data":260
        },
        {
            "id":3,
            "title":"Total Surgery",
            "backgroundColor":"#D81E5B",
            "spanName":"oncology",
            "data":260
        },
        {
            "id":4,
            "title":"Total Revenue",
            "backgroundColor":"#FCD0A1",
            "backgroundImage":"linear-gradient(to right, #f9b9e5, #f4ccf2, #f3dffb, #f6f0ff, #ffffff)",
            "spanName":"account_balance_wallet",
            "data":260
        }
    ]
    return(
        <div className="row">
            <div className="row mt-4" style={{
               display:"grid",
               gridTemplateColumns:"1fr 1fr 1fr 1fr"
        }}>
            
                {
                    cards.map((card)=>(
                        <Card title={card.title} backgroundColor={card.backgroundColor} spanName={card.spanName}/>
                    ))
                }
             </div>
             <div className="row mt-4" style={{
                justifyContent:"space-between"
             }}>
                <div className="col-xl-8 me-1">
                    <div className="row">
                        <PatientManagement/>
                    </div>
                </div>
                <div className="col">
                    <div className="row" >
                        <Patient/>
                    </div>
                    <div className="row">
                        <Doctor/>
                    </div>
                </div>
             </div>
        </div>
    )
}