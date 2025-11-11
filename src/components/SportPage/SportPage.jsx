import React, { useContext, useEffect, useState } from "react";
import "./SportPage.css";
import { dataContext } from "../../data/Data";
import { useLocation } from "react-router-dom";

const Member = ({ player }) => (
  <div className="member-card">
    <div className="member-card-content">
      <div className="member-avatar-wrapper">
        <div className="member-avatar">
          {player.image ? (
            <img src={player.image} alt={player.name} />
          ) : (
            <div className="member-avatar-initial">
              {player.name.charAt(0)}
            </div>
          )}
        </div>
      </div>
      
      <h3 className="member-name">{player.name}</h3>
      <p className="member-post">{player.post}</p>
    </div>
  </div>
);

const SportPage = () => {
  const { sports, sportsData } = useContext(dataContext);
  const location = useLocation();
  const sportname = location.pathname.split("/")[2];

  const sport = sportsData[sportname];

  if (!sport) {
    return <div className="error">Sport not found</div>;
  }

  const [isMale, setIsMale] = useState(true);
  const [womenTeam, setWomenTeam] = useState(true);

  useEffect(() => {
    const hasNoWomenTeam =
      sport.team.women.members.length === 0 &&
      sport.team.women.leaders.length === 0;

    if (hasNoWomenTeam) {
      setIsMale(true);
      setWomenTeam(false);
    } else {
      setWomenTeam(true);
      setIsMale(Math.random() < 0.5);
    }
  }, [sport]);

  const handleTeamCategory = (category) => {
    setIsMale(category === "men");
  };

  return (
    <div className="sport-page-main-container">
      {/* Hero Section */}
      <div className="sport-hero">
        <div className="sport-hero-pattern"></div>
        <div className="sport-hero-content">
          <div className="sport-hero-logo">
            <img src={sports[sportname].img} alt={sport.name} />
          </div>
          <h1>{sport.name}</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="sport-content-wrapper">
        <div className="sport-content-card">
          <div className="sport-content-inner">
            <h2>About {sport.name}</h2>
            <div className="sport-content-text">
              <p>{sport.description}</p>
            </div>
          </div>
        </div>

        {/* Team Category Tabs */}
        <div className="team-category-tabs">
          <div
            className={`team-category-tab ${isMale ? "active" : ""}`}
            onClick={() => handleTeamCategory("men")}
          >
            Men Team
          </div>
          {womenTeam && (
            <div
              className={`team-category-tab ${!isMale ? "active" : ""}`}
              onClick={() => handleTeamCategory("women")}
            >
              Women Team
            </div>
          )}
        </div>

        {/* Leadership Team */}
        {((isMale && sport.team.men.leaders.length > 0) ||
          (!isMale && sport.team.women.leaders.length > 0)) && (
          <div className="team-section">
            <div className="team-header">
              <h2>LEADERSHIP TEAM</h2>
              <div className="team-header-line"></div>
            </div>

            <div className="team-members">
              {isMale
                ? sport.team.men.leaders.map((leader, index) => (
                    <Member player={leader} key={index} />
                  ))
                : sport.team.women.leaders.map((leader, index) => (
                    <Member player={leader} key={index} />
                  ))}
            </div>
          </div>
        )}

        {/* Members */}
        <div className="team-section">
          <div className="team-header">
            <h2>MEMBERS</h2>
            <div className="team-header-line"></div>
          </div>

          <div className="team-members">
            {isMale
              ? sport.team.men.members.map((member, index) => (
                  <Member player={member} key={index} />
                ))
              : sport.team.women.members.map((member, index) => (
                  <Member player={member} key={index} />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportPage;