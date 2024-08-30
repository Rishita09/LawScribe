import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Header from './components/LandingPage/Header';
import Footer from './components/LandingPage/Footer';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateLegalDoc from './components/CreateLegalDoc/CreateLegalDoc';
import ChatBox from './components/InteractiveAI/ChatBox';
import SummarizeDoc from './components/SummarizeDoc/SummarizeDoc';
import './App.css';
import BlogPage from './components/Blog/BlogPage';
// import WhyChooseUs from './components/LandingPage/WhyChooseUs';
// import ServicesSection from './components/LandingPage/ServicesSection';
// import FeedbackSection from './components/LandingPage/FeedbackSection';
import GiftDeed from './components/CreateLegalDoc/GiftDeed';
import RestrainingOrder from './components/CreateLegalDoc/RestrainingOrder';
import MutualDivorcePetition from './components/CreateLegalDoc/MutualDivorcePetition';
import PropertySaleAgreement from './components/CreateLegalDoc/PropertySaleAgreement';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
      <Header /> 
      <main style={{ marginTop: '60px' }}></main>
          <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/summarize" element={<SummarizeDoc />} />
          <Route path="/create-legal-doc" element={<CreateLegalDoc />} />
          <Route path="/create-legal-doc/property-sale-agreement" element={<PropertySaleAgreement />} />
          <Route path="/create-legal-doc/restraining-order" element={<RestrainingOrder />} />
          <Route path="/create-legal-doc/gift-deed-for-giving-cash" element={<GiftDeed />} />
          <Route path="/create-legal-doc/mutual-divorce-petition" element={<MutualDivorcePetition />} />
          <Route path="/interactive-ai" element={<ChatBox />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;