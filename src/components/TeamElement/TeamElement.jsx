import React from 'react';
import './TeamElement.css';
import team_frame from '../../assets/team_frame.svg';
const TeamElement = () => {
  return (
    <div className='team-element'>
      <img src={team_frame} alt="" />
      <h3>Name</h3>
      <p>post</p>
      <p>webmail</p>
    </div>
  );
}

export default TeamElement;
