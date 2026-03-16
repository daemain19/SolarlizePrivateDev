// import React, { useRef, useMemo } from 'react';
// import { Canvas, useLoader } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import * as THREE from 'three';
// import earthTexture from '../assests/earth2.png';

// const SpottedEarth = ({ onCountryClick }) => {
//     const globeRef = useRef();

//     // 1. Adjusted coordinates for your 1306x816 map layout
//     const countries = useMemo(() => [
//         { name: 'South Africa', lat: -34.0, lon: -78.0, color: '#ff9800' },
//         { name: 'Chile', lat: -29.3, lon: -152.5, color: '#ff9800' },
//         { name: 'India', lat: 0.0, lon: -39.0, color: '#ff9800' },
//         { name: 'Bangladesh', lat: -1.0, lon: -32.0, color: '#ff9800' },
//         { name: 'Indonesia', lat: -17.0, lon: -11.0, color: '#ff9800' },
//     ], []);

//     // 2. Conversion: Standard Spherical to Cartesian
//     const getPosition = (lat, lon, radius = 1.02) => {
//         const phi = (90 - lat) * (Math.PI / 180);
//         const theta = (lon + 180) * (Math.PI / 180);

//         // Three.js uses Y-up. 
//         // We negate the X to account for the internal texture flipping.
//         const x = -(radius * Math.sin(phi) * Math.cos(theta));
//         const y = radius * Math.cos(phi);
//         const z = radius * Math.sin(phi) * Math.sin(theta);

//         return [x, y, z];
//     };

//     const texture = useLoader(THREE.TextureLoader, earthTexture);

//     return (
//         <div style={{ width: '100%', height: '100%', background: 'transparent' }}>
//             <Canvas camera={{ position: [0, 0, 3.5], fov: 45 }}>
//                 {/* <ambientLight intensity={2} /> */}

//                 <group ref={globeRef}>
//                     {/* THE GLOBE */}
//                     {/* We rotate the mesh by -90 degrees so Lon 0 faces the camera */}
//                     <mesh rotation={[0, -Math.PI / 2, 0]}>
//                         <sphereGeometry args={[1, 64, 64]} />
//                         {/* <meshBasicMaterial map={texture} transparent={true} /> */}
//                         <meshBasicMaterial map={texture} />
//                     </mesh>

//                     {/* THE POINTS */}
//                     {countries.map((country, index) => {
//                         const pos = getPosition(country.lat, country.lon, 1.01);
//                         return (
//                             <mesh
//                                 key={index}
//                                 position={pos}
//                                 onClick={(e) => {
//                                     e.stopPropagation();
//                                     onCountryClick?.(country);
//                                 }}
//                                 onPointerOver={() => (document.body.style.cursor = 'pointer')}
//                                 onPointerOut={() => (document.body.style.cursor = 'auto')}
//                             >
//                                 {/* Visual Marker (Solid Center) */}
//                                 <sphereGeometry args={[0.02, 16, 16]} />
//                                 <meshBasicMaterial color={country.color} />

//                             </mesh>
//                         );
//                     })}
//                 </group>

//                 <OrbitControls
//                     enablePan={false}
//                     minDistance={1.5}
//                     maxDistance={4}
//                     rotateSpeed={0.5}
//                 />
//             </Canvas>
//         </div>
//     );
// };

// export default SpottedEarth;

// import React, { useRef, useMemo, useState } from 'react';
// import { Canvas, useLoader } from '@react-three/fiber';
// import { OrbitControls, Html } from '@react-three/drei';
// import * as THREE from 'three';
// import earthTexture from '../assests/earth2.png';

// const SpottedEarth = ({ onCountryClick }) => {
//     const [activeCountry, setActiveCountry] = useState(null);

//     // Data sourced from Solar Offset Countries document [cite: 7, 8, 10-20]
//     const countries = useMemo(() => [
//         { name: 'South Africa', lat: -34.0, lon: -78.0, color: '#ff9800', intensity: "0.683kgCO2/kWh", yield: "1900 kWh/kWp" },
//         { name: 'Chile', lat: -29.3, lon: -152.5, color: '#ff9800', intensity: "0.189kgCO2/kWh", yield: "1900 kWh/kWp" },
//         { name: 'India', lat: 0.0, lon: -39.0, color: '#ff9800', intensity: "0.757kgCO2/kWh", yield: "813 kWh/kWp" },
//         { name: 'Bangladesh', lat: -1.0, lon: -32.0, color: '#ff9800', intensity: "0.600kgCO2/kWh", yield: "1500 kWh/kWp" },
//         { name: 'Indonesia', lat: -17.0, lon: -11.0, color: '#ff9800', intensity: "0.625kgCO2/kWh", yield: "1350 kWh/kWp" },
//     ], []);

