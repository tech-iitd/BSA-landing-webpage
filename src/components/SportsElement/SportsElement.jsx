import sports_person from "../../assets/sports_person.svg";
import sports_ractangle from "../../assets/sports_ractangle.svg";
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
            <Link to="/sports/cricket">
              <img src={sports.cricket.img} alt={sports.cricket.name} />
            </Link>
          </li>
          <li>
            <Link to="/sports/football">
              <img src={sports.football.img} alt={sports.football.name} />
            </Link>
          </li>
          <li>
            <Link to="/sports/basketball">
              <img src={sports.basketball.img} alt={sports.basketball.name} />
            </Link>
          </li>
          <li>
            <Link to="/sports/volleyball">
              <img src={sports.volleyball.img} alt={sports.volleyball.name} />
            </Link>
          </li>
          <li>
            <Link to="/sports/lawnTennis">
              <img src={sports.lawnTennis.img} alt={sports.lawnTennis.name} />
            </Link>
          </li>
          <li>
            <Link to="/sports/badminton">
              <img src={sports.badminton.img} alt={sports.badminton.name} />
            </Link>
          </li>
          <li>
            <Link to="/sports/tableTennis">
              <img src={sports.tableTennis.img} alt={sports.tableTennis.name} />
            </Link>
          </li>
          <li>
            <Link to="/sports/chess">
              <img src={sports.chess.img} alt={sports.chess.name} />
            </Link>
          </li>
          <li>
            <Link to="/sports/athletics">
              <img src={sports.athletics.img} alt={sports.athletics.name} />
            </Link>
          </li>
          <li>
            <Link to="/sports/hockey">
              <img src={sports.hockey.img} alt={sports.hockey.name} />
            </Link>
          </li>
          <li>
            <Link to="/sports/squash">
              <img src={sports.squash.img} alt={sports.squash.name} />
            </Link>
          </li>
          <li>
            <Link to="/sports/aquatics">
              <img src={sports.aquatics.img} alt={sports.aquatics.name} />
            </Link>
          </li>
          <li>
            <Link to="/sports/weightlifting">
              <img
                src={sports.weightlifting.img}
                alt={sports.weightlifting.name}
              />
            </Link>
          </li>
        </ul>
        <Link to={"/sports"} className="know-more-link">
          KNOW MORE
        </Link>
      </div>
      <div className="sports-element-second-container">
        <img src={sports_person} alt="" />
        <img id="sports-element-rantangle" src={sports_ractangle} alt="" />
      </div>
    </div>
  );
};

export default SportsElement;
