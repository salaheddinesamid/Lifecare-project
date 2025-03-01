import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/doctor.png";
import HealingIcon from '@mui/icons-material/Healing';
import './Login.css';

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [authenticationFailed, setAuthenticationFailed] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/admin/authenticate', { email, password }, {
                headers: { 'Content-Type': 'application/json' }
            });
            localStorage.setItem('accessToken', response.data.accessToken);
            if (localStorage.getItem("accessToken") !== "null") {
                navigate('/reception/dashboard');
            } else {
                throw new Error('Authentication failed');
            }
        } catch (error) {
            setAuthenticationFailed(true);
            setEmail("");
            setPassword("");
        }
    };

    return (
        <div className="login-container">
            {/* Spiral Background */}
            <div className="spiral-background">
                <div className="spiral"></div>
            </div>

            {/* Rest of the Login UI */}
            <div className="left-panel">
                <div className="branding">
                    <h3 className="brand-title">
                        Life <span className="highlight">Care</span>
                        <HealingIcon/>
                    </h3>
                </div>
                <div className="logo-container">
                    <img src={logo} alt="Life Care Logo" style={{height:"200px"}} />
                </div>
            </div>
            <div className="right-panel">
                <div className="login-form">
                    <h3 className="form-title">
                        Life <span className="highlight">Care</span>
                        <HealingIcon/>
                    </h3>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email"
                        />
                        {authenticationFailed && <p className="error-text">Please enter a valid email</p>}
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                        />
                    </div>
                    <div className="remember-reset">
                        <label className="remember-me">
                            <input type="checkbox" /> Remember Me?
                        </label>
                        <p className="reset-password">Reset password</p>
                    </div>
                    <div className="login-button">
                        <button className="btn" style={{
                            backgroundColor:"#343a40",
                            color:"white"
                        }} onClick={handleLogin}>Log in</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
