import React from 'react';
import { Link } from 'react-router-dom'
import "../Styles/Landing.css";
const Landing = () => {
    return (
        <div className="landing-page">

            <Link to='/adminlogin'>
                <div className="admin">
                    <img src="https://www.freeiconspng.com/uploads/login-icon-png-27.png" alt="admin logo" />
                    <h1>Admin</h1>
                </div>
            </Link>

            <Link to='/userlogin'>
                <div className="user">
                    <img src="https://www.freeiconspng.com/uploads/user-login-icon-29.png" alt="user logo" />
                    <h1>User</h1>
                </div>
            </Link>

        </div>
    )
}
export default Landing;