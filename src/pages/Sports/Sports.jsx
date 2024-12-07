import React, { useContext } from 'react';
import './Sports.css';
import SportsElement from '../../components/SportsElement/SportsElement';
import SportsBox from '../../components/SportsBox/SportsBox';
import { dataContext } from '../../data/Data';
const Sports = () => {
  const { sports } = useContext(dataContext);
  return (
    <div>
      <SportsElement/>
      <div className='sports-all'>
        <h1>SPORTS</h1>
        <div>
          <SportsBox img={sports.cricket.img} name={sports.cricket.name}/>
          <SportsBox img={sports.football.img} name={sports.football.name}/>
          <SportsBox img={sports.basketball.img} name={sports.basketball.name}/>
          <SportsBox img={sports.volleyball.img} name={sports.volleyball.name}/>
          <SportsBox img={sports.lawnTennis.img} name={sports.lawnTennis.name}/>
          <SportsBox img={sports.badminton.img} name={sports.badminton.name}/>
          <SportsBox img={sports.tableTennis.img} name={sports.tableTennis.name}/>
          <SportsBox img={sports.chess.img} name={sports.chess.name}/>
          <SportsBox img={sports.athletics.img} name={sports.athletics.name}/>
          <SportsBox img={sports.hockey.img} name={sports.hockey.name}/>
          <SportsBox img={sports.squash.img} name={sports.squash.name}/>
          <SportsBox img={sports.aquatics.img} name={sports.aquatics.name}/>
        </div>
      </div>
    </div>
  );
}

export default Sports;
