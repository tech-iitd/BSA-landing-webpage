import React from 'react';
import './Member.css';
import user_frame from '../../assets/user-frame.svg';

const Member = () => {
  return (
    <div className='member'>
      <img className='frame' src={user_frame} alt="" />
      <div className='member-details'>
        <h2>Name</h2>
        <p>post</p>
        <p>webmail</p>
      </div>
    </div>
  );
}

export default Member;
