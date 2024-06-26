import React, { useEffect, useState } from "react";
import axios from 'axios';
import { icon } from "@fortawesome/fontawesome-svg-core";

export function Card(props){
    const [title,setTitle] = useState(props.title)
    const [icon,setIcon] = useState(props.icon);
    const [backgroundColor,setBackgroundColor] = useState(props.backgroundColor);
    const [data,setData] = useState(props.data);
    const url = props.url
    useEffect(()=>{
        axios.get(`http://localhost:8080/analytics/${url}`).then(res=>setData(res.data))
    })
    return(
        <div className="col-xl-11" style={{
            borderRadius:10,
            backgroundColor:backgroundColor,
            height:150,
        }}>
            <div className="row pt-3 d-inline-flex align-items-center">
                <div className="col-xl-2">
                    {icon}
                </div>
                <div className="col-xl-10">
                    <h6 style={{color:"black",fontWeight:"bold"}} className="ps-1">{title}</h6>
                </div>
            </div>
            <div className="row d-flex align-items-end">
                <div className="col-xl-6">
                    <h3 style={{fontWeight:"bold"}}>{data}</h3>
                </div>
                <div className="col-xl-6">

                </div>
            </div>
        </div>
    )
}