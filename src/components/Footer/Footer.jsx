import React, { useRef } from "react";
import "./Footer.css";
import linkedin_footer from "../../assets/linkedin_footer.svg";
import facebook_footer from "../../assets/facebook_footer.svg";
import youtube_footer from "../../assets/youtube_footer.svg";
import instagram_footer from "../../assets/instagram_footer.svg";
import tech_team_logo from "../../assets/tech_team_logo.svg";
import location_icon from '../../assets/location_icon.svg';
import phone_icon from '../../assets/phone_icon.svg';
import email_icon from '../../assets/email_icon.svg';
import bsa_logo from "../../assets/bsa_logo.svg";

const Footer = () => {
  const logo_Ref = useRef(null);
  const logo_3d_Ref = useRef(null);
  const play_ref = useRef(true);
  const handleLocationClick = () => {
      const map = document.querySelector('.map');
      const footer_container = document.querySelector('.footer-container');
      map.scrollIntoView({behavior: 'smooth'});
      map.style.display = 'flex';
      footer_container.style.display = 'none';
  };

  const handleRemoveMap = () => {
      const map = document.querySelector('.map');
      map.style.display = 'none';
      const footer_container = document.querySelector('.footer-container');
      footer_container.style.display = 'flex';
  }

  const handle_3d_logo = () => {
    logo_Ref.current.style.display = 'none'
    logo_3d_Ref.style.display = 'block';
  }

  return (
    <footer className="footer">
      <div className="contact-container">
        <div className="connect-container">
          <div className="connect-heading">
            <h1>CONNECT</h1>
          </div>
          <div className="connect-details">
            <div className="location" > 
              <img src={location_icon} alt="address" />
              <p onClick={handleLocationClick}>
              BSA Office, Student Activity Centre (SAC), Indian Institute of Technology Delhi, Hauz Khas, New Delhi, 110016, India
              </p>
            </div>
            <div>
              <img src={phone_icon} alt="phone" />
              <a href="tel:+91 11 2659-1501">+91 11 2659-1501</a>
            </div>
            <div>
              <img src={email_icon} alt="email" />
              <a href="mailto:bsagsec@iitd.ac.in">bsagsec@iitd.ac.in</a>
            </div>
          </div>
        </div>
        <div style={{display:"none"}} className='map'>
            <p onClick={handleRemoveMap} className="cross">X</p>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.800420384915!2d77.19276789999999!3d28.545718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1df6b9055fb5%3A0x81c10b266b1ea3c0!2sIndian%20Institute%20Of%20Technology%20Delhi%20(IIT%20Delhi)!5e0!3m2!1sen!2sin!4v1734966370251!5m2!1sen!2sin"
                width="70%"
                height="325"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
      </div>

      <div  className="footer-container">

        <div className="footer-logo">
          {/* <iframe ref={logo_3d_Ref} className='bsa-3d-logo' src='https://my.spline.design/untitledcopy-6aefbfe4acc14ee2f8452acf95d83e76/' frameborder='0'></iframe> */}
          
          <img
            ref={logo_Ref}
            alt="BSA-logo"
            loading="lazy"
            width="200"
            height="200"
            src={bsa_logo}
          />
          {/* <button ref={play_ref} onClick={handle_3d_logo}>
              Play
          </button> */}
        </div>
        <div className="footer-description">
          <p>
            We turn novices into champions here at IIT Delhi grounds. The best
            facilities provided by us have led to great results and our presence
            is now being felt in the Delhi circles as well as in the inter
            college meets outside.
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
          <span> Board for Sports Activities, IIT Delhi, 2025</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
