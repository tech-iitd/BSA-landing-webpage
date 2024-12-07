import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import about_person from '../../assets/about_person.svg';
import AboutElement from '../../components/AboutElement/AboutElement';
import SportsElement from '../../components/SportsElement/SportsElement';
import UpdatesElement from '../../components/UpdatesElement/UpdatesElement';
import ExperiencesElement from '../../components/ExperiencesElement/ExperiencesElement';

const Home = () => {
  return (
    <div>
      <AboutElement/>
      <SportsElement/>
      <UpdatesElement/>
      <ExperiencesElement/>
    </div>
    
  );
}

export default Home;
