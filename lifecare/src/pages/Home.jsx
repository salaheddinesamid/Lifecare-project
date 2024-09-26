import React from "react";
import AnnounceLogo from "../doctor_home.jpeg"
export function Home(){

    function Header(){
        return(
            <header>
                <div className="row d-flex align-items-center" style={{
                  padding:30
                }}>
                  <div className="col-xl-4">
                      <h3 style={{
                        color:"black",
                        fontWeight:"bold"
                      }}>Life <span style={{
                        color:"#22d3ee"
                      }}>Care</span></h3>
                  </div>
                  <div className="col-xl-6 d-flex" style={{
                      color:"#e7e5e4",
                      fontWeight:"bold"
                    }}>
                    <div className="col" >
                      <p>Home</p>
                    </div>
                    <div className="col">
                      <p>Department</p>
                    </div>
                    <div className="col">
                      <p>Doctors</p>
                    </div>
                    <div className="col">
                      <p>Contact</p>
                    </div>
                  </div>
                  <div className="col-xl-2">
                    <button className="btn btn-primary">Make an appointment</button>
                  </div>
                </div>
            </header>
        )
    }
    function Announce(){
      return(
        <div className="row" style={{
          
          padding:20  // Prevent the image from repeating
        }}>
          <div className="row">
            <h1 style={{
              fontSize:"100px"
            }}>Health Care</h1>
            <h2 style={{
              fontSize:"100px",
              fontWeight:"lighter"
            }}>For whole family</h2>
            <h5 style={{
              fontWeight:"lighter"
            }}>
              In health care sector,service quality if the facility of the hosiptal as healthcare service provider to consistently.
            </h5>
          </div>
          <div className="row justify-content-end mt-3">
            <div className="col-xl-5">
              <button className="btn" style={{
                backgroundColor: "#22d3ee"
              }}>Check out services</button>
            </div>
          </div>
        </div>

      )
    }
    return(
        <div className="row">
            <Header/>
            <Announce/>
        </div>
    )
}