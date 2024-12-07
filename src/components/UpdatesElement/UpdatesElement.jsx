import React from 'react';
import './UpdatesElement.css';
import updates_person from '../../assets/updates_person.svg';
import updates_ractangle from '../../assets/updates_ractangle.svg';
import { Link } from 'react-router-dom';
const UpdatesElement = () => {
  return (
    <div className='updates-element'>
        <div className='updates-element-first-container'>
          <h1>UPDATES</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid dicta blanditiis quasi inventore quod rem quibusdam non ratione. Aliquam, fugit autem. Dignissimos commodi corporis fugiat adipisci quasi tempora delectus consectetur.</p>
          <Link to={'/updates'}>
            KNOW MORE
          </Link>
        </div>
        <div className='updates-element-second-container'>
          <img src={updates_person} alt="" />
          <img id='updates-element-rantangle' src={updates_ractangle} alt="" />
        </div>
      </div>
  );
}

export default UpdatesElement;
