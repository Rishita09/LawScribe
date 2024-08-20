import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateLegalDoc from './components/CreateLegalDoc/CreateLegalDoc';
import ChatBox from './components/InteractiveAI/ChatBox';
import SummarizeDoc from './components/SummarizeDoc/SummarizeDoc';
// Import other components as necessary
import './App.css';
import BlogPage from './components/Blog/BlogPage';
import WhyChooseUs from './components/LandingPage/WhyChooseUs';
//import ServicesSection from './components/LandingPage/ServicesSection';
import FeedbackSection from './components/LandingPage/FeedbackSection';
import Footer from './components/LandingPage/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/summarize" element={<SummarizeDoc />} />
          <Route path="/create-legal-doc" element={<CreateLegalDoc />} />
          <Route path="/interactive-ai" element={<ChatBox />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
