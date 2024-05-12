import React from "react";

export function Doctor(){
    return(
        <div className="row mt-3 pt-3 pt-3" style={{
            backgroundColor:"#3A3F40",
            borderRadius:12,
            height:"300px"
        }}>
            <div className="row">
                <div className="col-xl-9">
                    <h5>
                        Doctor List
                    </h5>
                </div>
                <div className="col-xl-3">
                    <p style={{
                        fontWeight:"bold",
                        color:"#00FFFF"
                    }}>See all</p>
                </div>
            </div>
        </div>
    )
}