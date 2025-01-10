import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import bsa_logo from '../../assets/bsa_logo.svg';
import bsa_text_logo from '../../assets/bsa_text_logo.svg';
import profile_icon from '../../assets/profile_icon.svg';

const Header = ({ isAuth }) => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection(location.pathname.slice(1));
    } else {
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
        <Link to={'/'}>
          <img style={{ width: "80px" }} src={bsa_logo} alt="Logo" />
          <img style={{ width: "60%" }} src={bsa_text_logo} alt="Text Logo" />
        </Link>
      </div>
      <div className="header-second-container">
        {isMobile ? (
          <div className="hamburger-menu">
            <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>

            <nav className={`menu ${isOpen ? 'open' : ''}`}>
              <ul>
                <li>
                  <Link to={"/"} onClick={closeMenu}>Home</Link>
                </li>
                <li>
                  <Link to={"/about"} onClick={closeMenu}>About</Link>
                </li>
                <li>
                  <Link to={"/sports"} onClick={closeMenu}>Sports</Link>
                </li>
                <li>
                  <Link to={"/updates"} onClick={closeMenu}>Updates</Link>
                </li>
                <li>
                  <Link to={"/experiences"} onClick={closeMenu}>Experiences</Link>
                </li>
                <li>
                  <Link to={"/connect"} onClick={closeMenu}>Connect</Link>
                </li>
                {isAuth && (
                  <Link to="/profile" className="profile-icon" onClick={closeMenu}>
                    <img src={profile_icon} alt="Profile Icon" />
                  </Link>
                )}
                {!isAuth && (
                  <Link to="/login" className="login-button" onClick={closeMenu}>
                    Login
                  </Link>
                )}
              </ul>
            </nav>
          </div>
        ) : (
          <ul>
            <li>
              <Link to="/about" className={activeSection === "about" ? "active" : ""}>
                About
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
              <Link to="/connect" className={activeSection === "connect" ? "active" : ""}>
                Connect
              </Link>
            </li>
            {isAuth && (
              <Link to="/profile">
                <img src={profile_icon} alt="Profile Icon" />
              </Link>
            )}
            <li>
              {!isAuth && (
                <Link to="/login" className="login-button">
                  Login
                </Link>
              )}
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
