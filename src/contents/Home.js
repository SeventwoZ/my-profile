import React from "react";
import { Link } from "react-router-dom";
import Social from "../components/Social";
import profile from "../imgs/Profile.jpg";
import ReactTypingEffect from "react-typing-effect";
import "../css/home.css";

const Home = () => {
  return (
    <div className="condiv home">
      <section className="hero">
        <div className="hero-text">
          <p className="hero-eyebrow">Welcome to my portfolio</p>
          <h1 className="hero-title">Hi, I&apos;m Kawgong</h1>
          <ReactTypingEffect
            text={[
              "Hello World!",
              "A junior developer who loves to learn.",
              "Always looking for new experiences.",
            ]}
            speed={75}
            eraseSpeed={40}
            className="typingeffect"
          />
          <p className="hero-subtitle">
            I&apos;m passionate about doing what I loved and improving myself every day.
          </p>

          <div className="hero-actions">
            <Link to="/projects" className="btn primary-btn">
              View Projects
            </Link>
            <Link to="/about" className="btn ghost-btn">
              More About Me
            </Link>
          </div>

          <div className="hero-social">
            <Social />
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-image-inner">
            <img src={profile} alt="Profile" className="profilepic" />
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              <span className="hero-badge-text">
                Junior Developer · Looking for opportunities
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
