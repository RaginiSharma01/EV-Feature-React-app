// src/components/TabNavigation.js
import React from 'react';

function TabNavigation({ activeTab, setActiveTab }) {
  return (
    <div className="tabs">
      <button
        onClick={() => setActiveTab('home')}
        className={activeTab === 'home' ? 'active' : ''}
      >
        Home
      </button>
      <button
        onClick={() => setActiveTab('map')}
        className={activeTab === 'map' ? 'active' : ''}
      >
        Map
      </button>
      <button
        onClick={() => setActiveTab('contact')}
        className={activeTab === 'contact' ? 'active' : ''}
      >
        Contact Info
      </button>
      <button
        onClick={() => setActiveTab('evFeature')}
        className={activeTab === 'evFeature' ? 'active' : ''}
      >
        EV Feature
      </button>
    </div>
  );
}

export default TabNavigation;
