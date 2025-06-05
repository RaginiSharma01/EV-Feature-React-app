import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [location, setLocation] = useState(null);
  const [problem, setProblem] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [shareLink, setShareLink] = useState('');

  const getLocation = () => {
    setIsLoading(true);
    setMessage('');
    if (!navigator.geolocation) {
      setMessage('Geolocation not supported by your browser');
      setIsLoading(false);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = {
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
        };
        setLocation(coords);
        setMessage('Location obtained successfully!');
        generateShareLink(coords);
        setIsLoading(false);
      },
      (err) => {
        setMessage(`Error: ${err.message}`);
        setIsLoading(false);
      }
    );
  };

  const generateShareLink = (coords) => {
    const mapLink = `https://www.google.com/maps?q=${coords.lat},${coords.lon}`;
    setShareLink(mapLink);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareLink);
    setMessage('Link copied to clipboard!');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!location) {
      setMessage('Please get your location first!');
      return;
    }
    if (!problem.trim()) {
      setMessage('Please describe your problem.');
      return;
    }
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log('User problem report:', { location, problem });
      setMessage('Report submitted successfully! Our team will contact you soon.');
      setProblem('');
      setLocation(null);
      setShareLink('');
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Support</h2>
      
      <div className="location-section">
        <button 
          className="location-btn" 
          onClick={getLocation}
          disabled={isLoading}
        >
          {isLoading ? 'Getting Location...' : 'Get My Location'}
        </button>
        
        {location && (
          <div className="location-info">
            <p>Your Coordinates: {location.lat.toFixed(4)}, {location.lon.toFixed(4)}</p>
            {shareLink && (
              <div className="share-section">
                <p>Share your location:</p>
                <div className="share-link">
                  <input 
                    type="text" 
                    value={shareLink} 
                    readOnly 
                    className="link-input"
                  />
                  <button onClick={copyToClipboard} className="copy-btn">
                    Copy
                  </button>
                </div>
                <a 
                  href={shareLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="map-link"
                >
                  Open in Google Maps
                </a>
              </div>
            )}
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="problem" className="form-label">
          Describe your issue:
        </label>
        <textarea
          id="problem"
          placeholder="Please describe your problem in detail..."
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          className="problem-input"
          rows={6}
        />
        
        <button 
          type="submit" 
          className="submit-btn"
          disabled={isLoading || !location}
        >
          {isLoading ? 'Submitting...' : 'Submit Report'}
        </button>
      </form>

      {message && (
        <p className={`status-message ${message.includes('Error') ? 'error' : 'success'}`}>
          {message}
        </p>
      )}
    </div>
  );
}

export default Contact;