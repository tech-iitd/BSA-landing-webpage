import get_set_go from '../../assets/get_set_go.svg';
import React, { useContext } from "react";
import "./SportsElement.css";
import { dataContext } from "../../data/Data";
import { Link } from "react-router-dom";

const SportsElement = () => {
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
    <section className="sports-element">
      <div className="sports-element-container">
        <div className="sports-element-header">
          <h2 className="sports-element-title">OUR SPORTS</h2>
          <p className="sports-element-subtitle">
            Discover excellence across 13+ sports. Click any sport to explore teams, achievements, and opportunities.
          </p>
        </div>

        <div className="sports-grid-showcase">
          {sportsList.map((sport, index) => (
            <Link 
              key={sport.key}
              to={sport.path} 
              className="sport-card"
              style={{ animationDelay: `${index * 0.05}s` }}
              aria-label={`View ${sports[sport.key].name} details`}
            >
              <div className="sport-card-inner">
                <div className="sport-card-image">
                  <img 
                    src={sports[sport.key].img} 
                    alt={sports[sport.key].name}
                    loading="lazy"
                  />
                </div>
                <div className="sport-card-overlay">
                  <span className="sport-card-name">{sports[sport.key].name}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="sports-element-cta">
          <Link to="/sports" className="hero-cta">
            <span className="cta-text">EXPLORE ALL SPORTS</span>
            <img src={get_set_go} alt="" className="cta-icon" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SportsElement;