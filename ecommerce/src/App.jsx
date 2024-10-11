import './App.css';
import AdminLogin from "./Components/AdminLogin";
import Landing from "./Components/Landing";
import UserLogin from "./Components/UserLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;