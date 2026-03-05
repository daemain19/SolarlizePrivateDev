// src/components/Navbar.jsx
import React from 'react';
import logo from '../assests/Solarlize__1_-removebg-preview.png';
const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-6 bg-transparent w-full relative z-10">
            <img src={logo} alt="Solarlize Logo" className="h-7 w-auto" />
            <div className="flex space-x-24 text-[#FFF7E8]">
                <a href="#" className="hover:text-[#E7FE4A]">Reports</a>
                <a href="#" className="hover:text-[#E7FE4A]">Contributions</a>
                <a href="#" className="hover:text-[#E7FE4A]">Payments</a>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#E7FE4A]"></div>
        </nav>
    );
};

export default Navbar;
