// src/App.js
import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar'; // Sidebar component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Map from './components/Map';
import Contact from './components/Contact';
import EVFeature from './components/EVFeature'; // Assuming EVFeature component is created
import Home from './components/Home'; // Import the Home.js component

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="app">
        {/* Button to toggle sidebar */}
        <div className="toggle-button" onClick={toggleSidebar}>
          <i className={`fas fa-${isSidebarOpen ? 'times' : 'bars'}`}></i> {/* Hamburger or Close icon */}
        </div>

        <Sidebar isOpen={isSidebarOpen} /> {/* Pass the state to Sidebar component */}
        
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Route to Home.js */}
            <Route path="/home" element={<Home />} /> {/* Optional: Route to Home.js */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/map" element={<Map />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/evFeature" element={<EVFeature />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
