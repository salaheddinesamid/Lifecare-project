import React, { useState } from "react";


export function Card(props){
    const [title,setTitle] = useState(props.title)
    const [spanName,setSpanName] = useState(props.spanName);
    const [backgroundColor,setBackgroundColor] = useState(props.backgroundColor);
    const [data,setData] = useState(props.data);

    function getCardData(){
        
    }
    return(
        <div className="col-xl-11" style={{
            borderRadius:10,
            backgroundColor:backgroundColor,
            height:150,
        }}>
            <div className="row pt-3 d-flex align-items-center">
                <div className="col-xl-2">
                    <span className="material-symbols-outlined" style={{fontSize:50,color:"black",fontWeight:"bold"}}>{spanName}</span>
                </div>
                <div className="col-xl-10">
                    <h6 style={{color:"black",fontWeight:"bold"}} className="ps-1">{title}</h6>
                </div>
            </div>
            <div className="row d-flex align-items-end">
                <div className="col-xl-6">
                    <h3 style={{fontWeight:"bold"}}></h3>
                </div>
                <div className="col-xl-6">

                </div>
            </div>
        </div>
    )
}