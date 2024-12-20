// import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import Products from './allproduct';
import ContactUs from './ContactUs';
import Login from './Login';
import SignUp from './SignUp';
import product from './product.json';

function App() {
  // const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <div className="left-section">
            <ul className="nav-links">
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/Contact-us">Contact Us</Link>
              </li>
              <li>
              <input type="text" placeholder="Search..." className="search-box" />
              </li>
              <li>
              <button className="search-button">Search</button>
              </li>
            </ul>
          </div>
          <div className="right-section">
            <div className="logo" onClick={() => navigate('/')}>
              <img src="./images/logo.png" alt="Fanimation Logo" />
            </div>
            <div className="auth-icons">
              <Link to="/login" className="auth-icon">
                <i className="fas fa-user"></i>
              </Link>
            </div>
          </div>
        </nav>
      </header>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products data={product} />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      <footer>
        <div className="footer-top">
          <div className="footer-column">
            <img
              src="./images/logo.png"
              alt="Fanimation Logo"
              className="footer-logo"
            />
            <p>
              590 CMT8 Quan 3<br />
              Ho Chi Minh City
              <br />
              Phone: 012.345.6789
              <br />
              Email: fanimation@gmail.com
            </p>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/Contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Categories</h3>
            <ul>
              <li>
                <Link to="/allproducts">All Products</Link>
              </li>
              <li>
                <Link to="/ceiling">Ceiling</Link>
              </li>
              <li>
                <Link to="/Pedestal">Pedestal</Link>
              </li>
              <li>
                <Link to="/wall">Wall</Link>
              </li>
              <li>
                <Link to="/accessories">Accessories</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Subscribe</h3>
            <p>Enter your email address to receive updates and promotions.</p>
            <input
              type="email"
              placeholder="Email address"
              className="footer-input"
            />
            <button className="footer-button">Subscribe</button>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Fanimation. All rights reserved.</p>
          <div className="footer-icons">
          <Link to="/">
          <img src="./images/icon-facebook.png" alt="Facebook" />
          </Link>
          <Link to="/">
              <img src="./images/icon-tiktok.png" alt="Tiktok" />
              </Link>
              <Link to="/">
              <img src="./images/icon-instagram.png" alt="Instagram" />
              </Link>
              <Link to="/">
              <img src="./images/icon-youtube.png" alt="YouTube" />
              </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
