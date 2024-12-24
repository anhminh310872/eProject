import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './login.css'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'QuocBao' && password === '1234') {
      navigate('/');
    }
  };
  return (
    <>
      <div className="SlidingBackground"></div>
      <div className="BlurBackground"></div>
      <main>
        <div className="login-container">
          <div className="login-form">
            <h2><strong>Login</strong></h2>
            <form action="#" method="post" onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="username">User Name:</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="options">
                <div className="remember">
                  <input type="checkbox" id="remember" name="remember" />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <Link to="/">Forget Password?</Link>
              </div>
              <button type="submit"><strong>LOGIN </strong></button>
              <Link className="signupnow" to="/signup">
                Not a member? Sign Up Now
              </Link>
              <div className="social-login">
                <a href="https://www.facebook.com/">
                  <img src="/images/icon-facebookblue.png" alt="Facebook" />
                </a>
                <a href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=705648808057-3chuddbr6oahbebib1uh693k02sgfl30.apps.googleusercontent.com&scope=openid%20email%20profile&response_type=id_token&gsiwebsdk=gis_attributes&redirect_uri=https%3A%2F%2Fid.freepik.com&response_mode=form_post&origin=https%3A%2F%2Fid.freepik.com&display=popup&prompt=select_account&gis_params=ChZodHRwczovL2lkLmZyZWVwaWsuY29tEhZodHRwczovL2lkLmZyZWVwaWsuY29tGAcqFmZQRGE2aHE1VW13c1ZFbEg0K3lDb0EySDcwNTY0ODgwODA1Ny0zY2h1ZGRicjZvYWhiZWJpYjF1aDY5M2swMnNnZmwzMC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbTgBQkBjYmFlMTMxN2YzZGJiY2U0ODJiNGU3MTUyMjA4NmI5YzFjNzBiOWU1NDFlZmUxZGY0ZjczNTkzZDg1ZGJlNTEx&service=lso&o2v=1&ddm=1&flowName=GeneralOAuthFlow">
                  <img src="/images/icon-google.png" alt="Google" />
                </a>
              </div>
            </form>
          </div>
        </div>
      </main>
      </>
  );
}

export default Login;
