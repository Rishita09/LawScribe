import React from 'react';
import HeroSection from './HeroSection';
import WhyChooseUs from './WhyChooseUs';
// import FeedbackSection from './FeedbackSection';
import ServicesSection from './ServicesSection';
import Footer from './Footer';
import Header from './Header';

const LandingPage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <WhyChooseUs />
      {/* <FeedbackSection /> */}
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
