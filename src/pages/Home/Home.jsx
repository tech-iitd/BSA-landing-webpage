import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import about_person from '../../assets/about_person.svg';
import SportsElement from '../../components/SportsElement/SportsElement';
import UpdatesElement from '../../components/UpdatesElement/UpdatesElement';
import ExperiencesElement from '../../components/ExperiencesElement/ExperiencesElement';
import Contact from '../Contact/Contact';
import HeroSection from '../../components/HeroSection/HeroSection';

const Home = () => {
  return (
    <div>
      <section>
        <HeroSection/>
      </section>
      <section id='sports' className='section'>
        <SportsElement/>  
      </section>
      <section id='updates' className='section'>
        <UpdatesElement/>   
      </section>
      <section id='experiences' className='section'>
        <ExperiencesElement/>
      </section>
      <section id='connect' className='section'>
        <Contact/>
      </section>
    </div>
    
  );
}

export default Home;
