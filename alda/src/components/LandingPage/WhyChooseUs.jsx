import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    { title: 'Expert AI Models', description: 'Our AI models are meticulously trained on a vast array of legal documents to ensure high accuracy and reliability in generating legal documents.', image: '/images/model.jpg' },
    { title: 'Time-Saving', description: 'Our platform significantly reduces the time required to draft legal documents, allowing you to focus on more important tasks.', image: '/images/time.jpg' },
    { title: 'Cost-Effective', description: 'We offer affordable solutions that make high-quality legal document generation accessible to everyone, without compromising on quality.', image: '/images/cost.jpg' },
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
