import React from "react";
import AnnounceLogo from "../doctor_home.jpeg";
import VaccinesIcon from '@mui/icons-material/Vaccines';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
export function Home(){

    function Header(){
        return(
            <header>
                <div className="row d-flex align-items-center" style={{
                  padding:30
                }}>
                  <div className="col-xl-3">
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
                      <a href="" style={{
                        textDecoration:"none",
                        color:"#e7e5e4"
                      }}>Home</a>
                    </div>
                    <div className="col">
                      <a href="" style={{
                        textDecoration:"none",
                        color:"#e7e5e4"
                      }}>Department</a>
                    </div>
                    <div className="col">
                      <a href="" style={{
                        textDecoration:"none",
                        color:"#e7e5e4"
                      }}>Doctors</a>
                    </div>
                    <div className="col">
                      <a href="" style={{
                        textDecoration:"none",
                        color:"#e7e5e4"
                      }}>Contact</a>
                    </div>
                  </div>
                  <div className="col-xl-2">
                    <button className="btn " style={{
                      backgroundColor: "#22d3ee",
                      color:"white"
                    }}>Make an appointment</button>
                  </div>
                </div>
            </header>
        )
    }
    function Announce(){
      return(
        <div className="row" style={{
          
          padding:30  // Prevent the image from repeating
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
    function Services(){
      return(
        <div className="row mt-4 mb-4">
          <div className="col" style={{
            backgroundColor:"#cffafe",
            padding:20
          }}>
            <VaccinesIcon/>
            <h4>Hospitality</h4>
            <p>Clinical excellence must be the priority for any health care service provider</p>
          </div>
          <div className="col" style={{
            backgroundColor:"#22d3ee",
            padding:20
          }}>
            <AddIcCallIcon/>
            <h4>Emergency Care</h4>
            <p>Clinical excellence must be the priority for any health care service provider</p>
          </div>
          <div className="col" style={{
            backgroundColor:"#cffafe",
            padding:20
          }}>
            <LocalHospitalIcon/>
            <h4>Chamber Service</h4>
            <p>Clinical excellence must be the priority for any health care service provider</p>
            <p></p>
          </div>
        </div>
      )
    }
    function Footer(){
      return(
        <div className="row mt-4 ">
          <div className="col">
            <FacebookIcon/>
            <LinkedInIcon/>
            <GoogleIcon/>
          </div>
          <div className="col">
            <p>&copy; {new Date().getFullYear()} EBooking. All rights reserved.</p>
          </div>
          <div className="col">
            <PhoneForwardedIcon/>:+212 509090909
            <MailOutlineIcon/>:lifecare.support@gmail.com
          </div>
        </div>
      )
    }
    return(
        <div className="row">
            <Header/>
            <Announce/>
            <Services/>
            <Footer/>
        </div>
    )
}