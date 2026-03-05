// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import bg from './assests/bg-img.jpg';

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat bg-center flex flex-col"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-[#281D08] opacity-45"></div>
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;
