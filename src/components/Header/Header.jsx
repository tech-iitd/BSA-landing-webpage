import React from 'react';
import './Header.css';
import bsa_logo from '../../assets/bsa_logo.svg';
import bsa_text_logo from '../../assets/bsa_text_logo.svg';
import profile_icon from '../../assets/profile_icon.svg';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='header'>
        <div className='header-first-container'>
            <img src={bsa_logo} alt="" />
            <img src={bsa_text_logo} alt="" />
        </div>
        <div className='header-second-container'>
            <ul>
                <li>
                    <Link to={'/about'}>About Us</Link>
                </li>
                <li>
                    <Link to={'/sports'}>Sports</Link>
                </li>
                <li>
                    <Link to={'/updates'}>Updates</Link>
                </li>
                <li>
                    <Link to={'/experiences'}>Experiences</Link>
                </li>
                <li>
                    <Link to={'/contact'}>Contact</Link>
                </li>
                <Link to={'/profile'}><img src={profile_icon} alt="" /></Link>
            </ul>
        </div>
      
    </div>
  );
}

export default Header;
