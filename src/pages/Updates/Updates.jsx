import React from 'react';
import './Updates.css';
import UpdatesElement from '../../components/UpdatesElement/UpdatesElement';
import PhotoGallery from '../../components/PhoteGallery/PhotoGallery';
import RecentHighlights from '../../components/RecentHighlights/RecentHighlights';
import CarouselHighlights from '../../components/CarouselHighlights/CarouselHighlights';
import PhotoFrame from '../../components/PhotoFrame/PhotoFrame';


const Updates = () => {
  return (
    <div className='updates-main-container'>

    <div className='updates-page'>
      <div className='updates-page-top'>
        <h1>
          UPDATES
        </h1>
      </div>
      <div>

      <div className="recent-highlights">
        <h1>Recent Highlights</h1>
        <CarouselHighlights/>
      </div>
      <div className='upcoming-events'>
        <h1>Upcoming Events</h1>
        <div className='upcoming-events-container'>
          <PhotoFrame size={350}/>
          <PhotoFrame size={350}/>
          <PhotoFrame size={350}/>
        </div>
      </div>
      <div className="our-history">
        <h1>Our History</h1>
        <PhotoGallery />
      </div>
      </div>
    </div>
    </div>
  );
}

export default Updates;
