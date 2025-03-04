import React, { useContext } from "react";
import AdminContext from "../context/AdminContext";

export function Test(){

    const {adminDetails} = useContext(AdminContext);
    return (
        <div className="row">

            <h1>Hello, {adminDetails.firstName}</h1>
        </div>
    )
}