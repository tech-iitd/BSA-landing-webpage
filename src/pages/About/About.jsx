import React from 'react';
import './About.css';
import about_person from '../../assets/about_person.svg';
import about_ractangle from '../../assets/about_ractangle.svg';
import { Link } from 'react-router-dom';
import AboutElement from '../../components/AboutElement/AboutElement';
import Member from '../../components/Member/Member';
import PhotoGallery from '../../components/PhoteGallery/PhotoGallery';
const About = () => {
  return (
    <div>
      <AboutElement/>
      <div className='our-team'>
        <h1>
          OUR TEAM
        </h1>
        <div className='team-members'>
          <Member/>
          <Member/>
          <Member/>
          <Member/>
          <Member/>
          <Member/>
          <Member/>
          <Member/>
        </div>
      </div>
      <div className='our-history'>
        <h1>
          OUR HISTORY
        </h1>
        <PhotoGallery/>
      </div>
    </div>
  );
}

export default About;
