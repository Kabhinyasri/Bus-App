import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Login.css';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();



  return (
    <div className="full1">
        <button className="back-button-login" onClick={() => navigate(-1)}>Back</button>
      <div className="main1">
        <h1>Login</h1>
        <form onSubmit={() => navigate('/manage')}>
          <div className="user1">
            <div className="input1">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Username"
                required
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </div>
          </div>
          <button type="submit1" className="but1">Login</button>
          <button
            type="button"
            className="forgot"
            onClick={() => {
              // Handle password reset action
              console.log('Forgot Password clicked');
            }}
          >
            Forgot Password?
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
