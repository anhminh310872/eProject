import React from "react";
import './assets/contact.css'

function ContactUs() {

  const ContactSubmit = () => {
    alert("Thank you for your inquiry!");
  }

  return (
    <div className="contact-container">
      <section>
        <div className="hero">
          <h1>Contact Us</h1>
          <hr />
        </div>
      </section>

      <div className="q-form">
        <form action="" onSubmit={ContactSubmit}>
          <h1>Request Information</h1>
          <div className="q-form-prompt">Full name:</div>
          <input required placeholder="Your full name here" className="q-form-input" />
          <div className="q-form-prompt">Email:</div>
          <input required type="email" placeholder="Your email here" className="q-form-input" />
          <div className="q-form-prompt">Message:</div>
          <textarea required placeholder="What do you want?" className="q-form-input msg" />
          <button className="q-form-btn" value="submit">SEND</button>
        </form>
      </div>
      <hr style={{ width: "70%", margin: "auto" }} />
      <br />
      <br />
      <div className="map-container">
        <div className="ggmap">
          <iframe title="Our office"
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.267408022309!2d106.67984617594756!3d10.790819589358854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d4a7c59c09%3A0x8e2f7cbc924be1db!2zMzkxYSDEkC4gTmFtIEvhu7MgS2jhu59pIE5naMSpYSwgUGjGsOG7nW5nIDE0LCBRdeG6rW4gMywgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1734636266531!5m2!1sen!2s"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="contact-info">
          <img src="./images/logo.png" alt="" className="contact-logo" />
          <div className="contact-info-section">
            <h3>Address:</h3>
            <p>391A Nam Ky Khoi Nghia, ward 14, district 3, HCMC.</p>
          </div>
          <div className="contact-info-section">
            <h3>Hotline:</h3>
            <p>0936166751-Fax:123456 </p>
          </div>
          <div className="contact-info-section">
            <h3>Email:</h3>
            <p>Fanimation@gmail.com </p>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default ContactUs;
