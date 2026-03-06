// src/components/AboutUs.jsx
import React, { forwardRef } from 'react';
import solarPanel from '../assests/pexels-kindelmedia-9800003.jpg';
import worker from '../assests/pexels-gustavo-fring-4254171.jpg';

const AboutUs = forwardRef((props, ref) => {
    return (
        <section ref={ref} className="py-20 px-12 bg-[#FFF7E8] flex flex-col md:flex-row items-center">
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
                    We at Solarlize, Lorem ipsum dolor sit amet consectetur adipiscing elit.
                    Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi.
                    Pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
                    Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Laculis massa
                    nisl malesuada lacinia integer nunc posuere.
                </p>
                <p className="text-xl text-[#2A2A2A] mt-4 font-afacad">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
                    ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus
                    duis convallis. Tempus leo eu aenean sed diam urna tempor.
                </p>
            </div>
        </section>
    );
});

export default AboutUs;
