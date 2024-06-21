import React from "react";
import "../Styles/Header.css"
import logo from "../doctor.png";
import TextField from "@mui/material/TextField";
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import NotificationsIcon from '@mui/icons-material/Notifications';


export function Header(){
    return(
        <div className="row mt-2">
            <div className="col-xl-8">
                <div className="row">
                    <div className="col-xl-10">
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-10">
                        
                    </div>
                </div>
            </div>
            <div className="col-xl-4">
                <div className="row d-flex align-items-center">
                  <div className="col-xl-2">
                     <MarkEmailUnreadIcon/>
                 </div>
                  <div className="col-xl-2">
                     <NotificationsIcon/>
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