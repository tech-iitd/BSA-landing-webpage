import React, { useContext } from 'react';
import './About.css';
import about_person from '../../assets/about_person.svg';
import about_ractangle from '../../assets/about_ractangle.svg';
import { Link } from 'react-router-dom';
import AboutElement from '../../components/AboutElement/AboutElement';
import Member from '../../components/Member/Member';
import PhotoGallery from '../../components/PhoteGallery/PhotoGallery';
import { dataContext } from '../../data/Data';
const About = () => {
  const { team_members } = useContext(dataContext);
  return (
    <div>
      <AboutElement/>
      <div className='our-team'>
        <h1>
          OUR TEAM
        </h1>
        <div className='team-members'>
          {
            team_members.map((member, index) => (
              <Member player={member} key={index} />
            ))
          }
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
