import React from 'react';
import './Contact.css';
import location_icon from '../../assets/location_icon.svg';
import phone_icon from '../../assets/phone_icon.svg';
import email_icon from '../../assets/email_icon.svg';
const Contact = () => {
  return (
    <div className='contact-outer-container'>
        <div className='connect'>
        <div className='connect-container'>
            <div className='connect-heading'>
                <h1>CONNECT</h1>
            </div>
            <div className='connect-details'>
                <div>
                    <img src={location_icon} alt="address" />
                    <p>
                        BSA Office Student Activity Centre (SAC) Indian Institute of Technology Delhi Hauz Khas, New Delhi, 110016</p>
                </div>
                <div>
                    <img src={phone_icon} alt="phone" />
                    <a href="tel:+91 11 2659-1501">
                        +91 11 2659-1501
                    </a>
                </div>
                <div>
                    <img src={email_icon} alt="email" />
                    <a href="mailto:bsagsec@iitd.ac.in">
                        bsagsec@iitd.ac.in
                    </a>
                </div>
            </div>
        </div>
        <div className='map'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.800420384915!2d77.19276789999999!3d28.545718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1df6b9055fb5%3A0x81c10b266b1ea3c0!2sIndian%20Institute%20Of%20Technology%20Delhi%20(IIT%20Delhi)!5e0!3m2!1sen!2sin!4v1734966370251!5m2!1sen!2sin"
                width="800"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
        </div>
    </div>
  );
}

export default Contact;
