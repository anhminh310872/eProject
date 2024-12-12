import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';

function App() {
  return (
    <div className="App">
      <header id="navbar">
          <nav>
            <ul className="nav">
              <li>
                <Link to="/home">Home</Link>
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
