import React from "react";
import { Card } from "./Card";

export function Dash(){
    const cards = [
        {
            "id":1,
            "title":"Total Patient",
            "backgroundColor":"#7bdfdf"
        },
        {
            "id":2,
            "title":"Total Appointment",
            "backgroundColor":"#fedc77"
        },
        {
            "id":3,
            "title":"Total Surgery",
            "backgroundColor":"#e5f1f4"
        },
        {
            "id":4,
            "title":"Total Revenue",
            "backgroundColor":"#7bdfdf"
        }
    ]
    return(
        <div className="row" style={{
            display:"grid",
            gridTemplateColumns:"1fr 1fr 1fr 1fr"
        }}>
            
                {
                    cards.map((card)=>(
                        <Card title={card.title} backgroundColor={card.backgroundColor}/>
                    ))
                }
            
        </div>
    )
}