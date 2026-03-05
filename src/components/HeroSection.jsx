// src/components/HeroSection.jsx
import React from 'react';

const HeroSection = () => {
    return (
        <main className="flex-grow flex flex-col items-center justify-center p-12 text-center relative z-10">
            <h1 className="text-[120px] font-readex font-medium mb-4 leading-[130px] tracking-[-7px]">
                <span className="text-[#FFF7E8]">Your </span>
                <span className="text-[#E7FE4A]">solar gift,</span><br />
                <span className="text-[#FFF7E8]">their brighter future.</span>
            </h1>
            <p className="text-xl text-[#FFF7E8] mt-4 font-afacad">
                Offset your carbon footprint by funding solar power where it’s needed most—with <span className="text-[#E7FE4A]">Solarlize.</span>
            </p>
            <button className="mt-8 bg-[#E7FE4A] hover:bg-[#90e600] text-black font-bold py-3 px-6 rounded-full flex items-center text-lg font-afacad">
                <span>Let's Get Started</span>
                <div className="w-10 h-10 ml-3 bg-black rounded-full flex items-center justify-center text-[#FFF7E8]">
                    →
                </div>
            </button>
        </main>
    );
};

export default HeroSection;
