import React from 'react';

function AboutUs() {
  return (
    <>
    <div>
        <h2>Fanimation</h2>
        <p>is a global manufacturer of standard and custom fans and fan accessories.</p>
    </div>
      <header id="navbar">
        <div>
          <nav>
            <ul className="nav">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#" className="active">
                  About Us
                </a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

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
        <button>About Us</button>
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
        <img src="./images/Avatar.png" alt="Phuc Nguyen" />
        <h4>Phuc Nguyen</h4>
        <p>Programmer</p>
      </div>
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
    <div className="contact-info">
      <h2>Fanimation</h2>
      <p>
        <img src="./images/icon-phone.png" alt="" />
        <a href="tel:+84123456789">0123 456 789</a>
      </p>
      <p>
        <img src="./images/icon-email.png" alt="" />
        <a href="mailto:example@gmail.com">example@gmail.com</a>
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
        <input type="email" id="email" name="email" required="" />
        <button type="submit">Submit</button>
      </form>
    </div>
  </footer>
  </>
  );
}

export default AboutUs;
