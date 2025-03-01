import React, { useState, useEffect } from "react";
import axios from "axios";
import '../Styles/History.css'; // Import a CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = () => {
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
  };

  const deleteRecord = (id) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      axios.delete(`http://localhost:8080/history/${id}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }).then(() => {
        setHistory(history.filter(record => record.id !== id));
      }).catch((error) => {
        console.error("Error deleting record:", error);
      });
    }
  };

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
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {history.map((record) => (
              <tr key={record.id}>
                <td>{record.id}</td>
                <td>{record.description}</td>
                <td>{record.user}</td>
                <td>{new Date(record.timestamp).toLocaleString()}</td>
                <td>
                  <button className="delete-button" onClick={() => deleteRecord(record.id)}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
