import React, { useState, useEffect } from "react";
import axios from "axios";
import './History.css'; // Import a CSS file for styling

export function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      axios.get('http://localhost:8080/history', {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }).then((response) => {
        setHistory(response.data);
      }).catch((error) => {
        console.error("Error fetching history:", error);
      });
    }
  }, []);

  return (
    <div className="history-container">
      <div className="history-header">
        <h5>Recent History</h5>
      </div>
      <div className="history-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Action</th>
              <th>User</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {history.map((record) => (
              <tr key={record.id}>
                <td>{record.id}</td>
                <td>{record.description}</td>
                <td>{record.user}</td>
                <td>{new Date(record.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
