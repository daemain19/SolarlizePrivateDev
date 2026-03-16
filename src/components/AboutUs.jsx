// src/components/AboutUs.jsx
import React, { forwardRef } from 'react';
import solarPanel from '../assests/pexels-kindelmedia-9800003.jpg';
import worker from '../assests/pexels-gustavo-fring-4254171.jpg';

const AboutUs = forwardRef((props, ref) => {
    return (
        <section ref={ref} className="min-h-screen py-20 px-12 bg-[#FFF7E8] flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 p-4 relative">
                <div className="relative">
                    <img
                        src={solarPanel}
                        alt="Solar Panel"
                        className="w-4/5 h-100 object-cover rounded-lg mb-4 shadow-lg border-2 border-[#2A2A2A]"
                    />
                    <img
                        src={worker}
                        alt="Worker"
                        className="w-4/5 h-100 object-cover rounded-lg shadow-lg absolute top-20 right-10 border-2 border-[#2A2A2A]"
                    />
                </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
                <h2 className="text-[100px] text-[#2A2A2A] font-readex font-medium mb-4 leading-[100px] tracking-[-8px] -mt-12">Who are we?</h2>
                <p className="text-xl text-[#2A2A2A] mt-5 font-afacad">
                    At <span className="font-bold">Solarlize,</span> our goal is to empower UK households to take direct climate action by funding solar energy projects in regions where solar power can create the most impact. Many communities around the world, especially in places like Africa, lack access to reliable electricity and depend on polluting energy sources. By enabling households to fund solar panels in these areas, we help replace dirty energy with clean, renewable power—reducing global carbon emissions while improving lives through access to sustainable electricity.
                </p>
                <p className="text-xl text-[#2A2A2A] mt-4 font-afacad">
                    We aim to make carbon offsetting meaningful and transparent. Unlike traditional offset schemes, your contribution goes directly toward installing solar infrastructure in communities that need it most. With <span className="font-bold">Solarlize,</span> you can see the real-world impact of your gift—from the electricity generated to the carbon saved—while supporting energy access, local jobs, and a healthier planet for everyone.
                </p>
            </div>
        </section>
    );
});

export default AboutUs;
