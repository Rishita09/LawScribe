import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    { title: 'Expert AI Models', description: 'Trained on legal documents.' },
    { title: 'Time-Saving', description: 'Generates documents quickly.' },
    { title: 'Cost-Effective', description: 'Affordable legal solutions.' },
  ];

  return (
    <section className="why-choose-us-section">
      <div className="reasons-container">
        {reasons.map((reason, index) => (
          <div key={index} className="reason-card">
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
