import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup');
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Welcome to AI Lawyer</h1>
        <p>Your AI-powered legal assistant</p>
        <button className="cta-button" onClick={handleGetStarted}>Get Started</button>
      </div>
    </section>
  );
};

export default HeroSection;
