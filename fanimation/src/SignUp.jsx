import React from 'react';
import './signup.css'

function SignUp() {
  return (
    <>
      <div className="SlidingBackground"></div>
      <div className="BlurBackground"></div>
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
                              <label htmlFor="comfirm-password">Confirm Password:</label>
                              <input type="password" id="comfirm-password" name="comfirm-password" required />
                          </div>
                          <button type="submit"><strong>SIGN UP NOW</strong></button>
                          <div className="social-signup">
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

export default SignUp;