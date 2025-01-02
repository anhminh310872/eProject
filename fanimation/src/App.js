import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import Products from './allproduct';
import ProductsCeiling from './productCeiling.jsx';
import ProductsPedestal from './productPedestal.jsx';
import ProductsWall from './ProductWall.jsx';
import ProductsExhaust from './ProductExhaust.jsx';
import ProductsAccessories from './ProductAccessories.jsx';
import ContactUs from './ContactUs';
import Login from './Login';
import SignUp from './SignUp';
import product from './product.json';
import productCeiling from './productCeiling.json';
import productPedestal from './productPedestal.json';
import productWall from './productWall.json';
import productExhaust from './productExhaust.json';
import productAccessories from './productAccessories.json';
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
  const minute = String(now.getMinutes()).padStart(2, '0');
  const second = String(now.getSeconds()).padStart(2, '0');
  return `${hour}:${minute}:${second}`;
}

function App() {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const parallaxOffset = scrollY * -0.3;
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${parallaxOffset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const [productdropdown, setproductdropdown] = useState(false);

  const toggleproduct = () => {
    setproductdropdown(!productdropdown);
  }

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

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

  // Logic cho View Count
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewCount((prevCount) => prevCount + 13); // Tăng 13 view mỗi giây
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      navigate(`/products?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="App">
      <div className="wrapper" ref={parallaxRef}>
        <button className="menu-button" onClick={toggleDropdown}>
          <i className="fa-solid fa-bars" ></i>
        </button>
        <ul className="menu">
          <li onClick={() => navigate("/products")}>
            <Link to="/products">
              <i className="fa-solid fa-box-open"></i>
            </Link>
            <span className="tooltip">Product</span>
          </li>
          <li onClick={() => navigate("/about-us")}>
            <Link to="/about-us">
              <i className="fa-solid fa-circle-info"></i>
            </Link>
            <span className="tooltip">About Us</span>
          </li>
          <li onClick={() => navigate("/contact-us")}>
            <Link to="/contact-us">
              <i className="fa-solid fa-headset"></i>
            </Link>
            <span className="tooltip">Contact Us</span>
          </li>
          <div className="search-container">
            <div className="input-wrapper">
              <input type="text" id="inputField" placeholder=" " value={searchQuery} onChange={handleSearchChange}/>
              <label for="inputField">Search</label>
            </div>
            <button className="search-button" onClick={handleSearchSubmit}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </ul>
        <div className="right-section">
          {/* Hiển thị View Count */}
          <div className="visitor-count">
          <i class="fa-solid fa-eye"></i> {viewCount}
          </div>
          <div className="logo" onClick={() => navigate("/")}>
            <img src="/images/logo.png" alt="Fanimation Logo" />
          </div>
          <div className="auth-icons">
            <Link to="/login" className="auth-icon">
              <i className="fas fa-user"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className={`custom-menu-dropdown ${dropdownOpen ? 'open' : ''}`}>
        <li className="content-dropdown">
          <div className="search-container">
            <div className="input-wrapper">
              <input type="text" id="inputField" placeholder=" " value={searchQuery} onChange={handleSearchChange} />
              <label for="inputField">Search</label>
            </div>
            <button className="search-button" onClick={handleSearchSubmit}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </li>
        <li id="content-dropdown" className="content-dropdown" onClick={toggleproduct}>
          Product
          <i
            className={`fa-solid fa-chevron-${productdropdown ? "up" : "down"}`}
            style={{ marginLeft: "10px" }}
          ></i>
        </li>
        <div className={`product-dropdown ${productdropdown ? 'open' : ''}`}>
          <li onClick={() => navigate("/products")} >All Products</li>
          <li onClick={() => navigate("/products/ceiling")} >Ceiling</li>
          <li onClick={() => navigate("/products/pedestal")} >Pedestal</li>
          <li onClick={() => navigate("/products/wall")} >Wall</li>
          <li onClick={() => navigate("/products/exhaust")} >Exhaust</li>
          <li onClick={() => navigate("/products/accessories")} >Accessories</li>
        </div>
        <li id="content-dropdown" className="content-dropdown" onClick={() => navigate("/about-us")} >
          About Us
        </li>
        <li id="content-dropdown" className="content-dropdown" onClick={() => navigate("/contact-us")}>
          Contact Us
        </li>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products data={product} />} />
        <Route path="/products/ceiling" element={<ProductsCeiling data={productCeiling} />} />
        <Route path="/products/pedestal" element={<ProductsPedestal data={productPedestal} />} />
        <Route path="/products/wall" element={<ProductsWall data={productWall} />} />
        <Route path="/products/exhaust" element={<ProductsExhaust data={productExhaust} />} />
        <Route path="/products/accessories" element={<ProductsAccessories data={productAccessories} />} />
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
              src="/images/logo.png"
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
              <img src="/images/icon-facebook.png" alt="Facebook" />
            </Link>
            <Link to="/">
              <img src="/images/icon-tiktok.png" alt="Tiktok" />
            </Link>
            <Link to="/">
              <img src="/images/icon-instagram.png" alt="Instagram" />
            </Link>
            <Link to="/">
              <img src="/images/icon-youtube.png" alt="YouTube" />
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
