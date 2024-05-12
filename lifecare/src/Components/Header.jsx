import React from "react";
import "../Styles/Header.css"
import logo from "../doctor.png";
import TextField from "@mui/material/TextField"

export function Header(){
    return(
        <div className="row mt-2 d-flex align-items-center">
            <div className="col-xl-4">
                <div className="row">
                    <div className="col-xl-10">
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-10">
                        
                    </div>
                </div>
            </div>
            <div className="col-xl-3" style={{color:'white'}}>
            <input class="form-control"  id="exampleDataList" placeholder="Type to search..."/>
            </div>
            <div className="col-xl-5">
                <div className="row d-flex align-items-center">
                  <div className="col-xl-2">
                   <span class="material-symbols-outlined">sms</span>
                 </div>
                  <div className="col-xl-2">
                   <span class="material-symbols-outlined">notifications</span>
                  </div>
                 <div className="col-xl-4">
                    <div className="row">
                        <div className="col-xl-4">
                            <img src={logo} alt="" style={{
                                height:40,
                                width:40,
                                borderRadius:100
                            }} />
                        </div>
                        <div className="col-xl-4">
                            <div className="row">
                               <h5>
                                Salaheddine
                               </h5>
                            </div>
                            <div className="row">
                               <p style={{
                                fontSize:10
                               }}>
                                Admin
                               </p>
                            </div>
                        </div>
                    </div>
                 </div>
                </div>
            </div>
        </div>
    )
}