import React from 'react';
import './Services.css';

const ServicesSection = () => {
  return (
    <div className="services">
      <h2>Services LawScribe Provides</h2>
      <div className="service-grid">
        <div className="service">
          <img src="/images/legal.gif" alt="Legal Document Creation" /> 
          <h3>Legal Document Creation</h3>
          <p>⚖️ Generate comprehensive legal documents tailored to your needs. Streamline your workflow with AI-assisted drafting.</p>
          <p>⚖️ Save time and ensure accuracy with our easy-to-use document creation service.</p>
          <p>⚖️ From contracts to wills, our service handles it all efficiently.</p>
        </div>
        <div className="service">
          <img src="/images/document.gif" alt="Legal Summarizer" /> 
          <h3>Legal Summarizer</h3>
          <p>⚖️ Condense lengthy legal texts into clear, concise summaries. Grasp essential information quickly without missing critical details.</p>
          <p>⚖️ Perfect for reviewing large volumes of documents in a short time.</p>
          <p>⚖️ Our AI-driven summarizer ensures precision and clarity in every summary.</p>
        </div>
        <div className="service">
          <img src="/images/chatbot.gif" alt="Legal Virtual Assistant" /> 
          <h3>Legal Virtual Assistant</h3>
          <p>⚖️ Your personal AI legal assistant is available 24/7. Get real-time answers and legal advice tailored to your situation.</p>
          <p>⚖️ Enhance productivity with automated task management and legal support.</p>
          <p>⚖️ Our assistant is designed to support legal professionals and individuals alike.</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
