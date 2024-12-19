import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import bsa_logo from '../../assets/bsa_logo.svg';
import bsa_text_logo from '../../assets/bsa_text_logo.svg';
import profile_icon from '../../assets/profile_icon.svg';

const Header = () => {
  const location = useLocation(); 
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection(location.pathname.slice(1));
    }
    else {
      const handleScroll = () => {
        const sections = document.querySelectorAll("section");
        let currentSection = "";

        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute("id");
          }
        });

        setActiveSection(currentSection);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [location.pathname]);

  return (
    <div className="header">
      <div className="header-first-container">
        <img src={bsa_logo} alt="Logo" />
        <img src={bsa_text_logo} alt="Text Logo" />
      </div>
      <div className="header-second-container">
        <ul>
          <li>
            <Link to="/about" className={activeSection === "about" ? "active" : ""}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/sports" className={activeSection === "sports" ? "active" : ""}>
              Sports
            </Link>
          </li>
          <li>
            <Link to="/updates" className={activeSection === "updates" ? "active" : ""}>
              Updates
            </Link>
          </li>
          <li>
            <Link to="/experiences" className={activeSection === "experiences" ? "active" : ""}>
              Experiences
            </Link>
          </li>
          <li>
            <Link to="/contact" className={activeSection === "contact" ? "active" : ""}>
              Contact
            </Link>
          </li>
          <Link to="/profile">
            <img src={profile_icon} alt="Profile Icon" />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
