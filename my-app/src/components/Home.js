import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const features = [
  {
    title: 'Interactive Map',
    description: 'Navigate through EV charging stations on our map.',
    icon: '📍',
    path: '/map'
  },
  {
    title: 'EV Features',
    description: 'Explore the latest electric vehicle features and technologies.',
    icon: '🚗',
    path: '/features'
  },
  {
    title: 'Contact Us',
    description: 'Need help? Reach out to us anytime.',
    icon: '✉️',
    path: '/contact'
  },
];

function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/get-started');
  };

  const handleFeatureClick = (path) => {
    navigate(path);
  };

  return (
    <main className="home-page">
      <header className="header" role="banner">
        <h1>Welcome to Solar EV</h1>
        <p>Your one-stop solution for EV features, map navigation, and more!</p>
      </header>

      <section className="features" aria-label="Main Features">
        {features.map((feature, index) => (
          <article 
            key={index} 
            className="feature-card" 
            onClick={() => handleFeatureClick(feature.path)}
            tabIndex={0}
            role="button"
            aria-label={`Go to ${feature.title}`}
            onKeyDown={(e) => e.key === 'Enter' && handleFeatureClick(feature.path)}
          >
            <span className="feature-icon">{feature.icon}</span>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </article>
        ))}
      </section>

      <section className="about" aria-labelledby="about-title">
        <h2 id="about-title">About Us</h2>
        <p>
          Solar EV is dedicated to providing the most accurate and up-to-date
          information on electric vehicles, charging stations, and much more.
          Our mission is to make the transition to electric vehicles as smooth as
          possible.
        </p>
      </section>

      <section className="cta" aria-label="Call to action">
        <button 
          className="cta-button" 
          onClick={handleGetStarted}
          aria-label="Get started with Solar EV"
        >
          Get Started
        </button>
      </section>

      <footer className="footer" role="contentinfo">
        <p>&copy; {new Date().getFullYear()} Solar EV. All rights reserved.</p>
        <nav aria-label="Legal">
          <ul className="footer-links">
            <li><a href="/privacy">Privacy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </nav>
      </footer>
    </main>
  );
}

export default Home;