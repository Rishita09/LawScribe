import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services">
      <h2>Our Legal Services</h2>
      <div className="service-grid">
        <div className="service">
          <i className="fas fa-file-alt"></i> {/* Icon for Legal Document Creation */}
          <h3>Legal Document Creation</h3>
        </div>
        <div className="service">
          <i className="fas fa-highlighter"></i> {/* Icon for Legal Summarizer */}
          <h3>Legal Summarizer</h3>
        </div>
        <div className="service">
          <i className="fas fa-robot"></i> {/* Icon for Legal Virtual Assistant */}
          <h3>Legal Virtual Assistant</h3>
        </div>
      </div>
    </div>
  );
};

export default Services;
