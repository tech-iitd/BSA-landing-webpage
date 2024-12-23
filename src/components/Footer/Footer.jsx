import React from "react";
import "./Footer.css"; 
import linkedin_footer from "../../assets/linkedin_footer.svg";
import facebook_footer from "../../assets/facebook_footer.svg";
import youtube_footer from "../../assets/youtube_footer.svg";
import instagram_footer from "../../assets/instagram_footer.svg";
import tech_team_logo from "../../assets/tech_team_logo.svg";
import bsa_logo from "../../assets/bsa_logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        

        {/* Logo Section */}
        <div className="footer-logo">
          <img
            alt="BSA-logo"
            loading="lazy"
            width="200"
            height="200"
            src={bsa_logo}
          />
        </div>

        <div className="footer-description">
          <p>
            We turn novices into champions here at IIT Delhi grounds. The best
            facilities provided by us have led to great results and our presence
            is now being felt in the Delhi circles as well as in the inter college
            meets outside.
          </p>
        </div>

        {/* Useful Links */}
        <div className="footer-links">
          <ul>
            <li className="footer-links-title">Useful Links</li>
            <li>
              <a
                href="https://ecampus.iitd.ac.in/PGADM/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                PhD/PG
              </a>
            </li>
            <li>
              <a
                href="http://gate.iitd.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GATE/JAM
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Foreign Nationals
              </a>
            </li>
            <li>
              <a
                href="https://caic.iitd.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Co-curricular and Academic Interaction Council
              </a>
            </li>
            <li>
              <a
                href="https://bsw.iitd.ac.in/stic.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                Student Teacher Interaction Council
              </a>
            </li>
          </ul>
        </div>

        {/* Navigation Links */}
        <div className="footer-navigation">
          <ul>
            <li className="footer-links-title">Navigation</li>
            <li>
              <a
                href="https://home.iitd.ac.in/about.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                About the Institute
              </a>
            </li>
            <li>
              <a
                href="https://home.iitd.ac.in/administration.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                Administration
              </a>
            </li>
            <li>
              <a
                href="https://hospital.iitd.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Health and Wellness
              </a>
            </li>
            <li>
              <a
                href="https://home.iitd.ac.in/uploads/PROSPECTUS2020-2021.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prospectus
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Icons Section */}
      <div className="footer-social-icons">
        <a href="https://www.instagram.com/bsa.iitd/?hl=en" target="_blank">
          <img src={instagram_footer} alt="" />
        </a>
        <a href="https://www.facebook.com/iitd.bsa/" target="_blank">
          <img src={facebook_footer} alt="" />
        </a>
        <a href="https://in.linkedin.com/company/bsaiitd" target="_blank">
          <img src={linkedin_footer} alt="" />
        </a>
        <a href="https://www.youtube.com/@bsaiitd2741" target="_blank">
          <img src={youtube_footer} alt="" /> 
        </a>
      </div>

      <hr className="footer-divider" />

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-bottom-center">
          <span>&copy;</span>
          <span> Board for Sports Activities, IIT Delhi, 2024</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
