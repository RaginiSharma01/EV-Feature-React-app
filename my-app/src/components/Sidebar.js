// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar({ isOpen }) {
  return (
    <div className={`sidebar ${isOpen ? '' : 'closed'}`}>
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/map">Map</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/evFeature">EV Features</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
