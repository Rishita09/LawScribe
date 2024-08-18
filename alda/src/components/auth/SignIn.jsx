import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import './Auth.css';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/auth/login', {
        username,
        password,
      });
      console.log(response.data);
      navigate('/');
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  const handleGoogleSuccess = (response) => {
    console.log('Google sign-in success:', response);
    // Handle Google sign-in logic
    navigate('/');
  };

  const handleGoogleFailure = (response) => {
    console.error('Google sign-in failure:', response);
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
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
        <button type="submit">Sign In</button>
        <Link to="/signup">Don't have an account? Sign Up</Link>
      </form>
      <div className="google-signin">
        <GoogleLogin
          clientId="397870644736-h93ks1oq92hbtgdoq6ha4qgie3hvema0.apps.googleusercontent.com"
          buttonText="Sign In with Google"
          onSuccess={handleGoogleSuccess}
          onFailure={handleGoogleFailure}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </div>
  );
};

export default SignIn;
