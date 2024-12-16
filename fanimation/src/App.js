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
          <div className="right-section">
            <input type="text" placeholder="Search..." className="search-box" />
            <button className="search-button">Search</button>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" />
      </Routes>
    </div>
  );
}

export default App;
