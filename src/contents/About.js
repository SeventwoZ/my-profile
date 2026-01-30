import React from "react";
import { Link } from "react-router-dom";
import profile from "../imgs/Profile2.jpg";
import Social from "../components/Social";
import "../css/about.css";

const About = () => {
  return (
    <div className="condiv about">
      <h1 className="subtopic">About Me</h1>

      <div className="about-layout">
        <div className="about-image-card">
          <div className="about-image-wrapper">
            <img src={profile} alt="Profile" className="about-profilepic" />
          </div>
          <div className="about-tagline">
            <span className="about-tagline-label">Background</span>
            <p className="about-tagline-text">
              Bachelor of Engineering in Software and Knowledge Engineering, Kasetsart University
            </p>
          </div>
        </div>

        <div className="about-text">
          <p className="about-intro">
            I&apos;m Kawgong, a junior developer who enjoys turning ideas into
            real, useful products. I love learning new technologies and building
            things that feel simple and friendly for people to use.
          </p>

          <p className="about-body">
            I recently graduated from Kasetsart University with a Bachelor of
            Engineering in Software and Knowledge Engineering. Right now I&apos;m
            looking for opportunities to grow as a software engineer, contribute
            to real projects, and learn from experienced teams.
          </p>

          <ul className="about-highlights">
            <li>Interested in web development and clean, modern UI.</li>
            <li>Enjoys working in teams and sharing ideas.</li>
            <li>Always curious and ready to learn something new.</li>
          </ul>

          <div className="about-actions">
            <Link to="/projects" className="btn primary-btn">
              View Projects
            </Link>
            <Link to="/skills" className="btn ghost-btn">
              View Skills
            </Link>
          </div>
        </div>
      </div>

      <div className="about-social-wrapper">
        <Social />
      </div>
    </div>
  );
};

export default About;
