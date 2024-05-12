import React from "react";

export function Patient(){
    return(
        <div className="row" style={{
            backgroundColor:"#3A3F40",
            borderRadius:12,
            height:150
        }}>
            <div className="row pt-3 pb-2">
                <div className="col-xl-9">
                    <h5 style={{
                        fontWeight:"bold"
                    }}>
                        Patient
                    </h5>
                </div>
                <div className="col-xl-3">
                    <select name="" id="" className="form-select" style={{
                      backgroundColor:"transparent"
                }}></select>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-6">
                   <div className="row">
                    <div className="col-xl-6">
                      <span class="material-symbols-outlined" style={{
                        backgroundColor:"#59C9A5",
                        padding:"10px 10px",
                        borderRadius:100
                      }}>person_apron</span>
                    </div>
                    <div className="col-xl-6">
                        <div className="row">
                            <p style={{
                                fontWeight:"bold"
                            }}>200</p>
                        </div>
                        <div className="row">
                            <p style={{fontSize:10}}>New patient</p>
                        </div>
                    </div>
                   </div>
                </div>
                <div className="col-xl-6">
                  <div className="row">
                    <div className="col-xl-6">
                      <span class="material-symbols-outlined" style={{
                        backgroundColor:"red",
                        padding:"10px 10px",
                        borderRadius:100
                      }}>person_apron</span>
                    </div>
                    <div className="col-xl-6">
                        <div className="row">
                            <p style={{
                                fontWeight:"bold"
                            }}>200</p>
                        </div>
                        <div className="row">
                            <p style={{fontSize:10}}>Old patient</p>
                        </div>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    )
}