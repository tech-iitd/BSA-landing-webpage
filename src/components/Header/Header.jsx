import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import bsa_logo from '../../assets/bsa_logo.svg';
import bsa_text_logo from '../../assets/bsa_text_logo.svg';
import profile_icon from '../../assets/profile_icon.svg';
import add_profile_icon from '../../assets/add_profile_icon.svg';

const Header = ({ isAuth }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Function to handle navigation and scroll
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    closeMenu();

    // If not on home page, navigate to home first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      // Already on home page, just scroll
      scrollToSection(sectionId);
    }
  };

  // Function to scroll to section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 80; // Height of fixed header
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
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
                  <a href="#sports" onClick={(e) => handleNavClick(e, 'sports')}>Sports</a>
                </li>
                <li>
                  <a href="#updates" onClick={(e) => handleNavClick(e, 'updates')}>Events</a>
                </li>
                <li>
                  <a href="#connect" onClick={(e) => handleNavClick(e, 'connect')}>Connect</a>
                </li>
                {/* {isAuth && (
                  <Link to="/profile" className="profile-icon" onClick={closeMenu}>
                    <img src={profile_icon} alt="Profile Icon" />
                  </Link>
                )}
                {!isAuth && (
                  <Link to="/login" className="profile-icon" onClick={closeMenu}>
                    <img src={add_profile_icon} alt="Login" />
                  </Link>
                )} */}
                <li className='mobile-sports-hub'>
                  <Link target='_blank' to={"https://sportshub.iitd.ac.in"}>
                    SportsHub
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        ) : (
          <ul>
            <li>
              <Link to="/" className={activeSection === "home" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <a href="#sports" onClick={(e) => handleNavClick(e, 'sports')} className={activeSection === "sports" ? "active" : ""}>
                Sports
              </a>
            </li>
            <li>
              <a href="#updates" onClick={(e) => handleNavClick(e, 'updates')} className={activeSection === "updates" ? "active" : ""}>
                Events
              </a>
            </li>
            <li>
              <a href="#connect" onClick={(e) => handleNavClick(e, 'connect')} className={activeSection === "connect" ? "active" : ""}>
                Connect
              </a>
            </li>
            {/* {isAuth && (
              <Link to="/profile">
                <img src={profile_icon} alt="Profile Icon" />
              </Link>
            )}
            <li>
              {!isAuth && (
                <Link to="/login">
                  <img src={add_profile_icon} alt="Login" />
                </Link>
              )}
            </li> */}
            <li className='sports-hub'>
              <Link target='_blank' to={"https://sportshub.iitd.ac.in"}>
                SportsHub
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;