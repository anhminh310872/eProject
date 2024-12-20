import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  body {
    margin: 0;
    overflow-x: hidden;
    height: 100vh;
  }

  .sliding-background {
    background-image: url("/images/TriAire-Hero.png");
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    animation: slide 20s linear infinite alternate;
  }

  @keyframes slide {
    0% { background-position: 0% 50%; }
    100% { background-position: 100% 50%; }
  }

  .blur-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  main {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  }

  .login-container {
    width: 50%;
    background-color: transparent;
    border: 4px solid rgba(255, 255, 255);
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    z-index: 999;
  }

  .login-form h2 {
    color: white;
    text-align: center;
    margin-bottom: 20px;
  }

  .input-group {
    margin-bottom: 15px;
  }

  .input-group label {
    color: white;
    display: block;
    margin-bottom: 5px;
  }

  .input-group input {
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 2px solid white;
    color: white;
    padding: 5px 0;
    font-size: 16px;
    outline: none;
  }

  .login-form a {
    color: white;
    text-decoration: none;
    font-style: italic;
  }

  button {
    display: block;
    width: 50%;
    padding: 15px;
    margin: 15px auto;
    background-color: white;
    color: black;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }

  .options {
    color: white;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    align-items: center;
  }

  .signupnow {
    color: white;
    text-decoration: none;
    font-style: italic;
    display: block;
    margin: 10px auto;
    width: fit-content;
  }

  .social-login {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    gap: 50px;
  }

  .social-login img {
    width: 30px;
    height: 30px;
    margin: 0 5px;
  }

  button:hover {
    background-color: #333;
    color: white;
  }

  .social-login a img:hover {
    transform: scale(1.2);
  }
`;

const SlidingBackground = styled.div`
  background-image: url("/images/TriAire-Hero.png");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  animation: slide 20s linear infinite alternate;
`;

const BlurBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  margin-bottom: 0;
`;

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
    <Container>
      <SlidingBackground />
      <BlurBackground />
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
    </Container>
  );
}

export default Login;