//     const getPosition = (lat, lon, radius = 1.02) => {
//         const phi = (90 - lat) * (Math.PI / 180);
//         const theta = (lon + 180) * (Math.PI / 180);
//         return [
//             -(radius * Math.sin(phi) * Math.cos(theta)),
//             radius * Math.cos(phi),
//             radius * Math.sin(phi) * Math.sin(theta)
//         ];
//     };

//     const texture = useLoader(THREE.TextureLoader, earthTexture);

//     return (
//         <div style={{ width: '100%', height: '100%', background: 'transparent' }}>
//             {/* onPointerMissed catches clicks on the empty space background */}
//             <Canvas
//                 camera={{ position: [0, 0, 3.5], fov: 45 }}
//                 onPointerMissed={() => setActiveCountry(null)}
//             >
//                 <group>
//                     {/* Clicking the globe mesh itself now also closes the pop-up */}
//                     <mesh
//                         rotation={[0, -Math.PI / 2, 0]}
//                         onClick={(e) => {
//                             e.stopPropagation();
//                             setActiveCountry(null);
//                         }}
//                     >
//                         <sphereGeometry args={[1, 64, 64]} />
//                         <meshBasicMaterial map={texture} />
//                     </mesh>

//                     {countries.map((country, index) => {
//                         const pos = getPosition(country.lat, country.lon, 1.01);
//                         const isSelected = activeCountry?.name === country.name;

//                         return (
//                             <group key={index} position={pos}>
//                                 <mesh onClick={(e) => {
//                                     e.stopPropagation(); // Prevents the globe's onClick from firing
//                                     setActiveCountry(isSelected ? null : country);
//                                     onCountryClick?.(country);
//                                 }}>
//                                     <sphereGeometry args={[0.02, 16, 16]} />
//                                     <meshBasicMaterial color={isSelected ? "#ffffff" : country.color} />
//                                 </mesh>

//                                 {isSelected && (
//                                     <Html distanceFactor={3} position={[0, 0.12, 0]} center>
//                                         <div style={{
//                                             background: 'white',
//                                             padding: '4px 8px',
//                                             borderRadius: '4px',
//                                             width: '110px',
//                                             color: '#333',
//                                             boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
//                                             pointerEvents: 'none',
//                                             border: '1px solid #ff9800',
//                                             display: 'flex',
//                                             flexDirection: 'column',
//                                             gap: '2px'
//                                         }}>
//                                             <h4 style={{ margin: 0, fontSize: '9px', fontWeight: 'bold', borderBottom: '1px solid #eee' }}>
//                                                 {country.name}
//                                             </h4>
//                                             <div style={{ fontSize: '7px', lineHeight: '1.2' }}>
//                                                 <div style={{ color: '#666' }}>Grid Intensity:</div>
//                                                 <div style={{ fontWeight: '600' }}>{country.intensity}</div>
//                                                 <div style={{ color: '#666', marginTop: '1px' }}>Solar Yield:</div>
//                                                 <div style={{ fontWeight: '600' }}>{country.yield}</div>
//                                             </div>
//                                         </div>
//                                     </Html>
//                                 )}
//                             </group>
//                         );
//                     })}
//                 </group>
//                 <OrbitControls enablePan={false} minDistance={2} maxDistance={5} />
//             </Canvas>
//         </div>
//     );
// };

// export default SpottedEarth;

// import React, { useRef, useMemo, useState } from 'react';
// import { Canvas, useLoader } from '@react-three/fiber';
// import { OrbitControls, Html } from '@react-three/drei';
// import * as THREE from 'three';
// import earthTexture from '../assests/earth2.png';

// const SpottedEarth = ({ onCountryClick }) => {
//     const [activeCountry, setActiveCountry] = useState(null);

