import React from "react";
import { DataGrid} from '@mui/x-data-grid';


export function PatientManagement(){
    return(
        <div className="row" style={{
            backgroundColor:"#3A3F40",
            borderRadius:12
        }}>
            <div className="row pt-2 pb-2">
                <div className="col-xl-10">
                    <h5>Patients Management</h5>
                </div>
                <div className="col-xl-2">
                    <p style={{
                        color:"#00FFFF",
                        fontWeight:"bold"
                    }}>See all</p>
                </div>
            </div>
            <div className="row mt-2 mb-2">
                <div className="col-xl-8">
                   <input class="form-control" id="exampleDataList" placeholder="search patients name,id" style={{
                    backgroundColor:"transparent",
                    border:"1px solid black"
                   }}/>
                </div>
                <div className="col-xl-4 ">
                    <button className="btn d-flex align-items-center" style={{
                        backgroundColor:"#00FFFF"
                    }}><span class="material-symbols-outlined">tune</span>Advanced Filter</button>
                </div>
            </div>
            <div className="row mt-3 mb-3">
              <div className="row">
                <div className="col">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                </div>
                <div className="col">
                    <h6>ID</h6>
                </div>
                <div className="col">
                    <h6>Name</h6>
                </div>
                <div className="col">
                    <h6>Type</h6>
                </div>
                <div className="col">
                    <h6>Status</h6>
                </div>
                <div className="col">
                    <h6>Admit</h6>
                </div>
              </div>
            </div>
        </div>
    )
}