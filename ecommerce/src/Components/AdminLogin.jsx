import "../Styles/AdminLogin.css"
import { useEffect, useState } from "react";
export default function AdminLogin() {

    let [username, setUsername] = useState("");
    let [password, setPssword] = useState("");
    let [admin, setAdmin] = useState([]);

    useEffect(() => {
        async function fecthAdmin() {
            let data = await fetch('http://localhost:200/Admin');
            let res = await data.json();
            setAdmin(res);
        }
        fecthAdmin();
    }, [])

    function login() {
        admin.includes(username)

    }
    return (
        <div className="admin-container">
            <div className="admin-login">
                <form action="">
                    <table>
                        <tbody>
                        <tr><td><u><h3>Admin Login</h3></u></td></tr>
                        <tr>
                            <td><label htpmfor="" name="user-name">Username:</label></td>
                            <input type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} placeholder="Enter the Username" required />
                        </tr>
                        <tr>
                            <td><label htpmfor="" name="password">Password:</label></td>
                            <td><input type="text" value={password} onChange={(e) => { setPssword(e.target.value) }} placeholder="Enter the password" required /></td>
                        </tr>
                        <tr className="button"> <button onClick={login}>Login</button></tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    )
}