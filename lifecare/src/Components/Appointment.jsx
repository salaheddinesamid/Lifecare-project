import React, { useEffect, useState } from "react";
import axios from "axios";
import cities from "./cities_and_regions_combined.json"
import diseasesFile from "./diagnosis.json"
import { faL } from "@fortawesome/free-solid-svg-icons";
export function Appointment(){
    const [listOfDoctors,setListOfDoctors] = useState([])
    useEffect(()=>{
        let req = axios.get('http://localhost:8080/doctor').then(res=>setListOfDoctors(res.data))
      },[listOfDoctors])
    const [appointments,setAppointments] = useState([]);
    const [view,setView] = useState(0);
    let [token,setToken] = localStorage.getItem('accessToken')
    const components = [
        {
            "id":0,
            "name":"Appointment Management",
            "view": <AppointmentManagement/>
        },
        {
            "id":1,
            "name":"Request Appointment",
            "view":<AddAppointment/>
        }
    ]
    useEffect(()=>{
        axios.get("http://localhost:8080/appointments/").then(res=>setAppointments(res.data));
    },[])
    
    function AddAppointment(){
        let [disease,setDisease] = useState("");
        useEffect(() => {
            if (disease) {
              const selectedDisease = diseaseData.find((d) => d.name === disease);
              if (selectedDisease) {
                setTotalPrice(selectedDisease.price);
              } else {
                setTotalPrice(0);
              }
            }
          }, [disease]);
        const citiesData = cities
        const diseaseData = diseasesFile
        const [patient,setPatient] = useState("")
        const [idNumber,setIdNumber] = useState("")
        const [dateOfBirth,setDateOfBirth] = useState("");
        const [date,setDate]= useState(new Date().getDate())
        const [address,setAddress] = useState("");
        const [postalCode,setPostalCode] = useState("");

        
        let [totalPrice,setTotalPrice] = useState(0);
        let [fees,setFees] = useState(totalPrice)
        const [termsChecked,setTermsChecked] = useState(false);

        let appointmentObject = {patient,idNumber,address,fees};

        function submitRequest(){
            let req = axios.post('http://localhost:8080/appointments/new',{
                Headers:{
                    'Content-Type ' : 'application/json',
                    "Authorization": `Bearer ${token}`
                },
                
            },JSON.stringify(appointmentObject))

            
        }
        return(
            <div className="row" style={{
            }}>
                <div className="row mt-2 mb-4 d-inline-flex justify-content-center">
                    <div className="col-xl-4">
                        <h2>Request Appointment</h2>
                    </div>
                </div>
                <div className="row d-inline-flex justify-content-center">
                    <div className="col-xl-4">
                        <input type="text" placeholder="Full Name" className="form-control" value={patient} onChange={(e)=>{
                            setPatient(e.target.value)
                        }} />
                    </div>
                    <div className="col-xl-4">
                        <input type="text" placeholder="ID Number" className="form-control" value={idNumber} onChange={(e)=>{
                            setIdNumber(e.target.value)
                        }} />
                    </div>
                </div>
                <div className="row mt-3 d-inline-flex justify-content-center">
                    <div className="col-xl-4">
                        <input type="text" placeholder="Date of Birth DD-MM-YYYY" className="form-control" value={dateOfBirth} onChange={(e)=>{
                            setDateOfBirth(e.target.value)
                        }} />
                    </div>
                    <div className="col-xl-4">
                      <select name="city" id="city-select" className="form-select">
                        {citiesData.map((city) => (
                            <option key={city.id} value={city.id}>{city.name}</option>
                        ))}
                      </select>
                    </div>

                </div>
                <div className="row mt-3 d-inline-flex justify-content-center">
                    <div className="col-xl-4">
                        <input type="text" name="" id="" placeholder="Address" className="form-control" value={address} onChange={(e)=>{
                            setAddress(e.target.value)
                        }} />
                    </div>
                    <div className="col-xl-4">
                        <input type="text" placeholder="Postal Code" className="form-control" value={postalCode} onChange={(e)=>{
                            setPostalCode(e.target.value)
                        }} />
                    </div>
                </div>

                
                <div className="row mt-4 d-inline-flex justify-content-center">
                    <div className="col-xl-4">
                        <select name="" id="" className="form-select" onChange={(e)=>{
                            setDisease(e.target.value)
                            for(let i = 0;i < diseaseData.length;i++){
                                if(disease === diseaseData[i].name){
                                    setTotalPrice(diseaseData[i].price)
                                    break
                                }
                                else{
                                    setTotalPrice(0)
                                }
                            }
                        }}>
                            {diseaseData.map((disease)=>(
                                <option key={disease.id} value={disease.name}>{disease.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-xl-4 align-item-end">
                        <h4>Total Price: {totalPrice} £</h4>
                    </div>
                </div>
                <div className="row mt-3 mb-3 d-inline-flex justify-content-center">
                    <div className="col-xl-8">
                        <input type="checkbox" name="" id="" value={termsChecked} />
                        <p>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</p>
                    </div>
                </div>
                <div className="row mt-4 mb-4 d-inline-flex justify-content-center">
                    <div className="col-xl-10">
                        <button className="btn btn-primary col-xl-12" onClick={submitRequest}>Confirm</button>
                    </div>
                </div>
            </div>
        )
    }
    function AppointmentManagement(){
        return(
            <div className="row">
                <div className="col-xl-12">
                <div className="row mt-2 mb-2">
                    <div className="col-xl-11">
                        <h5>Appointments</h5>
                    </div>
                    <div className="col-xl-1">
                        <p style={{
                            color:"#00FFFF",
                            fontWeight:"bold"
                        }}>See All</p>
                    </div>
                </div>
                  
                <div className="row">
                    <div className="col-xl-10">
                        <input type="text" className="form-control" placeholder="Search here" style={{
                            backgroundColor:"transparent"
                        }}/>
                    </div>
                    <div className="col-xl-2">
                        <button className="btn" style={{
                            backgroundColor:"#18A558"
                        }} onClick={()=>{
                            setView(1)
                        }}>Add Apoointment</button>
                    </div>
                </div>
                  <div className="row mt-4">
                    
                        <div className="row mt-4 mb-3">
                            <div className="col-xl-3" style={{
                                borderRight:"0.3px solid white",
                                height:'20px'
                            }}>
                                <p style={{
                                    fontWeight:'bold'
                                }}>Name</p>
                            </div>
                            <div className="col" style={{
                                borderRight:"0.3px solid white",
                                height:'20px'
                            }}>
                                <p style={{
                                    fontWeight:'bold'
                                }}>Age</p>
                            </div>
                            <div className="col" style={{
                                borderRight:"0.3px solid white",
                                height:'20px'
                            }}>
                                <p style={{
                                    fontWeight:'bold'
                                }}>Fee</p>
                            </div>
                            <div className="col" style={{
                                borderRight:"0.3px solid white",
                                height:'20px'
                            }}>
                                <p style={{
                                    fontWeight:'bold'
                                }}>Date</p>
                            </div>
                            <div className="col" style={{
                                borderRight:"0.3px solid white",
                                height:'20px'
                            }}>
                                <p style={{
                                    fontWeight:'bold'
                                }}>Time</p>
                            </div>
                            <div className="col" style={{
                                borderRight:"0.3px solid white",
                                height:'20px'
                            }}>
                                <p style={{
                                    fontWeight:'bold'
                                }}>Doctor Name</p>
                            </div>
                        </div>
                        <div className="row">
                            {
                                appointments.map((appointment)=>(
                                    <div className="row mt-4" style={{
                                        height:"40px",
                                        
                                    }}>
                                        <div className="col-xl-3">
                                            <p>{appointment.patient}</p>
                                        </div>
                                        <div className="col">
                                            <p>{appointment.age}</p>
                                        </div>
                                        <div className="col">
                                            <p>{appointment.fees} $</p>
                                        </div>
                                        <div className="col">
                                            <p>{appointment.date}</p>
                                        </div>
                                        <div className="col">

                                        </div>
                                        <div className="col">

                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                  </div>
                </div>
            </div>
        )
    }
    return(
        <div className="row" style={{
            backgroundColor:"#3A3F40",
            borderRadius:15,
            padding:"15px 15px"
        }}>

            {
                components.map((component)=>(
                    view === component.id ? component.view : ""
                ))
            }
            </div>
    )
}