import React from 'react';
import './AboutElement.css';
import about_person from '../../assets/about_person.svg';
import about_ractangle from '../../assets/about_ractangle.svg';
import { Link } from 'react-router-dom';
const AboutElement = () => {
  return (
    <div className='about-element'>
        <div className='about-element-first-container'>
          <h1>ABOUT US</h1>
          <p>At IIT Delhi, the Board for Sports Activities (BSA) fosters excellence with top-notch facilities and a thriving culture. Comprising 300+ members, BSA promotes sports for all—students, faculty, and residents—balancing competitive achievements and fitness. Known for producing national-level players, we also host tournaments, social events, and collaborations, making sports inclusive and accessible. With a focus on well-being, BSA embodies the spirit of "a healthy mind in a healthy body," elevating IITD's sporting standards nationally.</p>
          <Link to={'/about'}>
            KNOW MORE
          </Link>
        </div>
        <div className='about-element-second-container'>
          <img src={about_person} alt="" />
          <img id='about-element-rantangle' src={about_ractangle} alt="" />
        </div>
      </div>
  );
}

export default AboutElement;
