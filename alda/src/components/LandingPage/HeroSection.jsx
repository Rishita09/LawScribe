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
        <h1>Intelligent contract automation is here.</h1>
        <p>Developments in AI will transform the way lawyers work. These resources will help you navigate these new opportunities and ways of working, with expert insights and actionable advice on how to leverage AI in legal.</p>
        <button className="cta-button" onClick={handleGetStarted}>Get Started</button>
      </div>
    </section>
  );
};

export default HeroSection;
