
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './pages/Login';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import { Dashboard } from './pages/Dashboard';
import { lazy, useEffect, useState } from 'react';
// Lazy loading : 

//import { AppointmentDetails } from './Components/AppointmentDetails';
import { Home } from './pages/Home';
const AppointmentDetails = lazy(()=> import ('./Components/AppointmentDetails'))

function App() {
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");

  useEffect(() => {
    localStorage.setItem("mode", mode);
    localStorage.setItem("view","home page");
  }, [mode]);

  const toggleMode = () => {
    setMode(prevMode => prevMode === "light" ? "dark" : "light");
  };

  return (
    <div className="App" style={{height: "850px",width:"100%", backgroundColor: mode === "light" ? "white" : "#000000" ,color: mode === "light" ? "#000000" : "white" }}>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='reception/login' element={<Login />} />
          <Route path='reception/dashboard' element={<Dashboard toggleMode={toggleMode} />} />
          <Route path='/appointment/details' element={<AppointmentDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
