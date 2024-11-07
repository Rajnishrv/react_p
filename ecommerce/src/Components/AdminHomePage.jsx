import React from 'react';
import AdminNavbar from './AdminNavbar';
import { Route, Routes } from 'react-router-dom';
import AdminDashBord from './AdminDashBord';
import AdminViewItems from './AdminViewItems'
import Footer from './Footer';
import AdminAddProducts from './AdminAddProducts'
import UpdateProducts from './UpdateProducts';

export default function AdminHomePage() {
    return (
        <div className='AdminHomePage'>
            <AdminNavbar />
            <Routes>
                <Route path="/" element={<AdminDashBord />} />
                <Route path='/viewproducts' element={<AdminViewItems />} />
                <Route path='/addproducts' element={<AdminAddProducts />} />
                <Route path='/updateproducts/:id' element={<UpdateProducts />} />
            </Routes>
            <Footer />
        </div>
    );
}