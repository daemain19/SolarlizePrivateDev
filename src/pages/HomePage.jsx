import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import bg from '../assests/bg-img.jpg';
import AboutUs from '../components/AboutUs';
import SolarizeUI from '../components/SolarlizeUI';
function HomePage() {
  const whoAreWeRef = useRef(null);
  return (
    <div className="min-h-screen flex flex-col">
      <div
        className="min-h-screen bg-cover bg-no-repeat bg-center flex flex-col"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-[#281D08] opacity-45"></div>
        <Navbar whoAreWeRef={whoAreWeRef} />
        <HeroSection />
      </div>
      <AboutUs ref={whoAreWeRef} />
      <SolarizeUI />
    </div>
  );
}

export default HomePage;
