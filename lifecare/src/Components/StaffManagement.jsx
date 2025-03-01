// StaffManagement.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/StaffManagement.css';

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
      axios.put(`http://localhost:8080/staff-management/edit/${editId}`, form)
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
    axios.delete(`http://localhost:8080/staff-management/delete/${id}`)
      .then(() => setStaff(staff.filter(item => item.id !== id)))
      .catch(error => console.error(error));
  };

  const DoctorSection = () =>{
    const [doctors,setDoctors] = useState([]);
    useEffect(()=>{
      try{
        let request = axios.get("http://localhost:8080/api/doctor/")
        .then((res)=>{
          console.log("Fetch doctor data...");
          setDoctors(res.data);
        })
      }
      catch(err){
        console.log(err);
      }
    },[])
    return(
      <div className="row">
        <h2>Doctors</h2>
        {
          doctors.map((doctor)=>(
            <div className="col staff">
              <p>Mr, <b>{doctor.fullName}</b></p>
              <p>Professional ID: <b>{doctor.professionalId}</b></p>
            </div>
          ))
        }
      </div>
    )
  }

  const NurseSection = () =>{
    return(
      <div className="row">
        
      </div>
    )
  }

  return (
    <div className="row">
      <h1 className='text-center'>Staff Management</h1>
      <DoctorSection/>
    </div>
  );
};

export default StaffManagement;
