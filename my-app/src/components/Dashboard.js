// src/components/Dashboard.js
import React, { useState } from 'react';
import Map from './Map';
import Contact from './Contact';
import EVFeature from './EVFeature';
import TabNavigation from './tabNavigation'; 
//import Battery from './Battery';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="dashboard">
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="tab-content">
        {activeTab === 'home' && <div>Welcome to the Dashboard!</div>}
        {activeTab === 'map' && <Map />}
        {activeTab === 'contact' && <Contact />}
        {activeTab === 'evFeature' && <EVFeature />}
       {/* // {activeTab === 'battery' && <Battery />} */}
      </div>

      {/* Optional: Live battery visible at all times */}
      {/* <LiveBatteryStatus /> */}
    </div>
  );
}

export default Dashboard;
