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
        <h1>AI-Powered Legal Transformation</h1>
        <p>Step into the future of law with AI-driven contract automation. From generating and formatting legal documents to delivering concise summaries and interactive legal insights, discover how cutting-edge AI is revolutionizing the legal landscape. Explore expert advice and actionable strategies to stay ahead in this new era of legal innovation with us.</p>
        <button className="cta-button" onClick={handleGetStarted}>Get Started</button>
      </div>
    </section>
  );
};

export default HeroSection;