import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Header from './components/Header';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateLegalDoc from './components/CreateLegalDoc/CreateLegalDoc';
// Import other components as necessary
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/summarize" element={<div>Summarize Component</div>} />
          <Route path="/create-legal-doc" element={<CreateLegalDoc />} />
          <Route path="/interactive-ai" element={<div>Interactive AI Component</div>} />
          <Route path="/blog" element={<div>Blog Component</div>} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
