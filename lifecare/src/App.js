import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './routes/Login';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import { Dashboard } from './routes/Dashboard';
import { useEffect, useState } from 'react';
import { AdminProvider } from './context/AdminContext';
import { RoomProvider } from './context/RoomContext';
import { RoomAllocation } from './routes/RoomAllocation';
import { Test } from './routes/test';

function App() {
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");

  useEffect(() => {
    localStorage.setItem("mode", mode);
    localStorage.setItem("view", "home page");
  }, [mode]);

  const toggleMode = () => {
    setMode(prevMode => prevMode === "light" ? "dark" : "light");
  };

  return (
    <div className="App" style={{
      height: "850px", 
      width: "100%", 
      backgroundColor: mode === "light" ? "white" : "#000000",
      color: mode === "light" ? "#000000" : "white"
    }}>
      <BrowserRouter>
        <Routes>
          
          <Route path='' element={ 
            <AdminProvider>
             <Login />
            </AdminProvider>
            
            } />
          
          
          <Route path="/admin/dashboard" 
            element={
              
              <RoomProvider>
                <AdminProvider>
                <Dashboard toggleMode={toggleMode} />
                </AdminProvider>
              </RoomProvider>
              
            }
          />
          
          <Route path='/room/allocation' 
            element={
              <RoomProvider>
                <RoomAllocation />
              </RoomProvider>
            } 
          />
          <Route path='/test' 
            element={
              <AdminProvider>
                <Test />
              </AdminProvider>
            } 
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
