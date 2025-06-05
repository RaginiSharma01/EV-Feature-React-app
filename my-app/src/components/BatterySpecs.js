import React from 'react';
import { Link } from 'react-router-dom';
import './BatterySpecs.css';

function BatterySpecs() {
  return (
    <div className="battery-specs-container">
      <Link to="/ev-features" className="back-button">
        &larr; Back to Features
      </Link>
      
      <h1>Battery Specifications</h1>
      
      <div className="specs-grid">
        <div className="spec-card">
          <h2>Battery Type</h2>
          <p>Lithium-ion NMC (Nickel Manganese Cobalt)</p>
        </div>
        
        <div className="spec-card">
          <h2>Capacity</h2>
          <p>75 kWh - 100 kWh options available</p>
        </div>
        
        <div className="spec-card">
          <h2>Charging Time</h2>
          <p>15 minutes for 80% charge (with fast charging)</p>
        </div>
        
        <div className="spec-card">
          <h2>Range</h2>
          <p>300-450 miles per full charge</p>
        </div>
      </div>
      
      <div className="tech-details">
        <h2>Technology Highlights</h2>
        <ul>
          <li>Advanced thermal management system</li>
          <li>Modular battery design for easy replacement</li>
          <li>Bi-directional charging capability</li>
          <li>8-year or 150,000-mile warranty</li>
        </ul>
      </div>
    </div>
  );
}

export default BatterySpecs;