//     // Estimates calculated based on your Carbon Offset Model 
//     // Solar Gen = 0.4kW x Yield 
//     // CO2 Saved = Solar Gen x Intensity 
//     const countries = useMemo(() => [
//         {
//             name: 'South Africa', lat: -34.0, lon: -78.0, color: '#ff9800',
//             gen: "760 kWh/yr", co2: "519.1 kg/yr"
//         },
//         {
//             name: 'Chile', lat: -29.3, lon: -152.5, color: '#ff9800',
//             gen: "760 kWh/yr", co2: "143.6 kg/yr"
//         },
//         {
//             name: 'India', lat: 0.0, lon: -39.0, color: '#ff9800',
//             gen: "325.2 kWh/yr", co2: "246.2 kg/yr"
//         },
//         {
//             name: 'Bangladesh', lat: -1.0, lon: -32.0, color: '#ff9800',
//             gen: "600 kWh/yr", co2: "360.0 kg/yr"
//         },
//         {
//             name: 'Indonesia', lat: -17.0, lon: -11.0, color: '#ff9800',
//             gen: "540 kWh/yr", co2: "337.5 kg/yr"
//         },
//     ], []);

//     const getPosition = (lat, lon, radius = 1.02) => {
//         const phi = (90 - lat) * (Math.PI / 180);
//         const theta = (lon + 180) * (Math.PI / 180);
//         return [
//             -(radius * Math.sin(phi) * Math.cos(theta)),
//             radius * Math.cos(phi),
//             radius * Math.sin(phi) * Math.sin(theta)
//         ];
//     };

//     const texture = useLoader(THREE.TextureLoader, earthTexture);

//     return (
//         <div style={{ width: '100%', height: '100%', background: 'transparent' }}>
//             <Canvas
//                 camera={{ position: [0, 0, 3.5], fov: 45 }}
//                 onPointerMissed={() => setActiveCountry(null)}
//             >
//                 <group>
//                     <mesh
//                         rotation={[0, -Math.PI / 2, 0]}
//                         onClick={(e) => { e.stopPropagation(); setActiveCountry(null); }}
//                     >
//                         <sphereGeometry args={[1, 64, 64]} />
//                         <meshBasicMaterial map={texture} />
//                     </mesh>

//                     {countries.map((country, index) => {
//                         const pos = getPosition(country.lat, country.lon, 1.01);
//                         const isSelected = activeCountry?.name === country.name;

//                         return (
//                             <group key={index} position={pos}>
//                                 <mesh onClick={(e) => {
//                                     e.stopPropagation();
//                                     setActiveCountry(isSelected ? null : country);
//                                     onCountryClick?.(country);
//                                 }}>
//                                     <sphereGeometry args={[0.02, 16, 16]} />
//                                     <meshBasicMaterial color={isSelected ? "#ffffff" : country.color} />
//                                 </mesh>

//                                 {isSelected && (
//                                     <Html distanceFactor={3} position={[0, 0.12, 0]} center>
//                                         <div style={{
//                                             background: 'white',
//                                             padding: '5px 10px',
//                                             borderRadius: '4px',
//                                             width: '130px',
//                                             color: '#333',
//                                             boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
//                                             pointerEvents: 'none',
//                                             border: '1px solid #ff9800',
//                                             fontSize: '8px',
//                                             display: 'flex',
//                                             flexDirection: 'column',
//                                             gap: '3px'
//                                         }}>
//                                             <h4 style={{ margin: 0, fontSize: '10px', color: '#000', borderBottom: '1px solid #eee', paddingBottom: '2px' }}>
//                                                 {country.name} (1 Panel)
//                                             </h4>
//                                             <div>
//                                                 <b style={{ color: '#ff9800' }}>Est. Solar Generation</b>
//                                                 <div style={{ fontWeight: '600' }}>{country.gen}</div>
//                                             </div>
//                                             <div>
//                                                 <b style={{ color: '#2ecc71' }}>Est. CO₂ Offset</b>
//                                                 <div style={{ fontWeight: '600' }}>{country.co2}</div>
//                                             </div>
//                                         </div>
//                                     </Html>
//                                 )}
//                             </group>
//                         );
//                     })}
//                 </group>
//                 <OrbitControls enablePan={false} minDistance={2} maxDistance={5} />
//             </Canvas>
//         </div>
//     );
// };

// export default SpottedEarth;

import React, { useMemo, useState } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';
import earthTexture from '../assests/earth2.png';
import { useNavigate } from 'react-router-dom';

