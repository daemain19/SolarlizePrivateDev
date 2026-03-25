import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SolarPanelSelection = () => {
    const navigate = useNavigate();

    const [panelType, setPanelType] = useState('monocrystalline');
    const [panelCount, setPanelCount] = useState(1);

    const panelData = {
        monocrystalline: {
            name: 'Monocrystalline',
            efficiency: '22%',
            power: 0.35, // kW per panel
            cost: 350, // Cost per panel in GBP
            carbonOffset: 0.03, // Tons of CO2 offset per panel per year
            description: 'Highly efficient and space-effective, made from a single crystal structure.'
        },
        polycrystalline: {
            name: 'Polycrystalline',
            efficiency: '16%',
            power: 0.3,
            cost: 300,
            carbonOffset: 0.025,
            description: 'Affordable and reliable, made from multiple crystal structures.'
        },
        thinFilm: {
            name: 'Thin-Film',
            efficiency: '13%',
            power: 0.15,
            cost: 200,
            carbonOffset: 0.015,
            description: 'Lightweight and flexible, made by depositing photovoltaic material onto a substrate.'
        },
        bifacial: {
            name: 'Bifacial',
            efficiency: '23%',
            power: 0.4,
            cost: 450,
            carbonOffset: 0.04,
            description: 'Captures sunlight from both sides, increasing energy production.'
        },
        perc: {
            name: 'PERC',
            efficiency: '23%',
            power: 0.375,
            cost: 400,
            carbonOffset: 0.035,
            description: 'Advanced type of monocrystalline panel with an additional layer to reflect light back into the cell.'
        }
    };

    const selectedPanel = panelData[panelType];
    const totalPower = (selectedPanel.power * panelCount).toFixed(2);
    const totalCost = (selectedPanel.cost * panelCount).toFixed(2);
    const totalCarbonOffset = (selectedPanel.carbonOffset * panelCount).toFixed(3);

    const incrementPanelCount = () => setPanelCount(panelCount + 1);
    const decrementPanelCount = () => setPanelCount(panelCount > 1 ? panelCount - 1 : 1);

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#FFF7E8] text-black p-10">
            <div className="max-w-4xl w-full">
                <h1 className="text-5xl font-bold mb-4 text-center">Select Your Solar Panels</h1>
                <p className="text-lg mb-8 text-center">
                    Customize your solar panel setup to meet your energy needs and see the environmental impact.
                </p>

                <div className="bg-[#2A2A2A] text-white p-8 rounded-lg shadow-lg mb-8">
                    <h2 className="text-2xl font-bold mb-6">Panel Type</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                        {Object.keys(panelData).map((type) => (
                            <div
                                key={type}
                                onClick={() => setPanelType(type)}
                                className={`p-4 rounded-lg cursor-pointer ${panelType === type ? 'bg-[#FFF7E8] text-black' : 'bg-[#3A3A3A]'}`}
                            >
                                <h3 className="font-bold mb-2">{panelData[type].name}</h3>
                                <p className="text-sm mb-2">Efficiency: {panelData[type].efficiency}</p>
                                <p className="text-sm">{panelData[type].description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-bold mb-4">Quantity</h2>
                        <div className="flex items-center">
                            <button
                                onClick={decrementPanelCount}
                                className="bg-[#FFF7E8] text-black font-bold py-2 px-4 rounded-l"
                            >
                                -
                            </button>
                            <span className="bg-white text-black font-bold py-2 px-6">{panelCount}</span>
                            <button
                                onClick={incrementPanelCount}
                                className="bg-[#FFF7E8] text-black font-bold py-2 px-4 rounded-r"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-bold mb-4">Summary</h2>
                        <div className="space-y-2">
                            <p><strong>Total Power:</strong> {totalPower} kW</p>
                            <p><strong>Total Cost:</strong> £{totalCost}</p>
                            <p><strong>Carbon Offset:</strong> {totalCarbonOffset} tons/year</p>
                        </div>
                    </div>

                    <div className="flex justify-between mt-8">
                        <button
                            onClick={() => navigate(-1)}
                            className="bg-[#FFF7E8] text-black font-bold py-2 px-6 rounded-full flex items-center space-x-2"
                        >
                            <span>Go Back</span>
                        </button>
                        <div className="flex space-x-4">
                            <button
                                onClick={() => alert('Payment saved!')}
                                className="bg-[#FFF7E8] text-black font-bold py-2 px-6 rounded-full flex items-center space-x-2"
                            >
                                <span>Save the Payment</span>
                            </button>
                            <button
                                onClick={() => navigate('/payment')}
                                className="bg-[#FFF7E8] text-black font-bold py-2 px-6 rounded-full flex items-center space-x-2"
                            >
                                <span>Place the Order</span>
                                <div className="w-10 h-10 ml-3 bg-black rounded-full flex items-center justify-center text-[#FFF7E8] text-3xl">
                                    <span className="block transform -translate-y-1">→</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SolarPanelSelection;