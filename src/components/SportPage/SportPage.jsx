import React, { useContext } from 'react';
import './SportPage.css';
import { dataContext } from '../../data/Data';
import { useLocation } from 'react-router-dom';
import Member from '../Member/Member';

const SportPage = () => {
    const { sports, sportsData } = useContext(dataContext);
    const location = useLocation();
    const sportname = location.pathname.split('/')[2]; 

    const sport = sportsData[sportname];

    if (!sport) {
        return <div className='error'>Sport not found</div>; 
    }

    return (
        <div>
            <div className='sport-page'>
                <div className="sport-logo">
                    <img src={sports[sportname].img} alt={sport.name} />
                    <h1>{sport.name}</h1>
                </div>
                <p>{sport.description}</p>
            </div>
            <div className='sports-team-players'>
                <h1>{sport.name.toUpperCase()} TEAM</h1>
                <div className='team-members'>
                    {sport.team.map((player, index) => (
                        <Member player={player} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SportPage;
