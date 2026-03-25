// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StaffDashboard from './pages/StaffDashboard';
import ProfileSection from './pages/ProfileSection';
import CountryPage from './pages/CountryPage';
import SolarPanelSelection from './components/SolarPanelSelection';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfileSection />} />
        <Route path="/country/:countryName" element={<CountryPage />} />
        <Route path="/staff" element={<StaffDashboard />} />
        <Route path="/select-panels" element={<SolarPanelSelection />} />
      </Routes>
    </Router>
  );
}

export default App;
