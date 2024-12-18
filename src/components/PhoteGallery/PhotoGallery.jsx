import React from 'react';
import './PhotoGallery.css';
import PhotoFrame from '../PhotoFrame/PhotoFrame';
const PhotoGallery = () => {
  return (
    <div className='photo-gallery'>
      <div className="photo-gallery-container">
        <PhotoFrame size={250}/>
        <PhotoFrame size={300}/>
        <PhotoFrame size={350}/>
      </div>

      <div className="photo-gallery-container">
        <PhotoFrame size={300}/>
        <PhotoFrame size={350}/>
        <PhotoFrame size={250}/>
      </div>

      <div className="photo-gallery-container">
        <PhotoFrame size={350}/>
        <PhotoFrame size={250}/>
        <PhotoFrame size={300}/>
      </div>
    </div>
  );
}

export default PhotoGallery;
