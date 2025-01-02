import React from 'react';
import './assets/about.css'
import { useNavigate } from 'react-router-dom';

function AboutUs() {
  const nav = useNavigate();

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
      <h2>About the Company</h2>
      <h4>For over 30 years, we have been a forerunner in realiable cooling technology and stylish, elegant home aesthetics. Offering a wide range of high-quality, reliable fans for every need—whether for your home, office, or business.</h4>
      <h4>Explore our collection today and enjoy the comfort and quality that comes with decades of expertise.</h4><br/>
    </div>
    <div className="overview-stats">
      <div>
        <p>USED BY</p>
        <h3>10.000+</h3>
        <p>Users</p>
      </div>
      <div>
        <p>VALUE</p>
        <h3>30</h3>
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
        <img src="./images/company.jpg" alt="Data Analysis" />
      </div>
      <div className="text-wrapper">
        <span>Over 10k+ Users</span>
        <h3>We Offer Real Time Data Solutions</h3>
        <ul>
          <li>Various analysis options.</li> <br />
          <li>Page Load</li> <br />
          <li>Big data analysis</li>
        </ul>
        <button onClick={() => nav('/contact-us')}>Contact Us</button>
      </div>
    </div>
  </section>
  <section className="team-section">
    <h5>The Team</h5>
    <h2>Our Founders</h2>
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
  </>
  );
}

export default AboutUs;
