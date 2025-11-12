import React from "react";
import "./Connect.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const ConnectSection = () => {
  return (
    <div className="connect-page">
      <div className="connect-wrapper">
        {/* Header */}
        <div className="connect-header">
          <h2 className="connect-main-title">
            GET IN <span className="title-accent">TOUCH</span>
          </h2>
          <div className="title-underline"></div>
          <p className="header-subtitle">We'd love to hear from you</p>
        </div>

        <div className="connect-grid">
          {/* Contact Card */}
          <div className="contact-card">
            <div className="contact-card-inner">
              {/* Contact Information */}
              <div className="contact-info-list">
                {/* Address */}
                <div className="contact-info-item">
                  <div className="info-icon-wrapper">
                    <FaMapMarkerAlt className="info-icon" />
                  </div>
                  <div className="info-content">
                    <h3 className="info-title">Address</h3>
                    <p className="info-text">
                      Board for Sports Activities (BSA) Office,<br />
                      Student Activity Centre (SAC),<br />
                      IIT Delhi, Hauz Khas, New Delhi, Delhi 110016
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="contact-info-item">
                  <div className="info-icon-wrapper">
                    <FaPhoneAlt className="info-icon" />
                  </div>
                  <div className="info-content">
                    <h3 className="info-title">Phone No.</h3>
                    <a href="tel:+911126591501" className="info-link">
                      +91 11 2659-1501
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="contact-info-item">
                  <div className="info-icon-wrapper">
                    <FaEnvelope className="info-icon" />
                  </div>
                  <div className="info-content">
                    <h3 className="info-title">Email</h3>
                    <a href="mailto:bsagsec@iitd.ac.in" className="info-link">
                      bsagsec@iitd.ac.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="social-section">
                <h3 className="social-title">Follow Us</h3>
                <div className="social-links">
                  <a href="#" aria-label="Twitter" className="social-link">
                    <FaTwitter />
                  </a>
                  <a href="#" aria-label="Facebook" className="social-link">
                    <FaFacebookF />
                  </a>
                  <a href="#" aria-label="Instagram" className="social-link">
                    <FaInstagram />
                  </a>
                  <a href="#" aria-label="YouTube" className="social-link">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Container */}
          <div className="map-container-enhanced">
            <iframe
              title="IIT Delhi Map"
              src="https://www.google.com/maps?q=IIT%20Delhi&output=embed&z=15&t=m&hl=en&marker=28.545174,77.192618"
              className="map-iframe"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectSection;
