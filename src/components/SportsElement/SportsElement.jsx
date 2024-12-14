import sports_person from '../../assets/sports_person.svg';
import sports_ractangle from '../../assets/sports_ractangle.svg';
import React, { useContext } from 'react';
import './SportsElement.css';
import { dataContext } from '../../data/Data';
import { Link } from 'react-router-dom';

const SportsElement = () => {
  const { sports } = useContext(dataContext);

  return (
    <div className='sports-element'>
      <div className='sports-element-first-container'>
        <h1>SPORTS</h1>
        <ul>
          <li><img src={sports.cricket.img} alt={sports.cricket.name} /></li>
          <li><img src={sports.football.img} alt={sports.football.name} /></li>
          <li><img src={sports.basketball.img} alt={sports.basketball.name} /></li>
          <li><img src={sports.volleyball.img} alt={sports.volleyball.name} /></li>
          <li><img src={sports.lawnTennis.img} alt={sports.lawnTennis.name} /></li>
          <li><img src={sports.badminton.img} alt={sports.badminton.name} /></li>
          <li><img src={sports.tableTennis.img} alt={sports.tableTennis.name} /></li>
          <li><img src={sports.chess.img} alt={sports.chess.name} /></li>
          <li><img src={sports.athletics.img} alt={sports.athletics.name} /></li>
          <li><img src={sports.hockey.img} alt={sports.hockey.name} /></li>
          <li><img src={sports.squash.img} alt={sports.squash.name} /></li>
          <li><img src={sports.aquatics.img} alt={sports.aquatics.name} /></li>
          <li><img src={sports.weightlifting.img} alt={sports.weightlifting.name} /></li>
        </ul>
        <Link to={'/sports'} className="know-more-link">
          KNOW MORE
        </Link>
      </div>
      <div className='sports-element-second-container'>
          <img src={sports_person} alt="" />
          <img id='sports-element-rantangle' src={sports_ractangle} alt="" />
      </div>
    </div>
  );
}

export default SportsElement;
