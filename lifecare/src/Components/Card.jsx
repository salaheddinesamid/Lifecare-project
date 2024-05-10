import React, { useState } from "react";


export function Card(props){
    const [title,setTitle] = useState(props.title)
    const [spanClassName,setSpanClassName] = useState(props.className);
    const [backgroundColor,setBackgroundColor] = useState(props.backgroundColor);
    return(
        <div className="col-xl-10" style={{
            borderRadius:10,
            backgroundColor:backgroundColor,
            height:200,
            
        }}>
            <div className="row">
                <div className="col-xl-3">
                    <span className={spanClassName}></span>
                </div>
                <div className="col-xl-9">
                    <h3></h3>
                </div>
            </div>
            <div className="row">

            </div>
        </div>
    )
}