import React, { useState, useEffect } from 'react';
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
import FAQ from './FaQ';

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${date}/${month}/${year}`;
}

function getTime() {
  const now = new Date();
  const hour = now.getHours();
  const minute = String(now.getMinutes()).padStart(2,'0'); 
  const second = String(now.getSeconds()).padStart(2,'0');  
  return `${hour}:${minute}:${second}`;
}

function App() {
  // const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const [location, setLocation] = useState({ lat: null, lng: null });
    const currentDate = useState(getDate());
    const currentTime = useState(getTime());

  const getGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude.toFixed(2),
            lng: position.coords.longitude.toFixed(2),
          });
        }
      );
    }
  };

  useEffect(() => {
    getGeolocation();
  }, []);

  return (
    <div className="App">
      <div class="wrapper">
        <button class="menu-button">
        <i class="fa-solid fa-bars"></i>
        </button>
        <ul class="menu">
            <li>
            <Link to="/products">
            <i class="fa-solid fa-box-open"></i>
                    </Link>
                    <span class="tooltip">Product</span>
            </li>
            <li>
            <Link to="/about-us">
            <i class="fa-solid fa-circle-info"></i>
                    </Link>
                    <span class="tooltip">About Us</span>
            </li>
            <li>
            <Link to="/contact-us">
            <i class="fa-solid fa-headset"></i>
                    </Link>
                    <span class="tooltip">Contact Us</span>
            </li>
            <div class="search-container">
                <div class="input-wrapper">
                    <input type="text" id="inputField" placeholder=" " />
                    <label for="inputField">Search</label>
                </div>
                <button class="search-button">
                <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </ul>
        <div class="right-section">
            <div class="logo">
                  <img src="./images/logo.png" alt="Fanimation Logo" />
            </div>
            <div class="auth-icons">
                <Link to="/login" class="auth-icon">
                    <i class="fas fa-user"></i>
                </Link>
            </div>
        </div>   
    </div>
    <div class="dropdown-menu">
        <li>
            <div class="search-container">
                <div class="input-wrapper">
                    <input type="text" id="inputField" placeholder=" " />
                    <label for="inputField">Search</label>
                </div>
                <button class="search-button">
                <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </li>
        <li>
            <Link to="/products">
                <span class="dropdown-content">Product</span>
            </Link>
        </li>
        <li>
            <Link to="/about-us">
                <span class="dropdown-content">About Us</span>
            </Link>
        </li>
        <li>
            <Link to="/contact-us">
                <span class="dropdown-content">Contact Us</span>
            </Link>
        </li>
    </div>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products data={product} />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/faq" element={<FAQ />} />
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
                <Link to="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Categories</h3>
            <ul>
              <li>
                <Link to="/products">All Products</Link>
              </li>
              <li>
                <Link to="/products/ceiling">Ceiling</Link>
              </li>
              <li>
                <Link to="/products/pedestal">Pedestal</Link>
              </li>
              <li>
                <Link to="/products/wall">Wall</Link>
              </li>
              <li>
                <Link to="/products/exhaust">Exhaust</Link>
              </li>
              <li>
                <Link to="/products/accessories">Accessories</Link>
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
      <div className="ticker-container">
      <div className="ticker">
      <p>
          Latitude: {location.lat}, Longitude: {location.lng}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{currentDate}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{currentTime}
        </p>
      </div>
    </div>
    </div>
  );
}

export default App;
