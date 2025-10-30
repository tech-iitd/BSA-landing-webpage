import get_set_go from '../../assets/get_set_go.svg';
import React, { useContext } from "react";
import "./SportsElement.css";
import { dataContext } from "../../data/Data";
import { Link } from "react-router-dom";

const SportsElement = () => {
  const { sports } = useContext(dataContext);

  return (
    <div className="sports-element">
      <div className="sports-element-first-container">
        <h1>SPORTS</h1>
        <ul>
          <li>
            <Link to="/sports/cricket" className="sport-tile">
              <div className="sport-image-wrap">
                <img src={sports.cricket.img} alt={sports.cricket.name} />
                <span className="sport-label">{sports.cricket.name}</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/sports/football" className="sport-tile">
              <div className="sport-image-wrap">
                <img src={sports.football.img} alt={sports.football.name} />
                <span className="sport-label">{sports.football.name}</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/sports/basketball" className="sport-tile">
              <div className="sport-image-wrap">
                <img src={sports.basketball.img} alt={sports.basketball.name} />
                <span className="sport-label">{sports.basketball.name}</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/sports/volleyball" className="sport-tile">
              <div className="sport-image-wrap">
                <img src={sports.volleyball.img} alt={sports.volleyball.name} />
                <span className="sport-label">{sports.volleyball.name}</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/sports/lawnTennis" className="sport-tile">
              <div className="sport-image-wrap">
                <img src={sports.lawnTennis.img} alt={sports.lawnTennis.name} />
                <span className="sport-label">{sports.lawnTennis.name}</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/sports/badminton" className="sport-tile">
              <div className="sport-image-wrap">
                <img src={sports.badminton.img} alt={sports.badminton.name} />
                <span className="sport-label">{sports.badminton.name}</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/sports/tableTennis" className="sport-tile">
              <div className="sport-image-wrap">
                <img src={sports.tableTennis.img} alt={sports.tableTennis.name} />
                <span className="sport-label">{sports.tableTennis.name}</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/sports/chess" className="sport-tile">
              <div className="sport-image-wrap">
                <img src={sports.chess.img} alt={sports.chess.name} />
                <span className="sport-label">{sports.chess.name}</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/sports/athletics" className="sport-tile">
              <div className="sport-image-wrap">
                <img src={sports.athletics.img} alt={sports.athletics.name} />
                <span className="sport-label">{sports.athletics.name}</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/sports/hockey" className="sport-tile">
              <div className="sport-image-wrap">
                <img src={sports.hockey.img} alt={sports.hockey.name} />
                <span className="sport-label">{sports.hockey.name}</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/sports/squash" className="sport-tile">
              <div className="sport-image-wrap">
                <img src={sports.squash.img} alt={sports.squash.name} />
                <span className="sport-label">{sports.squash.name}</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/sports/aquatics" className="sport-tile">
              <div className="sport-image-wrap">
                <img src={sports.aquatics.img} alt={sports.aquatics.name} />
                <span className="sport-label">{sports.aquatics.name}</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/sports/weightlifting" className="sport-tile">
              <div className="sport-image-wrap">
                <img
                  src={sports.weightlifting.img}
                  alt={sports.weightlifting.name}
                />
                <span className="sport-label">{sports.weightlifting.name}</span>
              </div>
            </Link>
          </li>
        </ul>
          <Link to="/sports" className="hero-cta" aria-label="Explore more about Sports">
                    <span className="cta-text">EXPLORE MORE</span>
                    <img src={get_set_go} alt="go" className="cta-icon" />
                  </Link>
      </div>
    </div>
  );
};

export default SportsElement;
