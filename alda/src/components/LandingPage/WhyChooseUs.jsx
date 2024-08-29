import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    { title: 'Expert AI Models', description: 'Trained on legal documents.', image: '/images/model.jpg' },
    { title: 'Time-Saving', description: 'Generates documents quickly.', image: '/images/time.jpg' },
    { title: 'Cost-Effective', description: 'Affordable legal solutions.', image: '/images/cost.jpg' },
  ];

  return (
    <section className="why-choose-us-section">
      <h2>Why Choose Us</h2>
      <div className="reasons-container">
        {reasons.map((reason, index) => (
          <div key={index} className="reason-card">
            <img src={reason.image} alt={reason.title} className="reason-image" />
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
