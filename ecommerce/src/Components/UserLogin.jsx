import { useState } from "react";
import "../Styles/AdminLogin.css"
function UserLogin() {
    let [username, setUsername] = useState("");
    console.log(username);
    let [password, setPssword] = useState("");
    console.log(password);
    function login() {
        if (username === "jspider" && password === "1234") {
            alert("Admin Logged in");
        } else {
            alert("Invalid Credentials");
        }
    }

    return (
        <div className="admin-container">
            <div className="admin-login">
                <form action="">
                    <table>
                        <tr><td><u><h3>User Login</h3></u></td></tr>
                        <tr>
                            <td><label htpmfor="">Username:</label></td>
                            <input type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} placeholder="Enter the Username" required />
                        </tr>
                        <tr>
                            <td><label htpmfor="">Password:</label></td>
                            <td><input type="text" value={password} onChange={(e) => { setPssword(e.target.value) }} placeholder="Enter the password" required /></td>
                        </tr>
                        <tr className="button"><button onClick={login}>Login</button></tr>
                    </table>
                </form>
            </div>
        </div>
    )
}
export default UserLogin;