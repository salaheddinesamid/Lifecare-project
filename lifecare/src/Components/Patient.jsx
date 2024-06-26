import React, { useState } from "react";
import "./Patient.css";

export function Patient({ darkMode }) {
    // Define CSS variables for light and dark modes
    const lightMode = {
        backgroundColor: "#FFFFFF",
        textColor: "#000000",
        accentColor: "#59C9A5",
    };

    const darkModeStyles = {
        backgroundColor: "#1E1E1E",
        textColor: "#FFFFFF",
        accentColor: "red",
    };

    const currentMode = darkMode ? darkModeStyles : lightMode;

    return (
        <div className="row patient-number-container" style={{ backgroundColor: currentMode.backgroundColor, color: currentMode.textColor }}>
            <div className="row pt-3 pb-2">
                <div className="col-xl-9">
                    <h5 style={{ fontWeight: "bold" }}>Patient</h5>
                </div>
                <div className="col-xl-3">
                    <select name="" id="" className="form-select" style={{ backgroundColor: "transparent" }}></select>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-6">
                    <div className="row">
                        <div className="col-xl-6">
                            <span className="material-symbols-outlined" style={{ backgroundColor: currentMode.accentColor, padding: "10px 10px", borderRadius: 100 }}>person_apron</span>
                        </div>
                        <div className="col-xl-6">
                            <div className="row">
                                <p style={{ fontWeight: "bold" }}>200</p>
                            </div>
                            <div className="row">
                                <p style={{ fontSize: 10 }}>New patient</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="row">
                        <div className="col-xl-6">
                            <span className="material-symbols-outlined" style={{ backgroundColor: currentMode.accentColor, padding: "10px 10px", borderRadius: 100 }}>person_apron</span>
                        </div>
                        <div className="col-xl-6">
                            <div className="row">
                                <p style={{ fontWeight: "bold" }}>200</p>
                            </div>
                            <div className="row">
                                <p style={{ fontSize: 10 }}>Old patient</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
