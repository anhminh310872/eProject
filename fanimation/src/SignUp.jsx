import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    body {
    margin: 0;
    overflow-x: hidden;
    height: 100vh;
  }

  .sliding-background {
    background-image: url("/images/mad8531-pd-hero.jpg");
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

  .signup-container {
    width: 50%;
    background-color: transparent;
    border: 4px solid rgba(255, 255, 255);
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    z-index: 999;
  }

  .signup-form h2 {
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

  .social-signup {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    gap: 50px;
  }

  .social-signup img {
    width: 30px;
    height: 30px;
    margin: 0 5px;
  }

  button:hover {
    background-color: #333;
    color: white;
  }

  .social-signup a img:hover {
    transform: scale(1.2);
  }
`;

const SlidingBackground = styled.div`
  background-image: url("/images/mad8531-pd-hero.jpg");
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

function SignUp() {
  return (
    <Container>
      <SlidingBackground />
      <BlurBackground />
      <main>
              <div className="signup-container">
                  <div className="signup-form">
                      <h2><strong>Sign Up</strong></h2>
                      <form action="#" method="post">
                          <div className="input-group">
                              <label htmlFor="email">Email:</label>
                              <input type="email" id="email" name="email" required />
                          </div>
                          <div className="input-group">
                              <label htmlFor="username">User Name:</label>
                              <input type="text" id="username" name="username" required />
                          </div>
                          <div className="input-group">
                              <label htmlFor="password">Password:</label>
                              <input type="password" id="password" name="password" required />
                          </div>
                          <div className="input-group">
                              <label htmlFor="comfirm-password">Còmirm Password:</label>
                              <input type="comfirm-password" id="comfirm-password" name="comfirm-password" required />
                          </div>
                          <button type="submit"><strong>SIGN UP NOW</strong></button>
                          <div className="social-signup">
                              <a href="#">
                                  <img src="/images/icon-facebookblue.png" alt="Facebook" />
                              </a>
                              <a href="#">
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

export default SignUp;