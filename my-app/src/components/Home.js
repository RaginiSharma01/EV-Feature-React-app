import React from 'react';
import './Home.css'; // Assuming you have CSS for styling

function Home() {
  return (
    <div className="home-page">
      {/* Header Section */}
      <header className="header">
        <h1>Welcome to Solor EV</h1>
        <p>Your one-stop solution for EV features, map navigation, and more!</p>
      </header>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <h2>Interactive Map</h2>
          <p>Navigate through EV charging stations on our map.</p>
        </div>
        <div className="feature-card">
          <h2>EV Features</h2>
          <p>Explore the latest electric vehicle features and technologies.</p>
        </div>
        <div className="feature-card">
          <h2>Contact Us</h2>
          <p>Need help? Reach out to us anytime.</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Us</h2>
        <p>Solar EV is dedicated to providing the most accurate and up-to-date information on electric vehicles, charging stations, and much more. Our mission is to make the transition to electric vehicles as smooth as possible.</p>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <button className="cta-button">Get Started</button>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2025 Solar EV. All rights reserved.</p>
        <p>Privacy | Terms of Service</p>
      </footer>
    </div>
  );
}

export default Home;
