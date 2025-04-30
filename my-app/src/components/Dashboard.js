// src/components/Dashboard.js
import React, { useState } from 'react';
import Map from './Map'; // Assuming you have Map component
import Contact from './Contact'; // Assuming you have Contact component
import EVFeature from './EVFeature'; // Assuming you have EVFeature component
import TabNavigation from './tabNavigation'; // Import TabNavigation

function Dashboard() {
  const [activeTab, setActiveTab] = useState('home'); // State to track active tab

  return (
    <div className="dashboard">
      {/* Tab Navigation */}
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'home' && <div>Welcome to the Dashboard!</div>}
        {activeTab === 'map' && <Map />}
        {activeTab === 'contact' && <Contact />}
        {activeTab === 'evFeature' && <EVFeature />}
      </div>
    </div>
  );
}

export default Dashboard;
