import React, { useContext } from 'react';
import './ExperiencesElement.css';
import experiences_person from '../../assets/experiences_person.svg';
import experiences_ractangle from '../../assets/experiences_ractangle.svg';
import { Link } from 'react-router-dom';
import ExperienceBox from '../ExperienceBox/ExperienceBox';
import left from '../../assets/left.svg';
import right from '../../assets/right.svg';
import { dataContext } from '../../data/Data';

const ExperiencesElement = () => {
  const {userReviews} = useContext(dataContext)
  return (
    <div className='experiences-element'>

        <div className='experiences-element-first-container'>
          <h1>EXPERIENCES</h1>
          <div>
            <div className='experiences-element-details'>
              <div>
                <p>{userReviews.length} Total Rating</p>
              </div>
              <div className='horizontal-scroll'>
                <img src={left} alt="" />
                <img src={right} alt="" />
              </div>
            </div>
            <div className='all-experiences-box'>
              {
                userReviews.map((userReview, index) => {
                  return <ExperienceBox key={index} userReview={userReview} />
                })
              }      
            </div>
    
          </div>
          <Link to={'/experiences'}>
            KNOW MORE
          </Link>
        </div>

        <div className='experiences-element-second-container'>
          <img src={experiences_person} alt="" />
          <img id='experiences-element-rantangle' src={experiences_ractangle} alt="" />
        </div>

      </div>
  );
}

export default ExperiencesElement;
