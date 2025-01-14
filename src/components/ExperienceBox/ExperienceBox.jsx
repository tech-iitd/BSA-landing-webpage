import './ExperienceBox.css';
import twitter from '../../assets/twitter.svg';
import facebook from '../../assets/facebook.svg';
import linkedin from '../../assets/linkedin.svg';
import Rating from '@mui/material/Rating';
import { Link, useLocation } from 'react-router-dom';


const ExperienceBox = ({userReview}) => {
  return (
    <div className='experience-box'>
      <div className='user-details'>

        <div className='user-info'>
            <p className='user-name'>{userReview.name}</p>
            <p className='user-title'>{userReview.designation}</p>
        </div>

        <div className='experience-box-social'>
            <Link target='_blank' to={userReview.social.linkedin}><img src={linkedin} alt="" /></Link>
            <Link target='_blank' to={userReview.social.facebook}><img src={facebook} alt="" /></Link>
            <Link target='_blank' to={userReview.social.twitter}><img src={twitter} alt="" /></Link>
        </div>

      </div>

      <p className='rating'>
        <Rating  size='small' name="size-medium" defaultValue={userReview.rating} readOnly  />
      </p>
      
      <p className='description'>
        {userReview.review} 
      </p>
      
    </div>
  );
}

export default ExperienceBox;
