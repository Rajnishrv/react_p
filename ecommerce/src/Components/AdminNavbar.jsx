import React from "react";
import { Link } from "react-router-dom";
import AdminAccount from './AccoutnDropdoun';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../Styles/AdminNavbar.css'

export default function AdminNavbar() {
    return (
        <div className="AdminNavbar">
            <h1 className="logo">
                <h1>E<span>kart</span></h1>
            </h1>
            <div className="links">
                <Link className="link1" to="/adminhomepage/addproducts">Add Items</Link>
                <Link className="link1" to="/adminhomepage/viewproducts">ShopingList</Link>
                <Link className="link1" to='/adminhomepage/viewcart'><ShoppingCartIcon />Cart</Link>
            </div>
            <div className="accoutn">
                <AdminAccount />
            </div>
        </div>
    );
}