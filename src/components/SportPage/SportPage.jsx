import React, { useContext, useRef, useState } from "react";
import "./SportPage.css";
import { dataContext } from "../../data/Data";
import { useLocation } from "react-router-dom";
import Member from "../Member/Member";

const SportPage = () => {
  const { sports, sportsData } = useContext(dataContext);
  const location = useLocation();
  const sportname = location.pathname.split("/")[2];

  const [isMale, setIsMale] = useState(() => Math.floor(Math.random() * 2));

  const sport = sportsData[sportname];

  if (!sport) {
    return <div className="error">Sport not found</div>;
  }

  const handleTeamCategory = (e) => {
    const selectedCategory = e.target.innerText;
    if (selectedCategory === "Men Team") {
      setIsMale(true);
    } else if (selectedCategory === "Women Team") {
      setIsMale(false);
    }
  };

  return (
    <div>
      <div className="sport-page">
        <div className="sport-logo">
          <img src={sports[sportname].img} alt={sport.name} />
          <h1>{sport.name}</h1>
        </div>
        {/* <p>{sport.description}</p> */}
      </div>
      <div className="sports-team-players">
        <div className="about-sport">
          <p>{sport.description}</p>
        </div>
        <div className="team-category">
        <p
            onClick={handleTeamCategory}
            style={{
              cursor: "pointer",
              borderBottom: isMale ? "2px solid #FDD81F" : "none",
            }}
          >
            Men Team
          </p>
          <p
            onClick={handleTeamCategory}
            style={{
              cursor: "pointer",
              borderBottom: !isMale ? "2px solid #FDD81F" : "none",
            }}
          >
            Women Team
          </p>
        </div>
        <h3>Leadership Team</h3>
        {/* <div className="team-leaders">
          {sport.leaders.map((leader, index) => (
            <Member player={leader} key={index} />
          ))}
        </div> */}
        <h1>Members</h1>
        <div className="team-members">
          {sport.team.map((player, index) => (
            <Member player={player} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportPage;
