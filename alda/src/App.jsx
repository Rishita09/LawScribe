import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Header from './components/Header';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateLegalDoc from './components/CreateLegalDoc/CreateLegalDoc';
import ChatBox from './components/InteractiveAI/ChatBox';
import SummarizeDoc from './components/SummarizeDoc/SummarizeDoc';
// Import other components as necessary
import './App.css';
import BlogPage from './components/Blog/BlogPage';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HeroSection />} />
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
