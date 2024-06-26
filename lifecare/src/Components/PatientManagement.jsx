import React from "react";
import './PatientManagement.css';

export function PatientManagement() {
  const rows = [
    {
      id: "#124",
      Name: "Kath Murphy",
      Admit: "9/12/24",
      Type: "Diabetes",
      Status: "Discharge",
    },
    {
      id: "#125",
      Name: "John Doe",
      Admit: "10/12/24",
      Type: "Hypertension",
      Status: "Admitted",
    }
    // Add more rows as needed
  ];

  return (
    <div className="patient-management-container">
      <div className="header">
        <h5>Patients Management</h5>
        <p className="see-all">See all</p>
      </div>
      <div className="search-filter">
        <input
          className="form-control search-input"
          placeholder="Search patients name, id"
        />
        <button className="btn advanced-filter">
          <span className="material-symbols-outlined">tune</span> Advanced Filter
        </button>
      </div>
      <div className="patient-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Type</th>
              <th>Status</th>
              <th>Admit</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.Name}</td>
                <td>{row.Type}</td>
                <td className={row.Status === "Discharge" ? "status-discharge" : "status-admitted"}>
                  {row.Status}
                </td>
                <td>{row.Admit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
