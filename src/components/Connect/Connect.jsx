import React from "react";
import "./Connect.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const ConnectSection = () => {
  return (
    <div className="connect-container">
      <div className="connect-card">
        <h2 className="connect-title">CONNECT</h2>

        <div className="connect-info">
          <div className="connect-item">
            <FaMapMarkerAlt className="connect-icon" />
            <p>
              BSA Office, Student Activity Centre (SAC), Indian Institute of Technology Delhi, 
              Hauz Khas, New Delhi, 110016, India
            </p>
          </div>

          <div className="connect-item">
            <FaPhoneAlt className="connect-icon" />
            <a href="tel:+911126591501">+91 11 2659-1501</a>
          </div>

          <div className="connect-item">
            <FaEnvelope className="connect-icon" />
            <a href="mailto:bsagsec@iitd.ac.in">bsagsec@iitd.ac.in</a>
          </div>
        </div>

        <div className="social-icons">
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaYoutube /></a>
        </div>
      </div>

      <div className="map-container">
        <iframe
          title="IIT Delhi Map"
          src="https://www.google.com/maps?q=IIT+Delhi+Hauz+Khas&output=embed"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ConnectSection;
