import React from 'react';
import './HeroSection.css';
import header_image from '../../assets/header_image.png';
import get_set_go from '../../assets/get_set_go.svg';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div
        className="hero-header-image"
        style={{ backgroundImage: `url(${header_image})` }}
      >
        <img src={header_image} alt="Header" className="hero-header-img" loading="eager" />
        <div className="hero-overlay">
          <h2 className="hero-title">SPORTS @ IIT DELHI</h2>
          <div className="hero-text">
            <p>
              At IIT Delhi, the Board for Sports Activities (BSA) fosters excellence with top-notch facilities and a thriving culture.
              Comprising 300+ members, BSA promotes sports for all—students, faculty, and residents—balancing competitive achievements and fitness.
              Known for producing national-level players, we also host tournaments, social events, and collaborations, making sports inclusive and accessible.
            </p>
          </div>
          <Link to="/about" className="hero-cta" aria-label="Explore more about BSA">
            <span className="cta-text">EXPLORE MORE</span>
            <img src={get_set_go} alt="go" className="cta-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
