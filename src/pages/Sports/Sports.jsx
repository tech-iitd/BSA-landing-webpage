import React, { useContext } from 'react';
import './Sports.css';
import SportsElement from '../../components/SportsElement/SportsElement';
import SportsBox from '../../components/SportsBox/SportsBox';
import { dataContext } from '../../data/Data';
import PhotoGallery from '../../components/PhoteGallery/PhotoGallery';
import { Link } from 'react-router-dom';
const Sports = () => {
  const { sports } = useContext(dataContext);
  return (
    <div>
      <div className='sports-page-top'>
        <h1>
          SPORTS
        </h1>
      </div>
      <div className='sports-all'>
        <h1>Discover The Sport We Offer</h1>
        <div>
          <Link to={'/sports/cricket'}>
            <SportsBox img={sports.cricket.img} name={sports.cricket.name}/>
          </Link>
          <Link to={'/sports/football'}>
            <SportsBox img={sports.football.img} name={sports.football.name}/>
          </Link>
          <Link to={'/sports/basketball'}>
            <SportsBox img={sports.basketball.img} name={sports.basketball.name}/>
          </Link>
          <Link to={'/sports/volleyball'}>
            <SportsBox img={sports.volleyball.img} name={sports.volleyball.name}/>
          </Link>
          <Link to={'/sports/lawnTennis'}>
            <SportsBox img={sports.lawnTennis.img} name={sports.lawnTennis.name}/>
          </Link>
          <Link to={'/sports/badminton'}>
            <SportsBox img={sports.badminton.img} name={sports.badminton.name}/>
          </Link>
          <Link to={'/sports/tableTennis'}> 
            <SportsBox img={sports.tableTennis.img} name={sports.tableTennis.name}/>
          </Link>
          <Link to={'/sports/chess'}>
            <SportsBox img={sports.chess.img} name={sports.chess.name}/>
          </Link>
          <Link to={'/sports/athletics'}>
            <SportsBox img={sports.athletics.img} name={sports.athletics.name}/>
          </Link>
          <Link to={'/sports/hockey'}>
            <SportsBox img={sports.hockey.img} name={sports.hockey.name}/>
          </Link>
          <Link to={'/sports/squash'}>
            <SportsBox img={sports.squash.img} name={sports.squash.name}/>
          </Link>
          <Link to={'/sports/aquatics'}>
            <SportsBox img={sports.aquatics.img} name={sports.aquatics.name}/>
          </Link>
          <Link to={'/sports/weightlifting'}>
            <SportsBox img={sports.weightlifting.img} name={sports.weightlifting.name}/>
          </Link>
        </div>
      </div>
      <div className='our-history'>
        <h1>
          OUR HISTORY
        </h1>
        <PhotoGallery/>
      </div>
    </div>
  );
}

export default Sports;
