// // src/components/SolarizeUI.jsx
// import React, { useState } from 'react';
// import SpottedEarth from './SpottedEarth';

// const SolarizeUI = () => {
//     const [selectedCountry, setSelectedCountry] = useState(null);

//     const handleCountryClick = (country) => {
//         setSelectedCountry(country);
//     };

//     return (
//         <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#2A2A2A] text-white p-10">
//             <div className="w-full md:w-1/2 p-4 text-center md:text-left">
//                 <h1 className="text-[100px] text-[#FFF7E8] font-readex font-medium mb-4 leading-[100px] tracking-[-8px] -mt-12">Let's Solarize!!!</h1>
//                 <p className="text-lg mb-4 text-[#FFF7E8]">
//                     Offset your carbon footprint by funding solar power where it’s needed most—with Solarlize.
//                 </p>
//                 <p className="text-lg mb-8 text-[#FFF7E8]">
//                     Choose a country to see how you can make a difference.
//                 </p>
//                 <button className="bg-[#FFF7E8] text-[#2A2A2A] font-bold py-2 px-4 rounded-full flex items-center space-x-2">
//                     <span>Select the Country</span>
//                     <span>→</span>
//                 </button>
//                 {selectedCountry && (
//                     <p className="mt-4 text-[#FFF7E8]">Selected Country: {selectedCountry.name}</p>
//                 )}
//             </div>
//             <div className="w-full md:w-1/2 p-4">
//                 <div className="w-96 h-96 flex items-center justify-center">
//                     <SpottedEarth onCountryClick={handleCountryClick} />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SolarizeUI;

// src/components/SolarizeUI.jsx
import React, { useState } from 'react';
import SpottedEarth from './SpottedEarth';

const SolarizeUI = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleCountryClick = (country) => {
        setSelectedCountry(country);
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#2A2A2A] text-white p-10">
            <div className="w-full md:w-1/2 p-4 text-center md:text-left">
                <h1 className="text-[100px] text-[#FFF7E8] font-readex font-medium mb-4 leading-[100px] tracking-[-8px] -mt-12">Let's Solarize!!!</h1>
                <p className="text-lg mb-4 text-[#FFF7E8]">
                    Offset your carbon footprint by funding solar power where it’s needed most—with Solarlize. Join the global renewable energy movement. We bring expert solar installations to India, Chile, Bangladesh, South Africa, and Indonesia.
                </p>
                <p className="text-lg mb-8 text-[#FFF7E8]">
                    <strong>Our Carbon Offset Model follows:</strong><br />
                    <em>S<sub>saved</sub> = G<sub>solar</sub> × I<sub>grid</sub></em> <br />
                    Where:<br />
                    <em>G<sub>solar</sub> = (N<sub>panels</sub> × W<sub>panel</sub> / 1000) × Y<sub>solar</sub></em>
                </p>
            </div>
            <div className="w-full md:w-1/2 p-4" style={{ height: '600px' }}>
                <SpottedEarth onCountryClick={handleCountryClick} />
            </div>
        </div>
    );
};

export default SolarizeUI;
