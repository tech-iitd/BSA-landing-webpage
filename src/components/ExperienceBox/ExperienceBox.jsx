import React from 'react';
import './ExperienceBox.css';
import twitter from '../../assets/twitter.svg';
import facebook from '../../assets/facebook.svg';
import linkedin from '../../assets/linkedin.svg';


const ExperienceBox = ({userReview}) => {
  return (
    <div className='experience-box'>
      <div className='user-details'>
        <div>
            <p>{userReview.name}</p>
        </div>
        <div className='experience-box-social'>
            <p><img src={linkedin} alt="" />
            </p>
            <p><img src={facebook} alt="" /></p>
            <p><img src={twitter} alt="" /></p>
        </div>
        </div>
      <p>
        {userReview.rating} stars
      </p>
      <p className='description'>
        {userReview.review} 
      </p>
      
    </div>
  );
}

export default ExperienceBox;
