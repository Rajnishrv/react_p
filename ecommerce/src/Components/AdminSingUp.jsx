import React, { useState } from 'react'
import '../Styles/AdminSingUp.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const AdminSignUp = () => {
    const navigate = useNavigate;
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [name, setname] = useState("")
    let [phone, setPhone] = useState("")

    let data = { name, password, phone, email }

    function addAdmin() {
        // http:
        axios.post('http://localhost:3000/Admin', data)
            .then((res) => {
                alert("Admin Creates Sucessfull")
            })
            .catch((err) => {
                alert("Invalid Data ")
            })
    }
    return (
        <div className='adminsignUp'>
            <div className="bg_img"></div>
            <form onSubmit={addAdmin} action="">
                <label htmlFor="">Name :</label>
                <input type="text" value={name}
                    onChange={(e) => { setname(e.target.value) }} placeholder='Enter the Name' />
                <label htmlFor="">Email :</label>
                <input type="email" value={email}
                    onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter the Email' />
                <label htmlFor="">Password :</label>
                <input type="password" value={password}
                    onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter the Password' />
                <label htmlFor="">Phone :</label>
                <input pattern='[0-9]{10}' value={phone}
                    onChange={(e) => { setPhone(e.target.value) }} type="tel" placeholder='Enter the Phone' />
                <button onClick={()=>{navigate("/adminlogin")}} className='btn btn-primary'>SignUp</button>
            </form>
        </div>
    )
}
export default AdminSignUp 