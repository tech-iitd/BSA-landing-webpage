import React, { useContext } from 'react';
import './Sports.css';
import SportsBox from '../../components/SportsBox/SportsBox';
import { dataContext } from '../../data/Data';
import { Link } from 'react-router-dom';

const Sports = () => {
  const { sports } = useContext(dataContext);

  const sportsList = [
    { key: 'cricket', path: '/sports/cricket' },
    { key: 'football', path: '/sports/football' },
    { key: 'basketball', path: '/sports/basketball' },
    { key: 'volleyball', path: '/sports/volleyball' },
    { key: 'lawnTennis', path: '/sports/lawnTennis' },
    { key: 'badminton', path: '/sports/badminton' },
    { key: 'tableTennis', path: '/sports/tableTennis' },
    { key: 'chess', path: '/sports/chess' },
    { key: 'athletics', path: '/sports/athletics' },
    { key: 'hockey', path: '/sports/hockey' },
    { key: 'squash', path: '/sports/squash' },
    { key: 'aquatics', path: '/sports/aquatics' },
    { key: 'weightlifting', path: '/sports/weightlifting' },
  ];

  return (
    <div className='sports-main-container'>
      {/* Hero Section */}
      <div className='sports-hero'>
        <div className='sports-hero-pattern'></div>
        <div className='sports-hero-content'>
          <h1>SPORTS</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className='sports-content-wrapper'>
        <div className='sports-header'>
          <h2>Discover The Sports We Offer</h2>
          <div className='sports-header-line'></div>
          <p className='sports-subtitle'>
            Explore our diverse range of sports and find your passion. From team sports to individual excellence, 
            we have something for everyone.
          </p>
        </div>

        <div className='sports-grid'>
          {sportsList.map((sport, index) => (
            <Link 
              to={sport.path} 
              key={sport.key}
              className='sports-grid-link'
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <SportsBox 
                img={sports[sport.key].img} 
                name={sports[sport.key].name}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sports;