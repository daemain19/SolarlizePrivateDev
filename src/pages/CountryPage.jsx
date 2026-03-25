// import React from 'react';
// import { useParams } from 'react-router-dom';

// const CountryPage = () => {
//     const { countryName } = useParams();

//     // Define country-specific data
//     const countryData = {
//         'South Africa': {
//             gen: "760 kWh/yr",
//             co2: "519.1 kg/yr",
//             description: "South Africa has a high potential for solar energy due to its geographical location and climate..."
//         },
//         'Chile': {
//             gen: "760 kWh/yr",
//             co2: "143.6 kg/yr",
//             description: "Chile is one of the leading countries in renewable energy adoption, particularly solar..."
//         },
//         'India': {
//             gen: "325.2 kWh/yr",
//             co2: "246.2 kg/yr",
//             description: "India is rapidly expanding its solar energy capacity to meet its growing energy needs..."
//         },
//         'Bangladesh': {
//             gen: "600 kWh/yr",
//             co2: "360.0 kg/yr",
//             description: "Bangladesh is increasingly investing in solar power to address energy shortages..."
//         },
//         'Indonesia': {
//             gen: "540 kWh/yr",
//             co2: "337.5 kg/yr",
//             description: "Indonesia is leveraging its tropical climate to boost solar energy production..."
//         }
//     };

//     const data = countryData[countryName];

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
//             <div className="bg-[#2A2A2A] p-8 rounded-lg shadow-lg w-full max-w-md">
//                 <h2 className="text-2xl font-bold mb-6 text-center">{countryName}</h2>
//                 <div className="mb-4">
//                     <p className="text-white text-sm font-bold mb-2">Est. Solar Generation</p>
//                     <p className="text-white">{data.gen}</p>
//                 </div>
//                 <div className="mb-4">
//                     <p className="text-white text-sm font-bold mb-2">Est. CO₂ Offset</p>
//                     <p className="text-white">{data.co2}</p>
//                 </div>
//                 <div className="mb-4">
//                     <p className="text-white text-sm font-bold mb-2">Description</p>
//                     <p className="text-gray-300">{data.description}</p>
//                 </div>
//                 <button
//                     onClick={() => window.history.back()}
//                     className="bg-[#E7FE4A] text-black py-2 px-4 rounded hover:bg-opacity-80"
//                 >
//                     Back
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default CountryPage;

// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// // Import images for each country
// import chileImage from '../assests/chile1.png';
// import southAfricaImage from '../assests/south-africa1.png';
// import indiaImage from '../assests/india1.png';
// import bangladeshImage from '../assests/bangladesh1.png';
// import indonesiaImage from '../assests/indonesia1.png';

// const CountryPage = () => {
//     const { countryName } = useParams();
//     const navigate = useNavigate();

//     // Define country-specific data and images
//     const countryData = {
//         'Chile': {
//             image: chileImage,
//             description: "Chile is one of the leading countries in renewable energy adoption, particularly solar. With its vast Atacama Desert, Chile has one of the highest solar irradiance levels in the world, making it an ideal location for solar power projects."
//         },
//         'South Africa': {
//             image: southAfricaImage,
//             description: "South Africa has a high potential for solar energy due to its geographical location and climate. The country is actively investing in renewable energy to address its energy needs and reduce carbon emissions."
//         },
//         'India': {
//             image: indiaImage,
//             description: "India is rapidly expanding its solar energy capacity to meet its growing energy needs. The country aims to achieve 100 GW of solar capacity by 2022 and has launched several initiatives to promote solar power adoption."
//         },
//         'Bangladesh': {
//             image: bangladeshImage,
//             description: "Bangladesh is increasingly investing in solar power to address energy shortages and reduce reliance on fossil fuels. The country has seen significant growth in solar home systems, particularly in rural areas."
//         },
//         'Indonesia': {
//             image: indonesiaImage,
//             description: "Indonesia is leveraging its tropical climate to boost solar energy production. The country aims to increase its renewable energy mix, with solar power playing a crucial role in achieving its energy goals."
//         }
//     };

//     const data = countryData[countryName];

//     return (
//         <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#2A2A2A] text-white p-10">
//             <div className="w-full md:w-1/2 p-4 text-left">
//                 <h1 className="text-[80px] text-[#FFF7E8] font-medium mb-4 leading-[80px] tracking-tight">{countryName}</h1>
//                 <p className="text-lg mb-4 text-[#FFF7E8]">
//                     Description: {data.description}
//                 </p>
//                 <div className="flex space-x-4 mt-6">
//                     <button
//                         onClick={() => navigate(-1)}
//                         className="bg-[#FFF7E8] text-[#2A2A2A] font-bold py-2 px-4 rounded-full flex items-center space-x-2"
//                     >
//                         <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-[#FFF7E8] text-3xl">
//                             <span className="block transform -translate-y-0.5">←</span>
//                         </div>
//                         <span>Back</span>
//                     </button>
//                     <button
//                         onClick={() => navigate('/')}
//                         className="bg-[#FFF7E8] text-[#2A2A2A] font-bold py-2 px-4 rounded-full flex items-center space-x-2"
//                     >
//                         <span>Let's Invest in {countryName} </span>
//                         <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-[#FFF7E8] text-3xl">
//                             <span className="block transform -translate-y-0.5">→</span>
//                         </div>
//                     </button>
//                 </div>
//             </div>
//             <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
//                 <img src={data.image} alt={countryName} className="max-w-full max-h-[600px] object-contain" />
//             </div>
//         </div>
//     );
// };

