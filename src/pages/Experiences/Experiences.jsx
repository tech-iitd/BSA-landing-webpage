import React, { useContext } from 'react';
import './Experiences.css';
import ExperiencesElement from '../../components/ExperiencesElement/ExperiencesElement';
import ExperienceBox from '../../components/ExperienceBox/ExperienceBox';
import { dataContext } from '../../data/Data';

const Experiences = () => {

  const {userReviews} = useContext(dataContext);
  return (

    <div className='experiences-page'>
      <div className='experiences_page_top'>
        <h1>
          EXPERIENCES
        </h1>
      </div>
      <div className='experiences_page_content'>
        <p id='exp_tag_line'>“At IIT Delhi, sports are more than just competitions; they are experiences that stay with you for a lifetime.”</p>
        <h1>
          Alumni Tales
        </h1>
        <div className='experiences_page_reviews'>
          {userReviews.map((userReview, index) => {
              return <ExperienceBox key={index} userReview={userReview} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Experiences;
