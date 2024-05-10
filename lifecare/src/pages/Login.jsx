import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export function Login(){
    let [email,setEmail] = useState("");
    let [password,setPassword] = useState("")
    let user = {email,password}
    let [token,setToken] = useState(localStorage.getItem('token'));
    const navigate = useNavigate();
    const Login = async ()=>{
        await axios.post('http://localhost:8080/admin/authenticate',JSON.stringify(user),{
            headers:{
                'Content-Type ' : 'application/json'
            }
        }).then((res)=>{
            localStorage.setItem('accessToken',res.data)
            console.log(user)
        }).then(
            ()=>{
                if(token !== undefined){
                    navigate('/dashboard')
                }else{
                    navigate('/')
                }
            }
        )
    }
    return(
        <div className="row mt-4">
            <div className="row mt-4">
                <div className="row mt-2 ">
                    <div className="col-xl-12 mt-3  d-inline-flex justify-content-center">
                        <h3 style={{
                            fontWeight:"bolder"
                        }}>Life <span style={{color:"#00FFFF"}}>Care</span> <span class="material-symbols-outlined" style={{color:"white"}}>healing</span> </h3>
                    </div>
                </div>
                <div className="row mt-4 d-inline-flex justify-content-center">
                    <div className="col-xl-3">
                        <input type="text" name="" id="1" className="form-control" placeholder="Username" value={email} onChange={(e)=>{
                            setEmail(e.target.value)
                        }} />
                    </div>
                </div>
                <div className="row d-inline-flex justify-content-center mt-4">
                    <div className="col-xl-3">
                        <input type="password" name="" id="2" className="form-control" placeholder="Password" value={password} onChange={(e)=>{
                            setPassword(e.target.value)
                        }} />
                    </div>
                </div>
                <div className="row d-inline-flex justify-content-center mt-4">
                    <div className="col-xl-3">
                        <button className="btn" style={{backgroundColor:"#00FFFF",fontWeight:"bolder"}} onClick={Login}>Log in</button>
                    </div>
                </div>
            </div>
        </div>
    )
}