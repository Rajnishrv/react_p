import React from "react";
import { Link } from "react-router-dom";
import AdminAccount from './AccoutnDropdoun';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../Styles/AdminNavbar.css'
import AdminAddProducts from "./AdminAddProducts";

export default function AdminNavbar() {
    return (
        <div className="AdminNavbar">
            <h1 className="logo">
                <h1>E<span>kart</span></h1>
            </h1>
            <div className="links">
                <Link to="/adminhomepage/addproducts">Add Items</Link>
                <Link to="/adminhomepage/viewproducts">ShopingList</Link>
                <Link to='/adminhomepage/viewcart'><ShoppingCartIcon />Cart</Link>
            </div>
            <div className="accoutn">
                <AdminAccount />
            </div>
        </div>
    );
}