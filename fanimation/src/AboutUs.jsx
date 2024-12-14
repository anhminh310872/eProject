import React from 'react';

function AboutUs() {
  return (
    <>
      <section>
        <div className="hero">
          <h1>About Us</h1>
          <hr />
        </div>
      </section>
  <section className="trusted-brands">
    <h2>Trusted by Many Businesses</h2>
    <div className="brand-logos">
      <img src="./images/senko.png" alt="Senko" />
      <img src="./images/panasonic.png" alt="Panasonic" />
      <img src="./images/asia.png" alt="Asia" />
      <img src="./images/toshiba.png" alt="Toshiba" />
      <img src="./images/lifan.png" alt="Lifan" />
      <img src="./images/kangaroo.png" alt="Kangaroo" />
      <img src="./images/midea.png" alt="Midea" />
      <img src="./images/tefal.png" alt="Tefal" />
      <img src="./images/kdk.png" alt="KDK" />
      <img src="./images/sunhouse.png" alt="Sunhouse" />
    </div>
  </section>
  <section className="company-overview">
    <div className="overview-header">
      <h5>About the Company</h5>
      <h2>We Made it for You.</h2>
    </div>
    <div className="overview-stats">
      <div>
        <p>USED BY</p>
        <h3>10.000+</h3>
        <p>Users</p>
      </div>
      <div>
        <p>VALUE</p>
        <h3>46m</h3>
        <p>Revenue per Year</p>
      </div>
      <div>
        <p>USED BY</p>
        <h3>150+</h3>
        <p>Companies</p>
      </div>
    </div>
    <div className="overview-content">
      <div className="image-wrapper">
        <img src="./images/Data analysis.png" alt="Data Analysis" />
      </div>
      <div className="text-wrapper">
        <span>Over 10k+ Users</span>
        <h3>We Offer Real Time Data Solutions</h3>
        <ul>
          <li>Various analysis options.</li> <br />
          <li>Page Load</li> <br />
          <li>Big data analysis</li>
        </ul>
        <button>Contact Us</button>
      </div>
    </div>
  </section>
  <section className="team-section">
    <h5>The Team</h5>
    <h2>Our Founders</h2>
    <button>View All</button>
    <div className="founders">
      <div className="founder">
        {" "}
        <img src="./images/Avatar.png" alt="Anh Minh" />
        <h4>Anh Minh</h4>
        <p>Programmer</p>
      </div>
      <div className="founder">
        {" "}
        <img src="./images/Avatar.png" alt="Hien Dat" />
        <h4>Hien Dat</h4>
        <p>Programmer</p>
      </div>
      <div className="founder">
        {" "}
        <img src="./images/Avatar.png" alt="Quoc Bao" />
        <h4>Quoc Bao</h4>
        <p>Programmer</p>
      </div>
    </div>
  </section>

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
    </>
  );
}

export default AboutUs;
