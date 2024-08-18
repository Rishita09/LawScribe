import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import './Auth.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(username)) {
      setError('Invalid email format');
      return;
    }
    if (!validatePassword(password)) {
      setError(
        'Password must be at least 8 characters long and include one capital letter, one small letter, one number, and one special character'
      );
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/auth/register', {
        username,
        password,
      });
      console.log(response.data);
      navigate('/signin');
    } catch (error) {
      console.error('Error signing up:', error);
      setError('Registration failed. Please try again.');
    }
  };

  const handleGoogleSuccess = (response) => {
    console.log('Google sign-up success:', response);
    // Handle Google sign-up logic
  };

  const handleGoogleFailure = (response) => {
    console.error('Google sign-up failure:', response);
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        {error && <p className="error-message">{error}</p>}
        <input
          type="text"
          placeholder="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
        <Link to="/signin">Already have an account? Sign In</Link>
      </form>
      <div className="google-signup">
        <GoogleLogin
          clientId="397870644736-h93ks1oq92hbtgdoq6ha4qgie3hvema0.apps.googleusercontent.com"
          buttonText="Sign Up with Google"
          onSuccess={handleGoogleSuccess}
          onFailure={handleGoogleFailure}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </div>
  );
};

export default SignUp;