const SpottedEarth = ({ onCountryClick }) => {
    const navigate = useNavigate();
    const [activeCountry, setActiveCountry] = useState(null);

    const countries = useMemo(() => [
        {
            name: 'South Africa', lat: -34.0, lon: -78.0, color: '#ff9800',
            gen: "760 kWh/yr", co2: "519.1 kg/yr"
        },
        {
            name: 'Chile', lat: -29.3, lon: -152.5, color: '#ff9800',
            gen: "760 kWh/yr", co2: "143.6 kg/yr"
        },
        {
            name: 'India', lat: 0.0, lon: -39.0, color: '#ff9800',
            gen: "325.2 kWh/yr", co2: "246.2 kg/yr"
        },
        {
            name: 'Bangladesh', lat: -1.0, lon: -32.0, color: '#ff9800',
            gen: "600 kWh/yr", co2: "360.0 kg/yr"
        },
        {
            name: 'Indonesia', lat: -17.0, lon: -11.0, color: '#ff9800',
            gen: "540 kWh/yr", co2: "337.5 kg/yr"
        },
    ], []);
    const getPosition = (lat, lon, radius = 1.02) => {
        const phi = (90 - lat) * (Math.PI / 180);
        const theta = (lon + 180) * (Math.PI / 180);
        return [
            -(radius * Math.sin(phi) * Math.cos(theta)),
            radius * Math.cos(phi),
            radius * Math.sin(phi) * Math.sin(theta)
        ];
    };

    const texture = useLoader(THREE.TextureLoader, earthTexture);

    return (
        <div style={{ width: '100%', height: '100%', background: 'transparent' }}>
            <Canvas
                camera={{ position: [0, 0, 3.5], fov: 45 }}
                onPointerMissed={() => setActiveCountry(null)}
            >
                <group>
                    <mesh
                        rotation={[0, -Math.PI / 2, 0]}
                        onClick={(e) => { e.stopPropagation(); setActiveCountry(null); }}
                    >
                        <sphereGeometry args={[1, 64, 64]} />
                        <meshBasicMaterial map={texture} />
                    </mesh>

                    {countries.map((country, index) => {
                        const pos = getPosition(country.lat, country.lon, 1.01);
                        const isSelected = activeCountry?.name === country.name;

                        return (
                            <group key={index} position={pos}>
                                <mesh onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveCountry(isSelected ? null : country);
                                    onCountryClick?.(country);
                                }}>
                                    <sphereGeometry args={[0.02, 16, 16]} />
                                    <meshBasicMaterial color={isSelected ? "#ffffff" : country.color} />
                                </mesh>

                                {isSelected && (
                                    <Html distanceFactor={3} position={[0, 0.12, 0]} center>
                                        <div style={{
                                            background: 'white',
                                            padding: '5px 10px',
                                            borderRadius: '4px',
                                            width: '130px',
                                            color: '#333',
                                            boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                                            pointerEvents: 'auto',
                                            border: '1px solid #ff9800',
                                            fontSize: '8px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '3px'
                                        }}>
                                            <h4 style={{ margin: 0, fontSize: '10px', color: '#000', borderBottom: '1px solid #eee', paddingBottom: '2px' }}>
                                                {country.name} (1 Panel)
                                            </h4>
                                            <div>
                                                <b style={{ color: '#ff9800' }}>Est. Solar Generation</b>
                                                <div style={{ fontWeight: '600' }}>{country.gen}</div>
                                            </div>
                                            <div>
                                                <b style={{ color: '#2ecc71' }}>Est. CO₂ Offset</b>
                                                <div style={{ fontWeight: '600' }}>{country.co2}</div>
                                            </div>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    navigate(`/country/${country.name}`);
                                                }}
                                                style={{
                                                    background: '#E7FE4A',
                                                    color: '#000',
                                                    border: 'none',
                                                    borderRadius: '4px',
                                                    padding: '4px 8px',
                                                    fontSize: '10px',
                                                    cursor: 'pointer',
                                                    marginTop: '5px'
                                                }}
                                            >
                                                Select
                                            </button>
                                        </div>
                                    </Html>
                                )}
                            </group>
                        );
                    })}
                </group>
                <OrbitControls enablePan={false} minDistance={2} maxDistance={5} />
            </Canvas>
        </div>
    );
};

export default SpottedEarth;
