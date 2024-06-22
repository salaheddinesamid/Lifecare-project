import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../doctor.png"
export function Login(){
    let [email,setEmail] = useState("");
    let [password,setPassword] = useState("")
    let user = {email,password}
    let [token,setToken] = useState(localStorage.getItem('token'));
    const [trial,setTrial] = useState(0)
    const [authenticationFailed,setAuthenticationFailed] = useState(false);
    const [credentialsError,setCredentialsError] = useState("none")
    const navigate = useNavigate();

    const ShowError = ()=>{
        if(authenticationFailed &&(trial > 0)){
            setCredentialsError("block")
        }
    }
    const Login = async ()=>{
        await axios.post('http://localhost:8080/admin/authenticate',JSON.stringify(user),{
            headers:{
                'Content-Type ' : 'application/json'
            }
        }).then((res)=>{
            localStorage.setItem('accessToken',res.data.accessToken)
            console.log(res.data)
        }).then(
            ()=>{
                if(token !== "null"){
                    navigate('/dashboard')
                }else{
                    navigate('/')
                    setAuthenticationFailed(true)
                    setTrial(trial=>trial+=1)
                    ShowError();
                }
            }
        )
        console.log(user)
    }
    return(
        <div className="row" style={{height:850,position:""}}>
            <div className="col-xl-6" style={{marginTop:"100px"}}>
                <div className="row">
                  <div className="col-xl-12 mt-4 d-inline-flex justify-content-center">
                        <h3 style={{
                            fontWeight:"bolder",
                            fontSize:"100px",
                            color:"white",
                        }}>Life <span style={{color:"#00FFFF"}}>Care</span><span class="material-symbols-outlined" style={{fontSize:"50px",fontWeight:"bold"}}>ecg_heart</span></h3>
                    </div>
                 </div>
                 <div className="row">
                   <div className="col-xl-12 mt-4 d-inline-flex justify-content-center">
                        <img src={logo} alt="" style={{height:200}} />
                    </div>
                 </div>
              </div>
            <div className="col-xl-5" style={{backgroundColor:"white",height:"80%",marginTop:"5%",marginRight:"0px",borderRadius:20}}>
             <div className="row mt-4">
                <div className="row mt-4 ">
                    <div className="col-xl-12 mt-4  d-inline-flex justify-content-center">
                        <h3 style={{
                            fontWeight:"bolder"
                        }}>Life <span style={{color:"#00FFFF"}}>Care</span><span class="material-symbols-outlined" style={{fontSize:"50px",fontWeight:"bold"}}>ecg_heart</span></h3>
                    </div>
                </div>
                <div className="row d-inline-flex justify-content-center" style={{marginTop:"100px"}}>
                    <div class="form-group col-xl-6">
                      <label for="exampleInputEmail1">Email address</label>
                       <input type="email" class="form-control" id="1" aria-describedby="emailHelp" value={email} onChange={(e)=>{
                        setEmail(e.target.value)
                       }} placeholder="Enter email"/>
                           <small id="emailHelp" class="form-text text-muted" style={{display:"none"}}>We'll never share your email with anyone else.</small>
                    </div>
                </div>
                <div className="row d-inline-flex justify-content-center mt-4">
                    <div class="form-group col-xl-6">
                       <label for="exampleInputEmail1">Password</label>
                       <input type="password" class="form-control" id="2" aria-describedby="emailHelp" value={password}  onChange={(e)=>{
                        setPassword(e.target.value)
                       }} placeholder="Enter email"/>
                        <small id="emailHelp" class="form-text text-muted" style={{display:"none"}}>We'll never share your email with anyone else.</small>
                    </div>
                </div>
                <div className="row d-flex justify-content-center mt-4">
                    <div className="col-xl-6" style={{display:"flex",justifyContent:"space-between"}}>
                        <p>Remeber Me?</p>
                        <p style={{color:"#00008B"}}>Resest password</p>
                    </div>
                </div>
                <div className="row d-inline-flex justify-content-center mt-4">
                    <div className="col-xl-2">
                        <button className="btn" style={{backgroundColor:"#00FFFF",fontWeight:"bolder"}} onClick={Login}>Log in</button>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}