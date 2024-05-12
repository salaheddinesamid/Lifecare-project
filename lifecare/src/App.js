import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './pages/Login';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap"
import { Dashboard } from './pages/Dashboard';
function App() {
  return (
    <div className="App" style={{height:"100%"}}>
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
