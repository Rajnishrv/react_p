import React from 'react';
import AdminNavbar from './AdminNavbar';
import { Route, Routes } from 'react-router-dom';
import AdminDashBord from './AdminDashBord';
import AdminViewItems from './AdminViewItems'
import Footer from './Footer';
import AdminAddProducts from './AdminAddProducts'

export default function AdminHomePage() {
    return (
        <div className='AdminHomePage'>
            <AdminNavbar />
            <Routes>
                <Route path="/" element={<AdminDashBord/>} />
                <Route path='/viewproducts' element={<AdminViewItems/>}/>
                <Route path='/addproducts' element={<AdminAddProducts/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}