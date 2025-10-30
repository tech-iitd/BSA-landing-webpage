import React from "react";
import "./Footer.css";
import bsa_logo from "../../assets/bsa_logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        <img src={bsa_logo} alt="BSA Logo" className="footer-logo" />
        <p className="footer-description">
          We turn novices into champions here at IIT Delhi grounds. The best
          facilities provided by us have led to great results and our presence
          is now being felt in the Delhi circles as well as in the inter college
          meets outside.
        </p>
      </div>

      {/* Middle Section */}
      <div className="footer-links-container">
        <div className="footer-column">
          <h3>Navigation</h3>
          <ul>
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

        <div className="footer-column">
          <h3>Useful Links</h3>
          <ul>
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
              <a href="#">Foreign Nationals</a>
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
      </div>
      <div className="footer-divider"></div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        © Board for Sports Activities, IIT Delhi, 2025
      </div>
    </footer>
  );
};

export default Footer;
