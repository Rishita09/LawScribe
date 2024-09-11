import React from 'react';
import HeroSection from './HeroSection';
import WhyChooseUs from './WhyChooseUs';
// import FeedbackSection from './FeedbackSection';
import ServicesSection from './ServicesSection';

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <WhyChooseUs />
      {/* <FeedbackSection /> */}
      <ServicesSection />
    </div>
  );
};

export default LandingPage;