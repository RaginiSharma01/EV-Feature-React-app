import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Map from './components/Map';
import Contact from './components/Contact';
import EVFeature from './components/EVFeature';
import Home from './components/Home';
import BatterySpecs from './components/BatterySpecs';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className={`app ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <button 
          className="toggle-button" 
          onClick={toggleSidebar}
          aria-label={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
          aria-expanded={isSidebarOpen}
        >
          <i className={`fas fa-${isSidebarOpen ? 'times' : 'bars'}`}></i>
        </button>

        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/map" element={<Map />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ev-features" element={<EVFeature />} />
            <Route path="/battery-specs" element={<BatterySpecs />} />
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
