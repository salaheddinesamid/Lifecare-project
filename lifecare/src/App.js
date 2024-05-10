
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './pages/Login';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap"
import { Dashboard } from './pages/Dashboard';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
