// Analytics.js
import React from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../Styles/Analytics.css';

const data = [
  { name: 'Jan', patients: 400, revenue: 2400, expenses: 2400 },
  { name: 'Feb', patients: 300, revenue: 1398, expenses: 2210 },
  { name: 'Mar', patients: 200, revenue: 9800, expenses: 2290 },
  { name: 'Apr', patients: 278, revenue: 3908, expenses: 2000 },
  { name: 'May', patients: 189, revenue: 4800, expenses: 2181 },
  { name: 'Jun', patients: 239, revenue: 3800, expenses: 2500 },
  { name: 'Jul', patients: 349, revenue: 4300, expenses: 2100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Analytics = () => {
  return (
    <div className="analytics">
      <h1>Analytics</h1>
      <div className="chart-container">
        <h2>Patient Growth</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="patients" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="chart-container">
        <h2>Revenue vs Expenses</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" fill="#8884d8" />
            <Bar dataKey="expenses" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="chart-container">
        <h2>Revenue Distribution</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={data} dataKey="revenue" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analytics;
