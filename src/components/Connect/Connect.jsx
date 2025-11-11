import React from "react";
import "./Connect.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

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
                    <h3 className="info-title">Visit Us</h3>
                    <p className="info-text">
                      BSA Office, Student Activity Centre (SAC),<br />
                      Indian Institute of Technology Delhi,<br />
                      Hauz Khas, New Delhi, 110016, India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="contact-info-item">
                  <div className="info-icon-wrapper">
                    <FaPhoneAlt className="info-icon" />
                  </div>
                  <div className="info-content">
                    <h3 className="info-title">Call Us</h3>
                    <a 
                      href="tel:+911126591501" 
                      className="info-link"
                    >
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
                    <h3 className="info-title">Email Us</h3>
                    <a 
                      href="mailto:bsagsec@iitd.ac.in" 
                      className="info-link"
                    >
                      bsagsec@iitd.ac.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="social-section">
                <h3 className="social-title">Follow Us</h3>
                <div className="social-links">
                  <a 
                    href="#" 
                    aria-label="Twitter"
                    className="social-link"
                  >
                    <FaTwitter />
                  </a>
                  <a 
                    href="#" 
                    aria-label="Facebook"
                    className="social-link"
                  >
                    <FaFacebookF />
                  </a>
                  <a 
                    href="#" 
                    aria-label="Instagram"
                    className="social-link"
                  >
                    <FaInstagram />
                  </a>
                  <a 
                    href="#" 
                    aria-label="YouTube"
                    className="social-link"
                  >
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.8267736713896!2d77.18761931508049!3d28.545174082452697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e564efde67%3A0x4f5c95b8e43ede79!2sIndian%20Institute%20of%20Technology%20Delhi!5e0!3m2!1sen!2sin!4v1234567890"
              className="map-iframe"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="info-cards">
          <div className="info-card">
            <div className="info-card-icon">
              <FaMapMarkerAlt />
            </div>
            <h3 className="info-card-title">Location</h3>
            <p className="info-card-text">Hauz Khas, New Delhi</p>
          </div>
          
          <div className="info-card">
            <div className="info-card-icon">
              <FaPhoneAlt />
            </div>
            <h3 className="info-card-title">Office Hours</h3>
            <p className="info-card-text">Mon - Fri: 9 AM - 5 PM</p>
          </div>
          
          <div className="info-card">
            <div className="info-card-icon">
              <FaEnvelope />
            </div>
            <h3 className="info-card-title">Response Time</h3>
            <p className="info-card-text">Within 24-48 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectSection;