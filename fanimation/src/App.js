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
        </nav>
      </header>

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
