import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './pages/Login';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import { Dashboard } from './pages/Dashboard';
import { useEffect, useState } from 'react';

function App() {
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");

  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  const toggleMode = () => {
    setMode(prevMode => prevMode === "light" ? "dark" : "light");
  };

  return (
    <div className="App" style={{height: "850px",width:"100%", backgroundColor: mode === "light" ? "white" : "#000000" ,color: mode === "light" ? "#000000" : "white" }}>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard toggleMode={toggleMode} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
