import React from "react";
import "../css/contact.css";
import Socialbox from "../components/socialbox";
import Social from "../components/Social";

const Contact = () => {
  return (
    <div className="condiv contact">
      <h1 className="subtopic">Contact Me</h1>

      <p className="contact-intro">
        Feel free to reach out if you&apos;d like to work together, have a
        question, or just want to say hi.
      </p>

      <div className="contact-card">
        <div className="contact-highlight">
          <p className="contact-highlight-title">Quick details</p>
          <p className="contact-highlight-text">
            I&apos;m currently based in Rayong and open to remote or on-site
            opportunities.
          </p>
        </div>

        <div className="contact-grid">
          <Socialbox icon="fas fa-phone" info="+66 081 357 7509" />
          <Socialbox icon="fas fa-envelope" info="isaraa.phad@gmail.com" />
          <Socialbox icon="fab fa-line" info="Meteoriteism" />
          <Socialbox icon="fas fa-map-marker-alt" info="Bangkok, Thailand" />
        </div>
      </div>

      <div className="contact-social-wrapper">
        <span className="contact-social-label">Or find me by clicking the icons below!</span>
        <Social />
      </div>
    </div>
  );
};

export default Contact;
