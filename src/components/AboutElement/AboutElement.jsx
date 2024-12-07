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
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid dicta blanditiis quasi inventore quod rem quibusdam non ratione. Aliquam, fugit autem. Dignissimos commodi corporis fugiat adipisci quasi tempora delectus consectetur.</p>
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
