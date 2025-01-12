import React from 'react';
import './Updates.css';
import UpdatesElement from '../../components/UpdatesElement/UpdatesElement';
import PhotoGallery from '../../components/PhoteGallery/PhotoGallery';
import RecentHighlights from '../../components/RecentHighlights/RecentHighlights';


const Updates = () => {
  return (
    <div>
      <div className='updates-page-top'>
        <h1>
          UPDATES
        </h1>
      </div>
      <div>

      <div className="recent-highlights">
        <h1>Recent Highlights</h1>
        <RecentHighlights />
      </div>

      <div className="our-history">
        <h1>OUR HISTORY</h1>
        <PhotoGallery />
      </div>
      </div>
    </div>
  );
}

export default Updates;
