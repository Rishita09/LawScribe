import React, { useEffect, useState } from 'react';
import './FeedbackSection.css';

const FeedbackSection = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await fetch('/api/feedbacks');
        
        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setFeedbacks(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching feedbacks:', err);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <section className="feedback-section">
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="carousel-container">
          {feedbacks.map((feedback, index) => (
            <div key={index} className="carousel-item">
              <p>{feedback.message}</p>
              <h4>{feedback.author}</h4>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default FeedbackSection;
