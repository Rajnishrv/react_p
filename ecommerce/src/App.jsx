import './App.css';
import AdminLogin from "./Components/AdminLogin";
import Landing from "./Components/Landing";
import UserLogin from "./Components/UserLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminSignUp from './Components/AdminSingUp';
import AdminHomePage from './Components/AdminHomePage';
import Error from './Components/Error';
// to use tost
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Error />} />
          <Route path="/" element={<Landing />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path='/adminsingup' element={<AdminSignUp />} />
          <Route path='/adminhomepage/*' element={<AdminHomePage />} />
          
        </Routes>
      </BrowserRouter>
      {/* Tost */}
      <ToastContainer />
    </div>
  );
}
export default App;