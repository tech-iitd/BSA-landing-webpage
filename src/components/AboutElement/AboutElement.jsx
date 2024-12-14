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
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis et dignissimos dolorem nam suscipit hic. Neque quasi, nihil omnis, nulla perspiciatis porro labore, placeat impedit laborum quod numquam a quas. Ea odit magnam explicabo reiciendis illum veniam asperiores in vel, deserunt minima, optio ipsam possimus officia nam molestiae, quisquam sequi?</p>
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
