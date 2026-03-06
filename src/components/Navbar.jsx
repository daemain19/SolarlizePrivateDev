// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import logo from '../assests/Solarlize__1_-removebg-preview.png';
const Navbar = ({ whoAreWeRef }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (whoAreWeRef.current) {
                // Highlight: Set navbarHeight to the height of your navbar
                const navbarHeight = 80; // Adjust this value to match your navbar's height
                const whoAreWePosition = whoAreWeRef.current.getBoundingClientRect().top + window.scrollY;

                // Highlight: Change navbar background only when the bottom of the navbar reaches the top of the "Who are we?" section
                setScrolled(window.scrollY + navbarHeight >= whoAreWePosition);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [whoAreWeRef]);

    return (
        // <nav className="flex justify-between items-center p-6 bg-transparent w-full relative sticky top-0 z-10">
        //<nav className={`flex justify-between items-center p-6 bg-transparent fixed top-0 w-full z-50 -mt-3 ${scrolled ? 'bg-[#2A2A2A]' : 'bg-transparent'}`}>
        <nav className={`flex justify-between items-center p-6 w-full fixed top-0 z-50 transition-all -mt-3 ${scrolled ? 'bg-[#2A2A2A]  py-5' : 'bg-transparent py-6'}`}>
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
