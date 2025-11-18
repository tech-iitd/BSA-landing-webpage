// Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import './Header.css';
import bsa_logo from '../../assets/bsa_logo.svg';

const Header = ({ isAuth }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    closeMenu();

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(sectionId), 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) closeMenu();
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (location.pathname === "/") {
        const sections = document.querySelectorAll("section[id]");
        let currentSection = "";

        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          const scrollPosition = window.scrollY + 200;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id");
          }
        });

        if (window.scrollY < 100) currentSection = "";
        setActiveSection(currentSection);
      }
    };

    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection(location.pathname.slice(1));
    }
  }, [location.pathname]);

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <Link to="/" className="logo-container" onClick={closeMenu}>
            <img src={bsa_logo} alt="BSA Logo" className="logo-badge-img" />

            {/* NEW TEXT LOGO */}
            <div className="text-logo">
              <div className="text-line1">Board For Sports Activities</div>
              <div className="text-line2">Indian Institute of Technology Delhi</div>
            </div>
          </Link>

          {!isMobile && (
            <nav className="desktop-nav">
              <ul className="nav-list">
                <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')} className={activeSection === "about" ? "active" : ""}>About</a></li>
                <li><a href="#sports" onClick={(e) => handleNavClick(e, 'sports')} className={activeSection === "sports" ? "active" : ""}>Sports</a></li>
                <li><a href="#chronicles" onClick={(e) => handleNavClick(e, 'chronicles')} className={activeSection === "chronicles" ? "active" : ""}>Chronicles</a></li>
                <li><a href="#updates" onClick={(e) => handleNavClick(e, 'updates')} className={activeSection === "updates" ? "active" : ""}>Events</a></li>
                <li><a href="#connect" onClick={(e) => handleNavClick(e, 'connect')} className={activeSection === "connect" ? "active" : ""}>Connect</a></li>
                <li><Link to="/sportshub" className="sports-hub-btn" onClick={closeMenu}>SportsHub</Link></li>
              </ul>
            </nav>
          )}

          {isMobile && (
            <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
              {isOpen ? <RiCloseLine size={28} /> : <RiMenuLine size={28} />}
            </button>
          )}
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobile && (
        <>
          <div className={`menu-overlay ${isOpen ? 'open' : ''}`} onClick={closeMenu} />
          <nav className={`mobile-menu ${isOpen ? 'open' : ''}`}>
            <ul className="mobile-nav-list">
              <li><Link to="/" onClick={closeMenu}>Home</Link></li>
              <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
              <li><a href="#sports" onClick={(e) => handleNavClick(e, 'sports')}>Sports</a></li>
              <li><a href="#chronicles" onClick={(e) => handleNavClick(e, 'chronicles')}>Chronicles</a></li>
              <li><a href="#updates" onClick={(e) => handleNavClick(e, 'updates')}>Events</a></li>
              <li><a href="#connect" onClick={(e) => handleNavClick(e, 'connect')}>Connect</a></li>
              <li className="mobile-sports-hub"><Link to="/sportshub" onClick={closeMenu}>SportsHub</Link></li>
            </ul>
          </nav>
        </>
      )}
    </>
  );
};

export default Header;
