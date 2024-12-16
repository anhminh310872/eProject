import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';

function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <div className="left-section">
            <div className="logo">
              <img src="logo.png" alt="Fanimation Logo" />
            </div>
            <ul className="nav-links">
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
            </ul>
          </div>
          <div className="right-section">
            <input type="text" placeholder="Search..." className="search-box" />
            <button className="search-button">Search</button>
          </div>
        </nav>
      </header>

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
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Categories</h3>
            <ul>
              <li>
                <a href="#">All Product</a>
              </li>
              <li>
                <a href="#">Ceiling</a>
              </li>
              <li>
                <a href="#">Pedestal</a>
              </li>
              <li>
                <a href="#">Wall</a>
              </li>
              <li>
                <a href="#">Accessories</a>
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
            <a href="#">
              <img src="./images/icon-facebook.png" alt="Facebook" />
            </a>
            <a href="#">
              <img src="./images/icon-tiktok.png" alt="Tiktok" />
            </a>
            <a href="#">
              <img src="./images/icon-instagram.png" alt="Instagram" />
            </a>
            <a href="#">
              <img src="./images/icon-youtube.png" alt="YouTube" />
            </a>
          </div>
        </div>
      </footer>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" />
      </Routes>

      <footer>
        <div className="contact-info">
          <h2>Fanimation</h2>
          <p>
            <img src="./images/icon-phone.png" alt="" />
            <a href="tel:+84123456789"> 0123 456 789</a>
          </p>
          <p>
            <img src="./images/icon-email.png" alt="" />
            <a href="mailto:example@gmail.com"> example@gmail.com</a>
          </p>
        </div>
        <div className="contact-us">
          <h2>Contact Us</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required="" />
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required="" />
            <label htmlFor="email">Email:</label>
            <input className="footerInput" type="email" id="email" name="email" required="" />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </footer>
    </div>
  );
}

export default App;
