import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EVFeature.css';

function EVFeature() {
  const navigate = useNavigate();

  const handleBatteryClick = () => {
    navigate('/battery-specs'); // This will navigate to the battery specs page
  };

  return (
    <div className="feature-container">
      <h2 className="feature-title">EV Features</h2>
      
      <div className="feature-grid">
        <div 
          className="feature-item battery-tech"
          onClick={handleBatteryClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleBatteryClick()}
          aria-label="View battery specifications"
        >
          <div className="feature-icon">🔋</div>
          <h3>Battery Tech</h3>
          <p>Long-range batteries with 15-minute fast charging</p>
          <span className="view-more">View details →</span>
        </div>
        
        <div className="feature-item">
          <div className="feature-icon">🤖</div>
          <h3>Autopilot</h3>
          <p>Advanced driver assistance systems</p>
        </div>
      </div>
    </div>
  );
}

export default EVFeature;