// StaffManagement.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StaffManagement.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const StaffManagement = () => {
  const [staff, setStaff] = useState([]);
  const [form, setForm] = useState({ fullName: '', role: '', status: 'active' });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    // Fetch staff data from the server
    axios.get('http://localhost:8080/staff-management/get_staff')
      .then(response => setStaff(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      // Update staff
      axios.put(`/api/staff/${editId}`, form)
        .then(response => {
          setStaff(staff.map(item => (item.id === editId ? response.data : item)));
          setEditId(null);
          setForm({ fullName: '', role: '', status: 'active' });
        })
        .catch(error => console.error(error));
    } else {
      // Add new staff
      axios.post('http://localhost:8080/staff-management/new_staff', form)
        .then(response => {
          setStaff([...staff, response.data]);
          setForm({ fullName: '', role: '', status: 'active' });
        })
        .catch(error => console.error(error));
    }
  };

  const handleEdit = (id) => {
    const staffMember = staff.find(item => item.id === id);
    setForm({ fullName: staffMember.fullName, role: staffMember.role, status: staffMember.status });
    setEditId(id);
  };

  const handleDelete = (id) => {
    axios.delete(`/api/staff/${id}`)
      .then(() => setStaff(staff.filter(item => item.id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div className="staff-management">
      <h1>Staff Management</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="text"
          name="role"
          value={form.role}
          onChange={handleChange}
          placeholder="Role"
          required
        />
        <select name="status" value={form.status} onChange={handleChange}>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <button type="submit">{editId ? 'Update' : 'Add'}</button>
      </form>
      <ul>
        {staff.map(item => (
          <li key={item.id}>
            {item.fullName} - {item.role} ({item.status})
            <div>
              <button className="edit-button" onClick={() => handleEdit(item.id)}><EditIcon/></button>
              <button onClick={() => handleDelete(item.id)}><DeleteForeverIcon/></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StaffManagement;
