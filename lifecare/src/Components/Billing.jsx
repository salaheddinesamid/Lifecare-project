import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function Bills() {
    const [bills,setBills] = useState([]);
    const [filter, setFilter] = useState("ALL");
    const filteredBills = bills.filter(bill => {
        if (filter === "ALL") return true;
        return bill.status === filter;
    });

    useEffect(()=>{
        try{
            let response = axios.get('http://localhost:8080/api/bill/get_all')
            .then((res)=>{
                setBills(res.data);
            }).catch((err)=>{
                console.log(err);
            })
        }catch(err){
            throw err;
        }
    },[])

    return (
        <div className="container mt-4">
            <h2 className="mb-3">Bills</h2>

        
            <div className="mb-3">
                <button className="btn btn-primary me-2" onClick={() => setFilter("ALL")}>All</button>
                <button className="btn btn-success me-2" onClick={() => setFilter("PAID")}>Paid</button>
                <button className="btn btn-danger me-2" onClick={() => setFilter("UNPAID")}>Unpaid</button>
                <button className="btn btn-secondary" onClick={() => setFilter("ARCHIVED")}>Archive</button>
            </div>

            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead className="table-light">
                        <tr>
                            <th>Full Name</th>
                            <th>Amount ($)</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredBills.length > 0 ? (
                            filteredBills.map((bill, index) => (
                                <tr key={index}>
                                    <td>{bill.fullName}</td>
                                    <td><strong>${bill.amount}</strong></td>
                                    <td>{new Date(bill.date).toLocaleDateString()}</td>
                                    <td>
                                        <span className={`badge 
                                            ${bill.status === "PAID" ? "bg-success" : 
                                            bill.status === "UNPAID" ? "bg-danger" : 
                                            "bg-secondary"}`}>
                                            {bill.status}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center">No bills found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