// export default CountryPage;

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Import images for each country
import chileImage from '../assests/chile1.png';
import southAfricaImage from '../assests/south-africa1.png';
import indiaImage from '../assests/india1.png';
import bangladeshImage from '../assests/bangladesh1.png';
import indonesiaImage from '../assests/indonesia1.png';

const CountryPage = () => {
    const { countryName } = useParams();
    const navigate = useNavigate();

    // Define country-specific data and images
    const countryData = {
        'Chile': {
            image: chileImage,
            description: "Chile is one of the leading countries in renewable energy adoption, particularly solar. With its vast Atacama Desert, Chile has one of the highest solar irradiance levels in the world, making it an ideal location for solar power projects.",
            gci: 0.189,
            aay: 1900,
            price: "4100 - 6350 (£)",
            electricityAvailability: "100% of population (2023)"
        },
        'South Africa': {
            image: southAfricaImage,
            description: "South Africa has a high potential for solar energy due to its geographical location and climate. The country is actively investing in renewable energy to address its energy needs and reduce carbon emissions.",
            gci: 0.683,
            aay: 1900,
            price: "4500 - 7500 (£)",
            electricityAvailability: "87.7% of population (2023)"
        },
        'India': {
            image: indiaImage,
            description: "India is rapidly expanding its solar energy capacity to meet its growing energy needs. The country aims to achieve 100 GW of solar capacity by 2022 and has launched several initiatives to promote solar power adoption.",
            gci: 0.757,
            aay: 813,
            price: "1700 - 2600 (£)",
            electricityAvailability: "99.5% of population (2023)"
        },
        'Bangladesh': {
            image: bangladeshImage,
            description: "Bangladesh is increasingly investing in solar power to address energy shortages and reduce reliance on fossil fuels. The country has seen significant growth in solar home systems, particularly in rural areas.",
            gci: 0.600,
            aay: 1500,
            price: "1850 - 3000 (£)",
            electricityAvailability: "99.5% of population (2023)"
        },
        'Indonesia': {
            image: indonesiaImage,
            description: "Indonesia is leveraging its tropical climate to boost solar energy production. The country aims to increase its renewable energy mix, with solar power playing a crucial role in achieving its energy goals.",
            gci: 0.625,
            aay: 1350,
            price: "3000 - 4500 (£)",
            electricityAvailability: "99.4% of population (2023)"
        }
    };

    const data = countryData[countryName];

    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#2A2A2A] text-white p-10">
            <div className="w-full md:w-1/2 p-4 text-left">
                <h1 className="text-[80px] text-[#FFF7E8] font-medium mb-4 leading-[80px] tracking-tight">{countryName}</h1>
                <p className="text-lg mb-4 text-[#FFF7E8]">
                    Description: {data.description}
                </p>
                <div className="mb-6 text-[#FFF7E8]">
                    <p><strong>GCI:</strong> {data.gci}</p>
                    <p><strong>AAY:</strong> {data.aay}</p>
                    <p><strong>Price of 5KW system:</strong> {data.price}</p>
                    <p><strong>Electricity Availability:</strong> {data.electricityAvailability}</p>
                </div>
                <div className="flex space-x-4 mt-6">
                    <button
                        onClick={() => navigate('/')}
                        className="bg-[#FFF7E8] text-[#2A2A2A] font-bold py-2 px-4 rounded-full flex items-center space-x-2"
                    >
                        <span>Back</span>
                        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-[#FFF7E8] text-3xl">
                            <span className="block transform -translate-y-1">←</span>
                        </div>
                    </button>
                    <button
                        onClick={() => { }}
                        className="bg-[#FFF7E8] text-[#2A2A2A] font-bold py-2 px-4 rounded-full flex items-center space-x-2"
                    >
                        <span>Select the Country</span>
                        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-[#FFF7E8] text-3xl">
                            <span className="block transform -translate-y-1">→</span>
                        </div>
                    </button>
                </div>
                <div className="mt-6">
                    <h3 className="text-[#FFF7E8] text-xl mb-4">Compare with other countries:</h3>
                    <div className="flex flex-wrap gap-2">
                        {Object.keys(countryData).map((country) => (
                            <button
                                key={country}
                                onClick={() => navigate(`/country/${country}`)}
                                className="bg-[#FFF7E8] text-[#2A2A2A] font-bold py-2 px-4 rounded-full hover:bg-opacity-80"
                            >
                                {country}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
                <img src={data.image} alt={countryName} className="max-w-full max-h-[600px] object-contain" />
            </div>
        </div>
    );
};

export default CountryPage;
