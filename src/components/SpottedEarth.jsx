// src/components/SpottedEarth.jsx
// import { Canvas, useLoader } from '@react-three/fiber';
// import { OrbitControls, Stars } from '@react-three/drei';
// import * as THREE from 'three';
// import { useRef, useState } from 'react';
// import earth from '../assests/earth.jpg';

// const SpottedEarth = ({ onCountryClick }) => {
//     const globeRef = useRef();
//     const [activeCountry, setActiveCountry] = useState(null);

//     const countries = [
//         { name: "Indonesia", position: [1.3521, 103.8198, 1.05], color: "hotpink" },
//         { name: "Kenya", position: [-0.0236, 37.9062, 1.05], color: "hotpink" },
//         { name: "Ghana", position: [7.9465, -1.0232, 1.05], color: "hotpink" },
//         { name: "South Africa", position: [-30.5595, 22.9375, 1.05], color: "hotpink" },
//         { name: "Saudi Arabia", position: [23.8859, 45.0792, 1.05], color: "hotpink" },
//     ];

//     const handleCountryClick = (country) => {
//         setActiveCountry(country);
//         onCountryClick(country);
//     };

//     const dottedMap = useLoader(THREE.TextureLoader, earth);

//     return (
//         <div style={{ width: '100%', height: '100%' }}>
//             <Canvas camera={{ position: [0, 0, 3], fov: 60 }}>
//                 <ambientLight intensity={1.5} />
//                 <pointLight position={[10, 10, 10]} intensity={1} />
//                 <mesh ref={globeRef}>
//                     <sphereGeometry args={[1, 64, 64]} />
//                     <meshStandardMaterial map={dottedMap} color={0xFFFFFF} metalness={0.4} roughness={0.7} />
//                     {countries.map((country, index) => (
//                         <mesh
//                             key={index}
//                             position={[
//                                 country.position[0],
//                                 country.position[1],
//                                 country.position[2]
//                             ]}
//                             onClick={() => handleCountryClick(country)}
//                         >
//                             <sphereGeometry args={[0.05, 16, 16]} />
//                             <meshStandardMaterial color={country.color} />
//                         </mesh>
//                     ))}
//                 </mesh>
//                 <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
//             </Canvas>
//         </div>
//     );
// };

// export default SpottedEarth;

// src/components/CountryGlobe.jsx
// import { Canvas, useLoader } from '@react-three/fiber';
// import { OrbitControls, Stars } from '@react-three/drei';
// import * as THREE from 'three';
// import { useRef, useState } from 'react';
// import earth from '../assests/earth.jpg';
// import dotted from '../assests/dotted.jpg';

// const SpottedEarth = ({ onCountryClick }) => {
//     const globeRef = useRef();
//     const [activeCountry, setActiveCountry] = useState(null);

//     const countries = [
//         { name: "Indonesia", position: [1.3521, 103.8198, 1], color: "hotpink" },
//         { name: "Kenya", position: [-0.0236, 37.9062, 1], color: "hotpink" },
//         { name: "Ghana", position: [7.9465, -1.0232, 1], color: "hotpink" },
//         { name: "South Africa", position: [-30.5595, 22.9375, 1], color: "hotpink" },
//         { name: "Saudi Arabia", position: [23.8859, 45.0792, 1], color: "hotpink" },
//     ];

//     const handleCountryClick = (country) => {
//         setActiveCountry(country);
//         onCountryClick(country);
//     };

//     const earthMap = useLoader(THREE.TextureLoader, earth);
//     const dottedOverlay = useLoader(THREE.TextureLoader, dotted);

//     return (
//         <Canvas camera={{ position: [0, 0, 3], fov: 60 }}>
//             <ambientLight intensity={0.5} />
//             <pointLight position={[10, 10, 10]} />
//             <mesh ref={globeRef}>
//                 <sphereGeometry args={[1, 32, 32]} />
//                 <meshPhongMaterial map={earthMap} />
//                 <meshPhongMaterial map={dottedOverlay} transparent opacity={0.5} />
//                 {countries.map((country, index) => (
//                     <mesh
//                         key={index}
//                         position={[
//                             country.position[0],
//                             country.position[1],
//                             country.position[2]
//                         ]}
//                         onClick={() => handleCountryClick(country)}
//                     >
//                         <sphereGeometry args={[0.05, 16, 16]} />
//                         <meshStandardMaterial color={country.color} />
//                     </mesh>
//                 ))}
//             </mesh>
//             <OrbitControls
//                 enablePan={true}
//                 enableZoom={true}
//                 enableRotate={true}
//             />
//             <Stars />
//         </Canvas>
//     );
// };

// export default SpottedEarth;

// src/components/SpottedEarth.jsx
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useRef, useState } from 'react';
import earth from '../assests/earth.jpg';

const SpottedEarth = ({ onCountryClick }) => {
    const globeRef = useRef();
    const [activeCountry, setActiveCountry] = useState(null);

    // Convert latitude and longitude to Cartesian coordinates
    const latLongToCartesian = (lat, lon, radius) => {
        const phi = (90 - lat) * (Math.PI / 180);
        const theta = (lon + 180) * (Math.PI / 180);

        const x = -(radius) * Math.sin(phi) * Math.cos(theta);
        const y = (radius) * Math.cos(phi);
        const z = (radius) * Math.sin(phi) * Math.sin(theta);

        return [x, y, z];
    };

    const countries = [
        { name: "Indonesia", lat: 1.3521, lon: 103.8198, color: "hotpink" },
        { name: "Kenya", lat: -0.0236, lon: 37.9062, color: "hotpink" },
        { name: "Ghana", lat: 7.9465, lon: -1.0232, color: "hotpink" },
        { name: "South Africa", lat: -30.5595, lon: 22.9375, color: "hotpink" },
        { name: "Saudi Arabia", lat: 23.8859, lon: 45.0792, color: "hotpink" },
    ];

    const handleCountryClick = (country) => {
        setActiveCountry(country);
        onCountryClick(country);
    };

    const dottedMap = useLoader(THREE.TextureLoader, earth);

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Canvas camera={{ position: [0, 0, 2.5], fov: 60 }}>
                <ambientLight intensity={1} />
                <pointLight position={[10, 10, 10]} />
                <mesh ref={globeRef}>
                    <sphereGeometry args={[1, 64, 64]} />
                    <meshBasicMaterial map={dottedMap} color={0xFFFFFF} />
                    {countries.map((country, index) => {
                        const [x, y, z] = latLongToCartesian(country.lat, country.lon, 1);
                        return (
                            <mesh
                                key={index}
                                position={[x, z, y]}
                                onClick={() => handleCountryClick(country)}
                            >
                                <sphereGeometry args={[0.05, 16, 16]} />
                                <meshStandardMaterial color={country.color} />
                            </mesh>
                        );
                    })}
                </mesh>
                <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
            </Canvas>
        </div>
    );
};

export default SpottedEarth;
